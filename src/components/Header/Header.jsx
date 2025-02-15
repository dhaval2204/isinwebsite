"use client";
import Link from "next/link";
import React, { useState } from "react";
import LanguageTranslator from "../LanguageTranslator/LanguageTranslator";
import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";
import menus from "@/lib/json/menus.json";
import ISINSearchBox from "@/components/Isinsearchbox/ISINSearchBox";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <React.Fragment>
      <div className="relative w-full py-2 bg-[#f89939] max-lg:hidden block">
        <div className="container">
          <div className="flex items-center justify-between gap-2 text-xs text-white">
            <p>
              As of 3 January 2018, ISIN are mandatory for all companies who
              wish to continue trading in securities.
            </p>
            <div className="flex items-center gap-2">
              <Link href="/" className="text-white hover:underline">
                +91-79-48000319
              </Link>
              <Link href="/" className="text-white hover:underline">
                investor@accuratesecurities.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <header className="sticky top-0 left-0 w-full bg-white border-b z-50">
        <div className="container">
          <nav className="flex items-center justify-between gap-2 py-1 max-lg:py-3">
            <div className="flex items-center gap-8">
              <Link href="/" className="block">
                {/* <h3 className="text-2xl font-bold">ISIN</h3> */}
                <Image
                  src="/images/icons/ISNI_logo_500x250.svg"
                  alt=""
                  width={200}
                  height={200}
                />
              </Link>
              <div className="w-full">
                <ul
                  className={`relative flex items-center z-50 max-lg:flex-col max-lg:fixed max-lg:left-0 max-lg:top-[60px] max-lg:w-full max-lg:bg-white ${
                    menuToggle
                      ? "max-lg:py-8 max-lg:max-h-screen"
                      : "max-lg:py-0 max-lg:max-h-0"
                  } max-lg:overflow-y-hidden max-lg:shadow max-lg:transition-all max-lg:duration-300`}
                >
                  {menus?.map((menu, index) => (
                    <li className="block max-lg:w-full" key={index}>
                      <Link
                        href={menu?.path}
                        className="relative block py-4 px-3 text-black hover:text-orange-500 transition-all duration-300 after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300 max-lg:py-2.5 max-lg:w-full max-lg:text-center max-lg:hover:bg-orange-500 max-lg:text-black max-lg:hover:text-white max-lg:after:hidden"
                      >
                        {menu?.title}
                      </Link>
                    </li>
                  ))}
                  <li className="w-full hidden max-lg:flex max-lg:items-center max-lg:justify-center mt-5">
                    <Link
                      href="/apply-isin"
                      className="btn btn-primary w-full max-w-72"
                    >
                      Apply for new ISIN
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ISINSearchBox />
              <Link
                href="/apply-isin"
                className="btn btn-sm btn-primary max-lg:hidden"
              >
                Apply for new ISIN
              </Link>
              <button
                type="button"
                className="w-10 h-10 hidden max-lg:inline-flex items-center justify-center"
                onClick={() => setMenuToggle(!menuToggle)}
              >
                {!menuToggle ? <MenuIcon /> : <XIcon />}
              </button>
            </div>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
