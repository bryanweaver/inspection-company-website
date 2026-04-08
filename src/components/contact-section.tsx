import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gold sm:text-5xl">
          Contact Us
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
          Ready to determine the condition of your future home? Contact me
          today, and I&apos;ll help you find out.
        </p>

        {/* Primary CTA — giant tap target */}
        <a
          href="tel:+12813097955"
          className="mt-10 inline-flex h-16 items-center gap-4 rounded-full bg-gold px-8 text-lg font-extrabold text-black shadow-xl shadow-gold/20 transition-all hover:bg-gold-light hover:shadow-gold/40 sm:h-20 sm:px-12 sm:text-2xl"
        >
          <span className="flex size-10 items-center justify-center rounded-full bg-black text-gold sm:size-12">
            <Phone className="size-5 sm:size-6" />
          </span>
          Call (281)&nbsp;309-7955
        </a>

        <p className="mt-6 text-sm text-white/60">
          Free quotes &bull; Same-day reports &bull; English, Espa&ntilde;ol,
          Ti&#7871;ng Vi&#7879;t
        </p>

        {/* Secondary info */}
        <dl className="mx-auto mt-14 grid max-w-3xl gap-4 text-left sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-xl border border-gold/20 bg-white/5 p-5">
            <Phone className="mt-1 size-5 shrink-0 text-gold" />
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-gold">
                Phone
              </dt>
              <dd className="mt-1">
                <a
                  href="tel:+12813097955"
                  className="text-sm text-white hover:text-gold sm:text-base"
                >
                  (281) 309-7955
                </a>
              </dd>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-gold/20 bg-white/5 p-5">
            <Mail className="mt-1 size-5 shrink-0 text-gold" />
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-gold">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href="mailto:mwarner@theinspectioncompanytx.com"
                  className="break-all text-sm text-white hover:text-gold sm:text-base"
                >
                  mwarner@theinspectioncompanytx.com
                </a>
              </dd>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-gold/20 bg-white/5 p-5">
            <MapPin className="mt-1 size-5 shrink-0 text-gold" />
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-gold">
                Service Area
              </dt>
              <dd className="mt-1 text-sm text-white sm:text-base">
                Deer Park, TX &amp; Greater Houston
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </section>
  );
}
