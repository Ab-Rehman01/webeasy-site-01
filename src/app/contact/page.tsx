"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          console.log(result.text); // ya koi meaningful use
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        })
        .catch((error) => {
          setStatus("❌ Failed to send. Try again.");
          console.error(error);
        });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-200 flex items-center justify-center px-4 py-10">
      <div className="bg-white/60 backdrop-blur-md shadow-xl rounded-2xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us to Buy a Package
        </h1>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
              required
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
            required
          />
          <textarea
            name="message"
            placeholder="Message / Package Name"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300 font-medium shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
          <p
            className={`text-sm mt-3 text-white text-center transition-opacity duration-300 ${status ? "opacity-100" : "opacity-0"
              }`}
          >
            {status}
          </p>

        </form>
      </div>
    </div>
  );
}
