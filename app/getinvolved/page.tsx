import type { Metadata } from "next";
import GetInvolvedForm from "@/components/GetInvolvedForm";
import StaggerGrid from "@/components/StaggerGrid";
import { GET_INVOLVED_WAYS } from "@/data/getInvolvedOptions";
import { Accent, PageHero } from "@/components/editorial";

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

const tone = (c: string) => (c === "#1B4D4A" ? "var(--ink)" : c);

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title={
          <>
            There&rsquo;s a place for you in <Accent>the Circle.</Accent>
          </>
        }
        lede={
          <>
            Whether you&rsquo;re a beginner, a builder, a student, or a protocol looking to
            enter the Ghanaian market  here&rsquo;s how to get involved.
          </>
        }
      />

      <section className="wrap">
        <StaggerGrid className="ruled cols-4 ruled-b">
          {GET_INVOLVED_WAYS.map((way) => (
            <div key={way.title} style={{ paddingBottom: 40 }}>
              <span
                aria-hidden="true"
                style={{ display: "block", width: 32, height: 3, background: tone(way.color), marginBottom: 40 }}
              />
              <h3 className="h4" style={{ marginBottom: 8 }}>
                {way.title}
              </h3>
              <p className="small">{way.description}</p>
            </div>
          ))}
        </StaggerGrid>
      </section>

      <section className="wrap section">
        <GetInvolvedForm />
      </section>
    </>
  );
}
