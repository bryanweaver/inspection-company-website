"use client";

import { useCallback, useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Daniel Carrasco",
    initials: "DC",
    text: "Without question, Matthew is the best at what he does. Buying a home is one of the biggest financial decisions anyone can make, and it can easily turn into a costly mistake without the right guidance. Matthew's unmatched professionalism, sharp attention to detail, and unwavering commitment to my best interests gave me complete confidence every step of the way. He didn't just help me purchase a home he protected my investment. I fully intend to work with him again in the future, and I wouldn't trust anyone else with a decision of this magnitude!",
  },
  {
    name: "Jasmine Mendoza",
    initials: "JM",
    text: "I had a great experience with The Inspection Company. Matt handled my inspection and was extremely attentive to detail. He walked us through the house, explaining what he found and what he was looking for along the way. His customer service and communication were top-notch. He was very accommodating when we needed to reschedule and provided the inspection report incredibly quickly. We received the full report within just two hours of the inspection! If you're looking for a high-quality, thorough inspection at a fair price, I highly recommend The Inspection Company.",
  },
  {
    name: "Justin Rainer",
    initials: "JR",
    text: "The Inspection Company performed an inspection on our soon to be home that exceeded our expectations. We were scheduled promptly, and between the level of professionalism and communication that was provided and the thoroughness of the report, we could not be happier. Thanks to The Inspection Company, we feel that we have a solid grasp on the physical state of our soon the be home which gives us confidence and peace of mind. The house isn't perfect, but we now know every imperfection intimately. Would highly recommend!",
  },
  {
    name: "Martin Hermocillo",
    initials: "MH",
    text: "Mr. Warner was very accommodating when scheduling conflicts came up. He was thorough and able to spot areas of concern before they could become costly repairs.",
  },
  {
    name: "Vinny Ngo",
    initials: "VN",
    text: "Matt was fantastic to work with, thorough, professional, and easy to communicate with. He took the time to explain everything clearly and made sure I understood the details of the inspection. His report was detailed and delivered quickly. I'd definitely recommend Matt to anyone needing a reliable home inspector!",
  },
];

const AUTOPLAY_MS = 7000;

function StarRating() {
  return (
    <div
      className="flex gap-1"
      role="img"
      aria-label="5 out of 5 stars"
    >
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="size-5 fill-gold text-gold" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = testimonials.length;

  const goTo = useCallback(
    (i: number) => setIndex(((i % total) + total) % total),
    [total],
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Autoplay — pauses on hover / focus
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, total]);

  // Keyboard nav when the region has focus
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const region = document.getElementById("reviews-carousel");
      if (!region?.contains(document.activeElement)) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  return (
    <section id="reviews" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gold sm:text-4xl">
            What Houston Home Buyers Are Saying
          </h2>
        </div>

        <div
          id="reviews-carousel"
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          {/* Slide viewport — translate-based carousel */}
          <div className="overflow-hidden rounded-2xl border border-gold/20 bg-white/5 backdrop-blur-sm">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <figure
                  key={t.name}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${total}`}
                  aria-hidden={i !== index}
                  className="w-full shrink-0 px-6 py-10 sm:px-16 sm:py-14"
                >
                  <div className="flex justify-center">
                    <StarRating />
                  </div>
                  <blockquote className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-white/90 sm:text-lg">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 flex flex-col items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-full bg-gold/20 text-base font-semibold text-gold">
                      {t.initials}
                    </div>
                    <p className="text-base font-semibold text-white">
                      {t.name}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Prev / next — positioned inside the viewport on mobile so they don't clip */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-black/80 text-gold shadow-lg backdrop-blur-sm transition-colors hover:bg-gold hover:text-black sm:-left-5 sm:size-12"
          >
            <ChevronLeft className="size-5 sm:size-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-black/80 text-gold shadow-lg backdrop-blur-sm transition-colors hover:bg-gold hover:text-black sm:-right-5 sm:size-12"
          >
            <ChevronRight className="size-5 sm:size-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2" role="tablist">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to testimonial ${i + 1} — ${t.name}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-gold"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
