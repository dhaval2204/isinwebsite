"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/configsupabase";
import AppLayout from "@/components/AppLayout/AppLayout";
import Link from "next/link";
import { useParams } from "next/navigation"; // Using useParams for dynamic parameter
import Loader from "@/ui/components/Loader";

const CompanyPage = () => {
  const { shareRegistrarCode } = useParams(); // Extract dynamic parameter from URL

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [totalPages, setTotalPages] = useState(1); // Track total pages

  const itemsPerPage = 10; // Number of companies to show per page

  useEffect(() => {
    if (!shareRegistrarCode) return;

    const fetchCompanyData = async () => {
      setLoading(true);
      setError(null); // Reset error state before the new request

      try {
        // Fetch companies matching the Share Registrar Code
        const { data, error } = await supabase
          .from("ISIN_numbers")
          .select("*") // Fetch all data for pagination
          .eq("Share Registrar Code", shareRegistrarCode);

        if (error) throw error;

        // Extract unique company names using Set to avoid duplicates
        const uniqueCompanies = Array.from(
          new Set(data?.map((item) => item["Company Name"]))
        ).filter(Boolean); // Filter out any falsy values like undefined or null

        if (uniqueCompanies.length === 0) {
          setError("No companies found for the provided Share Registrar Code.");
        } else {
          setCompanies(uniqueCompanies); // Update the state with unique company names
          setTotalPages(Math.ceil(uniqueCompanies.length / itemsPerPage)); // Calculate total pages
        }
      } catch (err) {
        setError(err.message || "Failed to fetch company data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, [shareRegistrarCode]); // Re-run effect when shareRegistrarCode changes

  // Show loading state
  if (loading) {
    return (
      <Loader
        size="h-20 w-20"
        color="border-orange-500"
        text="Loading search results..."
      />
    );
  }

  // Show error if it exists
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  // Show message if no companies are found
  if (companies.length === 0) {
    return <p>No companies available for this Share Registrar Code.</p>;
  }

  // Paginated companies
  const paginatedCompanies = companies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <AppLayout>
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">
            Companies with Share Registrar Code: {shareRegistrarCode}
          </h2>

          <div className="space-y-4">
            {paginatedCompanies.map((companyName, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-semibold">Company Name:</h3>
                <Link
                  href={`/search?query=${encodeURIComponent(companyName)}`} // Pass company name as query param
                  className="text-blue-600 hover:underline"
                >
                  {companyName}
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default CompanyPage;
