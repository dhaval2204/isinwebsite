"use client";
import AppLayout from "@/components/AppLayout/AppLayout";
import FAQs from "@/components/FAQs/FAQs";
import {
  KeyRoundIcon,
  LandmarkIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <AppLayout>
        <Toaster
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        <section className="relative w-full z-10 bg-[url('/images/in.webp')] bg-no-repeat bg-cover after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-green-600 after:opacity-80 after:-z-10">
          <div className="container">
            <div className="min-h-[70vh] py-10 flex items-center text-white">
              <div className="grid grid-cols-12 gap-5 max-lg:gap-y-10">
                <div className="col-span-12 lg:col-span-6">
                  <div className="space-y-5">
                    <h1 className="text-4xl">
                      Official International Securities Identification Numbering
                      (ISIN) registration service for Indian companies
                    </h1>
                    <p>Apply in 2 Minutes and receive your ISIN Code Soon</p>
                    <Link
                      href="/apply-isin"
                      className="btn btn-sm btn-primary max-lg:hidden"
                    >
                      Apply for new ISIN
                    </Link>
                    {/* <button type="button" className="btn btn-primary">
                    Apply for new ISIN
                    </button> */}
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="w-full max-w-80 max-lg:max-w-full ml-auto max-lg:mx-auto bg-white rounded-md shadow overflow-hidden">
                    <div className="p-5 text-black">
                      <div className="flex items-center gap-5">
                        <Image
                          src="/images/icons/Green_shield.svg"
                          alt=""
                          width={200}
                          height={200}
                          className="w-10"
                        />
                        <h6 className="text-lg font-medium leading-snug">
                          Official ISIN Registration Agent
                        </h6>
                      </div>
                    </div>
                    <div className="p-5 text-black">
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                          <span className="text-[#f89939]">
                            <ShieldCheckIcon size={20} />
                          </span>
                          Trusted by 92 832 customers
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[#f89939]">
                            <KeyRoundIcon size={20} />
                          </span>
                          Secure payments
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[#f89939]">
                            <LandmarkIcon size={20} />
                          </span>
                          Globally valid
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full py-10">
          <div className="container">
            <div className="grid grid-cols-1 gap-y-10">
              <div className="relative">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-12 lg:col-span-6">
                    <h2 className="text-3xl font-medium mb-5">
                      About the Company
                    </h2>
                    <p className="mb-5">
                      Indian ISIN offers convenient and secure registration
                      services. We are an official ISIN number Registration
                      Agent for Indian companies.
                    </p>
                    <ul className="space-y-6">
                      <li className="flex items-center gap-4">
                        <span className="text-[#f89939]">
                          <ShieldCheckIcon size={24} />
                        </span>
                        100% of applications with pre-validated data checks
                      </li>
                      <li className="flex items-center gap-4">
                        <span className="text-[#f89939]">
                          <KeyRoundIcon size={24} />
                        </span>
                        Secure payment via Netbanking or by invoice
                      </li>
                      <li className="flex items-center gap-4">
                        <span className="text-[#f89939]">
                          <ServerIcon size={24} />
                        </span>
                        Integrated with the Ministry of Corporate Affairs
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <div className="grid grid-cols-12 gap-5">
                      <div className="col-span-12 lg:col-span-6">
                        <div className="relative w-full bg-[#f89939] text-white shadow rounded-md">
                          <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/jJq6mWlVbrM?si=iNp-h7iUoaxlocjK"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          ></iframe>
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-6">
                        <div className="relative w-full bg-[#f89939] text-white shadow rounded-md"></div>
                      </div>
                      <div className="col-span-12 lg:col-span-6">
                        <div className="relative w-full bg-[#f89939] text-white shadow rounded-md"></div>
                      </div>
                      <div className="col-span-12 lg:col-span-6">
                        <div className="relative w-full bg-[#f89939] text-white shadow rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full py-10 bg-green-50/30">
          <div className="container">
            <div className="grid grid-cols-1 gap-y-10">
              <div className="relative">
                <div className="relative w-full text-center">
                  <h2 className="text-3xl font-medium mb-2">
                    Applying for an ISIN is fast and secure
                  </h2>
                  {/* <p>We issue over 95% of codes in less than 24 hours.</p> */}
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-12 gap-y-10 md:gap-10">
                  <div className="col-span-12 md:col-span-6 lg:col-span-3">
                    <div className="relative space-y-5 text-center">
                      <Image
                        src="/images/icons/enterprise.png"
                        alt=""
                        width={200}
                        height={200}
                        className="w-20 mx-auto"
                      />
                      <div className="flex items-center justify-center">
                        <Image
                          src="/images/icons/redo.png"
                          alt=""
                          width={100}
                          height={100}
                          className="w-7 mx-auto"
                        />
                      </div>
                      <div className="relative space-y-2">
                        <h5 className="font-bold min-h-12">
                          National Numbering Agency (NSDL)
                        </h5>
                        <p>
                          NSDL, the authorized NNA in India, is responsible for
                          assigning ISINs to securities. It receives information
                          from the issuing company, the exchange, or other
                          entities involved in the security's issuance.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-3">
                    <div className="relative space-y-5 text-center">
                      <Image
                        src="/images/icons/india.png"
                        alt=""
                        width={200}
                        height={200}
                        className="w-20 mx-auto"
                      />
                      <div className="flex items-center justify-center">
                        <Image
                          src="/images/icons/redo.png"
                          alt=""
                          width={100}
                          height={100}
                          className="w-7 mx-auto"
                        />
                      </div>
                      <div className="relative space-y-2">
                        <h5 className="font-bold min-h-12">
                          Adding the Country Code
                        </h5>
                        <p>
                          The IN country code is added to the beginning of the
                          ISIN to indicate that the security is issued in India.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-3">
                    <div className="relative space-y-5 text-center">
                      <Image
                        src="/images/icons/customer-conversion.png"
                        alt=""
                        width={200}
                        height={200}
                        className="w-20 mx-auto"
                      />
                      <div className="flex items-center justify-center">
                        <Image
                          src="/images/icons/redo.png"
                          alt=""
                          width={100}
                          height={100}
                          className="w-7 mx-auto"
                        />
                      </div>
                      <div className="relative space-y-2">
                        <h5 className="font-bold min-h-12">
                          Assigning the National Identifier
                        </h5>
                        <p>
                          The National Security Identifier (NSI) is typically
                          derived from local security identification codes like
                          INCODE, BSE code, or NSE code. These are assigned by
                          NSDL or the respective exchanges.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-3">
                    <div className="relative space-y-5 text-center">
                      <Image
                        src="/images/icons/calculator.png"
                        alt=""
                        width={200}
                        height={200}
                        className="w-20 mx-auto"
                      />
                      <div className="flex items-center justify-center">
                        <Image
                          src="/images/icons/redo.png"
                          alt="icon"
                          width={100}
                          height={100}
                          className="w-7 mx-auto"
                        />
                      </div>
                      <div className="relative space-y-2">
                        <h5 className="font-bold min-h-12">
                          Calculation of the Check Digit
                        </h5>
                        <p>
                          The final step is to calculate the check digit using
                          the modulus 10 algorithm. The check digit ensures that
                          the ISIN is accurate and prevents errors during
                          processing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full py-10">
          <div className="container">
            <div className="grid grid-cols-1 gap-y-10">
              <div className="relative">
                <div className="relative w-full">
                  <h2 className="text-3xl font-medium text-green-600 mb-2">
                    Questions and answers
                  </h2>
                  <p>
                    Do you have an additional question?{" "}
                    <Link href="/faqs" className="text-green-600">
                      See More
                    </Link>
                  </p>
                </div>
              </div>
              <div className="relative">
                <FAQs sliced={2} />
              </div>
            </div>
          </div>
        </section>
      </AppLayout>
    </>
  );
}
