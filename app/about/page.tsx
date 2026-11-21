import type { Metadata } from "next";
import { ABOUT_PILLARS } from "@/data/aboutPillars";
import { MILESTONES } from "@/data/milestones";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerGrid from "@/components/StaggerGrid";
import { Accent, PageHero, SectionHead } from "@/components/editorial";

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

// Teal milestone text/rules are illegible on the dark page; map them to theme tokens.
const tone = (c: string) =>
  c === "#1B4D4A" ? "var(--ink)" : c.startsWith("rgba") ? "var(--rule-strong)" : c;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About TBC Ghana"
        title={
          <>
            One Ecosystem. <Accent>One Circle.</Accent> One Mission.
          </>
        }
        aside={
          <div style={{ display: "grid", gap: 24 }}>
            <p className="lede" style={{ color: "var(--ink)" }}>
              TBC Ghana was founded to solve a simple but persistent problem: Ghana&rsquo;s
              blockchain and Web3 community has energy, talent and momentum, but no single, trusted
              institution to sustain it. Communities go quiet after events. Builders lack a
              pipeline. International protocols don&rsquo;t know who to call when they want to enter
              the market.
            </p>
            <p className="lede">
              The Builders Circle Ghana changes that. Built on years of grassroots work  meetups,
              university tours, speaking engagements and online community-building  TBC Ghana is
              now formalizing into a structured non-profit organization (NGO) with one goal: to become the leading
              Web3 ecosystem infrastructure in Ghana, and eventually across Africa.
            </p>
          </div>
        }
      />

      {/* VISION / MISSION */}
      <section className="wrap section-tight">
        <StaggerGrid className="ruled cols-2 ruled-b">
          <div style={{ paddingBlock: "32px 44px" }}>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              Vision
            </div>
            <p className="statement">
              To build the leading Web3 ecosystem infrastructure in Ghana that drives blockchain
              education, community development, ecosystem collaboration, innovation, and market
              growth across Africa.
            </p>
          </div>
          <div style={{ paddingBlock: "32px 44px" }}>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              Mission
            </div>
            <p className="statement">
              Bring together Ghana&rsquo;s Web3 and blockchain community into one structured
              ecosystem  educating newcomers, developing builders, connecting local talent to
              global opportunity, and giving protocols a trusted partner in the African market.
            </p>
          </div>
        </StaggerGrid>
      </section>

      {/* PILLARS */}
      <section className="section texture">
        <div className="wrap">
          <SectionHead
            eyebrow="What We Do · Our Pillars"
            title={
              <>
                Five pillars, <Accent>one ecosystem.</Accent>
              </>
            }
          />
          <p className="lede" style={{ maxWidth: 620, marginTop: -16, marginBottom: 48 }}>
            Everything TBC Ghana does maps to five pillars  each with concrete programs behind
            it.
          </p>
          <div className="rows">
            {ABOUT_PILLARS.map((pillar) => (
              <ScrollReveal key={pillar.number} className="pillar-row">
                <div className="num" style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>
                  {pillar.number}
                </div>
                <div>
                  <h3 className="h3" style={{ marginBottom: 12 }}>
                    {pillar.title}
                  </h3>
                  <p className="body" style={{ maxWidth: 440 }}>
                    {pillar.description}
                  </p>
                </div>
                <ul className="bullets">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="wrap section">
        <SectionHead
          eyebrow="Milestones"
          title={
            <>
              From grassroots <Accent>to institution.</Accent>
            </>
          }
        />
        <StaggerGrid className="ruled cols-4 ruled-b">
          {MILESTONES.map((milestone) => (
            <div key={milestone.title} style={{ paddingBottom: 40 }}>
              <span
                aria-hidden="true"
                style={{ display: "block", height: 2, width: 40, background: tone(milestone.borderColor), marginBottom: 28 }}
              />
              <div className="h4" style={{ color: tone(milestone.textColor), marginBottom: 12 }}>
                {milestone.title}
              </div>
              <p className="small">{milestone.description}</p>
            </div>
          ))}
        </StaggerGrid>
      </section>
    </>
  );
}
