"use client";

import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const ApplyISINForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact_no: "",
    email: "",
    name_of_the_company: "",
    city: "",
  });

  const validateForm = () => {
    const { name, contact_no, email, name_of_the_company, city } = formData;

    if (name.trim().length < 3) {
      toast.error("Name must be at least 3 characters long.");
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      toast.error("Name should only contain alphabets and spaces.");
      return false;
    }

    if (contact_no.trim().length !== 10 || !/^\d{10}$/.test(contact_no)) {
      toast.error("Contact No must be exactly 10 digits.");
      return false;
    }

    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email.trim())
    ) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (name_of_the_company.trim().length < 3) {
      toast.error("Company Name must be at least 3 characters long.");
      return false;
    }

    if (city.trim().length < 3) {
      toast.error("City must be at least 3 characters long.");
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(city)) {
      toast.error("City should only contain alphabets and spaces.");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const { data, error } = await supabase
        .from("apply_isin")
        .insert([formData]);
      if (error) throw error;

      toast.success("Your application has been submitted successfully!");

      setFormData({
        name: "",
        contact_no: "",
        email: "",
        name_of_the_company: "",
        city: "",
      });
    } catch (error) {
      toast.error(`Submission failed: ${error.message}`);
    }
  };

  return (

    <>

    <title>Apply for ISIN</title>
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Apply for ISIN</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-lg shadow-md"
        >
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
            />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Contact No</label>
          <input
            type="text"
            name="contact_no"
            value={formData.contact_no}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
            />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
            />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Name of the Company
          </label>
          <input
            type="text"
            name="name_of_the_company"
            value={formData.name_of_the_company}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
            />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
            />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 px-4 rounded hover:bg-orange-600 transition duration-300"
          >
          Submit
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
          </>
  );
};

export default ApplyISINForm;
