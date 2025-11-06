export async function sendChatMessage(message: string, lang: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_UFL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, lang }),
  });

  if (!res.ok) {
    throw new Error(`Chat API Error: ${res.statusText}`);
  }

  const data = await res.json();

  return {
    reply: data.korean_response ?? "응답이 없습니다.",
    translation: data.translated_response ?? "",
  };
}
