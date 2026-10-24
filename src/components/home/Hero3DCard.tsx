"use client";

import { useRef, useEffect } from "react";

const CODE_LINES = [
  { keyword: "const", name: " app ", op: "=", rest: " new Application();" },
  { keyword: "await", name: " app", op: ".", rest: "bootstrap();" },
  { keyword: "app", name: "", op: ".", rest: "use(authMiddleware);" },
  {
    keyword: "const",
    name: " db ",
    op: "=",
    rest: " await connectPostgres();",
  },
  { keyword: "app", name: "", op: ".", rest: 'deploy({ cloud: "AWS" });' },
];

const METRICS = [
  { label: "Uptime", value: "99.9%", color: "#34d399" },
  { label: "Req/s", value: "4.2k", color: "#22d3ee" },
  { label: "Latency", value: "12ms", color: "#a78bfa" },
];

export const Hero3DCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let targetX = 0,
      targetY = 0,
      currentX = 0,
      currentY = 0;

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      targetX = ((e.clientY - cy) / rect.height) * 16;
      targetY = -((e.clientX - cx) / rect.width) * 16;
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      card.style.transform = `perspective(900px) rotateX(${currentX}deg) rotateY(${currentY}deg)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ willChange: "transform", transformStyle: "preserve-3d" }}
      className="relative w-full max-w-115"
    >
      {/* Floating badge outside overflow-hidden */}
      <div
        className="absolute -top-3.5 -right-3.5 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 border border-white/20 shadow-[0_0_25px_rgba(139,92,246,0.6)] backdrop-blur-md"
        style={{ transform: "translateZ(30px)" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        Full-Stack
      </div>

      {/* Main card body with overflow-hidden for rounded borders and sheen */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#080e1c]/90 shadow-[0_0_60px_rgba(34,211,238,0.12),0_30px_80px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        {/* Top accent line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />

        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-3 text-xs text-slate-500 font-mono">
            app.ts — marlon-dev
          </span>
        </div>

        {/* Code body */}
        <div className="px-5 py-5 font-mono text-sm leading-7 space-y-0.5">
          {CODE_LINES.map((line, i) => (
            <div key={i} className="flex items-center gap-1">
              <span className="text-slate-600 text-xs w-4 text-right select-none">
                {i + 1}
              </span>
              <span className="ml-3">
                <span className="text-violet-400">{line.keyword}</span>
                <span className="text-cyan-300">{line.name}</span>
                <span className="text-slate-400">{line.op}</span>
                <span className="text-slate-300">{line.rest}</span>
              </span>
            </div>
          ))}
          <div className="flex items-center gap-1 mt-1">
            <span className="text-slate-600 text-xs w-4 text-right select-none">
              6
            </span>
            <span className="ml-3 inline-block w-2 h-4 bg-cyan-400 animate-pulse rounded-sm" />
          </div>
        </div>

        {/* Metrics bar */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-white/5 bg-white/[0.015]">
          {METRICS.map((m) => (
            <div key={m.label} className="flex flex-col items-center">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest">
                {m.label}
              </span>
              <span
                className="text-sm font-bold mt-0.5"
                style={{ color: m.color, textShadow: `0 0 12px ${m.color}` }}
              >
                {m.value}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-widest">
              Live
            </span>
          </div>
        </div>

        {/* Glass sheen */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />
      </div>
    </div>
  );
};
