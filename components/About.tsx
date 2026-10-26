import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import ParallaxImage from "./ParallaxImage";
import FloatingParallax from "./FloatingParallax";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#FFFCF7] border-t border-[#E4D6C9] overflow-hidden"
    >
      {/* Decorative luxury warm-gold ambient glow blurs */}
      <div
        className="absolute top-1/2 -left-48 w-96 h-96 bg-[#B98578]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-[-100px] w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Fluid Typography */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B98578] font-medium block mb-3">
              Our Philosophy
            </span>
            <h2 className="font-serif text-[clamp(1.85rem,4vw,3.25rem)] font-normal text-[#35251F] tracking-tight leading-tight mb-6">
              Where Beauty Flourishes in Quiet Tranquility
            </h2>
            <div className="w-16 h-[1px] bg-[#B98578] mx-auto mb-6" />
            <p className="text-[#5B4940] text-base sm:text-lg leading-relaxed font-light">
              Claudia Luxe Beauty Spa was born from the belief that authentic beauty is an extension of deep, unhurried self-care. We invite you to pause, breathe, and experience therapies designed to nurture your skin, soothe your spirit, and awaken your inner glow.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Story & Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Dual Image Composition with Parallax Zoom & Differential Floating Scroll */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal delay={100}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Decorative Accent Frame with subtle counter-drift */}
                <FloatingParallax
                  speed={20}
                  direction="up"
                  className="absolute -top-4 -left-4 w-28 h-28 pointer-events-none z-0"
                >
                  <div
                    className="w-full h-full border-t-2 border-l-2 border-[#B98578]/50 rounded-tl-2xl"
                    aria-hidden="true"
                  />
                </FloatingParallax>

                {/* Primary Image with Inner Parallax & Gentle Drift */}
                <FloatingParallax speed={18} direction="down" className="w-full relative z-10">
                  <ParallaxImage className="aspect-[4/5] rounded-2xl shadow-xl border border-[#E4D6C9] bg-[#F4EDE4]">
                    <Image
                      src="/images/about-primary.jpg"
                      alt="Aesthetic spa essentials with organic oils and botanical petals at Claudia Luxe Beauty Spa"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </ParallaxImage>
                </FloatingParallax>

                {/* Overlapping Secondary Card with Counter Differential Parallax Float */}
                <FloatingParallax
                  speed={65}
                  direction="up"
                  className="hidden sm:block absolute -bottom-8 -right-6 w-3/5 aspect-[4/3] z-20"
                >
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border-4 border-[#FFFCF7] bg-[#F4EDE4]">
                    <ParallaxImage className="w-full h-full">
                      <Image
                        src="/images/about-secondary.jpg"
                        alt="Candlelit aromatherapy relaxation corner"
                        fill
                        className="object-cover"
                        sizes="35vw"
                      />
                    </ParallaxImage>
                  </div>
                </FloatingParallax>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Narrative & Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <ScrollReveal delay={120}>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B98578] font-medium mb-3 block">
                The Claudia Luxe Experience
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#35251F] font-normal leading-snug mb-6">
                A Bespoke Approach to Modern Feminine Wellness
              </h3>
              <p className="text-[#5B4940] text-base leading-relaxed mb-8 font-light">
                We reject one-size-fits-all beauty. Each visit begins with an intuitive understanding of what your skin and body need today—whether it is intense hydration, muscle decompression, or serene stillness. Our therapies combine the wisdom of time-honored botanical extracts with delicate, modern esthetic precision.
              </p>
            </ScrollReveal>

            {/* 3 Pillars List with Staggered Delays & Interactive Gliding Hover */}
            <div className="space-y-5">
              <ScrollReveal delay={180} distance={24}>
                <div className="group flex items-start gap-4 p-5 rounded-xl bg-[#F4EDE4]/60 border border-[#E4D6C9]/80 transition-all duration-300 hover:border-[#B98578]/70 hover:-translate-y-1 hover:shadow-md hover:bg-[#F4EDE4]">
                  <div className="w-10 h-10 rounded-full bg-[#FFFCF7] border border-[#B98578]/30 flex items-center justify-center text-[#B98578] shrink-0 font-serif text-lg group-hover:bg-[#B98578] group-hover:text-[#FFFCF7] group-hover:border-[#B98578] transition-colors duration-300 shadow-sm">
                    01
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-[#35251F] mb-1 group-hover:text-[#B98578] transition-colors duration-200">
                      Bespoke Personalization
                    </h4>
                    <p className="text-sm text-[#5B4940] font-light leading-relaxed">
                      Formulations, pressure, and aromatherapy blends are curated to your exact skin type and wellness intentions.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={280} distance={24}>
                <div className="group flex items-start gap-4 p-5 rounded-xl bg-[#F4EDE4]/60 border border-[#E4D6C9]/80 transition-all duration-300 hover:border-[#B98578]/70 hover:-translate-y-1 hover:shadow-md hover:bg-[#F4EDE4]">
                  <div className="w-10 h-10 rounded-full bg-[#FFFCF7] border border-[#B98578]/30 flex items-center justify-center text-[#B98578] shrink-0 font-serif text-lg group-hover:bg-[#B98578] group-hover:text-[#FFFCF7] group-hover:border-[#B98578] transition-colors duration-300 shadow-sm">
                    02
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-[#35251F] mb-1 group-hover:text-[#B98578] transition-colors duration-200">
                      Holistic Relaxation
                    </h4>
                    <p className="text-sm text-[#5B4940] font-light leading-relaxed">
                      Soothing acoustic frequencies, warm herbal compresses, and calming private suites that silence the outside world.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={380} distance={24}>
                <div className="group flex items-start gap-4 p-5 rounded-xl bg-[#F4EDE4]/60 border border-[#E4D6C9]/80 transition-all duration-300 hover:border-[#B98578]/70 hover:-translate-y-1 hover:shadow-md hover:bg-[#F4EDE4]">
                  <div className="w-10 h-10 rounded-full bg-[#FFFCF7] border border-[#B98578]/30 flex items-center justify-center text-[#B98578] shrink-0 font-serif text-lg group-hover:bg-[#B98578] group-hover:text-[#FFFCF7] group-hover:border-[#B98578] transition-colors duration-300 shadow-sm">
                    03
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-[#35251F] mb-1 group-hover:text-[#B98578] transition-colors duration-200">
                      Pure Botanical Formulations
                    </h4>
                    <p className="text-sm text-[#5B4940] font-light leading-relaxed">
                      Rich plant oils, active peptides, and mineral-dense salts chosen for their restorative biocompatibility and gentle radiance.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
