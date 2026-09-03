import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "For partnerships, media inquiries, or general questions, reach out to TBC Ghana.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact · TBC Ghana",
    description:
      "For partnerships, media inquiries, or general questions, reach out to TBC Ghana.",
    url: "https://www.tbcafrica.org/contact",
  },
};

export default function ContactPage() {
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
            Contact
          </div>
          <h1
            className="tbc-hero-h1"
            style={{
              color: "#fff",
              maxWidth: 820,
              marginBottom: 24,
            }}
          >
            Let&rsquo;s Build Together.
          </h1>
          <p style={{ font: "400 20px/1.6 'Inter'", color: "rgba(255,255,255,.76)", maxWidth: 640 }}>
            For partnerships, media inquiries, or general questions, reach out below.
          </p>
        </div>
      </section>

      <section className="tbc-container tbc-split-grid-contact" style={{ paddingTop: 64, paddingBottom: 80 }}>
        <div>
          <div style={{ marginBottom: 36 }}>
            <div
              style={{
                font: "600 12px/1 'Inter'",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "#24D155",
                marginBottom: 12,
              }}
            >
              Email
            </div>
            <a href="mailto:thebuilderscircleghana@gmail.com" style={{ font: "600 20px/1.3 'Inter'", color: "var(--tbc-text, #14211f)" }}>
              thebuilderscircleghana@gmail.com
            </a>
          </div>
          <div style={{ marginBottom: 36 }}>
            <div
              style={{
                font: "600 12px/1 'Inter'",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "#24D155",
                marginBottom: 12,
              }}
            >
              Office
            </div>
            <p style={{ font: "500 18px/1.5 'Inter'", color: "var(--tbc-text, #14211f)" }}>
              14 Nii Owoo Street
              <br />
              Dzorwulu, Accra, Ghana
            </p>
          </div>
          <div>
            <div
              style={{
                font: "600 12px/1 'Inter'",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "#24D155",
                marginBottom: 14,
              }}
            >
              Social
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="https://x.com/Builders_Circle" target="_blank" rel="noopener noreferrer" style={{ font: "500 16px/1.3 'Inter'", color: "var(--tbc-text, #14211f)" }}>
                X (Twitter) · @Builders_Circle
              </a>
              <a href="#" style={{ font: "500 16px/1.3 'Inter'", color: "var(--tbc-text, #14211f)" }}>
                LinkedIn · The Builders Circle Ghana
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
