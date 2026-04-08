import { Phone } from "lucide-react";

const discountGroups = [
  "Educators & School Staff",
  "Hospital Staff",
  "First Responders",
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Starting price */}
        <h2 className="text-2xl font-medium text-foreground/70 sm:text-3xl">
          Inspections starting as low as &hellip;
        </h2>
        <p className="mt-2 text-7xl font-extrabold tracking-tight text-foreground sm:text-8xl">
          $450
        </p>

        {/* Discount block */}
        <div className="mt-14">
          <h3 className="text-xl font-semibold sm:text-2xl">
            10% Discounts for{" "}
            <span className="text-gold">Military Members</span> and &hellip;
          </h3>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {discountGroups.map((group) => (
              <li
                key={group}
                className="rounded-full border-2 border-gold bg-gold/5 px-6 py-2 text-sm font-semibold text-foreground sm:text-base"
              >
                {group}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="tel:+12813097955"
            className="inline-flex h-14 items-center gap-3 rounded-full bg-black px-10 text-base font-bold text-gold transition-colors hover:bg-black/85 sm:text-lg"
          >
            <Phone className="size-5" />
            Call (281)&nbsp;309-7955 for Your Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
