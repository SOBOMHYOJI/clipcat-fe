"use client";
import { create } from "zustand";

type Msg = {
  id: string;
  role: "user" | "assistant";
  content: string;
  translation?: string;
};

type ChatState = {
  messages: Msg[];
  sending: boolean;
  typing: boolean;
  send: (text: string) => Promise<void>;
};

let seq = 0;

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],
  sending: false,
  typing: false,
  async send(text: string) {
    set({ sending: true });
    set((s) => ({
      messages: [
        ...s.messages,
        { id: String(++seq), role: "user", content: text },
      ],
    }));

    // mock 응답
    set({ typing: true });
    await new Promise((r) => setTimeout(r, 700));
    set((s) => ({
      messages: [
        ...s.messages,
        {
          id: String(++seq),
          role: "assistant",
          content: "운동회는 학교에서 하는 달리기나 게임 같은 체육 행사입니다!",
          translation:
            "Ngày hội thể thao là sự kiện thể dục thể thao ở trường, có chạy và trò chơi",
        },
      ],
      typing: false,
      sending: false,
    }));
  },
}));
