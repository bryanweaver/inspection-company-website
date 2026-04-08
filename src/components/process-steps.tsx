import { Phone, ClipboardCheck, FileText } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "Call for Your Free Quote & Schedule Your Inspection.",
    description: (
      <>
        Call{" "}
        <a
          href="tel:+12813097955"
          className="font-semibold text-black underline decoration-black/50 underline-offset-2 hover:decoration-black"
        >
          (281)&nbsp;309-7955
        </a>{" "}
        and we&apos;ll provide a free quote &amp; schedule your inspection at a
        time that works for YOU. We like to make sure that you can be there
        when we finish.
      </>
    ),
  },
  {
    icon: ClipboardCheck,
    number: "2",
    title: "Attend Your Guided Property Tour",
    description:
      "At the end of your inspection, we will walk with you around the property and show you everything we found. We will also explain what the issues mean for your investment. You can ask questions, and we'll provide honest answers.",
  },
  {
    icon: FileText,
    number: "3",
    title: "Receive Your Same-Day Report",
    description:
      "Make your decision with time to spare. Armed with our detailed report, you can negotiate repairs, walk away protected, or close with complete confidence.",
  },
];

export function ProcessSteps() {
  return (
    <section id="process" className="bg-gold py-20 text-black">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Your Path to a Confident Purchase:
        </h2>

        <div className="mt-10 space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-black text-lg font-bold text-gold">
                {step.number}
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-lg font-bold sm:text-xl">
                  <step.icon className="size-5" aria-hidden="true" />
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/80 sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
