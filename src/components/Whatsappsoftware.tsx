'use client'

// components/WhatsAppSoftware.tsx

import Image from "next/image";
export default function WhatsAppSoftware() {
    return (
      <section className="bg-white text-gray-800 p-6 rounded-xl shadow-lg max-w-4xl mx-auto my-10">
        <h2 className="text-3xl font-bold mb-4 text-center text-green-600">WhatsApp Marketing Software</h2>
        
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <Image
              src="/images/WhatsApp Image 2025.jpg"
              alt="WhatsApp contact image"
              width={600} // set appropriate width
              height={400} // set appropriate height
          />
          <div className="flex-1">
            <p className="mb-4 text-lg">
              Boost your reach with our powerful WhatsApp Marketing Software. Send bulk messages, schedule campaigns, and track results easily.
            </p>
            <a
              href="https://example.com/download" // <-- Change to real link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
            >
              Download Now
            </a>
          </div>
        </div>
      </section>
    );
  }
  