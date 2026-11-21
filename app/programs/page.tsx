import type { Metadata } from "next";
import { PROGRAMS, RESEARCH_PROGRAM } from "@/data/programs";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerGrid from "@/components/StaggerGrid";
import { Accent, ArrowLink, PageHero } from "@/components/editorial";

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
    <>
      <PageHero
        eyebrow="Programs & Initiatives"
        title={
          <>
            The programs that keep the <Accent>ecosystem moving.</Accent>
          </>
        }
        lede="Recurring, structured initiatives spanning education, community, media and ecosystem intelligence."
      />

      <section className="wrap" style={{ paddingBottom: "clamp(72px, 10vw, 136px)" }}>
        <StaggerGrid className="ruled cols-2">
          {PROGRAMS.map((program) => (
            <article key={program.title} className={`program-cell${program.dark ? " on-deep texture" : ""}`}>
              <span style={{ color: "var(--accent-ink)" }}>
                <program.Icon size={24} color="currentColor" />
              </span>
              <h2 className="h3" style={{ margin: "40px 0 14px" }}>
                {program.title}
              </h2>
              <p className="body" style={{ marginBottom: 24, maxWidth: 520 }}>
                {program.description}
              </p>
              {program.tags ? (
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {program.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
              {program.linkLabel && program.linkHref ? (
                <ArrowLink href={program.linkHref} label={program.linkLabel} />
              ) : null}
              {program.badge ? (
                <span className={`tag ${program.dark ? "tag-accent" : "tag-red"}`}>{program.badge}</span>
              ) : null}
            </article>
          ))}
        </StaggerGrid>

        <ScrollReveal className="ruled cols-2 ruled-b">
          <div className="program-cell">
            <span style={{ color: "var(--accent-ink)" }}>
              <RESEARCH_PROGRAM.Icon size={24} color="currentColor" />
            </span>
            <h2 className="h3" style={{ marginTop: 40 }}>
              {RESEARCH_PROGRAM.title}
            </h2>
          </div>
          <div className="program-cell" style={{ display: "flex", alignItems: "flex-end" }}>
            <p className="lede">{RESEARCH_PROGRAM.description}</p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
