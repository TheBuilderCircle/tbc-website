import type { Metadata } from "next";
import Countdown from "@/components/Countdown";
import { UPCOMING_EVENTS } from "@/data/events";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerGrid from "@/components/StaggerGrid";
import { Accent, ArrowLink, PageHero } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Events",
  description:
    "From weekly online spaces to city meetups and the flagship conference  here's what's coming up.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Events · TBC Ghana",
    description:
      "From weekly online spaces to city meetups and the flagship conference  here's what's coming up.",
    url: "https://www.tbcafrica.org/events",
  },
};

// Teal date labels disappear on the dark page; keep red, map teal to ink.
const dateTone = (c: string) => (c === "#1B4D4A" ? "var(--ink)" : c);

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title={
          <>
            From weekly spaces to <Accent>the flagship.</Accent>
          </>
        }
        lede={
          <>
            From weekly online spaces to city meetups and the flagship conference  here&rsquo;s
            what&rsquo;s coming up.
          </>
        }
      />

      {/* FLAGSHIP */}
      <section className="wrap">
        <ScrollReveal className="on-deep texture flagship">
          <div>
            <span className="tag tag-red">Flagship · 11 December 2026</span>
            <h2 className="h2" style={{ margin: "28px 0 20px", maxWidth: "14ch" }}>
              TBC Ghana Blockchain &amp; Crypto Conference
            </h2>
            <p className="lede" style={{ maxWidth: 560 }}>
              Ghana&rsquo;s flagship Web3 gathering  keynotes, startup showcases, workshops,
              hackathons, networking and policy discussions.
            </p>
            <div className="mono" style={{ marginTop: 24, color: "var(--ink-2)" }}>
              Ghana Shippers House, Accra
            </div>
            <div style={{ marginTop: 28 }}>
              <ArrowLink href="https://bcc.tbcghana.org" label="More info at bcc.tbcghana.org →" />
            </div>
          </div>
          <div className="flagship-count">
            <Countdown variant="big" />
            <div className="mono" style={{ marginTop: 12 }}>
              Days to go
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* UPCOMING LIST */}
      <section className="wrap section">
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
          <h2 className="h3">Upcoming</h2>
          <span className="tag tag-accent">{UPCOMING_EVENTS.length}</span>
        </div>
        <StaggerGrid className="rows">
          {UPCOMING_EVENTS.map((event) => (
            <article key={event.title} className="event-row">
              <div>
                <div style={{ fontWeight: 760, fontSize: 22, letterSpacing: "-0.02em", color: dateTone(event.dateColor) }}>
                  {event.dateLabel}
                </div>
                <div className="mono" style={{ marginTop: 4 }}>
                  {event.dateSubLabel}
                </div>
              </div>
              <div>
                <h3 className="h4" style={{ marginBottom: 6 }}>
                  {event.title}
                </h3>
                <p className="small">{event.subtitle}</p>
              </div>
              <span className={`tag${event.tagColor === "flagship" ? " tag-red" : ""}`}>{event.tag}</span>
            </article>
          ))}
        </StaggerGrid>

        <p className="small" style={{ marginTop: 32, color: "var(--ink-3)" }}>
          Events are updated regularly. Follow{" "}
          <a href="https://x.com/Builders_Circle" className="text-link" style={{ fontWeight: 600 }}>
            @Builders_Circle
          </a>{" "}
          for the latest dates and locations.
        </p>
      </section>
    </>
  );
}
