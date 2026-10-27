import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import ParallaxImage from "./ParallaxImage";

export default function Gallery() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const galleryItems = [
    {
      id: "gal-1",
      title: "Tranquil Treatment Sanctuary",
      category: "Suite Interior",
      image: `${basePath}/images/gallery-1.jpg`,
      alt: "Serene private spa treatment room with soft warm illumination and treatment table",
    },
    {
      id: "gal-2",
      title: "Handcrafted Organic Botanicals",
      category: "Aromatherapy",
      image: `${basePath}/images/gallery-3.jpg`,
      alt: "Aromatherapy essential oils and candlelit spa ambiance with fresh florals",
    },
    {
      id: "gal-3",
      title: "Cellular Facial Renewal",
      category: "Skincare",
      image: `${basePath}/images/gallery-4.jpg`,
      alt: "Client experiencing luxury relaxing facial skincare therapy",
    },
    {
      id: "gal-4",
      title: "Heated Basalt Stone Alignment",
      category: "Bodywork",
      image: `${basePath}/images/gallery-5.jpg`,
      alt: "Hot basalt stones and soothing massage treatment",
    },
    {
      id: "gal-5",
      title: "Artisan Manicure & Pedicure Lounge",
      category: "Nail Care",
      image: `${basePath}/images/gallery-2.jpg`,
      alt: "Luxury rose gold manicure lounge setup with premium grooming essentials",
    },
    {
      id: "gal-6",
      title: "Mineral Salt & Herbal Infusions",
      category: "Rituals",
      image: `${basePath}/images/gallery-6.jpg`,
      alt: "Organic sea salts and restorative body scrub ingredients",
    },
  ];

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#F4EDE4] border-t border-[#E4D6C9] overflow-hidden"
    >
      {/* Decorative luxury warm-gold ambient glow blurs */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B98578]/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-[-100px] w-[450px] h-[450px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Fluid Typography */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B98578] font-medium block mb-3">
              Visual Sanctuary
            </span>
            <h2 className="font-serif text-[clamp(1.85rem,4vw,3.25rem)] font-normal text-[#35251F] tracking-tight mb-6">
              Moments of Stillness & Grace
            </h2>
            <div className="w-16 h-[1px] bg-[#B98578] mx-auto mb-6" />
            <p className="text-[#5B4940] text-base sm:text-lg leading-relaxed font-light">
              Glimpse into the serene ambiance, botanical touches, and calm elegance waiting for you at Claudia Luxe Beauty Spa.
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery Grid (1 col phone, 2 col tablet, 3 col desktop) with 0.1s Staggered Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 100}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#F4EDE4] border border-[#E4D6C9] shadow-xs hover:shadow-xl transition-all duration-500">
                {/* Parallax Image Container */}
                <ParallaxImage className="w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </ParallaxImage>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1D19]/80 via-[#2B1D19]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6 z-10 pointer-events-none">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4A99E] font-medium mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#FFFCF7] font-medium leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
