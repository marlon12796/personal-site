"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const technologies = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Tailwind CSS",
];

export const ExperienceAndStack = () => {
  const t = useTranslations("home");

  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-8 sm:py-12">
      <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d1729] via-[#0a1220] to-[#07101c] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_260px] lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                {t("experienceTitle")}
              </span>
            </div>

            <div className="mb-2 flex flex-wrap items-center gap-2">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {t("cearTitle")}
              </h2>
              <CheckCircle2 className="h-5 w-5 shrink-0 fill-cyan-400/20 text-cyan-300" aria-label="Experiencia verificada" />
            </div>

            <p className="mb-7 font-mono text-sm text-slate-400">{t("cearPeriod")}</p>

            <ul className="grid gap-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              {["cearBullet1", "cearBullet2", "cearBullet3"].map((key) => (
                <li className="flex items-start gap-3" key={key}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-5">
              {technologies.map((technology) => (
                <span
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-300/40 hover:text-white"
                  key={technology}
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-52 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <div className="absolute inset-5 rounded-xl border border-cyan-300/10" />
            <Image
              src="/logo-white.webp"
              alt="CEAR Latinoamericano"
              width={220}
              height={132}
              className="relative h-auto w-full max-w-[190px] object-contain opacity-95"
            />
          </div>
        </div>
      </article>
    </section>
  );
};
