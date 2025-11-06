import { DocumentSummary } from "@/entities/mascot/document/model/types";
export default function SummaryCard({
  data,
}: {
  data: DocumentSummary | null;
}) {
  return (
    <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
      <div className="h-[420px] overflow-y-auto leading-7">
        {data ? (
          <>
            <p className="font-semibold mb-3">제목: {data.title}</p>
            <pre className="whitespace-pre-wrap">{data.body}</pre>
          </>
        ) : (
          <p className="text-gray-500">요약을 불러오는 중…</p>
        )}
      </div>
    </div>
  );
}
