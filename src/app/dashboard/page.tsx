"use client";

import { useEffect, useState } from "react";

type Message = {
  phone: string;
  message: string;
  direction: "inbound" | "outbound";
  created_at?: string;
};

export default function DashboardPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selected, setSelected] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    const res = await fetch("/api/messages");
    const data = await res.json();
    setMessages(data.messages || []);
  };

  const send = async () => {
    if (!selected || !text) return;

    await fetch("/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: selected,
        message: text,
      }),
    });

    setText("");
    loadMessages();
  };

  const chats = [...new Set(messages.map((m) => m.phone))];

  return (
    <div className="flex h-screen bg-black text-white">

      {/* LEFT CHAT LIST */}
      <div className="w-1/3 border-r p-4">
        <h2 className="font-bold mb-4">Chats</h2>

        {chats.length === 0 && (
          <p className="text-gray-400">No chats yet</p>
        )}

        {chats.map((c) => (
          <div
            key={c}
            onClick={() => setSelected(c)}
            className={`p-2 border-b cursor-pointer ${
              selected === c ? "bg-zinc-800" : ""
            }`}
          >
            {c}
          </div>
        ))}
      </div>

      {/* RIGHT CHAT BOX */}
      <div className="flex-1 flex flex-col p-4">

        {/* MESSAGES */}
        <div className="flex-1 overflow-auto space-y-2">
          {messages
            .filter((m) => m.phone === selected)
            .map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg w-fit max-w-xs ${
                  m.direction === "outbound"
                    ? "bg-green-600 ml-auto"
                    : "bg-zinc-700"
                }`}
              >
                {m.message}
              </div>
            ))}
        </div>

        {/* INPUT */}
        <div className="flex gap-2 mt-2">
          <input
            className="flex-1 p-2 bg-zinc-800 rounded"
            value={text}
            placeholder="Type message..."
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={send}
            className="bg-green-600 px-4 rounded"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
}
// "use client";

// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/nextjs";

// import { useState } from "react";

// export default function DashboardPage() {
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");

//   const sendMessage = async () => {
//     const res = await fetch("/api/send-message", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         to: phone,
//         message,
//       }),
//     });

//     const data = await res.json();

//     alert(data.message);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white p-10 pt-24">
//       <div className="flex justify-between items-center mb-10">
//         <h1 className="text-4xl font-bold">
//           Webezee WhatsApp Dashboard
//         </h1>

//         <div>
//           <SignedOut>
//             <SignInButton />
//           </SignedOut>

//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//         </div>
//       </div>

//       <SignedIn>
//         <div className="max-w-xl bg-zinc-900 p-6 rounded-2xl">
//           <h2 className="text-2xl mb-5">
//             Send WhatsApp Message
//           </h2>

//           <input
//             type="text"
//             placeholder="923001234567"
//             className="w-full p-3 rounded-lg bg-zinc-800 mb-4"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />

//           <textarea
//             placeholder="Type your message..."
//             className="w-full p-3 rounded-lg bg-zinc-800 mb-4"
//             rows={5}
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />

//           <button
//             onClick={sendMessage}
//             className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl"
//           >
//             Send Message
//           </button>
//         </div>
//       </SignedIn>

//       <SignedOut>
//         <div className="text-center mt-20">
//           <h2 className="text-3xl font-bold mb-5">
//             Please Login First
//           </h2>

//           <SignInButton>
//             <button className="bg-blue-600 px-6 py-3 rounded-xl">
//               Login
//             </button>
//           </SignInButton>
//         </div>
//       </SignedOut>
//     </div>
//   );
// }