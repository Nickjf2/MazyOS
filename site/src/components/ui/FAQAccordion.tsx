"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { trackEvent } from "@/lib/tracking";

export interface FaqItem {
  q: string;
  a: string;
}

export function FAQAccordion({
  items,
  practiceArea,
}: {
  items: FaqItem[];
  practiceArea?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-line rounded-card border border-line bg-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => {
                setOpenIndex(isOpen ? null : i);
                if (!isOpen)
                  trackEvent("faq_open", { practice_area: practiceArea, button_label: item.q });
              }}
            >
              <span className="font-serif text-lg text-navy">{item.q}</span>
              {isOpen ? (
                <Minus className="h-5 w-5 shrink-0 text-brand-gold" />
              ) : (
                <Plus className="h-5 w-5 shrink-0 text-brand-gold" />
              )}
            </button>
            {isOpen && (
              <div className="px-6 pb-6 -mt-1">
                <p className="font-serif text-lg leading-relaxed text-ink/75">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
