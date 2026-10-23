"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { MenuButton } from "@/components/navbar/MenuButton";
import NavbarMenu from "@/components/navbar/NavbarMenu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((menuOpen) => !menuOpen);
  return (
    <header className="sticky top-0 z-[500] w-full px-4 py-4">
      <nav
        className={cn(
          `max-w-screen-xl mx-auto px-6 py-3 rounded-full border border-white/10 bg-[#0b1120]/75 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex items-center justify-between transition-all`,
          {
            "rounded-2xl": isMenuOpen,
          },
        )}
      >
        <Link
          href="/"
          className="text-white font-bold text-xl tracking-tight flex items-center gap-1.5 group"
        >
          <span>Marlon.Dev</span>
          <span className="text-emerald-400 font-mono group-hover:text-cyan-400 transition-colors">
            &gt;_
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <NavbarMenu isMenuOpen={isMenuOpen} />
          <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
      </nav>
    </header>
  );
};
