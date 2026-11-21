import Image from "next/image";
import { COMMUNITY_PARTNERS } from "@/data/communityPartners";
import StaggerGrid from "@/components/StaggerGrid";

export default function PartnerCardsGrid() {
  return (
    <StaggerGrid className="ruled cols-3 ruled-b" staggerDelay={0.05}>
      {COMMUNITY_PARTNERS.map((partner) => (
        <article key={partner.name} className="partner-cell">
          <div className="logo-tile">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              width={180}
              height={60}
              style={{ transform: partner.logoScale ? `scale(${partner.logoScale})` : undefined }}
            />
          </div>

          <h3 className="h4" style={{ marginTop: 24 }}>
            {partner.name}
          </h3>
          <p className="small" style={{ marginTop: 10 }}>
            {partner.description}
          </p>

          {partner.links.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto", paddingTop: 24 }}>
              {partner.links.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.title}
                  className="tag"
                >
                  <link.Icon size={13} color="currentColor" />
                  <span>{link.title}</span>
                </a>
              ))}
            </div>
          )}
        </article>
      ))}
    </StaggerGrid>
  );
}
