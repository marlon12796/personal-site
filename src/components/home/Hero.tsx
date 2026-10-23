"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export const Hero = () => {
  const t = useTranslations("home");

  return (
    <section className="relative w-full max-w-screen-xl mx-auto px-4 pt-12 pb-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]">
              {t("heroRole")}
            </span>{" "}
            <span className="text-white">{t("heroHeadline")}</span>
          </h1>

          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
            {t("heroSub")}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="px-7 py-3.5 rounded-xl font-semibold bg-cyan-400 text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.45)] hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] transition-all flex items-center gap-2"
            >
              <span>{t("viewPortfolio")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl font-semibold border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-md transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-slate-300" />
              <span>{t("contactMe")}</span>
            </Link>
          </div>
        </div>

        {/* Right Column: 3D Laptop with Ambient Glow */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          {/* Ambient light blooms */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-emerald-500/25 rounded-full blur-[80px] -top-10 -right-4 pointer-events-none" />
          <div className="absolute w-64 h-64 bg-cyan-500/20 rounded-full blur-[70px] -bottom-6 -left-6 pointer-events-none" />

          <div className="relative z-10 w-full max-w-[420px] transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/hero-laptop.png"
              alt="Marlon Developer Setup & Cloud Architecture"
              width={520}
              height={520}
              priority
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
