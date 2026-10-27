# Marlon Ureta · Personal Site

> Portfolio personal de un desarrollador de software enfocado en crear productos web, automatizaciones e infraestructura cloud.

Este proyecto presenta mi experiencia, proyectos y tecnologías en una aplicación moderna con **Next.js**, internacionalización en español/inglés y renderizado serverless sobre **Cloudflare Workers**.

## ✨ Características

- 🌍 Soporte multidioma: español e inglés con `next-intl`.
- ⚡ Renderizado híbrido: páginas estáticas cuando es posible y SSR para rutas dinámicas.
- 📬 Formulario de contacto mediante `/api/contact`.
- 🎨 Interfaz responsive con Tailwind CSS.
- 🧩 Animaciones e interacción con React y Framer Motion.
- 🛡️ Validación de código con Biome y TypeScript.
- ☁️ Despliegue serverless con Vinext en Cloudflare Workers.
- 🏗️ Infraestructura como código con Terraform.
- 🚀 CI/CD con GitHub Actions.
- 🗃️ Caché distribuida mediante Workers Response Store.

## 🧱 Arquitectura

```text
                    ┌──────────────────────┐
                    │      GitHub Push     │
                    └──────────┬───────────┘
                               │
                  ┌────────────▼────────────┐
                  │ GitHub Actions           │
                  │ Biome · TypeScript · CI  │
                  └────────────┬────────────┘
                               │
                  ┌────────────▼────────────┐
                  │ Vinext + Wrangler        │
                  └────────────┬────────────┘
                               │
        ┌──────────────────────▼──────────────────────┐
        │              Cloudflare Workers              │
        │ SSR · API · Static Assets · CDN · Cache      │
        └──────────────────────────────────────────────┘
```

Las páginas públicas se generan de forma estática cuando pueden pre-renderizarse. Las rutas que requieren ejecución en servidor, como el formulario de contacto, se ejecutan en el Worker.

## 🛠️ Stack tecnológico

| Área | Tecnología |
| --- | --- |
| Framework | Next.js 16 |
| UI | React 19 |
| Lenguaje | TypeScript |
| Internacionalización | next-intl |
| Estilos | Tailwind CSS |
| Animaciones | Framer Motion |
| Validación | Zod |
| Calidad | Biome |
| Build serverless | Vinext |
| Hosting | Cloudflare Workers |
| Infraestructura | Terraform |
| Automatización | GitHub Actions |

## 🚀 Desarrollo local

### Requisitos

- Node.js 24+
- pnpm
- Una cuenta de Cloudflare solo para desplegar; no es necesaria para desarrollar localmente.

### Instalación

```bash
pnpm install --frozen-lockfile
```

### Ejecutar Next.js en desarrollo

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Ejecutar el runtime de Vinext

```bash
pnpm run dev:vinext
```

Abre [http://localhost:3001](http://localhost:3001).

## ✅ Validación antes de subir cambios

```bash
pnpm exec biome check src
pnpm exec tsc --noEmit
pnpm run build:vinext
```

El pipeline de CI ejecuta estas validaciones automáticamente. Los cambios que solo afectan archivos Markdown o `docs/` no activan el CI ni el despliegue.

## ☁️ Despliegue en Cloudflare

El proyecto usa Vinext para adaptar Next.js a Cloudflare Workers. La configuración principal está en:

```text
cloudflare.config.ts
vite.config.ts
```

### Autenticación local

```bash
pnpm exec wrangler login
```

### Build y despliegue manual

```bash
pnpm run build:vinext
pnpm run deploy:response-store
pnpm run deploy:vinext
```

### Variables de GitHub Actions

Configura estos secrets en el repositorio:

```text
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

El token debe tener únicamente los permisos necesarios para desplegar Workers y administrar los recursos usados por el proyecto.

## 🔁 Flujo CI/CD

```text
Pull Request
   ↓
CI: Biome + TypeScript + tests + build
   ↓
Merge a main/master
   ↓
Deploy a Cloudflare Workers
```

Workflows principales:

- `.github/workflows/ci.yml`: validación de código y build.
- `.github/workflows/deploy.yml`: despliegue de producción.
- `.github/workflows/release.yml`: generación de releases.

Un cambio únicamente en `README.md`, otro Markdown o `docs/` no publica una nueva versión.

## 🌐 Internacionalización

Los idiomas soportados están definidos en:

```text
src/i18n/config.ts
```

Traducciones:

```text
src/locales/
├── about/
├── contact/
├── experience/
├── home/
├── layout/
└── projects/
```

Las rutas usan el locale como segmento:

```text
/en
/en/about
/es
/es/sobre-mi
```

## 📁 Estructura principal

```text
src/
├── app/              # Rutas de Next.js y páginas por idioma
├── components/       # Componentes reutilizables
├── i18n/             # Configuración de next-intl
└── locales/          # Traducciones

public/               # Imágenes y archivos públicos
cloudflare.config.ts  # Worker, assets y caché de Cloudflare
vite.config.ts        # Integración Vinext/Vite
terraform/            # Infraestructura de Cloudflare como código
.github/workflows/    # CI/CD
```

## 🏗️ Infraestructura como código

Terraform mantiene declarada la configuración de Cloudflare para que la infraestructura pueda reproducirse, revisarse en Pull Requests y modificarse de forma controlada.

Flujo recomendado:

```text
Terraform → zona, dominio y configuración de Cloudflare
Vinext    → build y publicación del código Next.js
Wrangler  → despliegue del Worker y sus assets
```

Los secretos de Cloudflare se proporcionan mediante variables sensibles y GitHub Secrets; nunca se guardan directamente en el repositorio.

## 🔐 Seguridad

- Nunca subas `.env`, tokens, claves privadas ni credenciales.
- No guardes secretos en `cloudflare.config.ts`.
- Usa GitHub Secrets para CI/CD.
- Revisa las dependencias con `pnpm audit` cuando el registro esté disponible.
- Mantén `pnpm-lock.yaml` versionado para builds reproducibles.

## 📄 Licencia

Proyecto personal de Marlon Ureta. El código puede consultarse con fines educativos y profesionales; los contenidos, textos, imágenes y datos personales permanecen reservados.

