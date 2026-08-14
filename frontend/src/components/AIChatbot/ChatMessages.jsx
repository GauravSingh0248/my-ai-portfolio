import { useEffect, useRef } from "react";

const ChatMessages = ({ messages }) => {
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const container = messagesContainerRef.current;

    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={messagesContainerRef}
      className="h-full min-h-0 overflow-y-auto px-4 py-4"
    >
      {messages.length === 0 ? (
        <div className="flex min-h-full items-center justify-center text-center">
          <div>
            <div className="mb-3 text-4xl">🤖</div>

            <h3 className="text-lg font-semibold text-white">
              Hi! I'm Gaurav's AI Assistant
            </h3>

            <p className="mt-2 max-w-xs text-sm text-white/50">
              Ask me about Gaurav's skills, projects, education, experience, or
              anything else about his portfolio.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.role === "user"
                    ? "rounded-br-md bg-orange-500 text-white"
                    : "rounded-bl-md bg-white/10 text-white/85"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
