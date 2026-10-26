"use client";

import React, { useRef, useEffect, useState } from "react";

interface FloatingParallaxProps {
  children?: React.ReactNode;
  speed?: number; // Total pixels of parallax travel
  className?: string;
  direction?: "up" | "down";
}

export default function FloatingParallax({
  children,
  speed = 40,
  className = "",
  direction = "up",
}: FloatingParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let ticking = false;

    const updatePosition = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom >= -150 && rect.top <= windowHeight + 150) {
        const totalDistance = windowHeight + rect.height;
        const currentDistance = windowHeight - rect.top;
        const progress = Math.min(Math.max(currentDistance / totalDistance, 0), 1);

        const factor = direction === "up" ? -1 : 1;
        const currentOffset = (progress - 0.5) * speed * factor;

        setOffsetY(currentOffset);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    requestAnimationFrame(updatePosition);

    return () => window.removeEventListener("scroll", onScroll);
  }, [speed, direction]);

  return (
    <div
      ref={ref}
      style={{
        transform: `translate3d(0, ${offsetY.toFixed(2)}px, 0)`,
        transition: "transform 200ms cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform",
      }}
      className={`motion-reduce:!transform-none ${className}`}
    >
      {children}
    </div>
  );
}
