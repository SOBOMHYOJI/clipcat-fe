"use client";
import { useState } from "react";
import type { Message } from "@/features/chat/model/store";
import { Languages } from "lucide-react";

export default function MessageBubble({ msg }: { msg: Message }) {
  const [showTranslation, setShowTranslation] = useState(false);
  const isUser = msg.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`relative max-w-[70%] rounded-2xl px-4 py-3 shadow-sm ${
          isUser ? "bg-gray-100 text-gray-800" : "bg-white text-gray-900"
        }`}
      >
        {msg.isLoading ? (
          <div className="flex gap-1">
            <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.2s]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.1s]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
          </div>
        ) : (
          <>
            <p className="leading-relaxed">{msg.content}</p>

            {msg.translation && showTranslation && (
              <>
                <hr className="my-2 border-gray-200" />
                <p className="text-green-600">{msg.translation}</p>
              </>
            )}

            {msg.translation && (
              <button
                aria-label="번역 보기"
                onClick={() => setShowTranslation(!showTranslation)}
                className="absolute -right-2 -bottom-2 grid h-7 w-7 place-items-center rounded-full bg-white ring-1 ring-gray-200 hover:bg-gray-50"
              >
                <Languages size={14} />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
