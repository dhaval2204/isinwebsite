"use client";

import React, { useState } from "react";
import { Input } from "@/ui/components/input";
import { Textarea } from "@/ui/components/textarea";
import { createClient } from "@supabase/supabase-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    primary_email: "",
    subject: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("contact_us")
        .insert([formData]);
      if (error) throw error;

      toast.success("Your message has been submitted successfully!");

      setFormData({
        name: "",
        phone: "",
        primary_email: "",
        subject: "",
        body: "",
      });
    } catch (error) {
      toast.error(`Submission failed: ${error.message}`);
    }
  };

  return (
    <div className="relative w-full p-4 bg-white shadow-full shadow-black/5 rounded-md">
      <form className="grid grid-cols-12 gap-4" onSubmit={handleSubmit}>
        <div className="col-span-12 lg:col-span-6">
          <div className="relative w-full">
            <label className="block text-sm font-medium mb-1.5">Name</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="relative w-full">
            <label className="block text-sm font-medium mb-1.5">Phone</label>
            <Input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-12">
          <div className="relative w-full">
            <label className="block text-sm font-medium mb-1.5">Email</label>
            <Input
              type="email"
              name="primary_email"
              value={formData.primary_email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-12">
          <div className="relative w-full">
            <label className="block text-sm font-medium mb-1.5">Subject</label>
            <Input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-12">
          <div className="relative w-full">
            <label className="block text-sm font-medium mb-1.5">Body*</label>
            <Textarea
              name="body"
              value={formData.body}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-12">
          <div className="relative w-full">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
      {/* Toast notification container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ContactForm;
