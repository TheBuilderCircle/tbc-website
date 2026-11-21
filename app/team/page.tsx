import type { Metadata } from "next";
import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { TEAM_GROUPS } from "@/data/team";
import StaggerGrid from "@/components/StaggerGrid";
import { Accent, PageHero } from "@/components/editorial";

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
    <>
      <PageHero
        eyebrow="Meet the Team"
        title={
          <>
            The people <Accent>building the Circle.</Accent>
          </>
        }
        lede="A cross-functional team leading education, community, technology, design and partnerships for TBC Ghana."
      />

      <section className="wrap" style={{ paddingBottom: "clamp(72px, 10vw, 136px)" }}>
        <div className="rows">
          {TEAM_GROUPS.map((group, gi) => (
            <div key={group.name} className="team-group">
              <div className="team-group-head">
                <span className="index">{(gi + 1).toString().padStart(2, "0")}</span>
                <h2 className="h3">{group.name}</h2>
              </div>
              <StaggerGrid className="team-cards" staggerDelay={0.06}>
                {group.members.map((member) => (
                  <figure key={member.name} className="mono-photo">
                    {member.image ? (
                      <div className="team-photo">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 900px) 33vw, 22vw"
                          style={{ objectFit: "cover", objectPosition: member.objectPosition || "center 20%" }}
                        />
                      </div>
                    ) : (
                      <ImagePlaceholder label="headshot" style={{ aspectRatio: "4/5" }} />
                    )}
                    <figcaption style={{ paddingTop: 16 }}>
                      <div className="h4">{member.name}</div>
                      <div
                        className="mono"
                        style={{ marginTop: 6, color: member.position === "Member" ? "var(--ink-3)" : "var(--accent-ink)" }}
                      >
                        {member.position}
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </StaggerGrid>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
