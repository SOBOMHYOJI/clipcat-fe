"use client";
import BlinkingMascot from "@/entities/mascot/ui/BlinkingMascot";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
export default function ChatView() {
  return (
    <section className="mx-auto max-w-[1120px] px-6 py-10">
      <div className="grid grid-cols-[220px_1fr] gap-8">
        <div className="relative">
          {" "}
          <div className="absolute right-0 bottom-[-8px] w-[160px] shrink-0">
            <BlinkingMascot width={180} className="block" />
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-[#fafafa] p-6">
          <div className="rounded-2xl border border-gray-200 bg-white">
            <div className="h-[520px] overflow-y-auto p-6">
              <MessageList />
            </div>
            <div className=" border-gray-200 p-4">
              <ChatInput />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
