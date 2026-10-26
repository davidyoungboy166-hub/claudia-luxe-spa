"use client";

import React, { useState } from "react";
import {
  businessConfig,
  formatWhatsAppBookingMessage,
  createWhatsAppChatUrl,
} from "../data/businessConfig";
import ScrollReveal from "./ScrollReveal";

interface BookingSectionProps {
  selectedService: string;
  onServiceChange: (serviceName: string) => void;
}

export default function BookingSection({
  selectedService,
  onServiceChange,
}: BookingSectionProps) {
  // Form fields
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [minDate, setMinDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  // UI status & validation
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<
    "idle" | "ready-for-whatsapp"
  >("idle");

  // Defer date calculation to user interaction to prevent unstable prerender values
  const ensureMinDate = () => {
    if (!minDate) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      setMinDate(`${yyyy}-${mm}-${dd}`);
    }
  };

  const availableTimes = [
    "09:30 AM",
    "11:00 AM",
    "12:30 PM",
    "02:00 PM",
    "03:30 PM",
    "05:00 PM",
    "06:30 PM",
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!phone.trim()) {
      newErrors.phone = "Please enter your WhatsApp contact number.";
    } else {
      const phoneDigits = phone.replace(/[^0-9]/g, "");
      if (phoneDigits.length < 8) {
        newErrors.phone = "Please enter a valid phone number with area code.";
      }
    }

    if (!selectedService) {
      newErrors.service = "Please choose a desired treatment ritual.";
    }

    if (!date) {
      newErrors.date = "Please select your appointment date.";
    } else {
      const selected = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      selected.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.date = "Appointment date cannot be in the past.";
      }
    }

    if (!time) {
      newErrors.time = "Please choose a preferred time slot.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Prepare formatted WhatsApp message
    const formattedMsg = formatWhatsAppBookingMessage({
      fullName,
      phone,
      service: selectedService,
      date,
      time,
      message: notes,
    });

    const whatsappUrl = createWhatsAppChatUrl(
      businessConfig.contact.whatsappNumber,
      formattedMsg
    );

    setSubmittedStatus("ready-for-whatsapp");

    // Open WhatsApp in a new tab
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="booking"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#FFFCF7] border-t border-[#E4D6C9] overflow-hidden"
    >
      {/* Decorative luxury warm-gold ambient glow blurs */}
      <div
        className="absolute top-1/3 left-[-150px] w-[500px] h-[500px] bg-[#B98578]/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-[-150px] w-[500px] h-[500px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Fluid Typography */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B98578] font-medium block mb-3">
              Reserve Your Sanctuary Time
            </span>
            <h2 className="font-serif text-[clamp(1.85rem,4vw,3.25rem)] font-normal text-[#35251F] tracking-tight mb-6">
              Book an Appointment
            </h2>
            <div className="w-16 h-[1px] bg-[#B98578] mx-auto mb-6" />
            <p className="text-[#5B4940] text-base sm:text-lg leading-relaxed font-light">
              Fill in your preferred details below. When you click reserve, your inquiry is prepared and WhatsApp opens directly with our concierge team to confirm availability.
            </p>
          </div>
        </ScrollReveal>

        {/* Card Form Container */}
        <ScrollReveal delay={100}>
          <div className="bg-[#F4EDE4]/40 rounded-3xl border border-[#E4D6C9] p-6 sm:p-10 lg:p-12 shadow-sm">
            {/* Informational Guidance Notice */}
            <div className="mb-8 p-4 rounded-xl bg-[#FFFCF7] border border-[#E4D6C9] flex items-start gap-3.5">
              <svg
                className="w-5 h-5 text-[#B98578] shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              <p className="text-xs sm:text-sm text-[#5B4940] leading-relaxed">
                <strong className="text-[#35251F] font-medium">
                  Direct WhatsApp Confirmation:
                </strong>{" "}
                Submitting this form formats your requested details and connects you directly to our WhatsApp concierge. Please press <em>Send</em> inside WhatsApp to deliver your inquiry. Our team will verify time slot availability with you.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Full Name & WhatsApp Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="full-name"
                    className="block text-xs uppercase tracking-wider font-medium text-[#35251F] mb-2"
                  >
                    Full Name <span className="text-[#B98578]">*</span>
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) {
                        setErrors((prev) => ({ ...prev, fullName: "" }));
                      }
                    }}
                    placeholder="e.g. Sophia Montgomery"
                    className={`w-full px-4 py-3 min-h-[48px] rounded-xl bg-[#FFFCF7] border ${
                      errors.fullName ? "border-red-400" : "border-[#E4D6C9]"
                    } text-[#35251F] placeholder-[#5B4940]/50 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B98578] transition-all`}
                    required
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="whatsapp-phone"
                    className="block text-xs uppercase tracking-wider font-medium text-[#35251F] mb-2"
                  >
                    Customer WhatsApp Phone <span className="text-[#B98578]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="whatsapp-phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) {
                        setErrors((prev) => ({ ...prev, phone: "" }));
                      }
                    }}
                    placeholder="e.g. +233 25 628 3126"
                    className={`w-full px-4 py-3 min-h-[48px] rounded-xl bg-[#FFFCF7] border ${
                      errors.phone ? "border-red-400" : "border-[#E4D6C9]"
                    } text-[#35251F] placeholder-[#5B4940]/50 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B98578] transition-all`}
                    required
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Preferred Service Selection */}
              <div>
                <label
                  htmlFor="service-select"
                  className="block text-xs uppercase tracking-wider font-medium text-[#35251F] mb-2"
                >
                  Preferred Service <span className="text-[#B98578]">*</span>
                </label>
                <select
                  id="service-select"
                  name="service"
                  value={selectedService}
                  onChange={(e) => {
                    onServiceChange(e.target.value);
                    if (errors.service) {
                      setErrors((prev) => ({ ...prev, service: "" }));
                    }
                  }}
                  className={`w-full px-4 py-3 min-h-[48px] rounded-xl bg-[#FFFCF7] border ${
                    errors.service ? "border-red-400" : "border-[#E4D6C9]"
                  } text-[#35251F] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B98578] transition-all`}
                  required
                >
                  <option value="">Select a signature treatment...</option>
                  {businessConfig.services.map((srv) => (
                    <option key={srv.id} value={srv.name}>
                      {srv.name} ({srv.duration})
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.service}</p>
                )}
              </div>

              {/* Appointment Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="appointment-date"
                    className="block text-xs uppercase tracking-wider font-medium text-[#35251F] mb-2"
                  >
                    Preferred Date <span className="text-[#B98578]">*</span>
                  </label>
                  <input
                    type="date"
                    id="appointment-date"
                    name="date"
                    min={minDate || undefined}
                    value={date}
                    onFocus={ensureMinDate}
                    onClick={ensureMinDate}
                    onChange={(e) => {
                      setDate(e.target.value);
                      if (errors.date) {
                        setErrors((prev) => ({ ...prev, date: "" }));
                      }
                    }}
                    className={`w-full px-4 py-3 min-h-[48px] rounded-xl bg-[#FFFCF7] border ${
                      errors.date ? "border-red-400" : "border-[#E4D6C9]"
                    } text-[#35251F] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B98578] transition-all`}
                    required
                  />
                  {errors.date && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.date}</p>
                  )}
                  <span className="text-[11px] text-[#5B4940]/70 mt-1 block">
                    Past dates are disabled.
                  </span>
                </div>

                <div>
                  <label
                    htmlFor="appointment-time"
                    className="block text-xs uppercase tracking-wider font-medium text-[#35251F] mb-2"
                  >
                    Preferred Time <span className="text-[#B98578]">*</span>
                  </label>
                  <select
                    id="appointment-time"
                    name="time"
                    value={time}
                    onChange={(e) => {
                      setTime(e.target.value);
                      if (errors.time) {
                        setErrors((prev) => ({ ...prev, time: "" }));
                      }
                    }}
                    className={`w-full px-4 py-3 min-h-[48px] rounded-xl bg-[#FFFCF7] border ${
                      errors.time ? "border-red-400" : "border-[#E4D6C9]"
                    } text-[#35251F] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B98578] transition-all`}
                    required
                  >
                    <option value="">Select a preferred time slot...</option>
                    {availableTimes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.time}</p>
                  )}
                </div>
              </div>

              {/* Optional Message */}
              <div>
                <label
                  htmlFor="optional-notes"
                  className="block text-xs uppercase tracking-wider font-medium text-[#35251F] mb-2"
                >
                  Optional Message / Special Requests
                </label>
                <textarea
                  id="optional-notes"
                  name="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention any skin allergies, treatment preferences, or if this is for a special celebration..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FFFCF7] border border-[#E4D6C9] text-[#35251F] placeholder-[#5B4940]/50 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B98578] transition-all resize-y"
                />
              </div>

              {/* Submit CTA Button (Minimum 48px touch target with active touch feedback) */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] bg-[#B98578] text-[#FFFCF7] hover:bg-[#A36F62] text-xs sm:text-sm uppercase tracking-widest px-10 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg font-medium hover:scale-[1.01] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#B98578] focus:ring-offset-2"
                >
                  <svg
                    className="w-4 h-4 mr-2.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Format & Send WhatsApp Inquiry</span>
                </button>
              </div>

              {/* Post submission feedback box */}
              {submittedStatus === "ready-for-whatsapp" && (
                <div className="mt-6 p-4 rounded-xl bg-[#35251F] text-[#F4EDE4] text-xs sm:text-sm leading-relaxed animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-[#D4A99E] font-medium mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                    <span>WhatsApp Window Opened</span>
                  </div>
                  Your inquiry has been formatted. If WhatsApp did not open automatically, you can tap below to proceed:
                  <div className="mt-3">
                    <a
                      href={createWhatsAppChatUrl(
                        businessConfig.contact.whatsappNumber,
                        formatWhatsAppBookingMessage({
                          fullName,
                          phone,
                          service: selectedService,
                          date,
                          time,
                          message: notes,
                        })
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center min-h-[44px] underline font-medium text-[#D4A99E] hover:text-[#FFFCF7]"
                    >
                      Click here to open WhatsApp directly &rarr;
                    </a>
                  </div>
                </div>
              )}
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
