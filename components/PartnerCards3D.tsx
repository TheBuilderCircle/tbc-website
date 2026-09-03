"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PARTNER_VALUE_PROPS } from "@/data/partners";

gsap.registerPlugin(ScrollTrigger);

export default function PartnerCards3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = containerRef.current!.querySelectorAll<HTMLElement>(".partner-card-3d");

      // Set transformPerspective on each card for individual 3D vanishing point
      gsap.set(cards, { transformPerspective: 900, rotationX: 0, rotationY: 0 });

      // ── Scroll-in: 3D flip from the side ──────────────────────────────────
      gsap.fromTo(
        cards,
        { opacity: 0, rotationY: 55, y: 50, transformOrigin: "left center" },
        {
          opacity: 1,
          rotationY: 0,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.14,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      // ── Hover: gsap.to with overwrite — quickTo reset doesn't support rotation sub-props ─
      cards.forEach((card) => {
        const glowEl = card.querySelector<HTMLElement>(".partner-card-glow");

        const onMove = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
          const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
          gsap.to(card, {
            rotationY: dx * 13,
            rotationX: -dy * 8,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
          });
          if (glowEl) {
            const px = ((e.clientX - r.left) / r.width) * 100;
            const py = ((e.clientY - r.top) / r.height) * 100;
            glowEl.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(36,209,85,0.2) 0%, transparent 68%)`;
          }
        };

        const onLeave = () => {
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.55,
            ease: "power3.out",
            overwrite: "auto",
          });
          if (glowEl) glowEl.style.background = "transparent";
        };

        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
      });

    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="tbc-grid-3"
      style={{ marginBottom: 40 }}
    >
      {PARTNER_VALUE_PROPS.map((partner) => (
        <div
          key={partner.title}
          className="partner-card-3d tbc-card"
          style={{
            borderRadius: 14,
            padding: 28,
            willChange: "transform",
            position: "relative",
            overflow: "hidden",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Cursor-following glow spotlight */}
          <div
            className="partner-card-glow"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* Card content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: partner.color,
                marginBottom: 22,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 6px 20px -4px ${partner.color}66`,
              }}
            >
              <partner.Icon />
            </div>
            <div
              style={{
                font: "700 20px/1.2 'Inter'",
                color: "var(--tbc-text, #14211f)",
                marginBottom: 10,
              }}
            >
              {partner.title}
            </div>
            <p
              style={{
                font: "400 15px/1.55 'Inter'",
                color: "var(--tbc-text-muted)",
              }}
            >
              {partner.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
