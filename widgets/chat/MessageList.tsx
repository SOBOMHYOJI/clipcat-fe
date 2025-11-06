"use client";
import { useEffect, useRef } from "react";
import { useChatStore } from "@/features/chat/model/store";
import MessageBubble from "./MessageBubble";
import TranslationBox from "./TranslationBox";

export default function MessageList() {
  const { messages, typing } = useChatStore();
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  if (!messages.length) {
    return (
      <div className="flex h-full items-center justify-center text-gray-500">
        ‘운동회’ 같이 모르는 단어를 물어보세요.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {messages.map((m) => (
        <div
          key={m.id}
          className={
            m.role === "user" ? "flex justify-end" : "flex justify-start"
          }
        >
          <div className="max-w-[560px]">
            <MessageBubble role={m.role}>{m.content}</MessageBubble>
            {/* 스샷처럼 답변 밑에 연두색 번역 박스가 오는 케이스 */}
            {m.translation && m.role === "assistant" && (
              <div className="mt-2">
                <TranslationBox>{m.translation}</TranslationBox>
              </div>
            )}
          </div>
        </div>
      ))}

      {typing && <div className="text-sm text-gray-500">답변 남기는 중…</div>}
      <div ref={endRef} />
    </div>
  );
}
