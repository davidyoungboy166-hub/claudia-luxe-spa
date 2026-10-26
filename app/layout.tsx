import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Claudia Luxe Beauty Spa | Elevate Your Beauty, Embrace Your Glow",
  description:
    "A premier luxury sanctuary for bespoke facials & skincare, restorative massage therapy, artisan nail care, and rejuvenating body treatments.",
  keywords: [
    "Claudia Luxe Beauty Spa",
    "luxury beauty spa",
    "facials and skincare",
    "massage therapy",
    "luxury manicures",
    "body treatments",
    "holistic self-care",
  ],
  openGraph: {
    title: "Claudia Luxe Beauty Spa | Elevate Your Beauty, Embrace Your Glow",
    description:
      "Indulge in personalized luxury spa rituals, rejuvenating skincare, and holistic relaxation.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#35251F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FFFCF7] text-[#5B4940] antialiased selection:bg-[#B98578] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
