import Link from "next/link";
import Image from "next/image";
import { FOOTER_ORGANIZATION_LINKS, FOOTER_ENGAGE_LINKS } from "@/data/footerLinks";
import { WhatsAppIcon } from "@/components/icons";

const WHATSAPP = "https://chat.whatsapp.com/Jd9W4t16aYUH3UAONN0Ivm";

export default function Footer() {
  return (
    <footer className="site-foot on-deep texture">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Image
              src="/images/tbc-logos/tbc-ghana-logo-reverse-color.svg"
              alt="TBC Ghana Logo"
              width={160}
              height={43}
            />
            <p className="lede" style={{ marginTop: 24, maxWidth: 320 }}>
              Building the Web3 Ecosystem of Ghana and Africa.
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 28 }}>
              <a
                href="https://x.com/Builders_Circle"
                target="_blank"
                rel="noopener noreferrer"
                title="X (Twitter)"
                className="icon-btn"
                style={{ fontWeight: 700, fontSize: 14 }}
              >
                X
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Community"
                className="icon-btn"
                style={{ color: "var(--green)" }}
              >
                <WhatsAppIcon size={17} color="currentColor" />
              </a>
              <a href="https://www.linkedin.com/company/the-builders-circle-ghana/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="icon-btn" style={{ fontWeight: 700, fontSize: 13 }}>
                in
              </a>
            </div>
          </div>

          <div>
            <div className="eyebrow">Organization</div>
            <div className="foot-links">
              {FOOTER_ORGANIZATION_LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow">Engage</div>
            <div className="foot-links">
              {FOOTER_ENGAGE_LINKS.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow">Contact</div>
            <div className="foot-links">
              <a href="mailto:thebuilderscircleghana@gmail.com" style={{ overflowWrap: "anywhere" }}>
                thebuilderscircleghana@gmail.com
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--green)" }}
              >
                <WhatsAppIcon size={16} color="currentColor" />
                <span>Join WhatsApp Community</span>
              </a>
            </div>
          </div>
        </div>

        <div className="foot-bottom mono">
          <span>© 2026 The Builders Circle Ghana, a non-profit organization (NGO). All rights reserved.</span>
          <span>www.tbcghana.org</span>
          <span>Developed By KayabaLabs</span>
        </div>
      </div>
    </footer>
  );
}
