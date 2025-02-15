import AppLayout from "@/components/AppLayout/AppLayout";
import Image from "next/image";
import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <>
      <title>About Us</title>

      <AppLayout>
        <section className="relative w-full py-10">
          <div className="container">
            <div className="grid grid-cols-1 gap-y-5">
              <div className="relative">
                <div className="relative w-full text-center">
                  <h2 className="text-4xl font-bold">About Us</h2>
                </div>
              </div>
              <div className="relative">
                <div className="space-y-4">
                  <p>
                    As part of a larger initiative to simplify and standardize
                    the identification of securities in the international
                    financial markets, India implemented the International
                    Securities Identification Number (ISIN). The history of
                    ISIN's acceptance and use in India is as follows:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full py-10 bg-green-50/30">
          <div className="container">
            <div className="grid grid-cols-12 gap-5 items-center">
              <div className="col-span-12 lg:col-span-5">
                <Image
                  src="/images/our-mission.png"
                  alt=""
                  width={500}
                  height={500}
                  className="w-full h-full rounded-xl"
                />
              </div>
              <div className="col-span-12 lg:col-span-7">
                <h2 className="text-3xl font-medium mb-5">
                  ISIN's introduction in India in the 1990s:
                </h2>
                <p>
                  India has to link its capital markets with the international
                  financial system after liberalizing its economy. India
                  required a globally accepted system to identify securities in
                  order to promote cross-border trade and boost the
                  effectiveness of its financial infrastructure. The Securities
                  and Exchange Board of India (SEBI) accepted ISIN as a unique
                  securities identity as part of its efforts to modernize the
                  securities market. The National Securities Depository Limited
                  (NSDL), established in 1996, played a crucial role in
                  implementing ISIN in India. ISINs became mandatory for the
                  dematerialization of securities, which was introduced as a
                  part of the broader effort to move away from paper-based
                  securities and reduce the risks associated with physical
                  certificates (such as fraud, loss, and damage).
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full py-10">
          <div className="container">
            <div className="grid grid-cols-12 gap-5 items-center">
              <div className="col-span-12 lg:col-span-7">
                <h2 className="text-3xl font-medium mb-5">Role of NSDL</h2>
                <div className="space-y-4">
                  <p>
                    NSDL (National Securities Depository Limited) was the first
                    organization in India to start issuing ISINs. NSDL was
                    established in 1996 to facilitate the dematerialization
                    process and act as the central depository for securities. As
                    part of its operations, NSDL began assigning ISINs to
                    various securities listed on Indian stock exchanges.The
                    introduction of ISINs allowed for a seamless transition from
                    physical securities to electronic (dematerialized)
                    securities, enabling more efficient clearing, settlement,
                    and transfer of securities in the market.
                  </p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5">
                <Image
                  src="/images/team.png"
                  alt=""
                  width={500}
                  height={500}
                  className="w-full h-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full py-10">
          <div className="container">
            <div className="grid grid-cols-12 gap-5 items-center">
              <div className="col-span-12 lg:col-span-5">
                <Image
                  src="/images/team.png"
                  alt=""
                  width={500}
                  height={500}
                  className="w-full h-full rounded-xl"
                />
              </div>
              <div className="col-span-12 lg:col-span-7">
                <h2 className="text-3xl font-medium mb-5">
                  Adoption of ISIN for Indian Securities
                </h2>
                <div className="space-y-4">
                  <p>
                    In the late 1990s and early 2000s, ISINs became widely used
                    for stocks, bonds, and other financial instruments listed on
                    Indian exchanges such as the Bombay Stock Exchange (BSE) and
                    the National Stock Exchange (NSE).The Reserve Bank of India
                    (RBI) also adopted ISIN for government securities, helping
                    to standardize the identification of Indian government bonds
                    and other debt instruments in the global market.With the
                    growing use of ISINs, India also facilitated cross-border
                    investment, allowing international investors to trade Indian
                    securities with greater ease and transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full py-10">
          <div className="container">
            <div className="grid grid-cols-12 gap-5 items-center">
              <div className="col-span-12 lg:col-span-12">
                <h2 className="text-3xl font-medium mb-5">
                  Further Developments
                </h2>
                <div className="space-y-4">
                  <p>
                    Over time, ISINs were extended to a wide range of financial
                    instruments in India, including exchange-traded funds
                    (ETFs), mutual funds, derivatives, and corporate bonds.ISINs
                    were fully integrated into the settlement process in India,
                    ensuring that securities transactions are processed
                    electronically, which reduced the risk of errors and fraud.
                  </p>
                  <p>
                    Today, ISINs are an integral part of India's capital market
                    infrastructure. Nearly all publicly traded securities,
                    government bonds, corporate bonds, ETFs, and other financial
                    instruments have an ISIN.
                  </p>
                  <p>
                    SEBI and NSDL continue to regulate and monitor the use of
                    ISINs, ensuring that the Indian market remains connected
                    with global financial systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AppLayout>
    </>
  );
};

export default About;
