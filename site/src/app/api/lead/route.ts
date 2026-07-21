import { NextResponse } from "next/server";

// Recebe o lead do formulário e encaminha para a planilha do Google.
// A URL do destino fica em variável de ambiente no servidor (nunca no navegador):
//   LEADS_WEBHOOK_URL -> URL do app da web do Google Apps Script
//
// Enquanto a variável não estiver definida, a rota responde 503 e o formulário
// orienta a pessoa a falar pelo WhatsApp.

export const runtime = "nodejs";

function limpar(valor: unknown, max: number) {
  return String(valor ?? "").trim().slice(0, max);
}

export async function POST(request: Request) {
  const webhook = process.env.LEADS_WEBHOOK_URL;

  let corpo: Record<string, unknown>;
  try {
    corpo = await request.json();
  } catch {
    return NextResponse.json({ ok: false, erro: "json_invalido" }, { status: 400 });
  }

  const lead = {
    nome: limpar(corpo.nome, 120),
    whatsapp: limpar(corpo.whatsapp, 40),
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

  try {
    const resposta = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!resposta.ok) throw new Error(`webhook respondeu ${resposta.status}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, erro: "falha_no_registro" }, { status: 502 });
  }
}
