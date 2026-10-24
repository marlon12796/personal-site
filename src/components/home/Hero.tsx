"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight, Mail, Zap, Globe, Shield } from "lucide-react";
import {
  motion,
  type Transition,
  type TargetAndTransition,
} from "framer-motion";
import { Hero3DCard } from "./Hero3DCard";

const PILLS = [
  { icon: Zap, label: "Alto rendimiento" },
  { icon: Globe, label: "Fullstack & Cloud" },
  { icon: Shield, label: "Código de calidad" },
];

const fadeUp = (
  delay = 0,
): {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  transition: Transition;
} => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export const Hero = () => {
  const t = useTranslations("home");

  return (
    <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden">
      {/* ── Animated background grid ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,1) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* ── Background orbs ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[640px] h-[640px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[110px]" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: text block */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Eyebrow badge */}
          <motion.div
            {...fadeUp(0)}
            className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/5 backdrop-blur-sm text-cyan-400 text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Disponible para proyectos
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.4rem] font-extrabold tracking-tight leading-[1.08] mb-6"
          >
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #22d3ee 0%, #a78bfa 60%, #34d399 100%)",
              }}
            >
              {t("heroRole")}
            </span>
            <span className="block text-white mt-1">{t("heroHeadline")}</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
          >
            {t("heroSub")}
          </motion.p>

          {/* Pills */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-2 mb-10">
            {PILLS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-slate-300 border border-white/8 bg-white/5 backdrop-blur-sm"
              >
                <Icon className="w-3.5 h-3.5 text-cyan-400" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="#projects"
              className="group px-7 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_45px_rgba(34,211,238,0.65)] hover:scale-[1.03] transition-all duration-300 flex items-center gap-2"
            >
              <span>{t("viewPortfolio")}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl font-semibold border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-md hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-slate-300" />
              <span>{t("contactMe")}</span>
            </Link>
          </motion.div>
        </div>

        {/* Right: 3D tilt card */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center"
          initial={{ opacity: 0, x: 50, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        >
          {/* Glow behind card */}
          <div className="absolute w-80 h-80 bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute w-64 h-64 bg-violet-500/10 rounded-full blur-[70px] pointer-events-none translate-x-16 translate-y-12" />

          <Hero3DCard />
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-slate-600/50 animate-pulse" />
        <span className="text-xs tracking-widest uppercase">scroll</span>
      </motion.div>
    </section>
  );
};
