"use client";
// src/components/CustomChatBot.tsx
import { useState } from "react";
import ChatBot from "react-chatbotify";

import { FaWhatsapp } from "react-icons/fa";

const CustomChatBot = () => {
  const [open, setOpen] = useState(false);

  const customTheme = {
    embedded: true,
    primaryColor: "#4A16D8",
    secondaryColor: "#FF00FF",
  };

  const header = {
    title: <h3>Webeasy Chat</h3>,
    closeChatIcon: "/close.svg",
  };

  const flow = {
    start: {
      message: "Welcome to Webeasy-Tech! 👋",
      path: "select_service",
    },

    select_service: {
      message: "What service are you interested in?",
      options: [
        "Shopify Store",
        "WordPress Website",
        "Custom Website",
        "Portfolio Website",
        "WhatsApp Marketing",
        "Software Licensing",
      ],
      path: "show_templates",
    },

    show_templates: {
      message: ({ userInput }) => `Great choice! Here’s what we offer for ${userInput}.`,
      render: ({ userInput }) => (
        <a
          href="/templates"
          className="px-4 py-2 bg-indigo-600 text-white rounded-full mt-4 inline-block"
        >
          View Templates
        </a>
      ),
      path: "ask_to_proceed",
    },

    ask_to_proceed: {
      message: "Would you like to proceed and speak to our team?",
      options: ["Yes, Continue", "No, Thanks"],
      path: (params) => (params.userInput === "Yes, Continue" ? "collect_lead" : "exit"),
    },

    collect_lead: {
      message: "Please enter your name, WhatsApp number, and your message.",
      input: true,
      path: async (params) => {
        await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lead: params.userInput }),
        });
        return "thank_you";
      },
    },

    thank_you: {
      message: "Thanks! Our team will contact you shortly on WhatsApp 📩",
      path: "end",
    },

    exit: {
      message: "No worries! You can reach us anytime via the WhatsApp icon below. 😊",
      path: "end",
    },

    end: {
      message: "Have a great day! 👋",
    },
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg"
      >
        <FaWhatsapp size={28} />
      </button>

      {open && (
        <ChatBot
          options={{
            theme: customTheme,
            chatHistory: {
              storageKey: "webeasy_chat", // unique key
              storage: "localStorage",    // or "sessionStorage"
            },
            header,
          }}
          flow={flow}
        />
      )}
    </>
  );
};

export default CustomChatBot;
