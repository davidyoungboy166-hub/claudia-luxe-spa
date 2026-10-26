"use client";

import React, { useState, useEffect } from "react";
import { businessConfig, createWhatsAppChatUrl } from "../data/businessConfig";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-[100] transition-all duration-300 backdrop-blur-glass ${
        isScrolled
          ? "bg-[#FFFCF7]/95 shadow-sm border-b border-[#E4D6C9] py-3.5"
          : "bg-[#FFFCF7]/90 border-b border-[#E4D6C9]/60 py-4 sm:py-5"
      }`}
      style={{
        WebkitBackdropFilter: "blur(20px)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <a
            href="#hero"
            className="group flex flex-col focus:outline-none focus:ring-2 focus:ring-[#B98578] rounded px-1 min-h-[44px] justify-center"
            aria-label="Claudia Luxe Beauty Spa - Home"
          >
            <span className="font-serif text-xl sm:text-2xl font-medium tracking-[0.2em] text-[#35251F] group-hover:text-[#B98578] transition-colors uppercase">
              Claudia Luxe
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-[#B98578] font-sans font-light uppercase">
              Beauty Spa
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-6 lg:space-x-8"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-medium tracking-widest text-[#5B4940] hover:text-[#B98578] uppercase transition-colors duration-200 py-1 border-b border-transparent hover:border-[#B98578]/50 active:scale-[0.98]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Book CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#booking"
              className="inline-flex items-center justify-center bg-[#B98578] text-[#FFFCF7] hover:bg-[#A36F62] text-xs uppercase tracking-widest px-6 py-3 min-h-[48px] rounded-full transition-all duration-300 shadow-sm hover:shadow hover:scale-[1.02] active:scale-[0.98] font-medium"
            >
              Book an Appointment
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button (48x48 min touch target) */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[48px] min-h-[48px] p-3 text-[#35251F] hover:text-[#B98578] active:scale-[0.95] focus:outline-none focus:ring-2 focus:ring-[#B98578] rounded-xl flex items-center justify-center transition-all bg-[#F4EDE4]/50 border border-[#E4D6C9]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Toggle navigation menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer (Smooth slide-in with glass blur) */}
        {mobileMenuOpen && (
          <div
            className="md:hidden fixed inset-x-0 top-[73px] bottom-0 bg-[#FFFCF7]/95 backdrop-blur-glass z-[99] border-t border-[#E4D6C9] overflow-y-auto px-6 py-8 flex flex-col justify-between animate-in fade-in slide-in-from-top-4 duration-300"
            style={{
              WebkitBackdropFilter: "blur(20px)",
              backdropFilter: "blur(20px)",
            }}
          >
            <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation Drawer">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between min-h-[48px] px-4 py-3 text-sm uppercase tracking-widest text-[#35251F] hover:text-[#B98578] hover:bg-[#F4EDE4]/60 rounded-xl transition-all font-medium border border-transparent hover:border-[#E4D6C9] active:scale-[0.98]"
                >
                  <span>{link.name}</span>
                  <span className="text-[#B98578]/50 text-xs" aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </nav>

            {/* Bottom Actions inside Mobile Drawer */}
            <div className="pt-8 border-t border-[#E4D6C9] mt-6 space-y-3">
              <a
                href="#booking"
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center min-h-[48px] bg-[#B98578] text-[#FFFCF7] hover:bg-[#A36F62] active:scale-[0.98] text-xs uppercase tracking-widest px-6 py-3.5 rounded-full transition-all font-medium shadow-sm text-center"
              >
                Book an Appointment
              </a>

              <a
                href={createWhatsAppChatUrl(
                  businessConfig.contact.whatsappNumber,
                  "Hello Concierge! I would like to inquire about booking an appointment with Claudia Luxe Beauty Spa."
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center min-h-[48px] bg-[#FFFCF7] text-[#35251F] border border-[#E4D6C9] hover:border-[#B98578] hover:text-[#B98578] active:scale-[0.98] text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all font-medium text-center"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366] mr-2" />
                WhatsApp Concierge
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
