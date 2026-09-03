import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { MEDIA_POSTS } from "@/data/mediaPosts";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Home for TBC Ghana's original content  X Space recordings, the podcast, ecosystem reports, and short written pieces on Web3 in Ghana.",
  alternates: {
    canonical: "/media",
  },
  openGraph: {
    title: "Media · TBC Ghana",
    description:
      "Home for TBC Ghana's original content  X Space recordings, the podcast, ecosystem reports, and short written pieces on Web3 in Ghana.",
    url: "https://www.tbcafrica.org/media",
  },
};

export default function MediaPage() {
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
            Media / Ecosystem Stories
          </div>
          <h1
            className="tbc-hero-h1"
            style={{
              color: "#fff",
              maxWidth: 820,
              marginBottom: 24,
            }}
          >
            The stories driving Web3 in Ghana.
          </h1>
          <p style={{ font: "400 20px/1.6 'Inter'", color: "rgba(255,255,255,.76)", maxWidth: 660 }}>
            Home for TBC Ghana&rsquo;s original content  X Space recordings, the podcast,
            ecosystem reports, and short written pieces on Web3 in Ghana.
          </p>
        </div>
      </section>

      <ScrollReveal>
      {/* FEATURED REPORT */}
      <section className="tbc-container" style={{ paddingTop: 64, paddingBottom: 24 }}>
        <div
          className="tbc-card tbc-split-grid"
          style={{
            borderRadius: 20,
            overflow: "hidden",
            gap: 0,
          }}
        >
          <ImagePlaceholder label={<>report cover<br />drop image here</>} style={{ minHeight: 300 }} />
          <div className="tbc-card-padding" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span
              style={{
                font: "600 12px/1 'Inter'",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "#24D155",
                marginBottom: 16,
              }}
            >
              Latest ecosystem report
            </span>
            <h2 style={{ font: "800 32px/1.15 'Inter'", letterSpacing: "-.02em", color: "var(--tbc-text, #14211f)", marginBottom: 14 }}>
              The State of Web3 in Ghana
            </h2>
            <p style={{ font: "400 17px/1.6 'Inter'", color: "var(--tbc-text-muted, #54615e)", marginBottom: 24 }}>
              Adoption trends, developer ecosystem growth, and community insights  establishing
              TBC Ghana as an ecosystem intelligence source.
            </p>
            <a href="#" style={{ font: "700 15px/1 'Inter'", color: "#24D155" }}>
              Read the report →
            </a>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      {/* CONTENT GRID */}
      <section className="tbc-container" style={{ paddingTop: 24, paddingBottom: 80 }}>
        <div className="tbc-grid-3">
          {MEDIA_POSTS.map((post) => (
            <div
              key={post.title}
              className="tbc-card"
              style={{
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <ImagePlaceholder label="cover image" style={{ aspectRatio: "16/10" }} />
              <div style={{ padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span
                    style={{
                      font: "600 11px/1 'Inter'",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "#24D155",
                      background: "rgba(36,209,85,.12)",
                      padding: "6px 10px",
                      borderRadius: 5,
                    }}
                  >
                    {post.tag}
                  </span>
                  <span style={{ font: "500 12.5px/1 'Inter'", color: "var(--tbc-text-placeholder)" }}>{post.date}</span>
                </div>
                <h3
                  style={{
                    font: "700 19px/1.3 'Inter'",
                    letterSpacing: "-.01em",
                    color: "var(--tbc-text, #14211f)",
                    marginBottom: 10,
                  }}
                >
                  {post.title}
                </h3>
                <p style={{ font: "400 14.5px/1.55 'Inter'", color: "var(--tbc-text-muted)" }}>{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
