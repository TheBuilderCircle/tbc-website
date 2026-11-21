import type { Metadata } from "next";
import Image from "next/image";
import PartnerCardsGrid from "@/components/PartnerCardsGrid";
import StaggerGrid from "@/components/StaggerGrid";
import { Accent, PageHero, SectionHead } from "@/components/editorial";

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

// Ordered so the strongest photo leads the large slot. `position` crops each
// frame to the people (several shots are half floor or ceiling).
const COMMUNITY_GALLERY = [
  {
    title: "Sui Network Ghana Builder Session",
    image: "/images/group-images/sui-group.jpg",
    position: "center 28%",
  },
  {
    title: "Aya Builders Meetup",
    image: "/images/group-images/aya-group.jpg",
    position: "center 52%",
  },
  {
    title: "BeTechConnected Youth Empowerment",
    image: "/images/group-images/betech-group.jpg",
    position: "center 62%",
  },
  {
    title: "Celo Web3 Developer Gathering",
    image: "/images/group-images/celo-group.jpg",
    position: "center 78%",
  },
  {
    title: "ICP Hub Ghana Hackathon",
    image: "/images/group-images/icp-group.jpg",
    position: "center 62%",
  },
  {
    title: "Tech Wrap Up",
    image: "/images/group-images/Kweku_group.jpg",
    position: "center 45%",
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title={
          <>
            The communities <Accent>inside the Circle.</Accent>
          </>
        }
        lede="TBC Ghana is a circle of communities. Meet the ecosystem partners building blockchain, tech and Web3 across Ghana and Africa alongside us."
      />

      {/* PARTNERS */}
      <section className="wrap" style={{ paddingBottom: "clamp(72px, 10vw, 136px)" }}>
        <SectionHead
          eyebrow="Ecosystem Partners"
          title={
            <>
              Communities inside <Accent>the Circle</Accent>
            </>
          }
        />
        <p className="lede" style={{ maxWidth: 700, marginTop: -16, marginBottom: 48 }}>
          Meet the ecosystem communities, labs, and organizations driving Web3 education, development, and adoption across Ghana and Africa alongside us.
        </p>
        <PartnerCardsGrid />
      </section>

      {/* GALLERY */}
      <section className="section texture rule-t">
        <div className="wrap">
          <SectionHead
            eyebrow="Community in Action"
            title={
              <>
                Moments from <Accent>the Ecosystem</Accent>
              </>
            }
          />
          <p className="lede" style={{ maxWidth: 700, marginTop: -16, marginBottom: 48 }}>
            Bringing together builders, founders, and innovators across Web3 & tech meetups, hackathons, and developer bootcamps in Ghana.
          </p>

          <StaggerGrid className="gallery">
            {COMMUNITY_GALLERY.map((item, i) => (
              <figure key={item.title} className="mono-photo">
                <div className="gallery-img">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={i === 0 ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"}
                    style={{ objectFit: "cover", objectPosition: item.position }}
                  />
                </div>
                <figcaption className="caption">
                  <h3 className="h4" style={{ fontSize: 16 }}>
                    {item.title}
                  </h3>
                </figcaption>
              </figure>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </>
  );
}
