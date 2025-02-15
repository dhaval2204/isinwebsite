'use client'
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AppLayout = ({ children }) => {
  return (
    <div className="w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
