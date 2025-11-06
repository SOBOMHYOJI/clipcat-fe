"use client";
import { useState } from "react";

export default function useUpload() {
  const [uploading, setUploading] = useState(false);

  async function upload() {
    try {
      setUploading(true);
      // 1) 파일 선택 UI (input[type=file]) or 드롭존 모달 띄우기
      // 2) 서버 업로드 → 3) 요약 API 호출 → 4) 결과를 클라이언트 스토리지에 보관
      //    예: sessionStorage.setItem("summary", JSON.stringify(res))
      //    or 서버에서 /upload 페이지 렌더링 때 가져오도록
      await new Promise((r) => setTimeout(r, 800)); // mock
      sessionStorage.setItem(
        "summary",
        JSON.stringify({
          title: "2024년 자전거 안전 규칙 안내",
          body: `요즘 자전거를 타는 학생들이 많아졌습니다.\n아이가 안전하게 자전거를 탈 수 있도록 안전 규칙을 알려드립니다.\n...`,
        })
      );
      return true;
    } catch {
      return false;
    } finally {
      setUploading(false);
    }
  }

  return { uploading, upload };
}
