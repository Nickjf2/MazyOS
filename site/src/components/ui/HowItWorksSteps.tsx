// Passo a passo do atendimento.
//
// Aceita duas formas: uma lista de textos simples, como as áreas usam, ou
// passos com título e descrição, para páginas que explicam cada etapa. Assim
// as três páginas que já usavam o componente seguem inalteradas.

interface Passo {
  titulo: string;
  texto: string;
}

interface Props {
  steps: (string | Passo)[];
  note?: string;
}

export function HowItWorksSteps({ steps, note }: Props) {
  return (
    <div className="mx-auto max-w-4xl">
      <ol className="grid gap-5 sm:grid-cols-2">
        {steps.map((step, i) => {
          const detalhado = typeof step !== "string";
          return (
            <li
              key={i}
              className="flex items-start gap-4 rounded-card border border-line bg-white p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-sm font-semibold text-white">
                {i + 1}
              </span>
              {detalhado ? (
                <span className="pt-0.5">
                  <span className="block font-semibold text-navy">
                    {step.titulo}
                  </span>
                  <span className="mt-1.5 block leading-relaxed text-muted">
                    {step.texto}
                  </span>
                </span>
              ) : (
                <span className="pt-1.5 text-ink">{step}</span>
              )}
            </li>
          );
        })}
      </ol>
      {note && (
        <p className="mt-6 rounded-card bg-soft p-5 text-center leading-relaxed text-muted">
          {note}
        </p>
      )}
    </div>
  );
}
