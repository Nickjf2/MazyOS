"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { mainNav, site } from "@/lib/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BrandLogo } from "./BrandLogo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_1px_0_rgba(15,39,71,0.08)]">
      {/* Barra de confiança (MASTER §9.2) */}
      <div className="border-b border-line bg-white py-1.5 text-center text-[12px] tracking-wide text-navy/80">
        <span className="container-site block">{site.trustBar}</span>
      </div>

      <div className="container-site flex h-[68px] items-center justify-between">
        <Link
          href="/"
          aria-label="Página inicial — Flávia Machado Advogados Associados"
          onClick={() => setOpen(false)}
        >
          <BrandLogo src={site.logo} variant="dark" imgClassName="h-10 sm:h-11" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy/80 transition-colors hover:text-brand-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton
            label="Fale com a equipe"
            ctaPosition="header"
            className="px-5 py-2.5 text-sm"
          />
        </div>

        <button
          type="button"
          className="text-navy lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <nav className="container-site flex flex-col py-4" aria-label="Mobile">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-3 text-base text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <WhatsAppButton
                label="Fale com a equipe"
                ctaPosition="header_mobile"
                className="w-full"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
