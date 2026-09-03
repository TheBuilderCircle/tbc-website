import type { Metadata } from "next";
import Image from "next/image";
import PartnerCardsGrid from "@/components/PartnerCardsGrid";

export const metadata: Metadata = {
  title: "Community",
  description:
    "TBC Ghana is a circle of communities building blockchain, tech and Web3 across Ghana and Africa.",
  alternates: {
    canonical: "/community",
  },
  openGraph: {
    title: "Community · TBC Ghana",
    description:
      "TBC Ghana is a circle of communities building blockchain, tech and Web3 across Ghana and Africa.",
    url: "https://www.tbcafrica.org/community",
  },
};

const COMMUNITY_GALLERY = [
  {
    title: "Aya Builders Meetup",
    category: "Developer Community",
    image: "/images/group-images/aya-group.jpg",
  },
  {
    title: "Sui Network Ghana Builder Session",
    category: "Ecosystem Growth",
    image: "/images/group-images/sui-group.jpg",
  },
  {
    title: "BeTechConnected Youth Empowerment",
    category: "Tech Talent",
    image: "/images/group-images/betech-group.jpg",
  },
  {
    title: "Celo Web3 Developer Gathering",
    category: "Web3 Builders",
    image: "/images/group-images/celo-group.jpg",
  },
  {
    title: "ICP Hub Ghana Hackathon",
    category: "Hackathon & Bootcamps",
    image: "/images/group-images/icp-group.jpg",
  },
  {
    title: "Tech Wrap Up",
    category: "Tech Media",
    image: "/images/group-images/Kweku_group.jpg",
  },
];

export default function CommunityPage() {
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
            Community
          </div>
          <h1
            className="tbc-hero-h1"
            style={{
              color: "#fff",
              maxWidth: 900,
              marginBottom: 24,
            }}
          >
            The communities inside the Circle.
          </h1>
          <p style={{ font: "400 20px/1.6 'Inter'", color: "rgba(255,255,255,.76)", maxWidth: 660 }}>
            TBC Ghana is a circle of communities. Meet the ecosystem partners building blockchain,
            tech and Web3 across Ghana and Africa alongside us.
          </p>
        </div>
      </section>

      {/* COMMUNITY PARTNERS SECTION */}
      <section style={{ background: "var(--tbc-bg, #F5F6F4)", borderTop: "1px solid var(--tbc-border, rgba(20,33,31,.08))", padding: "80px 0" }}>
        <div className="tbc-container" style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              style={{
                font: "600 13px/1 'Inter'",
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "#24D155",
                marginBottom: 16,
              }}
            >
              Ecosystem Partners
            </div>
            <h2 style={{ font: "800 36px/1.15 'Inter'", letterSpacing: "-.02em", color: "var(--tbc-text, #14211F)", marginBottom: 16 }}>
              Communities inside the Circle
            </h2>
            <p style={{ font: "400 18px/1.6 'Inter'", color: "var(--tbc-text-muted, #54615E)", maxWidth: 700, margin: "0 auto 48px auto" }}>
              Meet the ecosystem communities, labs, and organizations driving Web3 education, development, and adoption across Ghana and Africa alongside us.
            </p>
          </div>

          <PartnerCardsGrid />
        </div>
      </section>

      {/* COMMUNITY IN ACTION GALLERY */}
      <section style={{ background: "var(--tbc-bg, #ffffff)", borderTop: "1px solid var(--tbc-border, rgba(20,33,31,.08))", padding: "80px 0" }}>
        <div className="tbc-container" style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            style={{
              font: "600 13px/1 'Inter'",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "#24D155",
              marginBottom: 16,
            }}
          >
            Community in Action
          </div>
          <h2 style={{ font: "800 36px/1.15 'Inter'", letterSpacing: "-.02em", color: "var(--tbc-text, #14211F)", marginBottom: 16 }}>
            Moments from the Ecosystem
          </h2>
          <p style={{ font: "400 18px/1.6 'Inter'", color: "var(--tbc-text-muted, #54615E)", maxWidth: 700, marginBottom: 48 }}>
            Bringing together builders, founders, and innovators across Web3 & tech meetups, hackathons, and developer bootcamps in Ghana.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: 24,
            }}
          >
            {COMMUNITY_GALLERY.map((item) => (
              <div
                key={item.title}
                className="tbc-gallery-item"
                style={{
                  height: 280,
                  position: "relative",
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(8, 16, 14, 0.85) 0%, transparent 60%)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: 20,
                  }}
                >
                  <h3
                    style={{
                      font: "700 18px/1.3 'Inter'",
                      color: "#FFFFFF",
                      margin: 0,
                      textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
