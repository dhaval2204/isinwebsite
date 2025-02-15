"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase/configsupabase";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/components/dialog";
import { SearchIcon, MicIcon } from "lucide-react";
import { Input } from "@/ui/components/input";
import toast from "react-hot-toast";
const ISINSearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [companySuggestions, setCompanySuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const router = useRouter();
  const [showModal, setShowModal] = useState(true);
  const [isFetching, setIsFetching] = useState(false); // To track fetching status for suggestions

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      toast.error("Speech recognition is not supported in your browser.");
      return;
    }

    const recognizer = new SpeechRecognition();
    recognizer.continuous = false;
    recognizer.interimResults = false;
    recognizer.lang = "en-US";

    recognizer.onresult = (event) => {
      const speechToText = event.results[0][0].transcript.trim().toUpperCase();
      setSearchTerm((prev) => {
        const updatedTerm = prev ? `${prev} ${speechToText}` : speechToText;
        fetchCompanySuggestions(updatedTerm);
        return updatedTerm;
      });
      toast.success("Voice input added!");
    };

    recognizer.onerror = (event) => {
      const errors = {
        "not-allowed": "Microphone access denied. Please grant permissions.",
        "no-speech": "No speech detected. Try speaking again.",
      };
      toast.error(errors[event.error] || "Could not process voice input.");
    };

    setRecognition(recognizer);
  }, []);

  const handleVoiceInput = () => {
    if (!recognition) {
      toast.error("Speech recognition is not initialized.");
      return;
    }

    try {
      recognition.start();
      toast("Listening for input...", { icon: "🎤" });
    } catch (error) {
      toast.error("Could not start speech recognition. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const input = e.target.value.trim();
    setSearchTerm(input);
    if (input && isValidCompanyName(input)) fetchCompanySuggestions(input);
    else setCompanySuggestions([]);
  };

  const isValidISIN = (term) => /^IN[a-zA-Z0-9]{10}$/.test(term);

  const isValidCompanyName = (term) => /^[A-Za-z0-9\s&',.\-()]*$/.test(term);

  const fetchCompanySuggestions = async (input) => {
    try {
      const { data, error } = await supabase
        .from("ISIN_numbers")
        .select("*")
        .ilike("Company Name", `${input}%`)
        .limit(100);

      if (error) throw error;

      setCompanySuggestions([
        ...new Set(data.map((item) => item["Company Name"])),
      ]);
    } catch (error) {
      console.error("Error fetching company suggestions:", error.message);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      toast.error("Please enter a valid ISIN or Company Name.");
      return;
    }

    if (!isValidISIN(searchTerm) && !isValidCompanyName(searchTerm)) {
      toast.error(
        "Invalid input. ISIN should start with 'IN' and have exactly 12 characters."
      );
      return;
    }

    setLoading(true);

    try {
      const loadingToast = toast.loading("Searching... Please wait.");

      const [{ data: data1 }, { data: data2 }] = await Promise.all([
        supabase
          .from("ISIN_numbers")
          .select("*")
          .or(`ISIN.eq.${searchTerm},Company Name.eq.${searchTerm}`)
          .limit(100),
        supabase
          .from("ISIN_numbers_2")
          .select("*")
          .or(`ISIN.eq.${searchTerm}`)
          .limit(100),
      ]);

      const combinedData = [...(data1 || []), ...(data2 || [])];

      if (!combinedData.length) {
        toast.error("No matching ISIN or Company Name found in the database.");
        toast.dismiss(loadingToast);
        setLoading(false);
        return;
      }

      toast.dismiss(loadingToast);
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
      router.push(
        `/search/?query=${encodeURIComponent(searchTerm)}&results=${
          combinedData.length
        }`
      );
    } catch (error) {
      console.error("Error during search:", error);
      toast.error("An error occurred while searching. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    showModal && (
      <Dialog>
        <DialogTrigger asChild className="cursor-pointer">
          <button type="button" title="Search ISIN">
            <SearchIcon size={20} />
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search ISIN</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-y-4">
            <div className="relative group">
              <Input
                type="text"
                placeholder="Enter ISIN"
                value={searchTerm}
                onChange={handleInputChange}
              />
              {companySuggestions.length > 0 &&
                isValidCompanyName(searchTerm) && (
                  <ul className="relative w-full max-h-52 p-1 mt-1 rounded-md border shadow-sm overflow-y-auto">
                    {companySuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSearchTerm(suggestion);
                          setCompanySuggestions([]);
                        }}
                        className="text-sm py-2 px-3 hover:bg-black/[0.025] rounded-md cursor-pointer"
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
            </div>
            <div className="flex justify-center gap-4">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleVoiceInput}
              >
                <MicIcon size={20} />
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? "Searching..." : "Search"}
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  );
};

export default ISINSearchBox;


// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "@/utils/supabase/configsupabase";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/ui/components/dialog";
// import { SearchIcon, MicIcon } from "lucide-react";
// import { Input } from "@/ui/components/input";
// import toast from "react-hot-toast";
// import { debounce } from "lodash"; // Install lodash for debouncing

// const ISINSearchBox = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [companySuggestions, setCompanySuggestions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [isFetching, setIsFetching] = useState(false);
//   const [recognition, setRecognition] = useState(null);
//   const router = useRouter();
//   const [showModal, setShowModal] = useState(true);

//   // Initialize speech recognition
//   useEffect(() => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       toast.error("Speech recognition is not supported in your browser.");
//       return;
//     }

//     const recognizer = new SpeechRecognition();
//     recognizer.continuous = false;
//     recognizer.interimResults = false;
//     recognizer.lang = "en-US";

//     recognizer.onresult = (event) => {
//       const speechToText = event.results[0][0].transcript.trim().toUpperCase();
//       setSearchTerm((prev) => {
//         const updatedTerm = prev ? `${prev} ${speechToText}` : speechToText;
//         fetchCompanySuggestions(updatedTerm);  // Trigger suggestion fetch
//         return updatedTerm;
//       });
//       toast.success("Voice input added!");
//     };

//     recognizer.onerror = (event) => {
//       const errors = {
//         "not-allowed": "Microphone access denied. Please grant permissions.",
//         "no-speech": "No speech detected. Try speaking again.",
//       };
//       toast.error(errors[event.error] || "Could not process voice input.");
//     };

//     setRecognition(recognizer);

//     return () => {
//       recognizer.stop(); // Cleanup on unmount
//     };
//   }, []);

//   // Debounced function for fetching company suggestions
//   const debouncedFetchSuggestions = debounce(async (input) => {
//     setIsFetching(true);
//     await fetchCompanySuggestions(input);
//     setIsFetching(false);
//   }, 500); // Add debounce to delay API call

//   // Handle voice input button click
//   const handleVoiceInput = () => {
//     if (!recognition) {
//       toast.error("Speech recognition is not initialized.");
//       return;
//     }

//     try {
//       recognition.start();
//       toast("Listening for input...", { icon: "🎤" });
//     } catch (error) {
//       toast.error("Could not start speech recognition. Please try again.");
//     }
//   };

//   // Handle regular input change (trigger debounced fetch)
//   const handleInputChange = (e) => {
//     const input = e.target.value.trim();
//     setSearchTerm(input);
//     if (input && isValidCompanyName(input)) {
//       debouncedFetchSuggestions(input); // Trigger debounced fetching
//     } else {
//       setCompanySuggestions([]);
//     }
//   };

//   // Validate ISIN format
//   const isValidISIN = (term) => /^IN[a-zA-Z0-9]{10}$/.test(term);

//   // Validate Company Name format
//   const isValidCompanyName = (term) => /^[A-Za-z0-9\s&',.\-()]*$/.test(term);

//   // Fetch company suggestions from Supabase
//   const fetchCompanySuggestions = async (input) => {
//     try {
//       const { data, error } = await supabase
//         .from("ISIN_numbers")
//         .select("*")
//         .ilike("Company Name", `${input}%`)
//         .limit(100);

//       if (error) throw error;

//       setCompanySuggestions([...new Set(data.map((item) => item["Company Name"]))]);
//     } catch (error) {
//       console.error("Error fetching company suggestions:", error.message);
//       toast.error("Failed to fetch company suggestions.");
//     }
//   };

//   // Handle search action
//   const handleSearch = async () => {
//     if (!searchTerm.trim()) {
//       toast.error("Please enter a valid ISIN or Company Name.");
//       return;
//     }

//     if (!isValidISIN(searchTerm) && !isValidCompanyName(searchTerm)) {
//       toast.error("Invalid input. ISIN should start with 'IN' and have exactly 12 characters.");
//       return;
//     }

//     setLoading(true);
//     const loadingToast = toast.loading("Searching... Please wait.");

//     try {
//       const [{ data: data1 }, { data: data2 }] = await Promise.all([
//         supabase.from("ISIN_numbers").select("*").or(`ISIN.eq.${searchTerm},Company Name.eq.${searchTerm}`).limit(100),
//         supabase.from("ISIN_numbers_2").select("*").or(`ISIN.eq.${searchTerm}`).limit(100),
//       ]);

//       const combinedData = [...(data1 || []), ...(data2 || [])];

//       if (!combinedData.length) {
//         toast.error("No matching ISIN or Company Name found in the database.");
//         return;
//       }

//       toast.dismiss(loadingToast);
//       setTimeout(() => setShowModal(false), 2000);

//       router.push(`/search/?query=${encodeURIComponent(searchTerm)}&results=${combinedData.length}`);
//     } catch (error) {
//       console.error("Error during search:", error);
//       toast.error("An error occurred while searching. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     showModal && (
//       <Dialog>
//         <DialogTrigger asChild className="cursor-pointer">
//           <button type="button" title="Search ISIN">
//             <SearchIcon size={20} />
//           </button>
//         </DialogTrigger>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Search ISIN</DialogTitle>
//           </DialogHeader>
//           <div className="grid grid-cols-1 gap-y-4">
//             <div className="relative group">
//               <Input
//                 type="text"
//                 placeholder="Enter ISIN"
//                 value={searchTerm}
//                 onChange={handleInputChange}
//               />
//               {isFetching && (
//                 <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
//                   <div className="w-6 h-6 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
//                 </div>
//               )}
//               {companySuggestions.length > 0 && isValidCompanyName(searchTerm) && (
//                 <ul className="relative w-full max-h-52 p-1 mt-1 rounded-md border shadow-sm overflow-y-auto">
//                   {companySuggestions.map((suggestion, index) => (
//                     <li
//                       key={index}
//                       onClick={() => {
//                         setSearchTerm(suggestion);
//                         setCompanySuggestions([]);
//                       }}
//                       className="text-sm py-2 px-3 hover:bg-black/[0.025] rounded-md cursor-pointer"
//                     >
//                       {suggestion}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//             <div className="flex justify-center gap-4">
//               <button type="button" className="btn btn-secondary" onClick={handleVoiceInput}>
//                 <MicIcon size={20} />
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-primary"
//                 onClick={handleSearch}
//                 disabled={loading}
//               >
//                 {loading ? "Searching..." : "Search"}
//               </button>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     )
//   );
// };

// export default ISINSearchBox;
