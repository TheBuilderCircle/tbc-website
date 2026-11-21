import Link from "next/link";
import Image from "next/image";
import { PILLARS } from "@/data/pillars";
import { HOME_STATS } from "@/data/stats";
import { PARTNER_VALUE_PROPS } from "@/data/partners";
import LogoWall from "@/components/LogoWall";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerGrid from "@/components/StaggerGrid";
import { Accent, ArrowLink, SectionHead } from "@/components/editorial";

const WHATSAPP = "https://chat.whatsapp.com/Jd9W4t16aYUH3UAONN0Ivm";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="wrap home-hero">
        <div className="eyebrow rise" style={{ paddingBottom: 16, borderBottom: "1px solid var(--rule)" }}>
          Ecosystem Infrastructure for Web3
        </div>
        <h1 className="display rise rise-2" style={{ marginTop: "clamp(28px, 4vw, 48px)", maxWidth: "11ch" }}>
          Building Ghana&apos;s <Accent>Web3 Future</Accent> Together.
        </h1>

        <div className="home-hero-grid rise rise-3">
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p className="lede" style={{ maxWidth: 520 }}>
                TBC Ghana is the ecosystem infrastructure uniting education, builders, and
                community to grow blockchain and Web3 across Ghana and Africa.
              </p>
              <div className="cta-row">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-arrow"
                >
                  Join the Circle
                </a>
                <Link href="/about" className="btn btn-ghost">
                  Explore What We Do
                </Link>
              </div>
            </div>
          </div>
          <div className="frame duotone home-hero-photo">
            <Image
              src="/images/tbc_hero.jpg"
              alt="Builders working on laptops at a TBC Ghana session"
              fill
              preload
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ objectFit: "cover", objectPosition: "55% 40%" }}
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="wrap section-tight">
        <StaggerGrid className="ruled cols-4 ruled-b stats-grid">
          {HOME_STATS.map((stat) => (
            <div key={stat.label}>
              <div className="num">{stat.value}</div>
              <p className="small" style={{ marginTop: 14, maxWidth: 200 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </StaggerGrid>
      </section>

      {/* WHO WE ARE */}
      <section className="wrap section">
        <ScrollReveal className="split">
          <div>
            <div className="eyebrow">Who We Are</div>
            <h2 className="h2" style={{ marginTop: 18 }}>
              A trusted gateway for <Accent>Web3 growth</Accent> in Ghana.
            </h2>
          </div>
          <div style={{ paddingTop: 34 }}>
            <p className="lede" style={{ fontSize: "clamp(20px, 1.9vw, 26px)", color: "var(--ink)", marginBottom: 32 }}>
              TBC Ghana is a trusted gateway for blockchain and Web3 growth in Ghana and Africa
              educating new users, supporting builders, and connecting global ecosystems with
              local communities.
            </p>
            <ArrowLink href="/about" label="Read our story →" />
          </div>
        </ScrollReveal>
      </section>

      {/* WHAT WE DO */}
      <section className="section texture rule-t">
        <div className="wrap">
          <SectionHead
            eyebrow="What We Do · Our Pillars"
            title={
              <>
                Five pillars, <Accent>one ecosystem.</Accent>
              </>
            }
            action={{ href: "/about", label: "Learn about our pillars →" }}
          />
          <StaggerGrid className="ruled cols-5">
            {PILLARS.map((pillar, i) => (
              <div key={pillar.title} className="pillar-cell">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="index">{(i + 1).toString().padStart(2, "0")}</span>
                  <span style={{ color: "var(--accent-ink)" }}>
                    <pillar.Icon size={20} color="currentColor" />
                  </span>
                </div>
                <div style={{ marginTop: "auto" }}>
                  <div className="h4" style={{ marginBottom: 10 }}>
                    {pillar.title}
                  </div>
                  <p className="small">{pillar.description}</p>
                </div>
              </div>
            ))}
          </StaggerGrid>
          <div className="rule-t rule-b pillars-foot">
            <div className="h3">Find where you fit.</div>
            <ArrowLink href="/community" label="Explore the community →" />
          </div>
        </div>
      </section>

      {/* GET INVOLVED BAND */}
      <section className="on-deep texture">
        <ScrollReveal className="wrap section-tight band">
          <div style={{ maxWidth: 720 }}>
            <h2 className="h2" style={{ marginBottom: 18 }}>
              There&rsquo;s a place for you in <Accent>the Circle.</Accent>
            </h2>
            <p className="lede">
              Whether you&rsquo;re just starting out or already building, join a structured
              ecosystem made for you.
            </p>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-arrow">
            Join TBC Ghana
          </a>
        </ScrollReveal>
      </section>

      {/* PARTNERS */}
      <section className="wrap section">
        <SectionHead
          eyebrow="Partners"
          title={
            <>
              Building the <Accent>ecosystem</Accent> together.
            </>
          }
          action={{ href: "/contact", label: "Partner with us →" }}
        />
        <StaggerGrid className="ruled cols-3 ruled-b">
          {PARTNER_VALUE_PROPS.map((partner, i) => (
            <div key={partner.title} style={{ paddingBottom: 40 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 48 }}>
                <span className="index">{(i + 1).toString().padStart(2, "0")}</span>
                <span style={{ color: "var(--accent-ink)" }}>
                  <partner.Icon size={22} color="currentColor" />
                </span>
              </div>
              <div className="h3" style={{ marginBottom: 12 }}>
                {partner.title}
              </div>
              <p className="body">{partner.description}</p>
            </div>
          ))}
        </StaggerGrid>

        <div className="mono" style={{ marginTop: "clamp(56px, 7vw, 88px)", marginBottom: 20 }}>
          Ecosystem partners &amp; sponsors
        </div>
        <LogoWall />
      </section>

      {/* UPCOMING */}
      <section className="wrap section rule-t">
        <SectionHead
          eyebrow="Upcoming"
          title={
            <>
              What&rsquo;s coming <Accent>up next.</Accent>
            </>
          }
        />
        <StaggerGrid className="rows">
          <article className="event-row">
            <div>
              <span className="tag tag-accent">Weekly · Online</span>
            </div>
            <div>
              <h3 className="h3" style={{ marginBottom: 8 }}>
                Weekly X Space
              </h3>
              <p className="body" style={{ maxWidth: 620 }}>
                Mostly on Fridays at 19:00 GMT  blockchain education, African Web3 stories, founder
                interviews and market insights.
              </p>
            </div>
            <ArrowLink href="/events" label="See all events →" />
          </article>
          <article className="event-row">
            <div>
              <span className="tag tag-red">Flagship · Dec 2026</span>
            </div>
            <div>
              <h3 className="h3" style={{ marginBottom: 8 }}>
                Blockchain &amp; Crypto Conference
              </h3>
              <p className="body" style={{ maxWidth: 620 }}>
                Ghana&rsquo;s flagship Web3 gathering  keynotes, startup showcases, hackathons,
                networking and policy discussions. Coming this December.
              </p>
            </div>
            <ArrowLink href="/events" label="Event details →" />
          </article>
        </StaggerGrid>
      </section>
    </>
  );
}
