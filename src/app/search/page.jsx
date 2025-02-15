"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { supabase } from "@/utils/supabase/configsupabase";
import AppLayout from "@/components/AppLayout/AppLayout";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/ui/components/pagination";
import Loader from "@/ui/components/Loader";
import Link from "next/link";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const resultsPerPage = 2;

  const securityStatusMapping = {
    1: "Active",
    3: "Blocked",
    4: "Suspended",
    5: "Deleted",
  };

  const securityTypeMapping = {
    1: "Equity Shares",
    2: "Postal Savings Scheme",
    3: "Preference Shares",
    4: "Bond",
    5: "Deep Discount Bond",
    7: "Commercial Paper",
    8: "Step Discount Bond",
    9: "Regular Return Bond",
    10: "Certificate of Deposit",
    11: "Securitised Instrument",
    12: "Debenture",
    13: "Mutual Fund Unit",
    14: "Government Securities",
    15: "Warrant",
    18: "Rights RE",
    20: "Mutual Fund Unit",
    21: "Alternative Investment Fund",
    22: "Treasury Bills",
    23: "Infrastructure Investment Trust",
    24: "Municipal Corporation Bond",
    25: "Real Estate Investment Trust",
    26: "Sovereign Gold Bond",
    30: "Commodity Bullion",
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const day = String(date.getDate()).padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return year === 9999
      ? `${day} ${month} ${year} (Not Applicable)`
      : `${day} ${month} ${year}`;
  };

  const fetchDetails = async () => {
    if (!query) {
      setError("Search query is missing from the URL.");
      setIsLoading(false);
      return;
    }

    try {
      const [{ data: data1 }, { data: data2 }] = await Promise.all([
        supabase
          .from("ISIN_numbers")
          .select("*")
          .or(`ISIN.eq.${query},Company Name.ilike.%${query}%`)
          .limit(1000),
        supabase
          .from("ISIN_numbers_2")
          .select("*")
          .or(`ISIN.eq.${query}`)
          .limit(1000),
      ]);

      const combinedData = [...(data1 || []), ...(data2 || [])];

      const filteredData = combinedData.filter(
        (item) =>
          item.ISIN?.toUpperCase() === query.toUpperCase() ||
          item["Company Name"]?.toUpperCase().includes(query.toUpperCase())
      );

      if (filteredData.length === 0) {
        throw new Error("No matching data found for the given query.");
      }

      setData(filteredData);
      setError(null);
    } catch (err) {
      setError(err.message || "An error occurred while fetching data.");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (isLoading) {
      document.title = "Loading search results...";
    } else if (error) {
      document.title = "Error - Search Page";
    } else if (query) {
      if (
        data.length === 1 &&
        data[0].ISIN?.toUpperCase() === query.toUpperCase()
      ) {
        const companyName = data[0]["Company Name"] || "Unknown Company";
        document.title = `${query} - ${companyName}`;
      } else if (data.length === 1 && !data[0].ISIN) {
        document.title = `${data[0]["Company Name"] || "Unknown Company"}`;
      } else {
        const isCompanySearch = data.some(
          (item) => item["Company Name"]?.toLowerCase() === query.toLowerCase()
        );

        if (isCompanySearch) {
          document.title = `${query}`;
        } else {
          document.title = `${data.length} result${
            data.length !== 1 ? "s" : ""
          } for "${query}"`;
        }
      }
    } else {
      document.title = "Search Page";
    }
  }, [query, isLoading, error, data.length, data]);

  useEffect(() => {
    fetchDetails();
  }, [query]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= Math.ceil(data.length / resultsPerPage)) {
      setCurrentPage(page);
    }
  };

  if (isLoading)
    return (
      <Loader
        size="h-20 w-20"
        color="border-orange-500"
        text="Loading search results..."
      />
    );

  if (error) return <p className="text-red-500">{error}</p>;

  const currentResults = data.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  const fields = [
    { label: "ISIN", key: "ISIN" },
    { label: "ID", key: "ID" },
    { label: "Name", key: "Name" },
    { label: "Description", key: "Description" },
    { label: "Company Name", key: "Company Name" },
    { label: "ISIN Short Name", key: "ISIN Short Name" },
    {
      label: "Security Type",
      key: "Security Type",
      format: (value) => securityTypeMapping[value] || "N/A",
    },
    {
      label: "Share Registrar Code",
      key: "Share Registrar Code",
      format: (value) => (
        <Link
          href={`/companies/${value}`} // Update with the actual company page URL structure
          className="text-blue-600 hover:underline"
        >
          {value}
        </Link>
      ),
    },

    { label: "Share Registrar Name", key: "Share Registrar Name" },
    {
      label: "Issue Date",
      key: "Issue Date",
      format: formatDate,
    },
    {
      label: "Maturity Date",
      key: "Maturity Date",
      format: formatDate,
    },
    {
      label: "Face Value",
      key: "Face Value",
      format: (value) => (value ? value / 1000 : "N/A"),
    },
    {
      label: "Security Status",
      key: "Security Status",
      format: (value) => securityStatusMapping[value] || "N/A",
    },
    {
      label: "Creation Date",
      key: "Creation Date",
      format: formatDate,
    },
    {
      label: "Last Update Date",
      key: "Last Update date",
      format: formatDate,
    },
  ];

  return (
    <AppLayout>
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">
            Search Results ({data.length} result{data.length > 1 ? "s" : ""})
          </h2>
          <div className="grid grid-cols-1 gap-y-10">
            {currentResults.map((item, index) => (
              <div key={index} className="table-responsive">
                <table className="table table-bordered table-striped text-sm">
                  <tbody>
                    {fields.map(({ label, key, format }) => (
                      <tr key={key}>
                        <td>
                          <strong>{label}</strong>
                        </td>
                        <td>
                          {format ? format(item[key]) : item[key] || "N/A"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
            {data.length > resultsPerPage && (
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage <= 1}
                    />
                  </PaginationItem>
                  <PaginationItem>
                    Page {currentPage} of{" "}
                    {Math.ceil(data.length / resultsPerPage)}
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={
                        currentPage >= Math.ceil(data.length / resultsPerPage)
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default function SuspenseWrapper() {
  return (
    <Suspense fallback={<Loader text="Loading page..." />}>
      <SearchPage />
    </Suspense>
  );
}
