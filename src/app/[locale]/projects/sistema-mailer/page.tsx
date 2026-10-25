import {
  Server,
  Layout,
  Database,
  Zap,
  ShieldCheck,
  Mail,
  Send,
} from "lucide-react";
import type { Metadata } from "next";
import {
  ProfessionalCaseCarousel,
  type ProfessionalCaseSlide,
} from "@/components/project/ProfessionalCaseCarousel";
import {
  ProjectTechStackGrid,
  MAILER_TECH_CATEGORIES,
} from "@/components/project/ProjectTechStackGrid";
import { ProjectCaseLayout } from "@/components/project/ProjectCaseLayout";
import { ProjectCaseHeader } from "@/components/project/ProjectCaseHeader";
import { ProjectMetricsGrid } from "@/components/project/ProjectMetricsGrid";
import { ProjectBusinessChallenge } from "@/components/project/ProjectBusinessChallenge";
import { ProjectArchitectureBento } from "@/components/project/ProjectArchitectureBento";
import type { ArchitectureLayer } from "@/components/project/ProjectArchitectureBento";
import { ProjectEngineeringChallenges } from "@/components/project/ProjectEngineeringChallenges";
import { ProjectGallerySection } from "@/components/project/ProjectGallerySection";
import { ProjectBottomCTA } from "@/components/project/ProjectBottomCTA";
import { getTranslations } from "next-intl/server";
import { locales, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Sistema Mailer & Automatización de Leads | Caso Profesional Full-Stack",
  description:
    "Arquitectura y desarrollo del Sistema Mailer para CEAR Latinoamericano: motor de envíos masivos a 1,000/min con NestJS, BullMQ, Patrón Inbox, SendGrid y constructor Unlayer.",
};

type Props = {
  params: Promise<{ locale: string }>;
};

type Metric = { label: string; value: string };
type EngineeringItem = { title: string; description: string };

const mailerSlides: ProfessionalCaseSlide[] = [
  {
    src: "/projects/mailer/home.webp",
    alt: "Panel principal del sistema Mailer",
  },
  {
    src: "/projects/mailer/campaings.webp",
    alt: "Gestión de campañas del sistema Mailer",
  },
  {
    src: "/projects/mailer/plantillas.webp",
    alt: "Gestión de plantillas del sistema Mailer",
  },
  { src: "/projects/mailer/metrica.webp", alt: "Métricas del sistema Mailer" },
  { src: "/projects/mailer/diseño.webp", alt: "Diseño del sistema Mailer" },
];

