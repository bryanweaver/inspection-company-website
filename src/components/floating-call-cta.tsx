"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

/**
 * Floating, ever-present call CTA.
 *
 * Behavior matches the source site: the Call Now button stays pinned to the
 * viewport as the user scrolls. On the original site Elementor uses a sticky
 * widget anchored to the top; here we use the more modern convention of a
 * bottom-right floating pill (desktop) and a full-width bottom bar (mobile),
 * both with the highest possible tap affordance.
 *
 * The CTA is visible from the first paint and does not depend on scroll
 * position — "ever present" per the user's direction.
 */
export function FloatingCallCta() {
  // Small visual beat so the button doesn't pop in flat — it fades up after
  // first paint to avoid competing with the hero CTA for attention.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Mobile: full-width bottom bar */}
      <a
        href="tel:+12813097955"
        aria-label="Call The Inspection Company at (281) 309-7955"
        className={`fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-3 border-t-2 border-gold-dark bg-gold px-4 py-4 text-base font-bold text-black shadow-[0_-6px_20px_rgba(0,0,0,0.3)] transition-all duration-500 sm:hidden ${
          visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <Phone className="size-5" aria-hidden="true" />
        Call (281)&nbsp;309-7955
      </a>

      {/* Desktop / tablet: floating bottom-right pill */}
      <a
        href="tel:+12813097955"
        aria-label="Call The Inspection Company at (281) 309-7955"
        className={`fixed bottom-6 right-6 z-40 hidden items-center gap-3 rounded-full bg-gold px-6 py-4 text-base font-bold text-black shadow-2xl shadow-black/30 ring-2 ring-gold-dark/20 transition-all duration-500 hover:bg-gold-light hover:shadow-gold/40 sm:inline-flex ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <span className="flex size-9 items-center justify-center rounded-full bg-black text-gold">
          <Phone className="size-5" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-[10px] font-semibold uppercase tracking-widest text-black/70">
            Tap to Call
          </span>
          <span className="block text-lg font-extrabold leading-tight">
            (281)&nbsp;309-7955
          </span>
        </span>
      </a>
    </>
  );
}
