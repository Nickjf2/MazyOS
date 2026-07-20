"use client";

import { usePathname } from "next/navigation";

// Landing pages de campanha (tráfego pago) não exibem o cabeçalho de navegação:
// menos saídas na página, mais foco na conversão.
// Para criar uma nova LP sem menu, basta adicionar a rota aqui.
export const LANDING_ROUTES = ["/inventario-sucessoes"];

export function HideOnLanding({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = LANDING_ROUTES.some(
    (route) => pathname === route || pathname?.startsWith(`${route}/`),
  );

  if (isLanding) return null;
  return <>{children}</>;
}
