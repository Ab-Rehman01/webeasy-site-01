"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    const res = await fetch("/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: phone,
        message,
      }),
    });

    const data = await res.json();

    alert(data.message);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10">
        Webezee WhatsApp Dashboard
      </h1>

      <div className="max-w-xl bg-zinc-900 p-6 rounded-2xl">
        <h2 className="text-2xl mb-5">Send WhatsApp Message</h2>

        <input
          type="text"
          placeholder="923001234567"
          className="w-full p-3 rounded-lg bg-zinc-800 mb-4"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <textarea
          placeholder="Type your message..."
          className="w-full p-3 rounded-lg bg-zinc-800 mb-4"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={sendMessage}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}