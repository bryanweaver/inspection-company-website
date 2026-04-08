import { Hero } from "@/components/hero";
import { ProcessSteps } from "@/components/process-steps";
import { Testimonials } from "@/components/testimonials";
import { PricingSection } from "@/components/pricing-section";
import { PainPoints } from "@/components/pain-points";
import { ServicesGrid } from "@/components/services-grid";
import { FAQ } from "@/components/faq";
import { CoverageArea } from "@/components/coverage-area";
import { CallCtaBar } from "@/components/call-cta-bar";
import { FeatureStrip } from "@/components/feature-strip";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      {/* Real-site section order */}
      <Hero />
      <ProcessSteps />
      <Testimonials />
      <PricingSection />
      <PainPoints />
      <ServicesGrid />
      <FAQ />
      <CoverageArea />
      <CallCtaBar />
      <FeatureStrip />
      <ContactSection />

      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeInspector",
            name: "The Inspection Company, LLC",
            telephone: "+1-281-309-7955",
            email: "mwarner@theinspectioncompanytx.com",
            url: "https://theinspectioncompanytx.com",
            image:
              "https://theinspectioncompanytx.com/wp-content/uploads/2025/04/The-Inspection-Company-Wide.png",
            founder: {
              "@type": "Person",
              name: "Matthew Warner",
              jobTitle: "Licensed Home Inspector",
              identifier: "TREC #24038",
            },
            knowsLanguage: ["en", "es", "vi"],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Deer Park",
              addressRegion: "TX",
              postalCode: "77536",
              addressCountry: "US",
            },
            areaServed: [
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
            ].map((c) => ({ "@type": "City", name: c, addressRegion: "TX" })),
            priceRange: "$$",
            description:
              "Professional home inspections in Houston, TX by licensed inspector Matthew Warner (TREC #24038). Residential, pool & spa, sprinkler, termite/WDI, and sewer scope services. Same-day reports, education-first guided walkthroughs, and service in English, Spanish, and Vietnamese.",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Home Inspection Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Residential Home Inspection" },
                  price: "450",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Pool & Spa Inspection" },
                  price: "125",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Sprinkler System Inspection" },
                  price: "75",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "(WDI) Termite Inspection" },
                  price: "175",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Sewer Scope" },
                  price: "300",
                  priceCurrency: "USD",
                },
              ],
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "5",
            },
          }),
        }}
      />
    </>
  );
}
