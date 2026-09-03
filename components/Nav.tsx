"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Countdown from "./Countdown";
import { NAV_LINKS } from "@/data/navLinks";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <div className="tbc-banner">
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#24D155",
            display: "inline-block",
            flex: "none",
          }}
        />
        <span>Flagship Blockchain &amp; Crypto Conference · Accra · November 2026</span>
        <span style={{ opacity: 0.6 }}>·</span>
        <Countdown variant="banner" />
      </div>

      <nav className="tbc-nav">
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <Image 
            src="/images/tbc-logos/tbc-ghana-logo-reverse-color.svg" 
            alt="TBC Ghana Logo" 
            width={120} 
            height={32} 
            priority
          />
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div className="tbc-nav-links">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    font: `${isActive ? 600 : 500} 14.5px/1 'Inter'`,
                    color: isActive ? "#24D155" : "rgba(255,255,255,.82)",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://chat.whatsapp.com/Jd9W4t16aYUH3UAONN0Ivm"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#24D155",
                color: "#14211F",
                font: "700 14px/1 'Inter'",
                padding: "11px 18px",
                borderRadius: 8,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Join the Circle
            </a>
          </div>

          <ThemeToggle />
        </div>

        <button
          className="tbc-hamburger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          style={{
            background: "none",
            border: "1px solid rgba(255,255,255,.3)",
            borderRadius: 8,
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <span style={{ width: 18, height: 2, background: "rgba(255,255,255,0.7)", display: "block" }} />
          <span style={{ width: 18, height: 2, background: "rgba(255,255,255,0.7)", display: "block" }} />
          <span style={{ width: 18, height: 2, background: "rgba(255,255,255,0.7)", display: "block" }} />
        </button>
      </nav>

      <div
        className={`tbc-mobile-panel${open ? " open" : ""}`}
        style={{
          flexDirection: "column",
          background: "#e1e6e3",
          gap: 4,
          borderBottom: "1px solid rgba(20,33,31,0.08)",
        }}
      >
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                font: `${isActive ? 600 : 500} 15px/1 'Inter'`,
                color: isActive ? "#24D155" : "#14211f",
                textDecoration: "none",
                padding: "12px 0",
              }}
            >
              {link.label}
            </Link>
          );
        })}
        <a
          href="https://chat.whatsapp.com/Jd9W4t16aYUH3UAONN0Ivm"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          style={{
            background: "#24D155",
            color: "#14211f",
            font: "700 14px/1 'Inter'",
            padding: "12px 18px",
            borderRadius: 8,
            textDecoration: "none",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Join the Circle
        </a>
      </div>
    </div>
  );
}
