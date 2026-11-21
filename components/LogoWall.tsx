import Image from "next/image";
import Link from "next/link";
import { COMMUNITY_PARTNERS } from "@/data/communityPartners";

/** Static, ruled wall of partner logos, each on a cream tile. */
export default function LogoWall() {
  return (
    <div className="ruled cols-4 ruled-b logo-wall">
      {COMMUNITY_PARTNERS.map((partner) => (
        <Link
          key={partner.name}
          href="/community"
          title={`${partner.name} - Click to view in Community`}
          className="logo-wall-item"
        >
          <div className="logo-tile">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              width={160}
              height={55}
              style={{
                transform: partner.logoScale ? `scale(${partner.logoScale})` : undefined,
              }}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
