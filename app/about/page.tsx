import type { Metadata } from "next";
import { ABOUT_PILLARS } from "@/data/aboutPillars";
import { MILESTONES } from "@/data/milestones";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "TBC Ghana was founded to become the leading Web3 ecosystem infrastructure in Ghana, and eventually across Africa.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About · TBC Ghana",
    description:
      "TBC Ghana was founded to become the leading Web3 ecosystem infrastructure in Ghana, and eventually across Africa.",
    url: "https://www.tbcafrica.org/about",
  },
};

export default function AboutPage() {
  return (
    <div style={{ width: "100%" }}>
      {/* PAGE HERO */}
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
            About TBC Ghana
          </div>
          <h1
            className="tbc-hero-h1"
            style={{
              color: "#fff",
              maxWidth: 900,
            }}
          >
            One Ecosystem. One Circle. One Mission.
          </h1>
        </div>
      </section>

      {/* STORY */}
      <ScrollReveal>
      <section className="tbc-container" style={{ maxWidth: 900, paddingTop: 64, paddingBottom: 40 }}>
        <p style={{ font: "400 22px/1.65 'Inter'", color: "#54615e", marginBottom: 28 }}>
          TBC Ghana was founded to solve a simple but persistent problem: Ghana&rsquo;s
          blockchain and Web3 community has energy, talent and momentum, but no single, trusted
          institution to sustain it. Communities go quiet after events. Builders lack a
          pipeline. International protocols don&rsquo;t know who to call when they want to enter
          the market.
        </p>
        <p style={{ font: "400 22px/1.65 'Inter'", color: "var(--tbc-text-muted, #54615e)" }}>
          The Builders Circle Ghana changes that. Built on years of grassroots work  meetups,
          university tours, speaking engagements and online community-building  TBC Ghana is
          now formalizing into a structured organization with one goal: to become the leading
          Web3 ecosystem infrastructure in Ghana, and eventually across Africa.
        </p>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      {/* VISION / MISSION */}
      <section
        className="tbc-container tbc-grid-2"
        style={{ paddingTop: 40, paddingBottom: 64 }}
      >
        <div
          className="tbc-card tbc-card-padding"
          style={{ borderRadius: 16 }}
        >
          <div
            style={{
              font: "600 12px/1 'Inter'",
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "#24D155",
              marginBottom: 18,
            }}
          >
            Vision
          </div>
          <p style={{ font: "500 21px/1.55 'Inter'", color: "var(--tbc-text, #14211f)" }}>
            To build the leading Web3 ecosystem infrastructure in Ghana that drives blockchain
            education, community development, ecosystem collaboration, innovation, and market
            growth across Africa.
          </p>
        </div>
        <div className="tbc-card tbc-card-padding" style={{ background: "var(--tbc-surface, #ffffff)", borderRadius: 16 }}>
          <div
            style={{
              font: "600 12px/1 'Inter'",
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "#24D155",
              marginBottom: 18,
            }}
          >
            Mission
          </div>
          <p style={{ font: "500 21px/1.55 'Inter'", color: "var(--tbc-text, #14211f)" }}>
            Bring together Ghana&rsquo;s Web3 and blockchain community into one structured
            ecosystem  educating newcomers, developing builders, connecting local talent to
            global opportunity, and giving protocols a trusted partner in the African market.
          </p>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      {/* WHAT WE DO / PILLARS */}
      <section style={{ background: "var(--tbc-bg)", borderTop: "1px solid var(--tbc-border)", borderBottom: "1px solid var(--tbc-border)" }}>
        <div className="tbc-container tbc-section-padding">
          <div
            style={{
              font: "600 13px/1 'Inter'",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "#24D155",
              marginBottom: 16,
            }}
          >
            What We Do · Our Pillars
          </div>
          <h2 className="tbc-section-h2" style={{ color: "var(--tbc-text, #14211f)", marginBottom: 16 }}>
            Five pillars, one ecosystem.
          </h2>
          <p style={{ font: "400 19px/1.6 'Inter'", color: "var(--tbc-text-muted, #54615e)", maxWidth: 620, marginBottom: 48 }}>
            Everything TBC Ghana does maps to five pillars  each with concrete programs behind
            it.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {ABOUT_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="tbc-card tbc-card-padding tbc-split-grid-about"
                style={{
                  background: "var(--tbc-surface, #ffffff)",
                  border: "1px solid var(--tbc-border, rgba(20,33,31,0.08))",
                  borderRadius: 18,
                }}
              >
                <div>
                  <div style={{ font: "800 44px/1 'Inter'", color: "#24D155", marginBottom: 18 }}>
                    {pillar.number}
                  </div>
                  <h3
                    style={{
                      font: "800 28px/1.15 'Inter'",
                      letterSpacing: "-.02em",
                      color: "var(--tbc-text, #14211f)",
                      marginBottom: 12,
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      font: "400 16px/1.6 'Inter'",
                      color: "var(--tbc-text-muted, #54615e)",
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14, alignSelf: "center" }}>
                  {pillar.bullets.map((bullet) => (
                    <div key={bullet} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span
                        style={{
                          width: 9,
                          height: 9,
                          borderRadius: "50%",
                          background: "#24D155",
                          flex: "none",
                        }}
                      />
                      <span
                        style={{
                          font: "500 17px/1.4 'Inter'",
                          color: "var(--tbc-text-muted, #54615e)",
                        }}
                      >
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* TIMELINE */}
      <section className="tbc-container tbc-section-padding">
        <div
          style={{
            font: "600 13px/1 'Inter'",
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "#24D155",
            marginBottom: 16,
          }}
        >
          Milestones
        </div>
        <h2 className="tbc-section-h2" style={{ color: "var(--tbc-text, #14211f)", marginBottom: 56 }}>
          From grassroots to institution.
        </h2>
        <div className="tbc-grid-4">
          {MILESTONES.map((milestone) => (
            <div
              key={milestone.title}
              style={{ borderTop: `2px solid ${milestone.borderColor}`, paddingTop: 22 }}
            >
              <div style={{ font: "700 14px/1 'Inter'", color: milestone.textColor, marginBottom: 12 }}>
                {milestone.title}
              </div>
              <p style={{ font: "400 15px/1.55 'Inter'", color: "var(--tbc-text-muted)" }}>{milestone.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
