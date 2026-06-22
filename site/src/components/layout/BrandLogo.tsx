"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

// Mostra a logo em imagem quando o arquivo existe; caso contrário,
// cai para um wordmark tipográfico (sem imagem quebrada).

interface Props {
  src?: string;
  variant?: "dark" | "light"; // cor do wordmark de fallback
  imgClassName?: string;
}

export function BrandLogo({ src, variant = "dark", imgClassName }: Props) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={src}
        alt="Flávia Machado Advogados Associados"
        onError={() => setFailed(true)}
        className={cn("w-auto", imgClassName)}
      />
    );
  }

  return (
    <span className="flex flex-col leading-tight">
      <span
        className={cn(
          "font-serif text-lg font-semibold",
          variant === "light" ? "text-white" : "text-navy",
        )}
      >
        Flávia Machado
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold">
        Advogados Associados
      </span>
    </span>
  );
}
