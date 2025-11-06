export default function TranslationBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-[#b7e8c3] bg-[#eaf9ef] px-4 py-3 text-[#3fa45a] leading-7">
      {children}
    </div>
  );
}
