"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Aviso de cookies (LGPD). O estado inicial da medição é negado no
// <Analytics />; este componente só registra a escolha e comunica ao gtag.
// Some assim que a pessoa decide e não volta a aparecer.

const CHAVE = "fm-consent";

function atualizarConsentimento(aceito: boolean) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag !== "function") return;
  const estado = aceito ? "granted" : "denied";
  w.gtag("consent", "update", {
    ad_storage: estado,
    ad_user_data: estado,
    analytics_storage: estado,
  });
}

export function CookieConsent() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CHAVE)) setVisivel(true);
    } catch {
      // navegador sem acesso a storage: não insiste no aviso
    }
  }, []);

  function decidir(aceito: boolean) {
    try {
      localStorage.setItem(CHAVE, aceito ? "aceito" : "recusado");
    } catch {
      // segue mesmo sem conseguir guardar
    }
    atualizarConsentimento(aceito);
    setVisivel(false);
  }

  if (!visivel) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso sobre cookies"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-navy px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 text-white shadow-lg sm:px-6"
    >
      <div className="container-site mx-auto flex flex-col gap-4 pr-0 sm:flex-row sm:items-center sm:justify-between sm:pr-24">
        <p className="max-w-2xl text-sm leading-relaxed text-white/80">
          Usamos cookies apenas para entender como o site é usado e melhorar a
          navegação. Nada é usado para personalizar anúncios.{" "}
          <Link
            href="/politica-de-privacidade"
            className="text-brand-gold underline underline-offset-2 hover:text-white"
          >
            Política de privacidade
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decidir(false)}
            className="rounded-xl border border-white/25 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Só o essencial
          </button>
          <button
            type="button"
            onClick={() => decidir(true)}
            className="rounded-xl bg-brand-gold px-5 py-2.5 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
