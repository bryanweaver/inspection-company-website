"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gold/20 bg-black/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo + tagline */}
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/logo-wide.png"
            alt="The Inspection Company, LLC"
            width={220}
            height={77}
            priority
            className="h-12 w-auto sm:h-14"
          />
          <span className="hidden text-xs italic text-gold/80 lg:inline">
            Expert Home Inspections in Houston, TX.
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+12813097955"
            className="ml-3 inline-flex h-10 items-center rounded-full bg-gold px-5 text-sm font-semibold text-black transition-colors hover:bg-gold-light"
          >
            Call Now
          </a>
        </nav>

        {/* Mobile CTA + toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="tel:+12813097955"
            className="inline-flex h-9 items-center rounded-full bg-gold px-4 text-xs font-semibold text-black"
          >
            Call Now
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-white/80 hover:text-gold"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-gold/20 bg-black px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
