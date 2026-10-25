import { Server, Layout, Database, Zap, ShieldCheck, Globe, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import {
  ProfessionalCaseCarousel,
  type ProfessionalCaseSlide,
} from "@/components/project/ProfessionalCaseCarousel";
import { ProjectCaseLayout } from "@/components/project/ProjectCaseLayout";
import { ProjectCaseHeader } from "@/components/project/ProjectCaseHeader";
import { ProjectMetricsGrid } from "@/components/project/ProjectMetricsGrid";
import { ProjectBusinessChallenge } from "@/components/project/ProjectBusinessChallenge";
import { ProjectArchitectureBento } from "@/components/project/ProjectArchitectureBento";
import type { ArchitectureLayer } from "@/components/project/ProjectArchitectureBento";
import { ProjectEngineeringChallenges } from "@/components/project/ProjectEngineeringChallenges";
import { ProjectGallerySection } from "@/components/project/ProjectGallerySection";
import { ProjectBottomCTA } from "@/components/project/ProjectBottomCTA";
import {
  ProjectTechStackGrid,
  CEAR_WEB_TECH_CATEGORIES,
} from "@/components/project/ProjectTechStackGrid";
import { getTranslations } from "next-intl/server";
import { locales, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Plataforma Web de Formación Continua CEAR | Caso Profesional Full-Stack",
  description:
    "Diseño y desarrollo completo de la plataforma pública de CEAR Latinoamericano en 1.5 meses: catálogo de programas JRD, Arbitraje, NEC y FIDIC con Next.js, Node.js, Express y PostgreSQL.",
};

type Props = {
  params: Promise<{ locale: string }>;
};

type Metric = { label: string; value: string };
type EngineeringItem = { title: string; description: string };

const cearSlides: ProfessionalCaseSlide[] = [
  {
    src: "/projects/cear/home.png",
    alt: "Inicio de la plataforma CEAR Latinoamericano",
  },
  {
    src: "/projects/cear/cursos.png",
    alt: "Catálogo de cursos de CEAR Latinoamericano",
  },
  {
    src: "/projects/cear/contacto.png",
    alt: "Módulo de contacto y admisión de CEAR Latinoamericano",
  },
];

const Page = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "cearProject",
  });

  const metrics = t.raw("metrics") as Metric[];
  const businessPoints = t.raw("businessProblem.points") as string[];
  const engineeringChallenges = t.raw(
    "engineeringChallenges.items",
  ) as EngineeringItem[];

  // 3-layer bento: Frontend (7 cols), Backend (5 cols), DevOps (full)
  const architectureLayers: ArchitectureLayer[] = [
    {
      badge: "Capa 01 • Frontend & SEO",
      badgeColor: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10",
      colSpan: "lg:col-span-7",
      gradient: "from-[#071e2e]/80 via-[#04121e]/90 to-[#050b14]",
      icon: Layout,
      name: t("architecture.layers.frontend.name"),
      color: "text-cyan-400",
      borderColor:
        "border-cyan-400/30 hover:border-cyan-400/60 shadow-[0_0_30px_rgba(6,182,212,0.08)]",
      chips: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "SSR + ISR"],
      details: t.raw("architecture.layers.frontend.details") as string[],
      dotColor: "bg-cyan-400",
      dotGlow: "shadow-[0_0_8px_rgba(6,182,212,0.7)]",
    },
    {
      badge: "Capa 02 • Backend & Base de Datos",
      badgeColor: "text-blue-300 border-blue-400/30 bg-blue-400/10",
      colSpan: "lg:col-span-5",
      gradient: "from-[#08152e]/80 via-[#050d1e]/90 to-[#050b14]",
      icon: Database,
      name: t("architecture.layers.backend.name"),
      color: "text-blue-400",
      borderColor:
        "border-blue-400/30 hover:border-blue-400/60 shadow-[0_0_30px_rgba(96,165,250,0.08)]",
      chips: ["Node.js", "Express", "PostgreSQL ACID", "Rate Limiting"],
      details: t.raw("architecture.layers.backend.details") as string[],
      dotColor: "bg-blue-400",
      dotGlow: "shadow-[0_0_8px_rgba(96,165,250,0.7)]",
    },
    {
      badge: "Capa 03 • Infraestructura & Deploy",
      badgeColor: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
      colSpan: "lg:col-span-12",
      gradient: "from-[#081e16]/80 via-[#05130e]/90 to-[#050b14]",
      icon: Server,
      name: t("architecture.layers.devops.name"),
      color: "text-emerald-400",
      borderColor:
        "border-emerald-400/30 hover:border-emerald-400/60 shadow-[0_0_30px_rgba(52,211,153,0.08)]",
      chips: ["Docker Compose", "VPS On-Premise", "SSL / HTTPS", "CI/CD Pipeline"],
      details: t.raw("architecture.layers.devops.details") as string[],
      dotColor: "bg-emerald-400",
      dotGlow: "shadow-[0_0_8px_rgba(52,211,153,0.7)]",
    },
  ];

  return (
    <ProjectCaseLayout
      glows={[
        { color: "bg-cyan-500/15", className: "-top-32 -left-32 w-96 h-96" },
        { color: "bg-blue-500/10", className: "top-1/3 -right-32 w-[32rem] h-[32rem]" },
        { color: "bg-teal-500/10", className: "bottom-20 left-1/4 w-[28rem] h-[28rem]" },
      ]}
    >
      <ProjectCaseHeader
        backLabel={t("backText")}
        role={t("role")}
        type={t("type")}
        title={t("title")}
        institution={t("institution")}
        subtitle={t("subtitle")}
        accentColor="cyan"
        accentRgba="6,182,212"
        media={
          <div className="rounded-2xl border border-cyan-400/20 shadow-[0_0_40px_rgba(6,182,212,0.18)] p-1 bg-white/[0.02]">
            <ProfessionalCaseCarousel slides={cearSlides} />
          </div>
        }
        techStack={
          <ProjectTechStackGrid
            categories={CEAR_WEB_TECH_CATEGORIES}
            accentColor="cyan"
          />
        }
        ctas={
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://cearlatinoamericano.edu.pe/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:bg-cyan-300 transition-all hover:scale-[1.02]"
            >
              <Globe className="w-4 h-4" />
              <span>{t("visitLive")}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        }
      />

      <ProjectMetricsGrid metrics={metrics} accentColor="cyan" />

      <ProjectBusinessChallenge
        title={t("businessProblem.title")}
        description={t("businessProblem.description")}
        points={businessPoints}
        accentColor="cyan"
        gradient="from-[#08131e] to-[#080e1a]"
      />

      <ProjectArchitectureBento
        title={t("architecture.title")}
        subtitle={t("architecture.subtitle")}
        layers={architectureLayers}
      />

      <ProjectEngineeringChallenges
        title={t("engineeringChallenges.title")}
        items={engineeringChallenges}
        icons={[Globe, ShieldCheck, Zap]}
        accentColor="cyan"
      />

      <ProjectGallerySection
        title={t("galleryTitle")}
        subtitle={t("gallerySubtitle")}
        accentColor="cyan"
      >
        <ProfessionalCaseCarousel slides={cearSlides} />
      </ProjectGallerySection>

      <ProjectBottomCTA
        backLabel={t("backText")}
        accentColor="cyan"
        externalCTA={{
          href: "https://cearlatinoamericano.edu.pe/",
          label: t("visitLive"),
          icon: Globe,
        }}
      />
    </ProjectCaseLayout>
  );
};

export default Page;
