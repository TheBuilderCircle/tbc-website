import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { MEDIA_POSTS } from "@/data/mediaPosts";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerGrid from "@/components/StaggerGrid";
import { Accent, ArrowLink, PageHero } from "@/components/editorial";

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
    <>
      <PageHero
        eyebrow="Media / Ecosystem Stories"
        title={
          <>
            The stories driving <Accent>Web3 in Ghana.</Accent>
          </>
        }
        lede={
          <>
            Home for TBC Ghana&rsquo;s original content  X Space recordings, the podcast,
            ecosystem reports, and short written pieces on Web3 in Ghana.
          </>
        }
      />

      {/* FEATURED REPORT */}
      <section className="wrap">
        <ScrollReveal className="ruled cols-2">
          <div style={{ paddingLeft: "var(--cell-px)" }}>
            <ImagePlaceholder
              label={
                <>
                  report cover
                  <br />
                  drop image here
                </>
              }
              style={{ minHeight: 340, height: "100%" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBlock: "40px" }}>
            <span className="eyebrow" style={{ marginBottom: 20 }}>
              Latest ecosystem report
            </span>
            <h2 className="h2" style={{ marginBottom: 20 }}>
              The State of Web3 in Ghana
            </h2>
            <p className="lede" style={{ marginBottom: 32 }}>
              Adoption trends, developer ecosystem growth, and community insights  establishing
              TBC Ghana as an ecosystem intelligence source.
            </p>
            <div>
              <ArrowLink href="#" label="Read the report →" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CONTENT GRID */}
      <section className="wrap" style={{ paddingBottom: "clamp(72px, 10vw, 136px)" }}>
        <StaggerGrid className="ruled cols-3 ruled-b" staggerDelay={0.06}>
          {MEDIA_POSTS.map((post) => (
            <article key={post.title} style={{ paddingBottom: 40 }}>
              <ImagePlaceholder label="cover image" style={{ aspectRatio: "16/10" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0 14px" }}>
                <span className="tag tag-accent">{post.tag}</span>
                <span className="mono">{post.date}</span>
              </div>
              <h3 className="h4" style={{ marginBottom: 10 }}>
                {post.title}
              </h3>
              <p className="small">{post.excerpt}</p>
            </article>
          ))}
        </StaggerGrid>
      </section>
    </>
  );
}
