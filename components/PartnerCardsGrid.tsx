"use client";

import Image from "next/image";
import { COMMUNITY_PARTNERS } from "@/data/communityPartners";

export default function PartnerCardsGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 24,
        width: "100%",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      {COMMUNITY_PARTNERS.map((partner) => (
        <div
          key={partner.name}
          style={{
            background: "var(--tbc-surface, #FFFFFF)",
            border: "1px solid var(--tbc-border, rgba(20, 33, 31, 0.08))",
            borderRadius: 20,
            padding: "28px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
            transition: "box-shadow 0.25s ease, transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              "0 10px 36px rgba(0, 0, 0, 0.13)";
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              "0 4px 20px rgba(0, 0, 0, 0.06)";
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
          }}
        >
          {/* Logo */}
          <div
            style={{
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              width={180}
              height={60}
              style={{
                objectFit: "contain",
                maxHeight: 56,
                maxWidth: "100%",
                width: "auto",
                height: "auto",
                transform: partner.logoScale ? `scale(${partner.logoScale})` : undefined,
                transformOrigin: "center center",
              }}
            />
          </div>

          {/* Name */}
          <h3
            style={{
              font: "700 17px/1.3 'Inter'",
              color: "var(--tbc-text, #14211F)",
              margin: 0,
              textAlign: "center",
            }}
          >
            {partner.name}
          </h3>

          {/* Description */}
          <p
            style={{
              font: "400 13.5px/1.65 'Inter'",
              color: "var(--tbc-text-muted, #54615E)",
              margin: 0,
              textAlign: "center",
              flexGrow: 1,
            }}
          >
            {partner.description}
          </p>

          {/* Links */}
          {partner.links.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 8,
                paddingTop: 14,
                borderTop: "1px solid var(--tbc-border, rgba(20, 33, 31, 0.08))",
                width: "100%",
              }}
            >
              {partner.links.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.title}
                  className="tbc-partner-badge"
                >
                  <link.Icon size={14} />
                  <span>{link.title}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
