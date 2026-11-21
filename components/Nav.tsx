"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Countdown from "./Countdown";
import { NAV_LINKS } from "@/data/navLinks";
import ThemeToggle from "./ThemeToggle";

const JOIN_URL = "https://chat.whatsapp.com/Jd9W4t16aYUH3UAONN0Ivm";
const CONFERENCE_URL = "https://bcc.tbcghana.org";

function Logo({ width, height }: { width: number; height: number }) {
  return (
    <>
      <Image
        className="logo-on-dark"
        src="/images/tbc-logos/tbc-ghana-logo-reverse-color.svg"
        alt="TBC Ghana Logo"
        width={width}
        height={height}
        preload
      />
      <Image
        className="logo-on-light"
        src="/images/tbc-logos/tbc-ghana-logo-color.svg"
        alt="TBC Ghana Logo"
        width={width}
        height={height}
      />
    </>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-head">
      <a
        className="banner"
        href={CONFERENCE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Flagship Blockchain & Crypto Conference, 11 December 2026, Ghana Shippers House, Accra. More info at bcc.tbcghana.org"
      >
        <span className="banner-dot" />
        <span>Flagship Blockchain &amp; Crypto Conference · Ghana Shippers House, Accra · 11 December 2026</span>
        <span style={{ opacity: 0.6 }}>·</span>
        <Countdown variant="banner" />
        <span className="banner-more">bcc.tbcghana.org ↗</span>
      </a>

      <nav className="nav" aria-label="Main">
        <div className="wrap nav-inner">
          <Link href="/" aria-label="TBC Ghana home" style={{ display: "flex" }}>
            <Logo width={120} height={32} />
          </Link>

          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm nav-join"
            >
              Join the Circle
            </a>
            <ThemeToggle />
            <button
              type="button"
              className="icon-btn nav-burger"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                {open ? (
                  <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.6" />
                ) : (
                  <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.6" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div id="mobile-menu" className={`mobile-panel${open ? " open" : ""}`}>
          <div className="wrap">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="mobile-link"
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-primary btn-block"
              style={{ marginTop: 24 }}
            >
              Join the Circle
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
