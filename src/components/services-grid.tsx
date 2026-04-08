import { Home, Droplets, Sprout, Bug, Pipette } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Home Inspection",
    price: "$450",
    description:
      "Comprehensive home inspection following TREC Standards of Practice covering structural systems, electrical, plumbing, HVAC, appliances & safety features. We inspect foundations, roofing, interior/exterior components, and all basic systems to identify deficiencies and safety concerns. Our basic home inspection starts at $349 and increases based on the size and age of the house.",
    featured: true,
  },
  {
    icon: Droplets,
    title: "Pool & Spa Inspection",
    price: "$125",
    description:
      "We provide comprehensive inground pool & spa inspections covering surfaces, tiles, decking, equipment, pumps, filters, heaters, electrical systems & safety barriers. Includes diving boards, slides & water features.",
  },
  {
    icon: Sprout,
    title: "Sprinkler System Inspection",
    price: "$75",
    description:
      "Professional sprinkler system inspections covering control panels, all irrigation zones/quadrants, and system functionality. We test each zone to ensure proper operation and identify any leaks or issues that could affect performance or cause damage.",
  },
  {
    icon: Bug,
    title: "(WDI) Termite Inspection",
    price: "$175",
    description:
      "We provide Termite/WDI inspections through licensed treatment companies who come out at the same time as our home inspection. This helps clients avoid paying a home inspector for their inspection then having to pay a treatment company to come out and perform a second inspection. To create a seamless process, we coordinate everything so you don't have to. The service starts at $125 and could increase based on the size and age of the house.",
  },
  {
    icon: Pipette,
    title: "Sewer Scope",
    price: "$300",
    description:
      "We provide camera inspections of main sewer lines. We identify blockages, root intrusion, pipe damage & other costly issues before you buy. If the house you are considering buying is over 30 years old, this service could help you avoid expensive surprises after closing.",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Services
          </h2>
        </div>

        <div className="mt-14 space-y-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-xl border border-border bg-white p-6 transition-all hover:border-gold/50 hover:shadow-md sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-black">
                  <service.icon className="size-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-dashed border-border pb-3">
                    <h3 className="text-lg font-bold sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="text-2xl font-extrabold text-gold">
                      {service.price}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
