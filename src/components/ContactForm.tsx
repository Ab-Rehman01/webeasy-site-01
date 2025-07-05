'use client';

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // For number input: allow only +92-3XXXXXXXXX (max 13 characters)
    if (name === "number") {
      if (!value.startsWith("+92-3")) return;
      if (value.length > 9) return;
    }

    setFormData({ ...formData, [name]: value });
  };

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!formRef.current) return;
  setStatus("");

  // 1. Admin Notification
  emailjs
    .sendForm(
      "service_uhx8h49",
      "template_lv6tr26",  // admin template ID
      formRef.current,
      "23-5vuksDomrEBbUl"
    )
    .then(() => {
      console.log("✅ Admin notified");
    })
    .catch((error) => {
      console.error("❌ Failed to notify admin:", error);
    });

  // 2. User Auto Reply
  emailjs
    .sendForm(
      "service_w28ct9q",
      "template_t6y6n8l", // user auto-reply template ID
      formRef.current,
      "23-5vuksDomrEBbUl"
    )
    .then(() => {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    })
    .catch((error) => {
      setStatus("❌ Failed to send message. Try again.");
      console.error(error);
    });
};

  return (
    <section id="contact" className="bg-black text-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let&apos;s Connect</h2>
        <p className="mb-8 text-gray-400">
          Have a project in mind or just want to say hi? Drop me a message!
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-900 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-900 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-gray-800 text-gray-300 rounded-l border border-r-0 border-gray-700">
              +92
            </span>
            <input
              type="text"
              name="number"
              placeholder="Enter -9 digit number"
              value={formData.phone}
              onChange={(e) => {
                // Ensure only numbers after +92-3
                const input = e.target.value.replace(/[^\d]/g, ""); // remove non-digits
                if (input.length <= 9) {
                  setFormData({ ...formData, phone: input });
                }
              }}
              required
              className="w-full p-3 bg-gray-900 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="w-full p-3 bg-gray-900 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded transition duration-300 font-medium flex items-center justify-center"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>

          {status && (
            <p
  className={`text-sm mt-3 ${
    status.startsWith("✅") ? "text-green-400" : "text-red-400"
  } transition-opacity duration-300`}
>
  {status}
</p>

          )}
        </form>

        {/* Resume + WhatsApp Section */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* <a
            href="/Abdul_Rehman_Resume_01.pdf"
            download
            className="bg-gray-800 px-6 py-2 rounded text-white hover:bg-gray-700 transition"
          >
            📄 Download Resume
          </a> */}
          <a
            href="https://wa.me/923218751479"
            target="_blank"
            className="text-green-400 underline hover:text-green-300"
          >
            📱 Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}


// export default function Contact() {
//   return (
//     <section id="contact" className="py-16 bg-gray-50">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
//         <form className="max-w-xl mx-auto space-y-4">
//   <input type="text" placeholder="Your Name" className="w-full px-4 py-2 bg-gray-800 rounded" />
//   <input type="email" placeholder="Your Email" className="w-full px-4 py-2 bg-gray-800 rounded" />
//   <textarea rows={5} placeholder="Your Message" className="w-full px-4 py-2 bg-gray-800 rounded"></textarea>
//   <button type="submit" className="bg-purple-600 px-6 py-2 rounded text-white hover:bg-purple-700">
//     Send Message
//   </button>
// </form>

{/* <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input className="w-full p-3 border rounded" type="text" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input className="w-full p-3 border rounded" type="email" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea className="w-full p-3 border rounded" rows={5} placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded">Send</button>
        </form> */}
//       </div>
//     </section>
//   );
// }
