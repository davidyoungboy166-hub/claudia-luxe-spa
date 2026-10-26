"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import BookingSection from "../components/BookingSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SmoothScroll from "../components/SmoothScroll";
import GrainOverlay from "../components/GrainOverlay";

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>(
    "Facials & Skincare"
  );

  return (
    <div className="relative flex flex-col min-h-screen bg-[#FFFCF7] text-[#5B4940] selection:bg-[#B98578] selection:text-[#FFFCF7]">
      {/* Linen / Fine-Grain Texture Overlay */}
      <GrainOverlay />

      {/* Buttery Smooth Momentum Scrolling */}
      <SmoothScroll />

      {/* 1. Responsive Navigation Bar */}
      <Navbar />

      <main className="flex-grow relative">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Services Section (with Book This Service automatic selection) */}
        <Services onSelectService={setSelectedService} />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Gallery Section */}
        <Gallery />

        {/* 7. Appointment Booking Section (Validated + WhatsApp redirect) */}
        <BookingSection
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />

        {/* 8. Contact Section (Concierge, Hours, Location, Socials) */}
        <Contact />
      </main>

      {/* 9. Premium Dark Espresso Footer */}
      <Footer />

      {/* Floating Reusable WhatsApp Concierge Button */}
      <WhatsAppButton
        variant="floating"
        customMessage="Hello Concierge! I am visiting your website and would like to ask a question about Claudia Luxe Beauty Spa."
      />
    </div>
  );
}
