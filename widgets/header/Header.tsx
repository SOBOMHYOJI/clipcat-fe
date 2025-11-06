"use client";
import Link from "next/link";
import Logo from "@/shared/ui/Logo/Logo";
import NavTabs from "@/features/nav-tabs/ui/NavTabs";
import LanguageSwitcher from "@/features/language-switcher/ui/LanguageSwitcher";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface text-on">
      <div className="mx-auto max-w-[1200px] px-7">
        <div className="h-20 flex items-center justify-between">
          <Link href="/" aria-label="홈으로 이동">
            <Logo />
          </Link>
          <NavTabs />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
