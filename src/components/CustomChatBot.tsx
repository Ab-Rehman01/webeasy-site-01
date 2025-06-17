'use client';

import { useState } from 'react';
import ChatBot from 'react-chatbotify';
// import 'react-chatbotify/dist/main.css';

const CustomChatBot = () => {
  const [open, setOpen] = useState(false);

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
  input: false, // 👈 Disable typing
  fallback: "❗ Please select from the options above.",
  path: "show_templates",
},

    show_templates: {
      message: ({ userInput }: { userInput: string }) =>
        `Great choice! Here’s what we offer for ${userInput}.`,
      input: false,
      fallback: "❗ Please select an option using the buttons below.",
      actions: {
        render: ({ userInput }: { userInput: string }) => (
          <a
            href={`/templates?service=${encodeURIComponent(userInput)}`}
            className="px-4 py-2 bg-indigo-600 text-white rounded-full mt-4 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Templates
          </a>
        ),
        onRender: async ({ controller }: { controller: { next: (path: string) => void } }) => {
          await new Promise((r) => setTimeout(r, 3000));
          controller.next("ask_to_proceed");
        },
      },
    },
   ask_to_proceed: {
  message: "Would you like to proceed and speak to our team?",
  options: ["Yes, Continue", "No, Thanks"],
  input: false, // 👈 Disable typing
  fallback: "Please select an option to proceed.",
  path: ({ userInput }: { userInput: string }) =>
    userInput === "Yes, Continue" ? "collect_lead" : "exit",
},
    collect_lead: {
      message: "Please enter your name, WhatsApp number, and message.",
      input: true,
      path: async ({ userInput }: { userInput: string }) => {
        await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lead: userInput }),
        });
        return "thank_you";
      },
    },
    thank_you: {
      message: "Thanks! Our team will contact you shortly on WhatsApp 📩",
      path: "end",
    },
    exit: {
      message:
        "No worries! You can reach us anytime via the WhatsApp icon below. 😊",
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
        Chat
      </button>

      {open && (
        <ChatBot
          id="webeasy-bot"
          flow={flow}
          settings={{
            header: {
              title: <h3>Webeasy Chat</h3>,
              closeChatIcon: "/close.svg",
            },
            chatHistory: {
              storageKey: "webeasy_chat",
            },
          }}
        />
      )}
    </>
  );
};

export default CustomChatBot;
