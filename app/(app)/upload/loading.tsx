import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center text-center">
      <Loader2 className="mb-4 h-8 w-8 animate-spin text-gray-500" />
      <p className="text-sm text-gray-500">
        요약 중입니다... 잠시만 기다려주세요 ⏳
      </p>
    </div>
  );
}
