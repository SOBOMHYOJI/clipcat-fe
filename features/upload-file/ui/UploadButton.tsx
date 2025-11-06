"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import useUpload from "@/entities/mascot/document/lib/uploadPdf";

export default function UploadButton() {
  const router = useRouter();
  const { uploading, upload } = useUpload();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 버튼 클릭 시 파일 선택창 열기
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  // 파일 선택 후 업로드
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    console.log("File selected for upload");
    const file = e.target.files[0];
    const ok = await upload(file); // 훅에 파일 전달
    if (ok) router.push("/upload"); // 성공 시 업로드 결과 페이지 이동
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={uploading}
        className="rounded-full bg-[#4ade80] px-6 py-3 text-[16px] font-semibold text-white shadow-sm hover:brightness-95 disabled:opacity-60"
      >
        {uploading ? "업로드 중…" : "가정통신문 업로드하기"}
      </button>

      {/* 숨겨진 파일 input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={handleFileChange}
      />
    </>
  );
}