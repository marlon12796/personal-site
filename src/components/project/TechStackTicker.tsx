"use client";

import React from "react";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
  category: string;
  color: string;
  borderColor: string;
  bgColor: string;
  icon: React.ReactNode;
}

const TECH_ITEMS: TechItem[] = [
  {
    name: "Next.js",
    category: "Fullstack Framework",
    color: "#ffffff",
    borderColor: "rgba(255, 255, 255, 0.25)",
    bgColor: "rgba(255, 255, 255, 0.05)",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 180 180" fill="none">
        <mask
          id="mask0_next"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="180"
          height="180"
          style={{ maskType: "alpha" }}
        >
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#mask0_next)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path
            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
            fill="url(#paint0_linear_next)"
          />
          <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_next)" />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_next"
            x1="109"
            y1="116.5"
            x2="144.5"
            y2="160.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_next"
            x1="121"
            y1="54"
            x2="120.799"
            y2="106.875"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Typed Language",
    color: "#3178C6",
    borderColor: "rgba(49, 120, 198, 0.4)",
    bgColor: "rgba(49, 120, 198, 0.08)",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="16" fill="#3178C6" />
        <path
          d="M66.4 78.4c2.8 4.4 7.2 7.2 13.2 7.2 6.8 0 10.4-3.6 10.4-8.8 0-6-4.8-8-12-10.8-10.4-4-17.6-9.6-17.6-21.2 0-11.6 9.2-20.4 22.8-20.4 8.8 0 15.6 3.2 19.6 9.6l-8.4 5.6c-2.4-4-6-6-11.2-6-6.4 0-9.6 3.2-9.6 7.6 0 4.8 4 6.8 11.2 9.6 12 4.8 18.4 10.4 18.4 22.8 0 13.6-10.4 21.6-24.8 21.6-11.2 0-19.2-4.4-23.6-11.6l11.6-5.2zM21.6 38.8h37.6v12.8H46.8v62H32.4v-62H21.6V38.8z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: "NestJS",
    category: "Enterprise Backend",
    color: "#E0234E",
    borderColor: "rgba(224, 35, 78, 0.4)",
    bgColor: "rgba(224, 35, 78, 0.08)",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 256 256" fill="none">
        <path
          d="M109.8 16.4C80.2 28.6 63.8 55.4 69.2 86.8c1.6 9.4 6.2 20.8 11.4 28.2l3.4 4.8-6.2 3.8C59.6 135 50.4 153.2 50 178.6c-.4 24.6 9.6 45 28.8 59 13.4 9.8 29.8 15.8 47.6 17.6 17.2 1.8 35.8-1.8 51.6-9.8 20.8-10.6 36.4-28.6 44-50.6 3.6-10.6 4.8-21.2 3.6-32.8-.8-7.8-3.4-17-6.2-22.6l-3.2-6.2 6-4.6c11.6-9 19.4-21.6 23-37.4 3-13.4 1.2-28.2-5-40.4-8.8-17.4-24.4-29.4-44.6-34.6-16.2-4.2-34-2.8-49.4 4.4l-4.4 2.2-4.4-2.4c-9.6-5.2-20.6-7.8-31.6-7.8-6 0-12 .8-17.4 2.8z"
          fill="#E0234E"
        />
        <path
          d="M129.8 77.2c-5.8 11.2-12.8 22-20.8 31.8-6 7.4-12.8 14-20 20l-4.6 3.8 6.4.8c15.8 2 30.6 8.2 42.4 18 10.6 8.8 18 20.4 21.6 33.6l1.4 5.2 2.8-4.4c8.8-13.8 13.8-29.6 14.6-45.8.6-11-1.4-22.4-6-32.6-6-13.2-16.2-24.2-28.8-31.2l-4.8-2.6-4.2 3.4z"
          fill="#ffffff"
          opacity="0.85"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "Runtime Environment",
    color: "#68A063",
    borderColor: "rgba(104, 160, 99, 0.4)",
    bgColor: "rgba(104, 160, 99, 0.08)",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 256 289" fill="none">
        <path
          d="M128 0L8.7 68.9V206.8L128 275.7L247.3 206.8V68.9L128 0Z"
          fill="#333333"
        />
        <path
          d="M128 17.5L232.1 77.6V197.9L128 258L23.9 197.9V77.6L128 17.5Z"
          fill="#68A063"
        />
        <path
          d="M128 66L176 94V150L128 178L80 150V94L128 66Z"
          fill="#ffffff"
        />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    category: "Relational DB (ACID)",
    color: "#4169E1",
    borderColor: "rgba(65, 105, 225, 0.4)",
    bgColor: "rgba(65, 105, 225, 0.08)",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 512 512">
        <path
          d="M256 16C123.5 16 16 123.5 16 256s107.5 240 240 240 240-107.5 240-240S388.5 16 256 16zm-17.5 98.8c42.8 0 77.5 34.7 77.5 77.5 0 24.3-11.2 46-28.7 60.2 24.4 12.3 41.2 37.5 41.2 66.8 0 41.4-33.6 75-75 75-18.4 0-35.3-6.6-48.4-17.7-13.6 10.9-30.8 17.7-49.6 17.7-42.8 0-77.5-34.7-77.5-77.5 0-25.2 12-47.5 30.6-61.7-22.9-13.2-38.6-38-38.6-66.3 0-42.8 34.7-77.5 77.5-77.5 16.5 0 31.9 5.2 44.5 14 12.8-8.8 28.5-14 46.5-14z"
          fill="#4169E1"
        />
        <circle cx="210" cy="200" r="16" fill="#ffffff" />
        <circle cx="300" cy="200" r="16" fill="#ffffff" />
      </svg>
    ),
  },
  {
    name: "Redis",
    category: "In-Memory Cache",
    color: "#DC382D",
    borderColor: "rgba(220, 56, 45, 0.4)",
    bgColor: "rgba(220, 56, 45, 0.08)",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 256 220" fill="none">
        <path
          d="M253.2 68.2L132.8 4.2C130-1.4 123.6-1.4 120.8 4.2L.4 68.2C-1.2 71 1.6 74.2 4.4 75.8l120.4 64c2.8 1.4 6.8 1.4 9.6 0l120.4-64c2.8-1.6 5.6-4.8 4-7.6z"
          fill="#DC382D"
        />
        <path
          d="M253.2 110.2L132.8 174.2c-2.8 1.4-6.8 1.4-9.6 0L2.8 110.2c-2.8-1.6-4-4.8-2.4-7.6 1.6-2.8 4.8-4 7.6-2.4l117.6 62.4c2.8 1.4 6.8 1.4 9.6 0l117.6-62.4c2.8-1.6 6-.4 7.6 2.4 1.6 2.8.4 6-2.4 7.6z"
          fill="#A41E11"
        />
        <path
          d="M253.2 152.2L132.8 216.2c-2.8 1.4-6.8 1.4-9.6 0L2.8 152.2c-2.8-1.6-4-4.8-2.4-7.6 1.6-2.8 4.8-4 7.6-2.4l117.6 62.4c2.8 1.4 6.8 1.4 9.6 0l117.6-62.4c2.8-1.6 6-.4 7.6 2.4 1.6 2.8.4 6-2.4 7.6z"
          fill="#821308"
        />
      </svg>
    ),
  },
  {
    name: "TanStack Query",
    category: "Async State & Cache",
    color: "#FF4154",
    borderColor: "rgba(255, 65, 84, 0.4)",
    bgColor: "rgba(255, 65, 84, 0.08)",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 256 256" fill="none">
        <circle cx="128" cy="128" r="120" fill="#1C1C1E" stroke="#FF4154" strokeWidth="12" />
        <path
          d="M74 128C74 98.1766 98.1766 74 128 74C157.823 74 182 98.1766 182 128C182 157.823 157.823 182 128 182"
          stroke="#FF4154"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <circle cx="128" cy="128" r="22" fill="#FFD000" />
      </svg>
    ),
  },
  {
    name: "Niubiz API",
    category: "Fintech & Payments",
    color: "#0072CE",
    borderColor: "rgba(0, 114, 206, 0.4)",
    bgColor: "rgba(0, 114, 206, 0.08)",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#0072CE" strokeWidth="2">
        <rect x="2" y="5" width="20" height="14" rx="3" stroke="#0072CE" fill="#0072CE" fillOpacity="0.2" />
        <line x1="2" y1="10" x2="22" y2="10" stroke="#0072CE" />
        <circle cx="6.5" cy="14.5" r="1.5" fill="#FF5F00" stroke="none" />
        <circle cx="10" cy="14.5" r="1.5" fill="#EB001B" stroke="none" />
      </svg>
    ),
  },
  {
    name: "AWS S3",
    category: "Object Storage Cloud",
    color: "#E7157B",
    borderColor: "rgba(231, 21, 123, 0.4)",
    bgColor: "rgba(231, 21, 123, 0.08)",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 256 256" fill="none">
        <rect width="256" height="256" rx="32" fill="#E7157B" fillOpacity="0.15" />
        <path
          d="M60 90L128 50L196 90L128 130L60 90Z"
          fill="#E7157B"
        />
        <path
          d="M60 125L128 165L196 125M60 160L128 200L196 160"
          stroke="#E7157B"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Docker",
    category: "Containers (On-Prem)",
    color: "#2496ED",
    borderColor: "rgba(36, 150, 237, 0.4)",
    bgColor: "rgba(36, 150, 237, 0.08)",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 256 256" fill="none">
        <path
          d="M247.6 112.4c-4.8-3.4-15.6-5.4-23.6-2.4-2.8-18.4-16.6-32.8-33.8-32.8-1.8 0-3.6.2-5.4.6-9.6-13.8-25.2-22.8-42.8-22.8-1.2 0-2.4 0-3.6.2V42c0-4.4-3.6-8-8-8h-24c-4.4 0-8 3.6-8 8v16.2c-1.4.2-2.8.4-4.2.8V42c0-4.4-3.6-8-8-8H62c-4.4 0-8 3.6-8 8v24.6C23.6 80.2 0 106.8 0 139.4c0 37.6 30.6 68.2 68.2 68.2 38.6 0 74.4-14.2 101.4-38.6 35.8-5.4 68.4-27.4 83.2-61.2 2-4.6-.4-10-5.2-12.4v-3z"
          fill="#2496ED"
        />
        <rect x="74" y="90" width="18" height="18" rx="2" fill="#ffffff" />
        <rect x="98" y="90" width="18" height="18" rx="2" fill="#ffffff" />
        <rect x="122" y="90" width="18" height="18" rx="2" fill="#ffffff" />
        <rect x="98" y="66" width="18" height="18" rx="2" fill="#ffffff" />
        <rect x="122" y="66" width="18" height="18" rx="2" fill="#ffffff" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Utility-First CSS",
    color: "#06B6D4",
    borderColor: "rgba(6, 182, 212, 0.4)",
    bgColor: "rgba(6, 182, 212, 0.08)",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 256 154" fill="none">
        <path
          d="M128 0C93.9 0 72.5 17.1 64 51.3c12.8-17.1 27.7-23.5 44.8-19.2 9.8 2.5 16.8 9.6 24.5 17.5 12.6 12.8 27.2 27.7 58.7 27.7 34.1 0 55.5-17.1 64-51.3-12.8 17.1-27.7 23.5-44.8 19.2-9.8-2.5-16.8-9.6-24.5-17.5C174.1 14.9 159.5 0 128 0zM64 77.3C29.9 77.3 8.5 94.4 0 128.7c12.8-17.1 27.7-23.5 44.8-19.2 9.8 2.5 16.8 9.6 24.5 17.5 12.6 12.8 27.2 27.7 58.7 27.7 34.1 0 55.5-17.1 64-51.3-12.8 17.1-27.7 23.5-44.8 19.2-9.8-2.5-16.8-9.6-24.5-17.5C110.1 92.2 95.5 77.3 64 77.3z"
          fill="#06B6D4"
        />
      </svg>
    ),
  },
];

