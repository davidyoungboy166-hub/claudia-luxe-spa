"use client";

import React, { useRef, useEffect, useState } from "react";

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // Subtle luxury lag factor (e.g., 0.08 to 0.12)
  className?: string;
}

export default function Parallax({
  children,
  speed = 0.08,
  className = "",
}: ParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            // Compute offset only when proximate to the viewport
            if (rect.bottom >= -150 && rect.top <= viewportHeight + 150) {
              const elementCenter = rect.top + rect.height / 2;
              const viewportCenter = viewportHeight / 2;
              const diff = elementCenter - viewportCenter;
              setOffsetY(diff * speed);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div
        style={{
          transform: `translate3d(0, ${offsetY}px, 0)`,
          willChange: "transform",
          transition: "transform 0.15s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
