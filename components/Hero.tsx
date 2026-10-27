import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import ParallaxImage from "./ParallaxImage";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFCF7] via-[#F4EDE4]/60 to-[#FFFCF7] min-h-[100dvh] pt-8 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 flex flex-col justify-center"
    >
      {/* Decorative luxury warm-gold ambient background glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B98578]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-[-100px] w-[450px] h-[450px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Brand Message & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <ScrollReveal delay={0}>
              {/* Tagline / Sub-heading badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EDE4] border border-[#E4D6C9] mb-5 sm:mb-6 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B98578] animate-pulse" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#5B4940] font-medium">
                  Claudia Luxe Sanctuary
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              {/* Fluid Headline Typography with clamp() */}
              <h1 className="font-serif text-[clamp(2.15rem,5.5vw,4.5rem)] font-normal tracking-tight text-[#35251F] leading-[1.12] mb-6">
                Elevate Your Beauty,{" "}
                <span className="italic font-light text-[#B98578] block sm:inline">
                  Embrace Your Glow.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              {/* Refined Description */}
              <p className="text-base sm:text-lg md:text-xl text-[#5B4940] leading-relaxed max-w-2xl font-light mb-8 sm:mb-10">
                Step into an intimate sanctuary where restorative skincare, soothing touch, and curated botanical therapies meet. Indulge your senses, unwind deeply, and emerge with a luminous, renewed radiance.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              {/* CTAs with minimum 48px touch targets and active scale */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10 sm:mb-12">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center min-h-[48px] bg-[#B98578] text-[#FFFCF7] hover:bg-[#A36F62] text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg font-medium text-center hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book an Appointment
                  <svg
                    className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center min-h-[48px] bg-[#FFFCF7] text-[#35251F] border border-[#E4D6C9] hover:border-[#B98578] hover:text-[#B98578] text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 font-medium text-center shadow-xs active:scale-[0.98]"
                >
                  Explore Services
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              {/* Key Luxury Badges */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-[#E4D6C9]/80 w-full max-w-xl">
                <div>
                  <span className="block font-serif text-xl sm:text-2xl md:text-3xl font-medium text-[#35251F]">
                    100%
                  </span>
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#5B4940]/90">
                    Tailored Rituals
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-xl sm:text-2xl md:text-3xl font-medium text-[#35251F]">
                    Pure
                  </span>
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#5B4940]/90">
                    Botanical Care
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-xl sm:text-2xl md:text-3xl font-medium text-[#35251F]">
                    Serene
                  </span>
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#5B4940]/90">
                    Private Sanctuary
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Hero Spa Photography with Subtle Parallax Zoom */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <ScrollReveal delay={200}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative Frame Border */}
                <div
                  className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-[#B98578]/40 -rotate-1 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Main Image Container with Inner Parallax / Slow Zoom-Out */}
                <ParallaxImage className="rounded-2xl shadow-2xl bg-[#F4EDE4] aspect-[4/5] border border-[#E4D6C9]">
                  <Image
                    src={(process.env.NEXT_PUBLIC_BASE_PATH || "") + "/images/hero.jpg"}
                    alt="Luxury serene wellness treatment room at Claudia Luxe Beauty Spa with warm candlelight and fresh towels"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                  {/* Subtle Image Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#2B1D19]/40 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </ParallaxImage>

                {/* Floating pill badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-[#FFFCF7]/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-[#E4D6C9] shadow-lg z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F4EDE4] border border-[#B98578]/40 flex items-center justify-center text-[#B98578] shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-serif text-sm font-medium text-[#35251F]">
                        Holistic Self-Care Sanctuary
                      </h2>
                      <p className="text-xs text-[#5B4940] font-light">
                        Personalized sessions crafted for your renewal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
