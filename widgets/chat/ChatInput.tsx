"use client";
import { useState } from "react";
import { useChatStore } from "@/features/chat/model/store";
import { Send } from "lucide-react";

export default function ChatInput() {
  const [text, setText] = useState("");
  const sendMessage = useChatStore((s) => s.sendMessage);

  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(text, "vi");
    setText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-center justify-center w-full border-t border-gray-200 bg-white px-4 py-3">
      <div className="flex w-full max-w-3xl items-center rounded-full border border-gray-300 bg-white px-5 py-3 shadow-sm focus-within:ring-2 focus-within:ring-gray-300">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="텍스트를 입력하세요."
          className="flex-1 bg-transparent text-gray-800 placeholder-gray-400 outline-none"
        />
        <button
          onClick={handleSend}
          className="ml-2 rounded-full p-2 text-gray-700 hover:bg-gray-100 transition"
        >
          <Send size={20} className="fill-black" />
        </button>
      </div>
    </div>
  );
}
