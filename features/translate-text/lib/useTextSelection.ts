"use client";

import { useState, useEffect, useCallback, RefObject } from "react";
import { translateText } from "@/shared/api/translate";

interface SelectionState {
  text: string;
  position: { x: number; y: number };
}

export function useTextSelection(containerRef: RefObject<HTMLElement | null>) {
  const [selection, setSelection] = useState<SelectionState | null>(null);
  const [translation, setTranslation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleMouseUp = useCallback(async () => {
    const selectedText = window.getSelection()?.toString().trim();

    if (!selectedText || selectedText.length === 0) {
      setSelection(null);
      setTranslation(null);
      return;
    }

    // 선택 영역의 위치 계산
    const range = window.getSelection()?.getRangeAt(0);
    if (!range) return;

    const rect = range.getBoundingClientRect();
    const position = {
      x: rect.left + window.scrollX,
      y: rect.bottom + window.scrollY + 8, // 선택 영역 아래에 표시
    };

    setSelection({ text: selectedText, position });
    setTranslation(null);
    setLoading(true);

    // 번역 API 호출
    try {
      const translated = await translateText(selectedText);
      setTranslation(translated);
    } catch (error) {
      console.error("Translation error:", error);
      setTranslation(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    // 팝업 내부 클릭이 아니면 닫기
    if (!target.closest("[data-translation-popup]")) {
      setSelection(null);
      setTranslation(null);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      container.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef, handleMouseUp, handleClickOutside]);

  const closePopup = useCallback(() => {
    setSelection(null);
    setTranslation(null);
    window.getSelection()?.removeAllRanges();
  }, []);

  return {
    selection,
    translation,
    loading,
    closePopup,
  };
}
