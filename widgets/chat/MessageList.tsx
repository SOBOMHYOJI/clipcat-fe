"use client";
import { useEffect, useRef } from "react";
import { useChatStore } from "@/features/chat/model/store";
import MessageBubble from "./MessageBubble";

export default function MessageList() {
  const messages = useChatStore((s) => s.messages);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  return (
    <div className="flex flex-col gap-4">
      {messages.map((m) => (
        <MessageBubble key={m.id} msg={m} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
