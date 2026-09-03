import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { PILLARS } from "@/data/pillars";
import { HOME_STATS } from "@/data/stats";
import { PARTNER_VALUE_PROPS } from "@/data/partners";
import { COMMUNITY_PARTNERS } from "@/data/communityPartners";
import LogoMarquee from "@/components/LogoMarquee";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerGrid from "@/components/StaggerGrid";
import PartnerCards3D from "@/components/PartnerCards3D";
import HorizontalScrollTrack from "@/components/HorizontalScrollTrack";
import ParallaxElement from "@/components/ParallaxElement";
import PinnedSection from "@/components/PinnedSection";
import ScrambleText from "@/components/ScrambleText";

export default function HomePage() {
  return (
    <div style={{ width: "100%" }}>
      {/* HERO */}
      <section
        className="tbc-hero-section"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundImage: "url('/images/tbc_hero.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay — heavier on the left for text legibility, fades right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, rgba(14,28,25,0.92) 0%, rgba(14,28,25,0.75) 50%, rgba(14,28,25,0.30) 100%)",
            zIndex: 1,
          }}
        />

        {/* Parallax ring decorations — sit above the overlay on the right */}
        <ParallaxElement
          speed={70}
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: "50%",
            border: "1px solid rgba(36,209,85,.14)",
            zIndex: 2,
          }}
        />
        <ParallaxElement
          speed={130}
          style={{
            position: "absolute",
            top: -40,
            right: 20,
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: "1px solid rgba(36,209,85,.22)",
            zIndex: 2,
          }}
        />
        <ParallaxElement
          speed={220}
          style={{
            position: "absolute",
            top: 90,
            right: 150,
            width: 240,
            height: 240,
            borderRadius: "50%",
            border: "2px solid rgba(36,209,85,.45)",
            animation: "tbcRing 44s linear infinite",
            zIndex: 2,
          }}
        >
          <span
            style={{
              position: "absolute",
              top: -7,
              left: "50%",
              width: 12,
              height: 12,
              marginLeft: -6,
              borderRadius: "50%",
              background: "#24D155",
            }}
          />
        </ParallaxElement>

        <div className="tbc-container tbc-hero-padding" style={{ position: "relative", zIndex: 3 }}>
          <div style={{ maxWidth: 760, animation: "tbcUp .7s both" }}>
            <div
              style={{
                font: "600 13px/1 'Inter'",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "#24D155",
                marginBottom: 24,
              }}
            >
              Ecosystem Infrastructure for Web3
            </div>
            <h1
              className="tbc-hero-h1"
              style={{
                color: "#fff",
                marginBottom: 28,
                textWrap: "balance",
              }}
            >
              <ScrambleText text="Building Ghana's" delay={0.1} /> <span style={{ color: "#24D155" }}><ScrambleText text="Web3 Future" delay={0.4} /></span> <ScrambleText text="Together." delay={0.7} />
            </h1>
            <p
              style={{
                font: "400 21px/1.6 'Inter'",
                color: "rgba(255,255,255,.82)",
                maxWidth: 600,
                marginBottom: 40,
              }}
            >
              TBC Ghana is the ecosystem infrastructure uniting education, builders, and
              community to grow blockchain and Web3 across Ghana and Africa.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a
                href="https://chat.whatsapp.com/Jd9W4t16aYUH3UAONN0Ivm"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#24D155",
                  color: "#14211f",
                  font: "700 16px/1 'Inter'",
                  padding: "18px 32px",
                  borderRadius: 10,
                  textDecoration: "none",
                }}
              >
                Join the Circle
              </a>
              <Link
                href="/about"
                style={{
                  border: "1px solid rgba(255,255,255,.32)",
                  color: "#fff",
                  font: "600 16px/1 'Inter'",
                  padding: "18px 32px",
                  borderRadius: 10,
                  textDecoration: "none",
                }}
              >
                Explore What We Do
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STAT BAND */}
      <section style={{ background: "var(--tbc-bg, #ffffff)", borderBottom: "1px solid var(--tbc-border, rgba(20,33,31,0.08))" }}>
        <div className="tbc-container" style={{ paddingTop: 40, paddingBottom: 40 }}>
          <StaggerGrid className="tbc-stat-grid">
            {HOME_STATS.map((stat) => (
              <div
                key={stat.label}
                className="tbc-stat-item"
              >
                <div style={{ font: "800 52px/1 'Inter'", letterSpacing: "-.02em", color: "#24D155" }}>
                  {stat.value}
                </div>
                <div style={{ font: "500 16px/1.4 'Inter'", color: "var(--tbc-text-muted, #54615e)", marginTop: 14 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section>
        <ScrollReveal>
          <PinnedSection
            className="tbc-container tbc-section-padding tbc-split-grid-who"
            leftContent={
              <>
                <div
                  style={{
                    font: "600 13px/1 'Inter'",
                    letterSpacing: ".18em",
                    textTransform: "uppercase",
                    color: "#24D155",
                    marginBottom: 18,
                  }}
                >
                  Who We Are
                </div>
                <h2 className="tbc-section-h2" style={{ color: "var(--tbc-text, #14211f)", maxWidth: 400 }}>
                  A trusted gateway for Web3 growth in Ghana.
                </h2>
              </>
            }
            rightContent={
              <>
                <p style={{ font: "400 20px/1.65 'Inter'", color: "var(--tbc-text-muted, #54615e)", marginBottom: 28 }}>
                  TBC Ghana is a trusted gateway for blockchain and Web3 growth in Ghana and Africa
                  educating new users, supporting builders, and connecting global ecosystems with
                  local communities.
                </p>
                <Link href="/about" style={{ font: "700 16px/1 'Inter'", color: "#24D155", textDecoration: "none" }}>
                  Read our story →
                </Link>
              </>
            }
          />
        </ScrollReveal>
      </section>

      {/* WHAT WE DO */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url('/images/pillars-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderTop: "1px solid rgba(20,33,31,0.08)",
          borderBottom: "1px solid rgba(20,33,31,0.08)",
        }}
      >
        {/* subtle vignette overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(14,28,25,0.55) 0%, rgba(14,28,25,0.25) 100%)",
            pointerEvents: "none",
          }}
        />
        <div className="tbc-container tbc-section-padding" style={{ position: "relative", paddingTop: 56, paddingBottom: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 48,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
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
              <h2 className="tbc-section-h2" style={{ color: "#fff" }}>
                Five pillars, one ecosystem.
              </h2>
            </div>
            <Link
              href="/about"
              style={{
                font: "600 14px/1 'Inter'",
                color: "#fff",
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "10px 18px",
                borderRadius: 8,
                textDecoration: "none",
              }}
            >
              Learn about our pillars →
            </Link>
          </div>
        </div>
        {/* We close tbc-container here so the horizontal track can bleed edge-to-edge */}
        <HorizontalScrollTrack>
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className="tbc-card"
              style={{
                width: 320,
                borderRadius: 16,
                padding: 0,
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              <div style={{ height: 4, background: pillar.color }} />
              <div style={{ padding: 32 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: `${pillar.color}1a`,
                    marginBottom: 22,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `1px solid ${pillar.color}33`,
                  }}
                >
                  <pillar.Icon size={22} color={pillar.color} />
                </div>
                <div style={{ font: "700 20px/1.2 'Inter'", color: "#14211f", marginBottom: 10 }}>
                  {pillar.title}
                </div>
                <p style={{ font: "400 14.5px/1.55 'Inter'", color: "#54615e", marginBottom: 20 }}>
                  {pillar.description}
                </p>
                <div style={{ font: "600 13px/1 'Inter'", color: pillar.color }}>
                  {(i + 1).toString().padStart(2, "0")}
                </div>
              </div>
            </div>
          ))}
          <div
            className="tbc-card-dark"
            style={{
              width: 320,
              borderRadius: 16,
              flexShrink: 0,
              overflow: "hidden",
            }}
          >
            <div style={{ height: 4, background: "#24D155" }} />
            <div style={{ padding: 32, display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 200 }}>
              <div style={{ font: "700 22px/1.3 'Inter'", color: "#fff", marginBottom: 16 }}>
                Find where you fit.
              </div>
              <Link
                href="/community"
                style={{ font: "600 15px/1 'Inter'", color: "#24D155", textDecoration: "none" }}
              >
                Explore the community →
              </Link>
            </div>
          </div>
        </HorizontalScrollTrack>
      </section>

      {/* GET INVOLVED BAND */}
      <section style={{ background: "rgba(36,209,85,0.10)", borderTop: "1px solid rgba(36,209,85,0.28)", borderBottom: "1px solid rgba(36,209,85,0.28)" }}>
        <ScrollReveal>
          <div
            className="tbc-container"
            style={{
              paddingTop: 64,
              paddingBottom: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <div style={{ maxWidth: 660 }}>
              <h2 style={{ font: "800 38px/1.15 'Inter'", letterSpacing: "-.02em", color: "var(--tbc-text, #14211f)", marginBottom: 12 }}>
                There&rsquo;s a place for you in the Circle.
              </h2>
              <p style={{ font: "400 18px/1.5 'Inter'", color: "var(--tbc-text-muted, #54615e)" }}>
                Whether you&rsquo;re just starting out or already building, join a structured
                ecosystem made for you.
              </p>
            </div>
            <a
              href="https://chat.whatsapp.com/Jd9W4t16aYUH3UAONN0Ivm"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#24D155",
                color: "#0C1614",
                font: "700 16px/1 'Inter'",
                padding: "18px 34px",
                borderRadius: 10,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Join TBC Ghana
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* PARTNERS */}
      <section style={{ background: "#ffffff", borderTop: "1px solid rgba(20,33,31,0.08)", borderBottom: "1px solid rgba(20,33,31,0.08)" }}>
        <div className="tbc-container tbc-section-padding">
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 48,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <div
                style={{
                  font: "600 13px/1 'Inter'",
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "#24D155",
                  marginBottom: 16,
                }}
              >
                Partners
              </div>
              <h2 className="tbc-section-h2" style={{ color: "var(--tbc-text, #14211f)" }}>
                Building the ecosystem together.
              </h2>
            </div>
            <Link href="/contact" style={{ font: "700 15px/1 'Inter'", color: "#1B4D4A", textDecoration: "none" }}>
              Partner with us →
            </Link>
          </div>
          <PartnerCards3D />

          <div
            style={{
              font: "600 12px/1 'Inter'",
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "var(--tbc-text-faint)",
              marginBottom: 20,
            }}
          >
            Ecosystem partners &amp; sponsors
          </div>
          <LogoMarquee />
        </div>
      </section>

      {/* UPCOMING */}
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
          Upcoming
        </div>
        <h2 className="tbc-section-h2" style={{ color: "var(--tbc-text, #14211f)", marginBottom: 48 }}>
          What&rsquo;s coming up next.
        </h2>
        <StaggerGrid className="tbc-grid-2" staggerDelay={0.15}>
          <div
            className="tbc-card tbc-card-padding"
            style={{
              borderRadius: 16,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  font: "600 11.5px/1 'Inter'",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#24D155",
                  background: "rgba(36,209,85,.12)",
                  padding: "7px 11px",
                  borderRadius: 6,
                }}
              >
                Weekly · Online
              </span>
            </div>
            <div style={{ font: "700 24px/1.2 'Inter'", color: "var(--tbc-text, #14211f)" }}>Weekly X Space</div>
            <p style={{ font: "400 16px/1.55 'Inter'", color: "var(--tbc-text-muted, #54615e)", flex: 1 }}>
              Every Friday at 19:00 GMT  blockchain education, African Web3 stories, founder
              interviews and market insights.
            </p>
            <Link href="/events" style={{ font: "700 15px/1 'Inter'", color: "#24D155", textDecoration: "none" }}>
              See all events →
            </Link>
          </div>
          <div
            className="tbc-card tbc-card-padding"
            style={{
              background: "var(--tbc-surface, #ffffff)",
              borderRadius: 16,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  font: "600 11.5px/1 'Inter'",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#fff",
                  background: "#D03433",
                  padding: "7px 11px",
                  borderRadius: 6,
                }}
              >
                Flagship · Nov 2026
              </span>
            </div>
            <div style={{ font: "700 24px/1.2 'Inter'", color: "var(--tbc-text, #14211f)" }}>
              Blockchain &amp; Crypto Conference
            </div>
            <p style={{ font: "400 16px/1.55 'Inter'", color: "var(--tbc-text-muted, #54615e)", flex: 1 }}>
              Ghana&rsquo;s flagship Web3 gathering  keynotes, startup showcases, hackathons,
              networking and policy discussions. Coming this November.
            </p>
            <Link href="/events" style={{ font: "700 15px/1 'Inter'", color: "#24D155", textDecoration: "none" }}>
              Event details →
            </Link>
          </div>
        </StaggerGrid>
      </section>
    </div>
  );
}
