import type { Metadata } from "next";
import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { TEAM } from "@/data/team";
import StaggerGrid from "@/components/StaggerGrid";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Team",
  description:
    "A cross-functional team leading education, community, technology, design and partnerships for TBC Ghana.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Team · TBC Ghana",
    description:
      "A cross-functional team leading education, community, technology, design and partnerships for TBC Ghana.",
    url: "https://www.tbcafrica.org/team",
  },
};

export default function TeamPage() {
  return (
    <div style={{ width: "100%" }}>
      <section style={{ background: "#1B4D4A" }}>
        <div className="tbc-container tbc-hero-padding">
          <ScrollReveal direction="up" delay={0}>
            <div
              style={{
                font: "600 13px/1 'Inter'",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "#24D155",
                marginBottom: 22,
              }}
            >
              Meet the Team
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1
              className="tbc-hero-h1"
              style={{
                color: "#fff",
                maxWidth: 820,
                marginBottom: 24,
              }}
            >
              The people building the Circle.
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p style={{ font: "400 20px/1.6 'Inter'", color: "rgba(255,255,255,.76)", maxWidth: 620 }}>
              A cross-functional team leading education, community, technology, design and
              partnerships for TBC Ghana.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="tbc-container" style={{ paddingTop: 64, paddingBottom: 80 }}>
        <StaggerGrid className="tbc-grid-4 tbc-grid-partners" direction="up" staggerDelay={0.08}>
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="tbc-card"
              style={{
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              {member.image ? (
                <div style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 900px) 33vw, 25vw"
                    style={{ objectFit: "cover", objectPosition: member.objectPosition || "center 20%" }}
                  />
                </div>
              ) : (
                <ImagePlaceholder label="headshot" style={{ aspectRatio: "1/1" }} />
              )}
              <div style={{ padding: "20px 22px 24px" }}>
                <div style={{ font: "700 18px/1.25 'Inter'", letterSpacing: "-.01em", color: "var(--tbc-text, #14211f)", marginBottom: 5 }}>
                  {member.name}
                </div>
                <div style={{ font: "500 14px/1.4 'Inter'", color: "#24D155" }}>{member.role}</div>
              </div>
            </div>
          ))}
        </StaggerGrid>
      </section>
    </div>
  );
}
