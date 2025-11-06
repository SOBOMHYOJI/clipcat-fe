"use client";
import { create } from "zustand";
import { sendChatMessage } from "@/shared/lib/api";

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  translation?: string;
  isLoading?: boolean;
};

type ChatStore = {
  messages: Message[];
  sendMessage: (text: string, lang: string) => Promise<void>;
};

export const useChatStore = create<ChatStore>((set, get) => ({
  messages: [],

  sendMessage: async (text, lang) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };
    const loadingMsg: Message = {
      id: Date.now().toString() + "-loading",
      role: "assistant",
      content: "",
      isLoading: true,
    };

    set((s) => ({ messages: [...s.messages, userMsg, loadingMsg] }));

    try {
      const res = await sendChatMessage(text, lang);

      set((s) => ({
        messages: s.messages.map((m) =>
          m.isLoading
            ? {
                ...m,
                isLoading: false,
                content: res.reply ?? "응답이 없습니다.",
                translation: res.translation ?? "",
              }
            : m
        ),
      }));
    } catch (err) {
      console.error(err);
      set((s) => ({
        messages: s.messages.map((m) =>
          m.isLoading
            ? {
                ...m,
                isLoading: false,
                content: "⚠️ 서버 연결에 실패했습니다.",
              }
            : m
        ),
      }));
    }
  },
}));
