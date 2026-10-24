import React from "react";

interface TechItem {
  name: string;
  role?: string;
  color: string;
  border: string;
  bg: string;
  icon: React.ReactNode;
}

interface TechCategory {
  title: string;
  categoryBadge: string;
  accent: string;
  items: TechItem[];
}

const CATEGORIES: TechCategory[] = [
  {
    title: "Frontend & UI",
    categoryBadge: "Client Layer",
    accent: "text-teal-400 border-teal-400/30 bg-teal-400/10",
    items: [
      {
        name: "Next.js",
        role: "App Router / SSR",
        color: "#ffffff",
        border: "border-white/15",
        bg: "bg-white/[0.03]",
        icon: (
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 180 180" fill="none">
            <circle cx="90" cy="90" r="90" fill="black" />
            <path
              d="M149.5 157.5L69.1 54H54v72h12.1V69.4l73.9 95.4c3.3-2.2 6.5-4.7 9.5-7.3z"
              fill="white"
            />
            <rect x="115" y="54" width="12" height="72" fill="white" />
          </svg>
        ),
      },
      {
        name: "TypeScript",
        role: "Tipado Estricto",
        color: "#3178C6",
        border: "border-sky-500/20",
        bg: "bg-sky-500/[0.04]",
        icon: (
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 128 128">
            <rect width="128" height="128" rx="16" fill="#3178C6" />
            <path
              d="M66.4 78.4c2.8 4.4 7.2 7.2 13.2 7.2 6.8 0 10.4-3.6 10.4-8.8 0-6-4.8-8-12-10.8-10.4-4-17.6-9.6-17.6-21.2 0-11.6 9.2-20.4 22.8-20.4 8.8 0 15.6 3.2 19.6 9.6l-8.4 5.6c-2.4-4-6-6-11.2-6-6.4 0-9.6 3.2-9.6 7.6 0 4.8 4 6.8 11.2 9.6 12 4.8 18.4 10.4 18.4 22.8 0 13.6-10.4 21.6-24.8 21.6-11.2 0-19.2-4.4-23.6-11.6l11.6-5.2zM21.6 38.8h37.6v12.8H46.8v62H32.4v-62H21.6V38.8z"
              fill="#FFFFFF"
            />
          </svg>
        ),
      },
      {
        name: "TanStack Query",
        role: "Caché & Async State",
        color: "#FF4154",
        border: "border-rose-500/20",
        bg: "bg-rose-500/[0.04]",
        icon: (
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 256 256" fill="none">
            <circle cx="128" cy="128" r="120" fill="#1C1C1E" stroke="#FF4154" strokeWidth="14" />
            <path
              d="M74 128C74 98.2 98.2 74 128 74s54 24.2 54 54-24.2 54-54 54"
              stroke="#FF4154"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <circle cx="128" cy="128" r="22" fill="#FFD000" />
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        role: "Diseño & Accesibilidad",
        color: "#06B6D4",
        border: "border-cyan-500/20",
        bg: "bg-cyan-500/[0.04]",
        icon: (
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 256 154" fill="none">
            <path
              d="M128 0C93.9 0 72.5 17.1 64 51.3c12.8-17.1 27.7-23.5 44.8-19.2 9.8 2.5 16.8 9.6 24.5 17.5 12.6 12.8 27.2 27.7 58.7 27.7 34.1 0 55.5-17.1 64-51.3-12.8 17.1-27.7 23.5-44.8 19.2-9.8-2.5-16.8-9.6-24.5-17.5C174.1 14.9 159.5 0 128 0z"
              fill="#06B6D4"
            />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Backend & Datos",
    categoryBadge: "Server & Core",
    accent: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    items: [
      {
        name: "NestJS",
        role: "Arquitectura Modular",
        color: "#E0234E",
        border: "border-red-500/20",
        bg: "bg-red-500/[0.04]",
        icon: (
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 256 256" fill="none">
            <path
              d="M109.8 16.4C80.2 28.6 63.8 55.4 69.2 86.8c1.6 9.4 6.2 20.8 11.4 28.2l3.4 4.8-6.2 3.8C59.6 135 50.4 153.2 50 178.6c-.4 24.6 9.6 45 28.8 59 13.4 9.8 29.8 15.8 47.6 17.6 17.2 1.8 35.8-1.8 51.6-9.8 20.8-10.6 36.4-28.6 44-50.6 3.6-10.6 4.8-21.2 3.6-32.8-.8-7.8-3.4-17-6.2-22.6l-3.2-6.2 6-4.6c11.6-9 19.4-21.6 23-37.4 3-13.4 1.2-28.2-5-40.4-8.8-17.4-24.4-29.4-44.6-34.6-16.2-4.2-34-2.8-49.4 4.4l-4.4 2.2-4.4-2.4c-9.6-5.2-20.6-7.8-31.6-7.8-6 0-12 .8-17.4 2.8z"
              fill="#E0234E"
            />
          </svg>
        ),
      },
      {
        name: "Node.js",
        role: "Runtime API REST",
        color: "#68A063",
        border: "border-emerald-500/20",
        bg: "bg-emerald-500/[0.04]",
        icon: (
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 256 289" fill="none">
            <path d="M128 0L8.7 68.9V206.8L128 275.7L247.3 206.8V68.9L128 0Z" fill="#333" />
            <path d="M128 17.5L232.1 77.6V197.9L128 258L23.9 197.9V77.6L128 17.5Z" fill="#68A063" />
            <path d="M128 66L176 94V150L128 178L80 150V94L128 66Z" fill="#fff" />
          </svg>
        ),
      },
      {
        name: "PostgreSQL",
        role: "Pool & Índices ACID",
        color: "#4169E1",
        border: "border-indigo-500/20",
        bg: "bg-indigo-500/[0.04]",
        icon: (
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 512 512">
            <path
              d="M256 16C123.5 16 16 123.5 16 256s107.5 240 240 240 240-107.5 240-240S388.5 16 256 16zm-17.5 98.8c42.8 0 77.5 34.7 77.5 77.5 0 24.3-11.2 46-28.7 60.2 24.4 12.3 41.2 37.5 41.2 66.8 0 41.4-33.6 75-75 75-18.4 0-35.3-6.6-48.4-17.7-13.6 10.9-30.8 17.7-49.6 17.7-42.8 0-77.5-34.7-77.5-77.5 0-25.2 12-47.5 30.6-61.7-22.9-13.2-38.6-38-38.6-66.3 0-42.8 34.7-77.5 77.5-77.5 16.5 0 31.9 5.2 44.5 14 12.8-8.8 28.5-14 46.5-14z"
              fill="#4169E1"
            />
            <circle cx="210" cy="200" r="16" fill="#fff" />
            <circle cx="300" cy="200" r="16" fill="#fff" />
          </svg>
        ),
      },
      {
        name: "Redis",
        role: "Caché de Picos",
        color: "#DC382D",
        border: "border-rose-600/20",
        bg: "bg-rose-600/[0.04]",
        icon: (
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 256 220" fill="none">
            <path
              d="M253.2 68.2L132.8 4.2C130-1.4 123.6-1.4 120.8 4.2L.4 68.2C-1.2 71 1.6 74.2 4.4 75.8l120.4 64c2.8 1.4 6.8 1.4 9.6 0l120.4-64c2.8-1.6 5.6-4.8 4-7.6z"
              fill="#DC382D"
            />
            <path
              d="M253.2 110.2L132.8 174.2c-2.8 1.4-6.8 1.4-9.6 0L2.8 110.2c-2.8-1.6-4-4.8-2.4-7.6 1.6-2.8 4.8-4 7.6-2.4l117.6 62.4c2.8 1.4 6.8 1.4 9.6 0l117.6-62.4c2.8-1.6 6-.4 7.6 2.4 1.6 2.8.4 6-2.4 7.6z"
              fill="#A41E11"
            />
          </svg>
        ),
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    categoryBadge: "Infra & Fintech",
    accent: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    items: [
      {
        name: "Docker",
        role: "Contenedores VPS",
        color: "#2496ED",
        border: "border-blue-500/20",
        bg: "bg-blue-500/[0.04]",
        icon: (
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 256 256" fill="none">
            <path
              d="M247.6 112.4c-4.8-3.4-15.6-5.4-23.6-2.4-2.8-18.4-16.6-32.8-33.8-32.8-1.8 0-3.6.2-5.4.6-9.6-13.8-25.2-22.8-42.8-22.8-1.2 0-2.4 0-3.6.2V42c0-4.4-3.6-8-8-8h-24c-4.4 0-8 3.6-8 8v16.2c-1.4.2-2.8.4-4.2.8V42c0-4.4-3.6-8-8-8H62c-4.4 0-8 3.6-8 8v24.6C23.6 80.2 0 106.8 0 139.4c0 37.6 30.6 68.2 68.2 68.2 38.6 0 74.4-14.2 101.4-38.6 35.8-5.4 68.4-27.4 83.2-61.2 2-4.6-.4-10-5.2-12.4v-3z"
              fill="#2496ED"
            />
            <rect x="74" y="90" width="18" height="18" rx="2" fill="#fff" />
            <rect x="98" y="90" width="18" height="18" rx="2" fill="#fff" />
            <rect x="122" y="90" width="18" height="18" rx="2" fill="#fff" />
          </svg>
        ),
      },
      {
        name: "Niubiz API",
        role: "Pasarela Pagos Online",
        color: "#0072CE",
        border: "border-sky-600/20",
        bg: "bg-sky-600/[0.04]",
        icon: (
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#0072CE" strokeWidth="2">
            <rect x="2" y="5" width="20" height="14" rx="3" stroke="#0072CE" fill="#0072CE" fillOpacity="0.2" />
            <line x1="2" y1="10" x2="22" y2="10" stroke="#0072CE" />
            <circle cx="6.5" cy="14.5" r="1.5" fill="#FF5F00" stroke="none" />
            <circle cx="10" cy="14.5" r="1.5" fill="#EB001B" stroke="none" />
          </svg>
        ),
      },
      {
        name: "AWS S3",
        role: "Almacenamiento PDFs",
        color: "#E7157B",
        border: "border-pink-500/20",
        bg: "bg-pink-500/[0.04]",
        icon: (
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 256 256" fill="none">
            <rect width="256" height="256" rx="32" fill="#E7157B" fillOpacity="0.15" />
            <path d="M60 90L128 50L196 90L128 130L60 90Z" fill="#E7157B" />
            <path
              d="M60 125L128 165L196 125M60 160L128 200L196 160"
              stroke="#E7157B"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
      {
        name: "VPS On-Premise",
        role: "Streaming & Soberanía",
        color: "#10B981",
        border: "border-emerald-500/20",
        bg: "bg-emerald-500/[0.04]",
        icon: (
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
            <rect x="2" y="2" width="20" height="8" rx="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
            <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
          </svg>
        ),
      },
    ],
  },
];

export const TechStackGrid: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="grid md:grid-cols-3 gap-4">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.title}
            className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors"
          >
            {/* Header de Categoría */}
            <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/5">
              <span className="text-sm font-bold text-white tracking-wide">
                {cat.title}
              </span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium border ${cat.accent}`}
              >
                {cat.categoryBadge}
              </span>
            </div>

            {/* Lista estática limpia y sin mareos */}
            <div className="grid grid-cols-2 gap-2">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className={`flex items-center gap-2 p-2 rounded-xl border ${item.border} ${item.bg} hover:border-teal-400/40 hover:bg-white/[0.06] transition-all group`}
                >
                  <div className="shrink-0">{item.icon}</div>
                  <div className="min-w-0 flex flex-col">
                    <span className="text-xs font-semibold text-white truncate leading-tight group-hover:text-teal-300 transition-colors">
                      {item.name}
                    </span>
                    {item.role && (
                      <span className="text-[9px] font-mono text-slate-400 truncate leading-tight">
                        {item.role}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
