import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

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
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.role === "user"
                    ? "rounded-br-md bg-orange-500 text-white"
                    : "rounded-bl-md bg-white/10 text-white/85"
                }`}
              >
                {message.role === "user" ? (
                  <div className="whitespace-pre-wrap">{message.content}</div>
                ) : (
                  <div className="prose prose-invert max-w-none">
                    <ReactMarkdown
                      components={{
                        h1: ({ children }) => (
                          <h1 className="mb-3 mt-1 text-lg font-bold text-white">
                            {children}
                          </h1>
                        ),

                        h2: ({ children }) => (
                          <h2 className="mb-2 mt-4 text-base font-bold text-white">
                            {children}
                          </h2>
                        ),

                        h3: ({ children }) => (
                          <h3 className="mb-2 mt-3 text-sm font-semibold text-white">
                            {children}
                          </h3>
                        ),

                        p: ({ children }) => (
                          <p className="mb-3 last:mb-0">{children}</p>
                        ),

                        strong: ({ children }) => (
                          <strong className="font-semibold text-white">
                            {children}
                          </strong>
                        ),

                        ul: ({ children }) => (
                          <ul className="mb-3 ml-4 list-disc space-y-1">
                            {children}
                          </ul>
                        ),

                        ol: ({ children }) => (
                          <ol className="mb-3 ml-4 list-decimal space-y-1">
                            {children}
                          </ol>
                        ),

                        li: ({ children }) => (
                          <li className="pl-1">{children}</li>
                        ),

                        code: ({ children }) => (
                          <code className="rounded bg-black/30 px-1.5 py-0.5 text-xs text-orange-300">
                            {children}
                          </code>
                        ),

                        blockquote: ({ children }) => (
                          <blockquote className="my-3 border-l-2 border-orange-500/60 pl-3 text-white/70">
                            {children}
                          </blockquote>
                        ),
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
