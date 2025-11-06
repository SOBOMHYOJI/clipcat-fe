"use client";
import { useEffect, useState } from "react";
import BlinkingMascot from "@/entities/mascot/ui/BlinkingMascot";
import SectionHeader from "./SectionHeader";
import SummaryCard from "./SummaryCard";
import { DocumentSummary } from "@/entities/mascot/document/model/types";
export default function UploadSummaryLayout() {
  const [data, setData] = useState<DocumentSummary | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("summary");
    if (raw) {
      queueMicrotask(() => {
        setData(JSON.parse(raw));
      });
    }
  }, []);

  return (
    <section className="mx-auto max-w-[1120px] px-6 py-10">
      <SectionHeader title="요약 결과" />
      <div className="mt-4 grid gap-6 md:grid-cols-[1fr_280px] md:items-start">
        <SummaryCard data={data} />
        <div className="relative md:h-[500px]">
          <BlinkingMascot
            width={220}
            className="md:absolute md:right-0 md:bottom-[-8px]"
          />
        </div>
      </div>
    </section>
  );
}
