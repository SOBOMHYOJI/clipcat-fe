export default function MessageBubble({
  role,
  children,
}: {
  role: "user" | "assistant";
  children: React.ReactNode;
}) {
  const isUser = role === "user";
  return (
    <div
      className={[
        "rounded-2xl px-4 py-3 leading-7",
        "shadow-[0_1px_0_rgba(0,0,0,0.04)]",
        isUser
          ? "bg-[#111827] text-white"
          : "bg-white text-gray-800 border border-gray-200",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
