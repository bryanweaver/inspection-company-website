import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingCallCta } from "@/components/floating-call-cta";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "The Inspection Company – Expert Home Inspections in Houston, TX.",
  description:
    "Professional Houston home inspections by Matthew Warner (TREC #24038). Same-day reports, guided property tours, multilingual service (English/Español/Tiếng Việt). Residential $450, Pool/Spa $125, Sprinkler $75, Termite/WDI $175, Sewer Scope $300. Call (281) 309-7955.",
  keywords: [
    "home inspection Houston TX",
    "home inspector Deer Park TX",
    "Houston home inspection",
    "foundation inspection Houston",
    "same day home inspection report",
    "sewer scope Houston",
    "pool inspection Houston",
    "termite WDI inspection Houston",
    "multilingual home inspector Houston",
    "The Inspection Company",
  ],
  openGraph: {
    title:
      "The Inspection Company – Expert Home Inspections in Houston, TX.",
    description:
      "Same-day reports, guided property tours, multilingual service. Starting at $450. Call (281) 309-7955.",
    type: "website",
    locale: "en_US",
    url: "https://theinspectioncompanytx.com",
    siteName: "The Inspection Company, LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Home Inspections in Houston TX",
    description:
      "Same-day reports. Guided walkthroughs. English, Spanish, Vietnamese. Starting at $450.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-16 sm:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCallCta />
      </body>
    </html>
  );
}
