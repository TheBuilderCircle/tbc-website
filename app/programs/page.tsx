import type { Metadata } from "next";
import Link from "next/link";
import { PROGRAMS, RESEARCH_PROGRAM } from "@/data/programs";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Recurring, structured initiatives spanning education, community, media and ecosystem intelligence.",
  alternates: {
    canonical: "/programs",
  },
  openGraph: {
    title: "Programs · TBC Ghana",
    description:
      "Recurring, structured initiatives spanning education, community, media and ecosystem intelligence.",
    url: "https://www.tbcafrica.org/programs",
  },
};

export default function ProgramsPage() {
  return (
    <div style={{ width: "100%" }}>
      <section style={{ background: "#1B4D4A" }}>
        <div className="tbc-container tbc-hero-padding" style={{ animation: "tbcUp .6s both" }}>
          <div
            style={{
              font: "600 13px/1 'Inter'",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "#24D155",
              marginBottom: 22,
            }}
          >
            Programs &amp; Initiatives
          </div>
          <h1
            className="tbc-hero-h1"
            style={{
              color: "#fff",
              maxWidth: 820,
              marginBottom: 24,
            }}
          >
            The programs that keep the ecosystem moving.
          </h1>
          <p style={{ font: "400 20px/1.6 'Inter'", color: "rgba(255,255,255,.76)", maxWidth: 620 }}>
            Recurring, structured initiatives spanning education, community, media and
            ecosystem intelligence.
          </p>
        </div>
      </section>

      <section className="tbc-container tbc-grid-2" style={{ paddingTop: 64, paddingBottom: 80 }}>
        <ScrollReveal className="tbc-full-span" style={{ display: "contents" }}>
        {PROGRAMS.map((program) => (
          <div
            key={program.title}
            className={`${program.dark ? "tbc-card-dark" : "tbc-card"}`}
            style={{
              background: program.dark ? "#1B4D4A" : "#fff",
              border: program.dark ? undefined : "1px solid rgba(20,33,31,0.08)",
              borderRadius: 18,
              overflow: "hidden",
            }}
          >
            <div style={{ height: 4, background: program.color }} />
            <div className="tbc-card-padding" style={{ paddingTop: 28 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: `${program.color}1a`,
                marginBottom: 22,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `1px solid ${program.color}33`,
              }}
            >
              <program.Icon size={22} color={program.color} />
            </div>
            <h2
              style={{
                font: "800 26px/1.15 'Inter'",
                letterSpacing: "-.02em",
                color: program.dark ? "#fff" : "var(--tbc-text, #14211f)",
                marginBottom: 14,
              }}
            >
              {program.title}
            </h2>
            <p
              style={{
                font: "400 17px/1.6 'Inter'",
                color: program.dark ? "rgba(255,255,255,.72)" : "var(--tbc-text-muted)",
                marginBottom: 20,
              }}
            >
              {program.description}
            </p>
            {program.tags ? (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {program.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tbc-tag"
                    style={{
                      font: "500 13px/1 'Inter'",
                      color: "var(--tbc-text, #1B4D4A)",
                      background: "var(--tbc-bg)",
                      padding: "8px 13px",
                      borderRadius: 100,
                      transition: "background-color 0.18s ease, color 0.18s ease",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
            {program.linkLabel && program.linkHref ? (
              <Link
                href={program.linkHref}
                style={{ font: "700 15px/1 'Inter'", color: "#24D155", textDecoration: "none" }}
              >
                {program.linkLabel}
              </Link>
            ) : null}
            {program.badge ? (
              <span
                style={{
                  font: `600 13px/1 'Inter'`,
                  color: program.dark ? "#24D155" : "#D03433",
                  background: program.dark ? "rgba(36,209,85,.14)" : "rgba(208,52,51,.1)",
                  padding: "8px 13px",
                  borderRadius: 100,
                }}
              >
                {program.badge}
              </span>
            ) : null}
          </div>
          </div>
        ))}
        </ScrollReveal>

        <ScrollReveal>
        <div
          className="tbc-full-span tbc-card tbc-card-padding tbc-split-grid"
          style={{
            borderRadius: 18,
          }}
        >
          <div>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "rgba(36, 209, 85, 0.12)",
                marginBottom: 22,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(36, 209, 85, 0.25)",
              }}
            >
              <RESEARCH_PROGRAM.Icon size={22} color="#24D155" />
            </div>
            <h2 style={{ font: "800 26px/1.15 'Inter'", letterSpacing: "-.02em", color: "var(--tbc-text, #14211f)", marginBottom: 14 }}>
              {RESEARCH_PROGRAM.title}
            </h2>
          </div>
          <p style={{ font: "400 18px/1.65 'Inter'", color: "var(--tbc-text-muted)" }}>{RESEARCH_PROGRAM.description}</p>
        </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
