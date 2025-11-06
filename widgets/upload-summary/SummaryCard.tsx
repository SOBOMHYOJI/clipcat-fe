"use client";

import { useRef } from "react";
import { createPortal } from "react-dom";
import { useTextSelection } from "@/features/translate-text/lib/useTextSelection";
import TranslationPopup from "@/features/translate-text/ui/TranslationPopup";
import { formatEasyText } from "@/entities/mascot/document/lib/formatText";

export default function SummaryCard({
  data,
}: {
  data: null | string;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { selection, translation, loading, closePopup } =
    useTextSelection(contentRef);

  return (
    <>
      <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
        <div
          ref={contentRef}
          className="h-[420px] overflow-y-auto leading-7 select-text"
        >
          {data ? (
            <>{formatEasyText(data)}</>
          ) : (
            <p className="text-gray-500">요약을 불러오는 중…</p>
          )}
        </div>
      </div>

      {selection &&
        typeof document !== "undefined" &&
        createPortal(
          <div data-translation-popup>
            <TranslationPopup
              selectedText={selection.text}
              translation={translation}
              loading={loading}
              position={selection.position}
              onClose={closePopup}
            />
          </div>,
          document.body
        )}
    </div>
  );
}
