import type { Metadata } from "next";
import GetInvolvedForm from "@/components/GetInvolvedForm";
import { GET_INVOLVED_WAYS } from "@/data/getInvolvedOptions";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Whether you're a beginner, a builder, a student, or a protocol looking to enter the Ghanaian market  here's how to get involved with TBC Ghana.",
  alternates: {
    canonical: "/getinvolved",
  },
  openGraph: {
    title: "Get Involved · TBC Ghana",
    description:
      "Whether you're a beginner, a builder, a student, or a protocol looking to enter the Ghanaian market  here's how to get involved with TBC Ghana.",
    url: "https://www.tbcafrica.org/getinvolved",
  },
};

export default function GetInvolvedPage() {
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
            Get Involved
          </div>
          <h1
            className="tbc-hero-h1"
            style={{
              color: "#fff",
              maxWidth: 820,
              marginBottom: 24,
            }}
          >
            There&rsquo;s a place for you in the Circle.
          </h1>
          <p style={{ font: "400 20px/1.6 'Inter'", color: "rgba(255,255,255,.76)", maxWidth: 660 }}>
            Whether you&rsquo;re a beginner, a builder, a student, or a protocol looking to
            enter the Ghanaian market  here&rsquo;s how to get involved.
          </p>
        </div>
      </section>

      <section className="tbc-container tbc-grid-4" style={{ paddingTop: 64, paddingBottom: 40 }}>
        {GET_INVOLVED_WAYS.map((way) => (
          <div
            key={way.title}
            className="tbc-card"
            style={{ borderRadius: 16, padding: 28 }}
          >
            <div style={{ width: 32, height: 32, borderRadius: 9, background: way.color, marginBottom: 18 }} />
            <h3 style={{ font: "700 18px/1.2 'Inter'", color: "var(--tbc-text, #14211f)", marginBottom: 8 }}>{way.title}</h3>
            <p style={{ font: "400 14.5px/1.5 'Inter'", color: "var(--tbc-text-muted, #54615e)" }}>{way.description}</p>
          </div>
        ))}
      </section>

      <section className="tbc-container" style={{ maxWidth: 760, paddingTop: 40, paddingBottom: 80 }}>
        <GetInvolvedForm />
      </section>
    </div>
  );
}
