"use client";
import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa"; // Import Instagram and Twitter icons
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full bg-green-950 text-white">
      <div className="container">
        <div className="relative w-full py-14 border-b border-b-green-900">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <h5 className="mb-3 text-lg font-bold">Services</h5>
              <ul>
                <li className="block">
                  <Link
                    href="/"
                    className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300"
                  >
                    ISIN registration
                  </Link>
                </li>
                <li className="block">
                  <Link
                    href="/"
                    className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300"
                  >
                    ISIN renewal
                  </Link>
                </li>
                <li className="block">
                  <Link
                    href="/"
                    className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300"
                  >
                    ISIN certificate & tag
                  </Link>
                </li>
                <li className="block">
                  <Link
                    href="/"
                    className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300"
                  >
                    ISIN search
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <h5 className="mb-3 text-lg font-bold">Resources</h5>
              <ul>
                <li className="block">
                  <Link
                    href="/"
                    className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300"
                  >
                    Track your order
                  </Link>
                </li>
                <li className="block">
                  <Link
                    href="/"
                    className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300"
                  >
                    ISIN cost
                  </Link>
                </li>
                <li className="block">
                  <Link
                    href="/"
                    className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <h5 className="mb-3 text-lg font-bold">Company</h5>
              <ul>
                <li className="block">
                  <Link
                    href="/about"
                    className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300"
                  >
                    About us
                  </Link>
                </li>
                <li className="block">
                  <Link
                    href="/"
                    className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300"
                  >
                    Become a partner
                  </Link>
                </li>
                <li className="block">
                  <Link
                    href="/faqs"
                    className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="block">
                  <Link
                    href="/contact-us"
                    className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300"
                  >
                    Contact
                  </Link>
                </li>
                <li className="block">
                  <Link
                    href="/terms"
                    className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300"
                  >
                    Terms Of Use
                  </Link>
                </li>
                <li className="block">
                  <Link
                    href="/policy"
                    className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <h5 className="mb-3 text-lg font-bold">ISIN Register</h5>
              <p className="text-sm font-light">
                B1105 - 1108, K P Epitome, Nr. Makarba Lake, Nr. Siddhi Vinayak
                Towers, Makarba, Ahmedabad - 380051.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full py-10 flex items-center justify-between max-md:flex-col max-md:gap-y-5">
          <p className="text-sm font-light">
            Copyright &copy; ISIN 2024 | All rights reserved
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
              title="Follow us on Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
              title="Follow us on Twitter"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
