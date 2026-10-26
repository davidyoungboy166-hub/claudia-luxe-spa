import React from "react";
import { businessConfig, createWhatsAppChatUrl } from "../data/businessConfig";

export default function Footer() {
  const currentYear = 2026;
  const { contact } = businessConfig;

  return (
    <footer className="relative bg-[#2B1D19] text-[#F4EDE4] pt-16 sm:pt-20 pb-[max(3rem,env(safe-area-inset-bottom))] border-t border-[#35251F] overflow-hidden">
      {/* Decorative ambient subtle glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#B98578]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#35251F]">
          {/* Brand & Slogan Column */}
          <div className="lg:col-span-4">
            <a
              href="#hero"
              className="inline-block focus:outline-none focus:ring-1 focus:ring-[#B98578] mb-4"
              aria-label="Claudia Luxe Beauty Spa Home"
            >
              <span className="font-serif text-2xl font-medium tracking-[0.2em] text-[#FFFCF7] uppercase block">
                Claudia Luxe
              </span>
              <span className="text-[10px] tracking-[0.35em] text-[#B98578] font-light uppercase block">
                Beauty Spa
              </span>
            </a>

            <p className="font-serif italic text-lg text-[#D4A99E] mb-6 font-light">
              &ldquo;{businessConfig.slogan}&rdquo;
            </p>

            <p className="text-sm text-[#F4EDE4]/70 leading-relaxed font-light mb-8 max-w-sm">
              An intimate luxury sanctuary dedicated to restorative beauty rituals, botanical wellness, and timeless self-care.
            </p>

            {/* Quick WhatsApp Concierge Button */}
            <a
              href={createWhatsAppChatUrl(contact.whatsappNumber)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B98578] hover:text-[#FFFCF7] border border-[#B98578]/40 hover:border-[#B98578] px-5 py-2.5 rounded-full transition-all duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#B98578] font-medium mb-5">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-[#F4EDE4]/80 font-light">
              <li>
                <a
                  href="#hero"
                  className="hover:text-[#B98578] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#B98578] transition-colors"
                >
                  About Our Spa
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#B98578] transition-colors"
                >
                  Spa Services
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  className="hover:text-[#B98578] transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-[#B98578] transition-colors"
                >
                  Visual Gallery
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="hover:text-[#B98578] transition-colors"
                >
                  Book Appointment
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#B98578] transition-colors"
                >
                  Contact & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Spa Services List */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#B98578] font-medium mb-5">
              Rituals & Services
            </h3>
            <ul className="space-y-3 text-sm text-[#F4EDE4]/80 font-light">
              {businessConfig.services.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    className="hover:text-[#B98578] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#B98578]/60 text-xs">&bull;</span>
                    <span>{srv.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#B98578] font-medium mb-5">
              Concierge Desk
            </h3>
            <div className="space-y-3.5 text-sm text-[#F4EDE4]/80 font-light">
              <p>
                <strong className="block text-xs uppercase tracking-wider text-[#D4A99E] font-medium">
                  WhatsApp:
                </strong>
                <a
                  href={createWhatsAppChatUrl(contact.whatsappNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B98578] transition-colors"
                >
                  {contact.whatsappDisplay}
                </a>
              </p>
              <p>
                <strong className="block text-xs uppercase tracking-wider text-[#D4A99E] font-medium">
                  Phone:
                </strong>
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="hover:text-[#B98578] transition-colors"
                >
                  {contact.phoneDisplay}
                </a>
              </p>
              <p>
                <strong className="block text-xs uppercase tracking-wider text-[#D4A99E] font-medium">
                  Email:
                </strong>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-[#B98578] transition-colors"
                >
                  {contact.email}
                </a>
              </p>
              <p>
                <strong className="block text-xs uppercase tracking-wider text-[#D4A99E] font-medium">
                  Location:
                </strong>
                <span className="leading-snug block">
                  {contact.address.full}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F4EDE4]/60 font-light text-center sm:text-left">
          <p>
            &copy; {currentYear} {businessConfig.brandName}. All rights reserved.
          </p>
          <p>
            Appointments and consultations are arranged directly with our concierge team.
          </p>
        </div>
      </div>
    </footer>
  );
}
