/**
 * CONNECTION CYBER PORTAL | UI SYSTEM
 * -------------------------------------------------------------------------
 * ARQUIVO: frontend/src/components/ui/PGE_Input.tsx
 * OBJETIVO: Componente de Input Base com Identidade Emerald
 * GOVERNANÇA: PGT-01 (NORMA EXTREMO ZERO)
 * -------------------------------------------------------------------------
 */

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: LucideIcon;
}

export function PGE_Input({ label, icon: Icon, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500">
        {label}
      </label>
      <div className="relative flex items-center">
        <Icon className="absolute left-3 w-4 h-4 text-emerald-500" />
        <input
          {...props}
          className="w-full bg-zinc-900/40 border border-zinc-800/50 rounded-sm py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-zinc-700"
        />
      </div>
    </div>
  );
}