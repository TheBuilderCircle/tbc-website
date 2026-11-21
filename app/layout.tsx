import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroller from "@/components/SmoothScroller";
import { ThemeProvider } from "@/lib/theme";
import { THEME_INIT_SCRIPT } from "@/lib/theme-constants";

import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tbcafrica.org"),
  title: {
    default: "TBC Ghana  Building Ghana's Web3 Future Together",
    template: "%s · TBC Ghana",
  },
  description:
    "TBC Ghana (The Builders Circle) is the ecosystem infrastructure uniting education, builders, and community to grow blockchain and Web3 across Ghana and Africa.",
  keywords: [
    "TBC Ghana",
    "The Builders Circle Ghana",
    "Web3 Ghana",
    "Blockchain Ghana",
    "Crypto Africa",
    "Web3 Community Ghana",
    "African Web3 Infrastructure",
    "Accra Blockchain Conference",
  ],
  authors: [{ name: "The Builders Circle Ghana", url: "https://www.tbcafrica.org" }],
  creator: "TBC Ghana",
  publisher: "The Builders Circle Ghana",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "TBC Ghana",
    type: "website",
    locale: "en_US",
    url: "https://www.tbcafrica.org",
    title: "TBC Ghana  Building Ghana's Web3 Future Together",
    description:
      "TBC Ghana is the ecosystem infrastructure uniting education, builders, and community to grow blockchain and Web3 across Ghana and Africa.",
    images: [
      {
        url: "/images/tbc-logos/tbc-ghana-logo-color.svg",
        width: 1200,
        height: 630,
        alt: "TBC Ghana Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Builders_Circle",
    creator: "@Builders_Circle",
    title: "TBC Ghana  Building Ghana's Web3 Future Together",
    description:
      "TBC Ghana is the ecosystem infrastructure uniting education, builders, and community to grow blockchain and Web3 across Ghana and Africa.",
    images: ["/images/tbc-logos/tbc-ghana-logo-color.svg"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "The Builders Circle Ghana",
  alternateName: ["TBC Ghana", "The Builders Circle"],
  url: "https://www.tbcafrica.org",
  logo: "https://www.tbcafrica.org/images/tbc-logos/tbc-ghana-logo-color.svg",
  description:
    "TBC Ghana is the ecosystem infrastructure uniting education, builders, and community to grow blockchain and Web3 across Ghana and Africa.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14 Nii Owoo Street",
    addressLocality: "Dzorwulu",
    addressRegion: "Accra",
    addressCountry: "GH",
  },
  sameAs: ["https://x.com/Builders_Circle"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "thebuilderscircleghana@gmail.com",
    contactType: "customer service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${sans.variable} ${mono.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <SmoothScroller>
            <Nav />
            <main id="main-content">{children}</main>
            <Footer />
          </SmoothScroller>
        </ThemeProvider>
      </body>
    </html>
  );
}