export const TechStackTicker: React.FC<{
  className?: string;
  speedSeconds?: number;
}> = ({ className = "", speedSeconds = 28 }) => {
  // Duplicamos la lista para un desplazamiento infinito continuo sin saltos
  const doubleTech = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Máscaras de desvanecimiento lateral para estilo cyber/cinemático */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#070c16] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#070c16] to-transparent z-10" />

      {/* Marquee en movimiento infinito */}
      <motion.div
        className="flex items-center gap-3 w-max py-2"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speedSeconds,
        }}
        whileHover={{
          transition: { duration: 99999 }, // Pausa al hacer hover para interactuar
        }}
      >
        {doubleTech.map((item, idx) => (
          <motion.div
            key={`${item.name}-${idx}`}
            whileHover={{
              scale: 1.06,
              y: -2,
            }}
            transition={{ duration: 0.2 }}
            style={{
              borderColor: item.borderColor,
              backgroundColor: item.bgColor,
            }}
            className="group flex items-center gap-2.5 px-3.5 py-2 rounded-xl border backdrop-blur-md shadow-sm hover:shadow-[0_0_15px_rgba(45,212,191,0.25)] transition-shadow cursor-default shrink-0"
          >
            <div className="shrink-0 transition-transform group-hover:rotate-6">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white tracking-wide">
                {item.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400 group-hover:text-teal-300 transition-colors">
                {item.category}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
