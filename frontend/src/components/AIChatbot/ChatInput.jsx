import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ChatInput = ({ onSend, disabled = false }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = input.trim();

    if (!message || disabled) return;

    onSend(message);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-white/10 bg-black/10 p-3"
    >
      <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2 transition focus-within:border-orange-500/50">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything..."
          rows={1}
          disabled={disabled}
          className="max-h-24 min-h-[42px] flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-white/30 disabled:cursor-not-allowed disabled:opacity-50"
        />

        <button
          type="submit"
          disabled={!input.trim() || disabled}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white transition-all duration-200 hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Send message"
        >
          <FaPaperPlane size={14} />
        </button>
      </div>

      <p className="mt-2 text-center text-[10px] text-white/30">
        Enter to send • Shift + Enter for a new line
      </p>
    </form>
  );
};

export default ChatInput;
