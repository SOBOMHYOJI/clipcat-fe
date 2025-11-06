"use client";
import { useRouter } from "next/navigation";
import useUpload from "../lib/useUpload";

export default function UploadButton() {
  const router = useRouter();
  const { uploading, upload } = useUpload();

  return (
    <button
      disabled={uploading}
      onClick={async () => {
        const ok = await upload(); // 파일 업로드 + 요약 요청
        if (ok) router.push("/upload"); // 성공 시 업로드 결과 페이지로 이동
      }}
      className="rounded-full bg-[#4ade80] px-6 py-3 text-[16px] font-semibold text-white shadow-sm hover:brightness-95 disabled:opacity-60"
    >
      {uploading ? "업로드 중…" : "가정통신문 업로드하기"}
    </button>
  );
}
