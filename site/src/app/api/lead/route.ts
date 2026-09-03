import { NextResponse } from "next/server";
import { site } from "@/lib/site";

// Recebe o lead do formulário e encaminha para a planilha do Google.
// A URL do destino fica em variável de ambiente no servidor (nunca no navegador):
//   LEADS_WEBHOOK_URL -> URL do app da web do Google Apps Script
//
// Enquanto a variável não estiver definida, a rota responde 503 e o formulário
// orienta a pessoa a falar pelo WhatsApp.
//
// Proteções contra abuso, nesta ordem:
//   1. origem — só aceita envio partindo do próprio site
//   2. honeypot — campo escondido que só robô preenche
//   3. limite por IP — janela deslizante, evita enxurrada na planilha

export const runtime = "nodejs";

const LIMITE_ENVIOS = 5;
const JANELA_MS = 10 * 60 * 1000; // 10 minutos

// Memória do processo. Na Vercel cada instância tem a sua, então isso segura
// rajadas de um mesmo cliente, não um ataque distribuído — que é o suficiente
// para o risco real aqui (robô de formulário enchendo a planilha).
const envios = new Map<string, number[]>();

function limpar(valor: unknown, max: number) {
  return String(valor ?? "").trim().slice(0, max);
}

function origemPermitida(request: Request) {
  const origin = request.headers.get("origin");
  // Alguns clientes não mandam Origin. Nesse caso o honeypot e o limite por IP
  // seguem valendo — não vale a pena barrar gente de verdade por isso.
  if (!origin) return true;
  try {
    const host = new URL(origin).hostname;
    if (host === site.domain || host.endsWith(`.${site.domain}`)) return true;
    // Ambientes que não são produção (preview da Vercel, máquina local).
    // Em produção, *.vercel.app não entra: qualquer site hospedado lá poderia
    // postar na planilha.
    if (process.env.VERCEL_ENV !== "production") {
      return host === "localhost" || host.endsWith(".vercel.app");
    }
    return false;
  } catch {
    return false;
  }
}

function excedeuLimite(ip: string) {
  const agora = Date.now();
  const recentes = (envios.get(ip) ?? []).filter((t) => agora - t < JANELA_MS);
  if (recentes.length >= LIMITE_ENVIOS) {
    envios.set(ip, recentes);
    return true;
  }
  recentes.push(agora);
  envios.set(ip, recentes);
  // Poda o mapa para ele não crescer sem fim ao longo da vida da instância.
  if (envios.size > 500) {
    for (const [chave, marcas] of envios) {
      if (marcas.every((t) => agora - t >= JANELA_MS)) envios.delete(chave);
    }
  }
  return false;
}

export async function POST(request: Request) {
  const webhook = process.env.LEADS_WEBHOOK_URL;

  if (!origemPermitida(request)) {
    return NextResponse.json({ ok: false, erro: "origem_invalida" }, { status: 403 });
  }

  let corpo: Record<string, unknown>;
  try {
    corpo = await request.json();
  } catch {
    return NextResponse.json({ ok: false, erro: "json_invalido" }, { status: 400 });
  }

  // Campo-armadilha preenchido: responde como sucesso para o robô não insistir,
  // mas não grava nada.
  if (limpar(corpo.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  // Ordem importa: x-vercel-forwarded-for e x-real-ip são escritos pela própria
  // borda da Vercel. O x-forwarded-for pode vir forjado pelo cliente, então só
  // serve de último recurso (desenvolvimento local).
  const ip =
    request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "desconhecido";
  if (excedeuLimite(ip)) {
    return NextResponse.json({ ok: false, erro: "muitos_envios" }, { status: 429 });
  }

  const lead = {
    nome: limpar(corpo.nome, 120),
    whatsapp: limpar(corpo.whatsapp, 40),
    cidade: limpar(corpo.cidade, 120),
    area: limpar(corpo.area, 120),
    mensagem: limpar(corpo.mensagem, 2000),
    origem: limpar(corpo.origem, 120) || "site",
    enviadoEm: new Date().toISOString(),
  };

  if (!lead.nome || !lead.whatsapp) {
    return NextResponse.json({ ok: false, erro: "dados_incompletos" }, { status: 400 });
  }

  if (!webhook) {
    return NextResponse.json({ ok: false, erro: "destino_nao_configurado" }, { status: 503 });
  }

  // Segredo compartilhado com o Apps Script. Vai no corpo porque um app da web
  // do Apps Script não enxerga cabeçalhos personalizados. Com ele, a URL do
  // webhook sozinha deixa de ser suficiente para gravar na planilha.
  // Definir LEADS_WEBHOOK_TOKEN nos dois lados para ativar.
  const token = process.env.LEADS_WEBHOOK_TOKEN;
  const corpoEnvio = token ? { ...lead, token } : lead;

  try {
    const resposta = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(corpoEnvio),
    });
    if (!resposta.ok) throw new Error(`webhook respondeu ${resposta.status}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, erro: "falha_no_registro" }, { status: 502 });
  }
}
