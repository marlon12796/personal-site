"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight, Mail, Zap, Globe, Shield, ChevronDown } from "lucide-react";
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
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 pt-16 pb-28 sm:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
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

      {/* ── Mouse Scroll indicator ── */}
      <motion.a
        href="#experience"
        className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 cursor-pointer group"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        title="Desplazarse hacia abajo"
        aria-label="Scroll down to experience"
      >
        {/* Mouse outline */}
        <div className="w-5 h-8 sm:w-6 sm:h-9 rounded-full border-2 border-cyan-400/40 bg-slate-950/70 p-1 flex justify-center group-hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.45)] transition-all">
          {/* Animated mouse wheel */}
          <motion.div
            className="w-1 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.9)]"
            animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
        </div>

        {/* Text & animated chevron */}
        <div className="flex items-center gap-1 text-[10px] font-mono tracking-[0.2em] uppercase text-slate-400 group-hover:text-cyan-300 transition-colors">
          <span>scroll</span>
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-3 h-3 text-cyan-400/80 group-hover:text-cyan-300 transition-colors" />
          </motion.div>
        </div>
      </motion.a>
    </section>
  );
};
