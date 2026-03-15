/**
 * CONNECTION CYBER PORTAL | UI CONFIG
 * -------------------------------------------------------------------------
 * ARQUIVO: frontend/tailwind.config.ts
 * OBJETIVO: Configuração do Motor Tailwind para Next.js 15 (App Router)
 * GOVERNANÇA: PGT-01 (NORMA EXTREMO ZERO)
 * -------------------------------------------------------------------------
 */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Preservação do Bloco Estático (Arquivo que Tenho)
        background: "var(--background)",
        foreground: "var(--foreground)",
        emerald: {
          500: "#10b981",
        },
        // Injeção de Inteligência Funcional (Arquivo Enviado)
        // Cores Dinâmicas baseadas no Tema Ativo (Cyber vs Igrejas)
        brand: {
          primary: "var(--primary)",
          accent: "var(--accent)",
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
      },
    },
  },
  plugins: [],
};
export default config;