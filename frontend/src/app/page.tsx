/**
 * CONNECTION CYBER PORTAL | NAVIGATION
 * -------------------------------------------------------------------------
 * ARQUIVO: frontend/src/app/page.tsx
 * OBJETIVO: Redirecionamento Mandatório para Login
 * GOVERNANÇA: PGT-01 (NORMA EXTREMO ZERO)
 * -------------------------------------------------------------------------
 */

import { redirect } from 'next/navigation';

export default function RootPage() {
  // Protocolo PGT-01: Redirecionamento mandatório para o Cockpit de Acesso
  redirect('/login');
}