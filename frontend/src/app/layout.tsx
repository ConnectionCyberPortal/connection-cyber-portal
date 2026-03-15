/**
 * CONNECTION CYBER PORTAL | ARCHITECTURE
 * -------------------------------------------------------------------------
 * ARQUIVO: frontend/src/app/layout.tsx
 * OBJETIVO: Layout Master e Injeção de Estilos Globais
 * GOVERNANÇA: PGT-01 (NORMA EXTREMO ZERO)
 * -------------------------------------------------------------------------
 */

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Connection Cyber Portal",
  description: "Enterprise Education System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}