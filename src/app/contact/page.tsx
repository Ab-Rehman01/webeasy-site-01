"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_784c58v", // replace with your EmailJS service ID
        "template_xbuyokh", // replace with your EmailJS template ID
      formRef.current,
        "23-5vuksDomrEBbUl" // replace with your EmailJS public key
        )
        .then((result) => {
          console.log("✅ Email successfully sent!", result.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        })
        .catch((error) => {
          console.error("❌ Email failed to send:", error.text);
          setStatus("Failed to send message. Please try again.");
        });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Us to Buy Package</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded text-black bg-white placeholder-gray-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded text-black bg-white placeholder-gray-500"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded text-black bg-white placeholder-gray-500"
          required
        />
        <textarea
          name="message"
          placeholder="Message / Package Name"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded text-black bg-white placeholder-gray-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
        {status && <p className="text-sm mt-2 text-green-600">{status}</p>}
      </form>
    </div>
  );
}
