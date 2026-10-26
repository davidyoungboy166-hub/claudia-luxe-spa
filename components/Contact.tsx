import React from "react";
import { businessConfig, createWhatsAppChatUrl } from "../data/businessConfig";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const { contact } = businessConfig;

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#FFFCF7] border-t border-[#E4D6C9] overflow-hidden"
    >
      {/* Decorative luxury warm-gold ambient glow blurs */}
      <div
        className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#B98578]/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Fluid Typography */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B98578] font-medium block mb-3">
              Concierge & Location
            </span>
            <h2 className="font-serif text-[clamp(1.85rem,4vw,3.25rem)] font-normal text-[#35251F] tracking-tight mb-6">
              We Welcome Your Presence
            </h2>
            <div className="w-16 h-[1px] bg-[#B98578] mx-auto mb-6" />
            <p className="text-[#5B4940] text-base sm:text-lg leading-relaxed font-light">
              Whether inquiring about bespoke ritual customization, booking private group sanctuary sessions, or finding our location, our concierge is at your service.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Cards Responsive Grid (1 col phone, 2 col tablet, 4 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {/* Card 1: WhatsApp Concierge */}
          <ScrollReveal delay={0} className="h-full">
            <div className="h-full p-7 sm:p-8 rounded-2xl bg-[#F4EDE4]/40 border border-[#E4D6C9] flex flex-col justify-between hover:border-[#B98578]/50 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFFCF7] border border-[#E4D6C9] flex items-center justify-center text-[#B98578] mb-6 shadow-xs">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-medium text-[#35251F] mb-1">
                  WhatsApp
                </h3>
                <p className="text-xs text-[#5B4940] mb-4">
                  Fastest response for bookings & inquiries
                </p>
                <p className="text-sm font-medium text-[#35251F]">
                  {contact.whatsappDisplay}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E4D6C9]/80">
                <a
                  href={createWhatsAppChatUrl(
                    contact.whatsappNumber,
                    "Hello Concierge! I would like to inquire about booking an appointment with Claudia Luxe Beauty Spa."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center min-h-[48px] text-xs uppercase tracking-wider font-medium text-[#B98578] hover:text-[#35251F] active:scale-[0.98] transition-colors"
                >
                  START WHATSAPP CHAT &rarr;
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Phone & Telephone */}
          <ScrollReveal delay={100} className="h-full">
            <div className="h-full p-7 sm:p-8 rounded-2xl bg-[#F4EDE4]/40 border border-[#E4D6C9] flex flex-col justify-between hover:border-[#B98578]/50 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFFCF7] border border-[#E4D6C9] flex items-center justify-center text-[#B98578] mb-6 shadow-xs">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-medium text-[#35251F] mb-1">
                  Direct Line & Email
                </h3>
                <p className="text-xs text-[#5B4940] mb-4">
                  Front desk & concierge reservations
                </p>
                <p className="text-sm font-medium text-[#35251F] mb-1">
                  {contact.phoneDisplay}
                </p>
                <p className="text-xs text-[#5B4940] truncate">
                  {contact.email}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E4D6C9]/80">
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="inline-flex items-center min-h-[48px] text-xs uppercase tracking-wider font-medium text-[#B98578] hover:text-[#35251F] active:scale-[0.98] transition-colors"
                >
                  CALL FRONT DESK &rarr;
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Location */}
          <ScrollReveal delay={200} className="h-full">
            <div className="h-full p-7 sm:p-8 rounded-2xl bg-[#F4EDE4]/40 border border-[#E4D6C9] flex flex-col justify-between hover:border-[#B98578]/50 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFFCF7] border border-[#E4D6C9] flex items-center justify-center text-[#B98578] mb-6 shadow-xs">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-medium text-[#35251F] mb-1">
                  Sanctuary Address
                </h3>
                <p className="text-xs text-[#5B4940] mb-4">
                  Valet & private parking available
                </p>
                <address className="not-italic text-sm text-[#35251F] leading-snug">
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                </address>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E4D6C9]/80">
                <a
                  href={contact.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center min-h-[48px] text-xs uppercase tracking-wider font-medium text-[#B98578] hover:text-[#35251F] active:scale-[0.98] transition-colors"
                >
                  VIEW ON MAP &rarr;
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: Hours */}
          <ScrollReveal delay={300} className="h-full">
            <div className="h-full p-7 sm:p-8 rounded-2xl bg-[#F4EDE4]/40 border border-[#E4D6C9] flex flex-col justify-between hover:border-[#B98578]/50 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFFCF7] border border-[#E4D6C9] flex items-center justify-center text-[#B98578] mb-6 shadow-xs">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-medium text-[#35251F] mb-1">
                  Opening Hours
                </h3>
                <p className="text-xs text-[#5B4940] mb-4">
                  By appointment and walk-in based on availability
                </p>
                <div className="space-y-1.5 text-xs text-[#35251F]">
                  {contact.openingHours.map((slot) => (
                    <div key={slot.days} className="flex justify-between">
                      <span className="font-medium text-[#5B4940]">{slot.days}:</span>
                      <span>{slot.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E4D6C9]/80">
                <a
                  href="#booking"
                  className="inline-flex items-center min-h-[48px] text-xs uppercase tracking-wider font-medium text-[#B98578] hover:text-[#35251F] active:scale-[0.98] transition-colors"
                >
                  RESERVE SLOT &rarr;
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Social Media Channels */}
        <ScrollReveal delay={200}>
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F4EDE4]/60 border border-[#E4D6C9] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="font-serif text-lg text-[#35251F] font-medium mb-1">
                Follow Our Beauty Journey
              </h3>
              <p className="text-xs text-[#5B4940]">
                Discover daily self-care rituals, treatment spotlights, and wellness inspirations.
              </p>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3">
              <a
                href={contact.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Claudia Luxe Beauty Spa on Instagram"
                className="px-4 py-2.5 min-h-[44px] flex items-center justify-center rounded-full bg-[#FFFCF7] border border-[#E4D6C9] text-xs font-medium text-[#35251F] hover:text-[#B98578] hover:border-[#B98578] active:scale-[0.98] transition-colors"
              >
                Instagram
              </a>
              <a
                href={contact.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Claudia Luxe Beauty Spa on Facebook"
                className="px-4 py-2.5 min-h-[44px] flex items-center justify-center rounded-full bg-[#FFFCF7] border border-[#E4D6C9] text-xs font-medium text-[#35251F] hover:text-[#B98578] hover:border-[#B98578] active:scale-[0.98] transition-colors"
              >
                Facebook
              </a>
              <a
                href={contact.socialMedia.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Claudia Luxe Beauty Spa on Pinterest"
                className="px-4 py-2.5 min-h-[44px] flex items-center justify-center rounded-full bg-[#FFFCF7] border border-[#E4D6C9] text-xs font-medium text-[#35251F] hover:text-[#B98578] hover:border-[#B98578] active:scale-[0.98] transition-colors"
              >
                Pinterest
              </a>
              <a
                href={contact.socialMedia.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Claudia Luxe Beauty Spa on TikTok"
                className="px-4 py-2.5 min-h-[44px] flex items-center justify-center rounded-full bg-[#FFFCF7] border border-[#E4D6C9] text-xs font-medium text-[#35251F] hover:text-[#B98578] hover:border-[#B98578] active:scale-[0.98] transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