const Page = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "mailerProject",
  });

  const metrics = t.raw("metrics") as Metric[];
  const businessPoints = t.raw("businessProblem.points") as string[];
  const engineeringChallenges = t.raw(
    "engineeringChallenges.items",
  ) as EngineeringItem[];

  const architectureLayers: ArchitectureLayer[] = [
    {
      badge: "Capa 01 • Experiencia & Plantillas",
      badgeColor: "text-amber-300 border-amber-400/30 bg-amber-400/10",
      colSpan: "lg:col-span-7",
      gradient: "from-[#1f1707]/80 via-[#140e04]/90 to-[#050b14]",
      icon: Layout,
      name: t("architecture.layers.frontend.name"),
      color: "text-amber-400",
      borderColor:
        "border-amber-400/30 hover:border-amber-400/60 shadow-[0_0_30px_rgba(245,158,11,0.08)]",
      chips: [
        "Next.js (App Router)",
        "TypeScript",
        "Unlayer SDK",
        "Tailwind CSS",
      ],
      details: t.raw("architecture.layers.frontend.details") as string[],
      dotColor: "bg-amber-400",
      dotGlow: "shadow-[0_0_8px_rgba(245,158,11,0.7)]",
    },
    {
      badge: "Capa 02 • Procesamiento Asíncrono",
      badgeColor: "text-orange-300 border-orange-400/30 bg-orange-400/10",
      colSpan: "lg:col-span-5",
      gradient: "from-[#241206]/80 via-[#170b04]/90 to-[#050b14]",
      icon: Database,
      name: t("architecture.layers.backend.name"),
      color: "text-orange-400",
      borderColor:
        "border-orange-400/30 hover:border-orange-400/60 shadow-[0_0_30px_rgba(249,115,22,0.08)]",
      chips: ["NestJS API", "BullMQ", "Redis", "Patrón Inbox (Idempotencia)"],
      details: t.raw("architecture.layers.backend.details") as string[],
      dotColor: "bg-orange-400",
      dotGlow: "shadow-[0_0_8px_rgba(249,115,22,0.7)]",
    },
    {
      badge: "Capa 03 • Entregabilidad & Streaming",
      badgeColor: "text-sky-300 border-sky-400/30 bg-sky-400/10",
      colSpan: "lg:col-span-5",
      gradient: "from-[#081b2e]/80 via-[#05111e]/90 to-[#050b14]",
      icon: Send,
      name: t("architecture.layers.deliverability.name"),
      color: "text-sky-400",
      borderColor:
        "border-sky-400/30 hover:border-sky-400/60 shadow-[0_0_30px_rgba(14,165,233,0.08)]",
      chips: [
        "SendGrid API",
        "Webhooks Live",
        "SPF / DKIM / DMARC",
        "Pixel Tracking",
      ],
      details: t.raw("architecture.layers.deliverability.details") as string[],
      dotColor: "bg-sky-400",
      dotGlow: "shadow-[0_0_8px_rgba(14,165,233,0.7)]",
    },
    {
      badge: "Capa 04 • Base de Datos & On-Premise",
      badgeColor: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
      colSpan: "lg:col-span-7",
      gradient: "from-[#092218]/80 via-[#051610]/90 to-[#050b14]",
      icon: Server,
      name: t("architecture.layers.devops.name"),
      color: "text-emerald-400",
      borderColor:
        "border-emerald-400/30 hover:border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.08)]",
      chips: [
        "PostgreSQL ACID",
        "Docker Compose",
        "VPS On-Premise",
        "Base de Leads",
      ],
      details: t.raw("architecture.layers.devops.details") as string[],
      dotColor: "bg-emerald-400",
      dotGlow: "shadow-[0_0_8px_rgba(16,185,129,0.7)]",
    },
  ];

  return (
    <ProjectCaseLayout
      glows={[
        { color: "bg-amber-500/15", className: "-top-32 -left-32 w-96 h-96" },
        {
          color: "bg-orange-500/10",
          className: "top-1/3 -right-32 w-[32rem] h-[32rem]",
        },
        {
          color: "bg-amber-500/10",
          className: "bottom-20 left-1/4 w-[28rem] h-[28rem]",
        },
      ]}
    >
      <ProjectCaseHeader
        backLabel={t("backText")}
        role={t("role")}
        type={t("type")}
        title={t("title")}
        institution={t("institution")}
        subtitle={t("subtitle")}
        accentColor="amber"
        accentRgba="245,158,11"
        media={
          <div className="rounded-2xl border border-amber-400/20 shadow-[0_0_40px_rgba(245,158,11,0.18)] p-1 bg-white/[0.02]">
            <ProfessionalCaseCarousel slides={mailerSlides} />
          </div>
        }
        techStack={
          <ProjectTechStackGrid
            categories={MAILER_TECH_CATEGORIES}
            accentColor="amber"
          />
        }
        ctas={
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-amber-400/30 bg-amber-400/10 text-amber-300 text-sm font-semibold shadow-[0_0_20px_rgba(245,158,11,0.25)]">
            <Mail className="w-4 h-4" />
            <span>Motor de Envíos Transaccionales & Prospección</span>
          </div>
        }
      />

      <ProjectMetricsGrid metrics={metrics} accentColor="amber" />

      <ProjectBusinessChallenge
        title={t("businessProblem.title")}
        description={t("businessProblem.description")}
        points={businessPoints}
        accentColor="amber"
        gradient="from-[#121008] to-[#080e1a]"
      />

      <ProjectArchitectureBento
        title={t("architecture.title")}
        subtitle={t("architecture.subtitle")}
        layers={architectureLayers}
      />

      <ProjectEngineeringChallenges
        title={t("engineeringChallenges.title")}
        items={engineeringChallenges}
        icons={[Zap, ShieldCheck, Server]}
        accentColor="amber"
      />

      <ProjectGallerySection
        title={t("galleryTitle")}
        subtitle={t("gallerySubtitle")}
        accentColor="amber"
      >
        <ProfessionalCaseCarousel slides={mailerSlides} />
      </ProjectGallerySection>

      <ProjectBottomCTA
        backLabel={t("backText")}
        accentColor="amber"
        badgeLabel="Infraestructura Interna de Alto Rendimiento"
        badgeIcon={Mail}
      />
    </ProjectCaseLayout>
  );
};

export default Page;
