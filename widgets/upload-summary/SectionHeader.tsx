export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[20px] font-bold">{title}</span>
    </div>
  );
}
