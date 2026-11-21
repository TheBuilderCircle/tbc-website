import Link from "next/link";
import type { ReactNode } from "react";

/** Serif-italic accent phrase inside a display heading. Styling only. */
export function Accent({ children }: { children: ReactNode }) {
  return <em className="accent">{children}</em>;
}

type HeroProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  /** Optional right-hand content in the ruled row under the title. */
  aside?: ReactNode;
};

/** Inner-page hero: eyebrow over a rule, very large title, ruled lede row. */
export function PageHero({ eyebrow, title, lede, aside }: HeroProps) {
  return (
    <section className="wrap page-hero">
      <div className="eyebrow rise">{eyebrow}</div>
      <h1 className="display-sm rise rise-2">{title}</h1>
      <div className="page-hero-foot rise rise-3">
        <div aria-hidden="true">
          <span className="hero-mark" />
        </div>
        <div>
          {lede ? <p className="lede">{lede}</p> : null}
          {aside}
        </div>
      </div>
    </section>
  );
}

type Action = { href: string; label: string; external?: boolean };

/** Eyebrow + large heading, with an optional arrow link on the right. */
export function SectionHead({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  action?: Action;
}) {
  return (
    <div className="section-head">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="h2">{title}</h2>
      </div>
      {action ? <ArrowLink {...action} /> : null}
    </div>
  );
}

/** Underlined text link whose label already ends in "→" (copy is unchanged). */
export function ArrowLink({ href, label, external }: Action) {
  const text = label.replace(/\s*→\s*$/, "");
  const hasArrow = text !== label;
  const inner = (
    <>
      {text}
      {hasArrow ? <span className="arrow"> →</span> : null}
    </>
  );
  if (external || href.startsWith("http") || href.startsWith("mailto:") || href === "#") {
    return (
      <a
        href={href}
        className="link-arrow"
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className="link-arrow">
      {inner}
    </Link>
  );
}
