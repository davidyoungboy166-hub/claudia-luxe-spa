"use client";

import React from "react";
import Image from "next/image";
import { businessConfig, ServiceItem } from "../data/businessConfig";
import ScrollReveal from "./ScrollReveal";
import ParallaxImage from "./ParallaxImage";

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const handleBookService = (service: ServiceItem) => {
    if (onSelectService) {
      onSelectService(service.name);
    }
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#F4EDE4] border-t border-[#E4D6C9] overflow-hidden"
    >
      {/* Decorative luxury warm-gold ambient glow blurs */}
      <div
        className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-[#B98578]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -left-40 w-[450px] h-[450px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Fluid Typography */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B98578] font-medium block mb-3">
              Signature Spa Rituals
            </span>
            <h2 className="font-serif text-[clamp(1.85rem,4vw,3.25rem)] font-normal text-[#35251F] tracking-tight mb-6">
              Curated Services for Radiance & Renewal
            </h2>
            <div className="w-16 h-[1px] bg-[#B98578] mx-auto mb-6" />
            <p className="text-[#5B4940] text-base sm:text-lg leading-relaxed font-light">
              Every session is designed as a sensory escape, blending targeted esthetic care with deep, holistic tranquility. Choose your ritual below to reserve your personalized experience.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Service Cards Grid (1 col phone, 2 col tablet, 4 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessConfig.services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100} className="h-full">
              <article className="group bg-[#FFFCF7] rounded-2xl overflow-hidden border border-[#E4D6C9] shadow-sm hover:shadow-xl hover:border-[#B98578]/50 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  {/* Image Container with Inner Parallax / Slow Zoom-Out */}
                  <ParallaxImage className="aspect-[16/10] bg-[#F4EDE4]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#2B1D19]/60 via-transparent to-transparent pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Top badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                      <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium bg-[#FFFCF7]/95 text-[#35251F] border border-[#E4D6C9] backdrop-blur-xs">
                        Ritual 0{index + 1}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] tracking-wide font-medium bg-[#2B1D19]/80 text-[#FFFCF7] backdrop-blur-xs">
                        {service.duration}
                      </span>
                    </div>

                    {/* Tagline inside image footer */}
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <span className="text-[11px] uppercase tracking-widest text-[#F4EDE4] font-medium drop-shadow-xs">
                        {service.tagline}
                      </span>
                    </div>
                  </ParallaxImage>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#35251F] mb-2.5 group-hover:text-[#B98578] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-[#5B4940] text-xs sm:text-sm leading-relaxed mb-5 font-light line-clamp-3">
                      {service.description}
                    </p>

                    {/* Highlights checklist */}
                    <div className="space-y-1.5 mb-6 pt-3.5 border-t border-[#E4D6C9]/60">
                      {service.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-center text-xs text-[#5B4940]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B98578] mr-2 shrink-0" />
                          <span className="truncate">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button (48px min touch target) */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 mt-auto">
                  <button
                    type="button"
                    onClick={() => handleBookService(service)}
                    className="w-full inline-flex items-center justify-center min-h-[48px] bg-[#F4EDE4] text-[#35251F] hover:bg-[#B98578] hover:text-[#FFFCF7] active:scale-[0.98] border border-[#E4D6C9] hover:border-[#B98578] text-xs uppercase tracking-widest py-3 px-5 rounded-xl transition-all duration-300 font-medium group/btn shadow-xs focus:outline-none focus:ring-2 focus:ring-[#B98578]"
                  >
                    <span>Book This Service</span>
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
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
                  </button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
