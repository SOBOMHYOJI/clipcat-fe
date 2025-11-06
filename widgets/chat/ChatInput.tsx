"use client";
import { useState, useRef, useEffect } from "react";
import { useChatStore } from "@/features/chat/model/store";
export default function ChatInput() {
  const { send, sending } = useChatStore();
  const [text, setText] = useState("");
  const taRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = taRef.current;
    if (!el) return;
    el.style.height = "0px";
    el.style.height = Math.min(el.scrollHeight, 140) + "px";
  }, [text]);

  const fire = () => {
    const v = text.trim();
    if (!v || sending) return;
    send(v);
    setText("");
  };

  return (
    <div className="flex items-end rounded-full border border-gray-300 bg-white pl-4 pr-2">
      <textarea
        ref={taRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            fire();
          }
        }}
        placeholder="텍스트를 입력하세요."
        disabled={sending}
        className="min-h-[44px] max-h-[140px] w-full resize-none rounded-l-full px-2 py-3 leading-6 outline-none"
      />
      <button
        onClick={fire}
        disabled={sending || !text.trim()}
        aria-label="보내기"
        className="ml-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#111827] text-white disabled:opacity-60"
      >
        {/* ▶︎ 아이콘 느낌 */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14M13 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
