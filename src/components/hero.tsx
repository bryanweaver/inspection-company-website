import { Phone } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center justify-center bg-black pt-20"
    >
      {/* Subtle dotted pattern overlay */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b59d14' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Kicker */}
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
          Professional Houston Home Inspections
        </p>

        {/* H1 */}
        <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          You&apos;ve Found A New Home.{" "}
          <span className="text-gold">
            Let Us Help You Navigate the Obstacles to Make It Yours.
          </span>
        </h1>

        {/* Subhead — 4 short lines, matching source */}
        <div className="mx-auto mt-8 max-w-2xl space-y-2 text-base leading-relaxed text-white/80 sm:text-lg">
          <p>
            Hidden foundation issues. Outdated electrical. Seller secrets. Time
            pressure.
          </p>
          <p>Houston buyers face a gauntlet before closing.</p>
          <p>Our thorough inspections clear a path.</p>
          <p className="font-medium text-white">
            Same-day reports, honest answers, complete confidence.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="tel:+12813097955"
            className="inline-flex h-14 items-center gap-3 rounded-full bg-gold px-10 text-base font-bold text-black shadow-lg shadow-gold/20 transition-all hover:bg-gold-light sm:text-lg"
          >
            <Phone className="size-5" />
            Call Now &mdash; (281) 309-7955
          </a>
        </div>
      </div>
    </section>
  );
}
