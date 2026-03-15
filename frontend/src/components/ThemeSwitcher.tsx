/**
 * CONNECTION CYBER PORTAL | UI COMPONENTS
 * -------------------------------------------------------------------------
 * ARQUIVO: frontend/src/components/ThemeSwitcher.tsx
 * OBJETIVO: Controlador de Identidade Visual (Emerald vs IgrejasWebOS)
 * GOVERNANÇA: PGT-01 (NORMA EXTREMO ZERO)
 * -------------------------------------------------------------------------
 */

'use client';

import { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

export function ThemeSwitcher() {
  const [theme, setTheme] = useState('default');

  const toggleTheme = () => {
    const newTheme = theme === 'default' ? 'igrejas' : 'default';
    setTheme(newTheme);
    // Aplica o atributo no HTML para disparar as variáveis do globals.css
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button 
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 bg-zinc-900 border border-zinc-800 rounded-full hover:border-brand-primary transition-all z-50 group shadow-lg"
      title="Alternar Identidade Visual"
    >
      <Palette className={`w-5 h-5 ${theme === 'default' ? 'text-emerald-500' : 'text-blue-500'}`} />
    </button>
  );
}