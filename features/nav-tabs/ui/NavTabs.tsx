"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { key: "upload", label: "파일 업로드", href: "/upload" },
  { key: "ai", label: "AI 상담", href: "/ai" },
] as const;

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <nav className="relative">
      <ul className="flex gap-10">
        {TABS.map((t) => {
          const active =
            pathname === t.href || pathname.startsWith(`${t.href}/`);
          return (
            <li key={t.key}>
              <Link
                href={t.href}
                className={`relative pb-1 text-lg transition-colors ${
                  active ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {t.label}
                <span
                  className={`absolute left-0 -bottom-[4px] h-[2px] bg-white transition-all ${
                    active ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
