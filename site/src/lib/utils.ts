import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
/**
 * Formata a data de um post.
 *
 * O "AAAA-MM-DD" sozinho é interpretado como meia-noite UTC. Renderizado em
 * horário de Brasília (UTC-3), isso devolvia o dia anterior — todo post do
 * blog aparecia com um dia a menos. Fixar meio-dia evita a virada.
 */
export function formatarDataPost(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
