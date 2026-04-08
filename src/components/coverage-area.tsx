import { MapPin, Phone } from "lucide-react";

const cities = [
  "Houston",
  "Deer Park",
  "Pasadena",
  "Channelview",
  "Baytown",
  "Mont Belvieu",
  "La Porte",
  "Seabrook",
  "Alvin",
  "Santa Fe",
  "Manvel",
  "Fresno",
  "Missouri City",
  "Pearland",
  "Clear Lake",
  "Friendswood",
  "Dickinson",
  "Crosby",
  "League City",
  "Galveston",
  "Bellaire",
  "Galena Park",
  "Atascocita",
  "Humble",
];

export function CoverageArea() {
  return (
    <section id="coverage" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Map */}
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <iframe
              title="The Inspection Company coverage area — greater Houston, TX"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d221565.2!2d-95.25!3d29.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Cities */}
          <div>
            <h2 className="flex items-center gap-3 text-3xl font-bold tracking-tight sm:text-4xl">
              <MapPin className="size-8 text-gold" aria-hidden="true" />
              Coverage Area
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {cities.slice(0, -1).join(", ")}, and {cities[cities.length - 1]}.
            </p>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base">
              If you do not see your area in the list, you can use the free
              quote function to determine if your property is in the covered
              area, or you can call now.
            </p>
            <a
              href="tel:+12813097955"
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-gold px-6 text-sm font-bold text-black transition-colors hover:bg-gold-light sm:text-base"
            >
              <Phone className="size-4" />
              Call (281)&nbsp;309-7955
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
