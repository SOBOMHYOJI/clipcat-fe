import "@/shared/styles/blink.css";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/widgets/header/Header";
export const metadata: Metadata = {
  title: "clipcat",
  description: "다문화 가정 학부모 언어 장벽 해소 서비스",
  icons: {
    icon: "/favicon.ico",
  },
};

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
