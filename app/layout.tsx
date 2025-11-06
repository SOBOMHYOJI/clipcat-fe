import "@/shared/styles/blink.css";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/widgets/header/Header";
export const metadata: Metadata = { title: "Mascot Demo" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-bg text-fg">
        <Header />
        <main className="pt-40">{children}</main>
      </body>
    </html>
  );
}
