import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function WhyChooseUs() {
  const values = [
    {
      title: "Personalised Care",
      subtitle: "Tailored to Your Body & Skin",
      description:
        "Every visit begins with an attentive consultation. We listen to your concerns, assess your skin's immediate needs, and adapt our techniques, pressure, and botanical blends specifically for you.",
      icon: (
        <svg
          className="w-6 h-6 text-[#B98578]"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      ),
    },
    {
      title: "Tranquil Relaxation",
      subtitle: "An Escape from Daily Rhythms",
      description:
        "Our spa is engineered as a haven of stillness. From heated treatment tables and organic aromatics to soft acoustic tones, every element is harmonized to ease your nervous system into restorative rest.",
      icon: (
        <svg
          className="w-6 h-6 text-[#B98578]"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      ),
    },
    {
      title: "Elevated Beauty Experiences",
      subtitle: "Visible Radiance & Pure Ingredients",
      description:
        "We pair refined esthetic methodologies with nutrient-dense botanical oils, active plant essences, and clean formulas that nourish your natural radiance without harsh chemicals.",
      icon: (
        <svg
          className="w-6 h-6 text-[#B98578]"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
          />
        </svg>
      ),
    },
    {
      title: "Attention to Detail",
      subtitle: "Flawless Standards of Comfort",
      description:
        "Every linen is plush and pristine, every glass of herbal infusion is brewed fresh, and our suites are kept at optimal temperature for uninterrupted calm from greeting to farewell.",
      icon: (
        <svg
          className="w-6 h-6 text-[#B98578]"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#FFFCF7] border-t border-[#E4D6C9] overflow-hidden"
    >
      {/* Decorative luxury warm-gold ambient glow blurs */}
      <div
        className="absolute top-1/4 -left-40 w-96 h-96 bg-[#B98578]/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Fluid Typography */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B98578] font-medium block mb-3">
              The Claudia Luxe Standard
            </span>
            <h2 className="font-serif text-[clamp(1.85rem,4vw,3.25rem)] font-normal text-[#35251F] tracking-tight mb-6">
              Designed for Beauty, Devoted to Stillness
            </h2>
            <div className="w-16 h-[1px] bg-[#B98578] mx-auto mb-6" />
            <p className="text-[#5B4940] text-base sm:text-lg leading-relaxed font-light">
              We hold ourselves to an uncompromising standard of hospitality, craftsmanship, and aesthetic grace. Here is what sets our sanctuary apart.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Pillars Responsive Grid (1 col phone, 2 col tablet, 4 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((val, index) => (
            <ScrollReveal key={val.title} delay={index * 100} className="h-full">
              <div className="p-7 sm:p-8 rounded-2xl bg-[#F4EDE4]/40 border border-[#E4D6C9] hover:border-[#B98578]/50 hover:bg-[#F4EDE4]/70 transition-all duration-300 flex flex-col justify-between group shadow-2xs h-full">
                <div>
                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-xl bg-[#FFFCF7] border border-[#E4D6C9] flex items-center justify-center mb-6 shadow-xs group-hover:border-[#B98578]/50 transition-colors">
                    {val.icon}
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#35251F] mb-1">
                    {val.title}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-[#B98578] block mb-4 font-medium">
                    {val.subtitle}
                  </span>

                  <p className="text-[#5B4940] text-sm leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E4D6C9]/60 flex items-center gap-1.5 text-xs text-[#B98578] font-medium uppercase tracking-wider">
                  <span>The Luxe Ritual</span>
                  <span aria-hidden="true">&rarr;</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
