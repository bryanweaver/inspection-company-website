import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/20 bg-black text-white">
      {/* Partner / credential strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-2">
            <a
              href="https://theinspectionacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <p className="text-sm font-bold uppercase tracking-wider text-gold group-hover:underline">
                The Inspection Academy
              </p>
              <p className="mt-2 text-sm text-white/70">
                The Most Thorough Online Home Inspector Training in Texas
              </p>
            </a>
            <a
              href="https://www.bulletprooftestprep.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <p className="text-sm font-bold uppercase tracking-wider text-gold group-hover:underline">
                Bulletproof Test Prep
              </p>
              <p className="mt-2 text-sm text-white/70">
                Texas &amp; NHIE Test Prep &mdash; Adaptive Review App with
                Unlimited Sample Tests
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src="/logo-wide.png"
              alt="The Inspection Company, LLC"
              width={220}
              height={77}
              className="h-16 w-auto"
            />
            <p className="mt-4 text-sm italic text-gold/80">
              Expert Home Inspections in Houston, TX.
            </p>
            <p className="mt-4 text-xs text-white/60">
              Matthew Warner &mdash; TREC License #24038
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h3>
            <nav className="mt-4 flex flex-col gap-2">
              <a
                href="#top"
                className="text-sm text-white/70 transition-colors hover:text-gold"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-sm text-white/70 transition-colors hover:text-gold"
              >
                Services
              </a>
              <a
                href="#reviews"
                className="text-sm text-white/70 transition-colors hover:text-gold"
              >
                Reviews
              </a>
              <a
                href="#faq"
                className="text-sm text-white/70 transition-colors hover:text-gold"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-sm text-white/70 transition-colors hover:text-gold"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="tel:+12813097955"
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-gold"
              >
                <Phone className="size-4 shrink-0" />
                (281) 309-7955
              </a>
              <a
                href="mailto:mwarner@theinspectioncompanytx.com"
                className="flex items-center gap-2 break-all text-sm text-white/70 transition-colors hover:text-gold"
              >
                <Mail className="size-4 shrink-0" />
                mwarner@theinspectioncompanytx.com
              </a>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <MapPin className="size-4 shrink-0" />
                Deer Park, TX. 77536
              </div>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/50 sm:flex-row">
            <p>&copy; {year} The Inspection Company, LLC. All rights reserved.</p>
            <a
              href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5_0.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gold"
            >
              Texas Real Estate Commission Consumer Protection Notice
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
