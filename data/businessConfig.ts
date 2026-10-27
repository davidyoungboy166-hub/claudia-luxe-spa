/**
 * =========================================================================
 * CLAUDIA LUXE BEAUTY SPA — CENTRAL BUSINESS CONFIGURATION
 * =========================================================================
 * 
 * Update your official business details, contact information, hours,
 * social links, and WhatsApp number in this single file.
 * 
 * All components across the website automatically read from this configuration.
 * =========================================================================
 */

export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  image: string;
  imageAlt: string;
  highlights: string[];
}

export interface BusinessConfig {
  brandName: string;
  shortName: string;
  slogan: string;
  description: string;
  contact: {
    whatsappNumber: string; // Digits only with country code, e.g. "15551234567"
    whatsappDisplay: string;
    phoneDisplay: string;
    phoneTel: string;
    email: string;
    address: {
      line1: string;
      line2: string;
      full: string;
      mapUrl: string;
    };
    openingHours: Array<{
      days: string;
      hours: string;
    }>;
    socialMedia: {
      instagram: string;
      facebook: string;
      pinterest: string;
      tiktok: string;
    };
  };
  services: ServiceItem[];
}

export const businessConfig: BusinessConfig = {
  brandName: "CLAUDIA LUXE BEAUTY SPA",
  shortName: "Claudia Luxe",
  slogan: "Elevate Your Beauty, Embrace Your Glow.",
  description:
    "An intimate luxury sanctuary dedicated to restorative beauty rituals, holistic self-care, and radiant well-being.",

  // =========================================================================
  // CONTACT INFORMATION & PLACEHOLDERS
  // Replace these placeholders with your actual business credentials.
  // =========================================================================
  contact: {
    // WhatsApp number for click-to-chat. Must contain ONLY digits with country code.
    whatsappNumber: "233256283126",

    // Formatted WhatsApp number displayed to visitors
    whatsappDisplay: "+233 25 628 3126 (0256283126)",

    // Direct phone number
    phoneDisplay: "+233 25 628 3126 (0256283126)",
    phoneTel: "+233256283126",

    // Official email address
    email: "concierge@claudialuxespa.com",

    // Physical Spa Address
    address: {
      line1: "14 Lagos Avenue, Suite 200",
      line2: "Adjiringanor – East Legon, Accra, Ghana",
      full: "14 Lagos Avenue, Suite 200, Adjiringanor – East Legon, Accra, Ghana",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Lagos+Avenue,+East+Legon,+Accra,+Ghana",
    },

    // Opening Hours
    openingHours: [
      { days: "Monday – Friday", hours: "9:00 AM – 7:30 PM" },
      { days: "Saturday", hours: "9:00 AM – 6:00 PM" },
      { days: "Sunday", hours: "10:00 AM – 5:00 PM" },
    ],

    // Social Media Links (Placeholders)
    socialMedia: {
      instagram: "https://instagram.com/claudialuxespa_placeholder",
      facebook: "https://facebook.com/claudialuxespa_placeholder",
      pinterest: "https://pinterest.com/claudialuxespa_placeholder",
      tiktok: "https://tiktok.com/@claudialuxespa_placeholder",
    },
  },

  // =========================================================================
  // CORE SERVICES
  // =========================================================================
  services: [
    {
      id: "facials-skincare",
      name: "Facials & Skincare",
      tagline: "Cellular Renewal & Radiant Glow",
      description:
        "Customized deep pore cleansing, botanical enzyme exfoliation, targeted luxury serums, and sculpting lymphatic massage that unveil your skin’s luminous vitality.",
      duration: "60 – 90 Minutes",
      image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/images/service-facials.jpg",
      imageAlt: "Client enjoying a gentle, radiant facial treatment at Claudia Luxe Beauty Spa",
      highlights: [
        "Deep Enzyme Cleansing",
        "Botanical Hydration Infusion",
        "Lymphatic Sculpting Touch",
        "LED Light Cellular Therapy",
      ],
    },
    {
      id: "massage-therapy",
      name: "Massage Therapy",
      tagline: "Tension Release & Deep Tranquility",
      description:
        "A deeply restorative ritual combining warmed botanical oils, smooth heated basalt stones, and rhythmic therapeutic pressure to dissolve stress and quiet the mind.",
      duration: "60 – 90 Minutes",
      image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/images/service-massage.jpg",
      imageAlt: "Therapeutic hot stone massage relaxation treatment with warm aromatic oils",
      highlights: [
        "Warmed Organic Botanicals",
        "Heated Basalt Stone Placement",
        "Targeted Deep Muscle Relief",
        "Aromatherapy Soundscapes",
      ],
    },
    {
      id: "nails-pedicures",
      name: "Nails & Pedicures",
      tagline: "Artisan Grooming & Conditioning",
      description:
        "Indulgent hand and foot care rituals featuring dead sea salt exfoliation, deep paraffin moisture wraps, meticulous shaping, and non-toxic high-gloss polish.",
      duration: "45 – 75 Minutes",
      image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/images/service-nails.jpg",
      imageAlt: "Artisan luxury manicure and conditioning treatment with rose gold accents",
      highlights: [
        "Rosehip & Sugar Exfoliation",
        "Warm Paraffin Wax Infusion",
        "Precision Cuticle Care",
        "Long-Wear Luxury Finish",
      ],
    },
    {
      id: "body-treatments",
      name: "Body Treatments",
      tagline: "Full-Body Polishing & Detoxification",
      description:
        "Invigorating full-body polishes with mineral-rich scrubs followed by hydrating botanical wraps and rich whipped body soufflés that leave your skin silky and refreshed.",
      duration: "75 – 100 Minutes",
      image: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/images/service-body.jpg",
      imageAlt: "Exfoliating botanical body scrub and detoxification treatment",
      highlights: [
        "Himalayan Mineral Polish",
        "Herbal Detox Clay Wrap",
        "Whipped Shea Butter Seal",
        "Private Rain Shower Ritual",
      ],
    },
  ],
};

/**
 * Formats appointment reservation details into a courteous, professional WhatsApp message.
 */
export function formatWhatsAppBookingMessage(booking: {
  fullName: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}): string {
  const lines: string[] = [
    `✨ *APPOINTMENT INQUIRY | CLAUDIA LUXE BEAUTY SPA* ✨`,
    ``,
    `Hello Concierge Team,`,
    `I would love to request an appointment with Claudia Luxe Beauty Spa with the following preferences:`,
    ``,
    `👤 *Guest Name:* ${booking.fullName}`,
    `📱 *WhatsApp / Phone:* ${booking.phone}`,
    `💆‍♀️ *Requested Service:* ${booking.service}`,
    `📅 *Preferred Date:* ${booking.date}`,
    `⏰ *Preferred Time:* ${booking.time}`,
  ];

  if (booking.message && booking.message.trim().length > 0) {
    lines.push(`💬 *Special Notes / Requests:* ${booking.message.trim()}`);
  }

  lines.push(``);
  lines.push(
    `_Please let me know your availability for this session. Looking forward to your confirmation!_`
  );

  return lines.join("\n");
}

/**
 * Creates a clean WhatsApp click-to-chat URL with properly encoded message.
 */
export function createWhatsAppChatUrl(
  whatsappDigitsOnly: string = businessConfig.contact.whatsappNumber,
  prefilledText?: string
): string {
  const cleanNumber = whatsappDigitsOnly.replace(/[^0-9]/g, "");
  if (!prefilledText) {
    return `https://wa.me/${cleanNumber}`;
  }
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(prefilledText)}`;
}
