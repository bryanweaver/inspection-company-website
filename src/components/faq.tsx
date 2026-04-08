"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do I need a home inspection if the house is new or recently renovated?",
    a: "Absolutely. New construction can have installation errors, and renovations can hide existing problems. We've found foundation issues in brand-new builds and electrical hazards behind fresh drywall. Even in new homes, builders sometimes cut corners or make mistakes.",
  },
  {
    q: "How long does a home inspection take?",
    a: "Most inspections take 2-4 hours depending on the size and age of the home. We don't rush. Thoroughness matters more than speed. When you schedule, we'll give you an accurate timeframe and coordinate timing so you can be there at the end for your guided property tour.",
  },
  {
    q: "Should I attend the inspection?",
    a: "Yes! We strongly encourage it. At the end of your inspection, we conduct a guided property tour where we walk you through everything we found. We'll show you the actual issues and explain what they mean for your investment. This is your chance to ask questions and truly understand the home you're considering buying.",
  },
  {
    q: "What if you find major problems?",
    a: "That's exactly why you hired us. If we discover significant issues, you have options: negotiate with the seller for repairs or a price reduction, walk away during your option period, or move forward knowing what you're getting into. Our same-day report gives you time to make the best decision for your situation. We're here to empower you, not scare you, but you deserve to know the truth.",
  },
  {
    q: "What's included in your home inspection?",
    a: "We follow TREC Standards of Practice and inspect all major systems: foundation, roof, exterior/interior, electrical, plumbing, HVAC, appliances, and safety features. We also offer add-on services like pool/spa inspections, sprinkler system checks, termite/WDI inspections (coordinated through licensed treatment companies), and sewer scope camera inspections. When you get your free quote, we'll discuss which services make sense for your specific property.",
  },
  {
    q: "Do you offer inspections in languages other than English?",
    a: "Yes! We serve Houston's diverse communities with inspections and reports available in English, Spanish, Vietnamese and other languages. We want you to fully understand your inspection results in the language you're most comfortable with. Let us know your preference when you schedule, and we'll coordinate accordingly.",
  },
  {
    q: "How quickly can you schedule an inspection?",
    a: "We offer next-day appointments because we know your option period is short. Get your free quote online at theinspectioncompanytx.com, then call us at (281)309-7955 to schedule a time that works for YOU. We coordinate around your availability and ensure you can attend the guided tour at the end.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-muted py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 divide-y divide-border overflow-hidden rounded-xl border border-border bg-white">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold transition-colors hover:bg-gold/5 sm:px-6"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="text-sm sm:text-base">{item.q}</span>
                  <span
                    className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold"
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus className="size-4" />
                    ) : (
                      <Plus className="size-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`faq-panel-${i}`}
                    className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:text-base"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
