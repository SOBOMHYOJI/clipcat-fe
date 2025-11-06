import UploadSummaryLayout from "@/widgets/upload-summary/UploadSummaryLayout";

export default function UploadPage() {
  // 서버 컴포넌트에서도 SessionStorage는 직접 못 쓰므로
  // 요약 내용은 클라이언트 컴포넌트에서 읽어 렌더 or
  // 서버 API에서 가져오도록 구성
  return <UploadSummaryLayout />;
}
