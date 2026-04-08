import { CalendarClock, Zap, FileCheck2 } from "lucide-react";

const features = [
  {
    icon: CalendarClock,
    title: "Easy Booking",
    description:
      "With option periods getting shorter, time is of the essence. At The Inspection Company, you can book next-day appointments.",
  },
  {
    icon: Zap,
    title: "Same Day Reports",
    description:
      "You'll have plenty of time to review your inspection report and complete any recommended actions before your option period ends.",
  },
  {
    icon: FileCheck2,
    title: "Easy-to-Read Reports",
    description:
      "The Inspection Company uses state-of-the-art report writing software. This provides clients with well organized, clear, and detailed inspection reports.",
  },
];

export function FeatureStrip() {
  return (
    <section className="bg-black py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full border-2 border-gold/40 bg-gold/10">
                <feature.icon className="size-6 text-gold" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-gold">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
