import { useState } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";

import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message) => {
    if (!message.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: message.trim(),
    };

    setMessages((previousMessages) => [...previousMessages, userMessage]);

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://my-ai-portfolio-dd2a.onrender.com/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: message.trim(),
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to get response from server");
      }

      const data = await response.json();

      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: data.response,
      };

      setMessages((previousMessages) => [
        ...previousMessages,
        assistantMessage,
      ]);
    } catch (error) {
      console.error("Chat API error:", error);

      const errorMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "Sorry, I'm unable to connect to my backend right now. Please try again later.",
      };

      setMessages((previousMessages) => [...previousMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* =====================================================
          FLOATING AI BUTTON
      ====================================================== */}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open AI assistant"
          className="
            fixed bottom-6 right-6 z-50
            flex h-16 w-16 items-center justify-center
            rounded-full
            border border-white/20
            bg-gradient-to-br from-orange-500 to-orange-600
            text-white
            shadow-[0_10px_40px_rgba(249,115,22,0.35)]
            transition-all duration-300
            hover:scale-110
            hover:shadow-[0_15px_50px_rgba(249,115,22,0.5)]
            active:scale-95
          "
        >
          {/* Outer glow */}
          <span
            className="
              absolute inset-0 -z-10
              animate-ping
              rounded-full
              bg-orange-500/20
            "
          />

          {/* Robot icon */}
          <FaRobot
            size={24}
            className="
              transition-transform
              duration-300
              hover:rotate-12
            "
          />

          {/* Online indicator */}
          <span
            className="
              absolute right-1 top-1
              h-3.5 w-3.5
              rounded-full
              border-2 border-[#050b18]
              bg-green-400
              shadow-[0_0_10px_rgba(74,222,128,0.8)]
            "
          />
        </button>
      )}

      {/* =====================================================
          CHAT WINDOW
      ====================================================== */}

      {isOpen && (
        <div
          className="
            fixed bottom-6 right-6 z-50
            flex h-[600px]
            w-[calc(100vw-2rem)]
            max-w-[420px]
            flex-col
            overflow-hidden
            rounded-3xl
            border border-white/10
            bg-[#080d18]
            shadow-2xl
            animate-[chatOpen_0.35s_ease-out]
          "
        >
          {/* =================================================
              BACKGROUND GLOW
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute -right-20 -top-20
              h-48 w-48
              rounded-full
              bg-orange-500/10
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute -bottom-20 -left-20
              h-48 w-48
              rounded-full
              bg-blue-500/10
              blur-3xl
            "
          />

          {/* =================================================
              HEADER
          ================================================== */}

          <div
            className="
              relative z-10
              flex items-center justify-between
              border-b border-white/10
              bg-[#111827]/90
              px-5 py-4
              backdrop-blur-xl
            "
          >
            {/* Left side */}
            <div className="flex items-center gap-3">
              {/* AI Avatar */}
              <div className="relative">
                <div
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-orange-500
                    to-orange-600
                    shadow-lg
                    shadow-orange-500/20
                  "
                >
                  <FaRobot size={19} />
                </div>

                {/* Online indicator */}
                <span
                  className="
                    absolute -bottom-0.5 -right-0.5
                    h-3.5 w-3.5
                    rounded-full
                    border-2 border-[#111827]
                    bg-green-400
                  "
                />
              </div>

              {/* Title */}
              <div>
                <h2 className="text-sm font-semibold text-white">
                  Gaurav's AI Assistant
                </h2>

                <div className="mt-1 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

                  <span className="text-[11px] text-white/40">
                    {isLoading ? "Thinking..." : "Online · Portfolio Assistant"}
                  </span>
                </div>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close AI assistant"
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-xl
                text-white/40
                transition-all
                duration-200
                hover:bg-white/10
                hover:text-white
                active:scale-90
              "
            >
              <FaTimes size={14} />
            </button>
          </div>

          {/* =================================================
              MESSAGES
          ================================================== */}

          <div className="relative z-10 min-h-0 flex-1 overflow-hidden">
            <ChatMessages messages={messages} />

            {/* Thinking animation */}
            {isLoading && (
              <div className="absolute bottom-3 left-4">
                <div
                  className="
                    flex items-center gap-1.5
                    rounded-2xl
                    rounded-bl-md
                    border border-white/10
                    bg-white/10
                    px-4 py-3
                    backdrop-blur-xl
                  "
                >
                  <span
                    className="
                      h-1.5 w-1.5
                      animate-bounce
                      rounded-full
                      bg-orange-400
                    "
                  />

                  <span
                    className="
                      h-1.5 w-1.5
                      animate-bounce
                      rounded-full
                      bg-orange-400
                      [animation-delay:150ms]
                    "
                  />

                  <span
                    className="
                      h-1.5 w-1.5
                      animate-bounce
                      rounded-full
                      bg-orange-400
                      [animation-delay:300ms]
                    "
                  />
                </div>
              </div>
            )}
          </div>

          {/* =================================================
              INPUT
          ================================================== */}

          <div
            className="
              relative z-10
              border-t border-white/10
              bg-[#0b1220]/90
              p-3
              backdrop-blur-xl
            "
          >
            <ChatInput onSend={handleSendMessage} disabled={isLoading} />

            <p className="mt-2 text-center text-[9px] text-white/20">
              Gaurav's AI Portfolio Assistant
            </p>
          </div>
        </div>
      )}

      {/* =====================================================
          CHAT OPEN ANIMATION
      ====================================================== */}

      <style>
        {`
          @keyframes chatOpen {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.95);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
    </>
  );
};

export default AIChatbot;
