"use client";

interface TranslationPopupProps {
  selectedText: string;
  translation: string | null;
  loading: boolean;
  position: { x: number; y: number };
  onClose: () => void;
}

export default function TranslationPopup({
  selectedText,
  translation,
  loading,
  position,
  onClose,
}: TranslationPopupProps) {
  return (
    <div
      className="fixed bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50 min-w-[280px] max-w-[400px]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="닫기"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="space-y-3 pt-2">
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-1">
            선택한 부분:
          </p>
          <p className="text-base text-gray-900 bg-yellow-50 px-2 py-1 rounded">
            {selectedText}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-700 mb-1">
            번역된 내용:
          </p>
          {loading ? (
            <div className="flex items-center gap-2 text-gray-500">
              <svg
                className="animate-spin h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span className="text-sm">번역 중...</span>
            </div>
          ) : translation ? (
            <p className="text-base text-blue-600 bg-blue-50 px-2 py-1 rounded">
              {translation}
            </p>
          ) : (
            <p className="text-sm text-red-500">번역 실패</p>
          )}
        </div>
      </div>
    </div>
  );
}
