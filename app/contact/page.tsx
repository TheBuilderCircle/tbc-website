import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Accent, PageHero } from "@/components/editorial";

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
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s <Accent>Build Together.</Accent>
          </>
        }
        lede="For partnerships, media inquiries, or general questions, reach out below."
      />

      <section className="wrap split" style={{ paddingBottom: "clamp(72px, 10vw, 136px)" }}>
        <div className="rows">
          <div className="contact-row">
            <div className="eyebrow">Email</div>
            <a href="mailto:thebuilderscircleghana@gmail.com" className="text-link h4" style={{ overflowWrap: "anywhere" }}>
              thebuilderscircleghana@gmail.com
            </a>
          </div>
          <div className="contact-row">
            <div className="eyebrow">Office</div>
            <p className="h4" style={{ fontWeight: 500 }}>
              14 Nii Owoo Street
              <br />
              Dzorwulu, Accra, Ghana
            </p>
          </div>
          <div className="contact-row">
            <div className="eyebrow">Social</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
              <a href="https://x.com/Builders_Circle" target="_blank" rel="noopener noreferrer" className="text-link">
                X (Twitter) · @Builders_Circle
              </a>
              <a href="https://www.linkedin.com/company/the-builders-circle-ghana/" target="_blank" rel="noopener noreferrer" className="text-link">
                LinkedIn · The Builders Circle Ghana
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
