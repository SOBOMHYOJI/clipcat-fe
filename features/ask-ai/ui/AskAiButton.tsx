"use client";
import { useRouter } from "next/navigation";

export default function AskAiButton({
  href = "/ai",
  label = "모르는 단어 물어보기",
  className,
}: {
  href?: string;
  label?: string;
  className?: string;
}) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(href)}
      className={
        className ??
        "rounded-full bg-[#111827] px-6 py-3 text-[16px] font-semibold text-white hover:brightness-110"
      }
    >
      {label}
    </button>
  );
}
