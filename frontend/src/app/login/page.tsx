/**
 * CONNECTION CYBER PORTAL | AUTH SYSTEM
 * -------------------------------------------------------------------------
 * ARQUIVO: frontend/src/app/login/page.tsx
 * OBJETIVO: Cockpit de Acesso Master com Suporte a Multi-Temas
 * GOVERNANÇA: PGT-01 (NORMA EXTREMO ZERO)
 * -------------------------------------------------------------------------
 */

'use client';

import { useState } from 'react';
import { Shield, Mail, Lock, ArrowRight } from 'lucide-react';
// Importações validadas respeitando a estrutura de diretórios e resolução de alias
import { PGE_Input } from '../../components/ui/PGE_Input';
import { ThemeSwitcher } from '../../components/ThemeSwitcher';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Lógica de autenticação preservada para futura injeção de Server Actions
    console.log("Iniciando acesso para:", email);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <main className="h-screen overflow-hidden flex flex-col bg-brand-background text-brand-foreground font-sans transition-colors duration-500">
      {/* HEADER COCKPIT PGT-01 */}
      <header className="p-6 flex justify-between items-center border-b border-zinc-800/50 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Shield className="text-brand-primary w-6 h-4 transition-colors duration-500" />
          <h1 className="text-xl font-bold tracking-tighter uppercase italic">
            Connection <span className="text-blue-500">Cyber</span> Portal 
            <span className="text-[10px] text-zinc-500 not-italic ml-2">v1.0</span>
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-brand-primary rounded-full animate-ping transition-colors duration-500" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-brand-primary transition-colors duration-500">System Online</span>
        </div>
      </header>

      {/* PAINEL CENTRAL (ESTRUTURA IMUTÁVEL COM SUPORTE A TEMAS) */}
      <section className="flex-1 flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/10 via-transparent to-transparent">
        <div className="w-full max-w-[400px] p-8 bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md rounded-sm">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tighter uppercase mb-1">Acesso Restrito</h2>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">Identifique-se para acessar o cockpit</p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <PGE_Input 
              label="E-mail Institucional" 
              icon={Mail} 
              type="email"
              placeholder="exemplo@cyberportal.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <PGE_Input 
              label="Chave de Segurança" 
              icon={Lock} 
              type="password"
              placeholder="••••••••••••"
              required
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full bg-white text-black py-4 font-bold uppercase text-xs tracking-widest hover:bg-brand-primary hover:text-white transition-all flex items-center justify-center gap-2 group"
            >
              {isSubmitting ? 'Validando...' : 'Iniciar Protocolo de Acesso'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER DE GOVERNANÇA */}
      <footer className="p-4 border-t border-zinc-800/50 opacity-40 flex justify-between items-center transition-opacity hover:opacity-100">
        <span className="text-[10px] font-mono uppercase text-zinc-500">Connection Cyber | Protocolo PGT-01</span>
        <span className="text-[11px] font-mono italic">Root: E:\Projetos\connection-cyber-portal</span>
      </footer>

      {/* INJEÇÃO DO SWITCHER DE TEMA (LÓGICA FUNCIONAL) */}
      <ThemeSwitcher />
    </main>
  );
}