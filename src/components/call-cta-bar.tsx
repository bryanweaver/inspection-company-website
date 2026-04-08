import { Phone } from "lucide-react";

export function CallCtaBar() {
  return (
    <a
      href="tel:+12813097955"
      className="block bg-gold py-8 text-center transition-colors hover:bg-gold-light"
    >
      <span className="inline-flex items-center gap-3 text-2xl font-bold text-black sm:text-3xl">
        <Phone className="size-6 sm:size-7" aria-hidden="true" />
        Call (281)&nbsp;309-7955 for your discount.
      </span>
    </a>
  );
}
