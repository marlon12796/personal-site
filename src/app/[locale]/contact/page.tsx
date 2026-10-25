import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { iconsMethod } from "@/app/data/content/contact";
import imgSetup from "/public/static/setup.webp";
import { getTranslations } from "next-intl/server";
import { locales, type Locale } from "@/i18n/config";
import { Toaster } from "@/components/ui/sonner";
import { Mail, Phone, MessageSquare, Sparkles } from "lucide-react";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamic = "force-static";

type Props = {
  params: Promise<{ locale: string }>;
};

const Page = async ({ params }: Props) => {
  const locale = (await params).locale;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "contact",
  });
  const keys = ["email", "phone"] as const;

  return (
    <main className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden py-16 sm:py-24">
      {/* ── Background Grid & Orbs (Identical to Home) ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,1) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-emerald-500/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-screen-xl w-full mx-auto px-4 sm:px-6 space-y-12">
        {/* ── Top Section: Headline + Setup Workstation Frame ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/5 text-cyan-400 text-xs font-semibold backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{t("heading")}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15]">
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #22d3ee 0%, #a78bfa 60%, #34d399 100%)",
                }}
              >
                {t("subheading")}
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
              {t("description")}
            </p>

            {/* Contact Quick Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href="mailto:marlon.tafur.21@gmail.com"
                className="group flex items-start gap-3.5 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-cyan-400/30 transition-all duration-200"
              >
                <div className="p-2.5 rounded-lg bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1 overflow-hidden">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    {t("methods.email.title")}
                  </div>
                  <div className="text-sm text-slate-200 font-medium truncate group-hover:text-cyan-300 transition-colors">
                    marlon.tafur.21@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/51975294691"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3.5 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-emerald-400/30 transition-all duration-200"
              >
                <div className="p-2.5 rounded-lg bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1 overflow-hidden">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    {t("methods.phone.title")}
                  </div>
                  <div className="text-sm text-slate-200 font-medium truncate group-hover:text-emerald-300 transition-colors">
                    +51 975 294 691
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: 3D-styled Workstation Preview Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Ambient Glows behind setup */}
            <div className="absolute w-72 h-72 bg-cyan-500/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute w-60 h-60 bg-violet-600/15 rounded-full blur-[70px] pointer-events-none translate-x-10 translate-y-10" />

            <div className="relative z-10 w-full rounded-2xl overflow-hidden border border-white/10 bg-[#080e1c]/90 shadow-[0_0_50px_rgba(34,211,238,0.12),0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              {/* Top Accent Gradient Line */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />

              {/* Chrome Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-xs text-slate-400 font-mono">
                    workstation.env
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </div>
              </div>

              {/* Setup Photo */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden group">
                <Image
                  src={imgSetup}
                  fill
                  alt="Marlon Dev Workstation Setup"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 500px"
                  quality={90}
                  priority
                  placeholder="blur"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080e1c] via-transparent to-transparent opacity-80" />
              </div>

              {/* Bottom Info Bar */}
              <div className="px-4 py-3 border-t border-white/5 bg-white/[0.015] flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Lima, Perú • UTC-5</span>
                <span className="text-cyan-400">Full-Stack Workspace</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Form Section in Glassmorphism Card ── */}
        <div className="relative rounded-2xl border border-white/10 bg-[#080e1c]/80 p-6 sm:p-10 shadow-[0_0_50px_rgba(34,211,238,0.06),0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          <div className="h-[2px] w-full absolute top-0 left-0 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                Enviar Mensaje Directo
              </h2>
              <p className="text-xs text-slate-400">
                Completa el formulario y te responderé a la brevedad posible.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>

        <Toaster />
      </div>
    </main>
  );
};

export default Page;
