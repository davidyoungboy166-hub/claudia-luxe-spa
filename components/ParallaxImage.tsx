"use client";

import React, { useRef, useEffect, useState } from "react";

interface ParallaxImageProps {
  children: React.ReactNode;
  className?: string;
}

export default function ParallaxImage({
  children,
  className = "",
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1.08);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let ticking = false;

    const updateParallax = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom >= -100 && rect.top <= windowHeight + 100) {
        const totalDistance = windowHeight + rect.height;
        const currentDistance = windowHeight - rect.top;
        const rawProgress = currentDistance / totalDistance;
        const progress = Math.min(Math.max(rawProgress, 0), 1);

        // Smooth zoom out from 1.08 down to 1.00 as user scrolls past
        const currentScale = 1.08 - progress * 0.08;
        // Subtle vertical parallax drift inside the frame
        const currentY = (progress - 0.5) * -20;

        setScale(currentScale);
        setTranslateY(currentY);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    requestAnimationFrame(updateParallax);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div
        style={{
          transform: `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`,
          transition: "transform 180ms ease-out",
          willChange: "transform",
        }}
        className="relative w-full h-full motion-reduce:!transform-none motion-reduce:!transition-none"
      >
        {children}
      </div>
    </div>
  );
}
