import type { ComponentType } from "react";
import {
  LocationPinIcon,
  EducationIcon,
  MediaIcon,
  CalendarStarIcon,
  DocumentChartIcon,
  type IconProps,
} from "@/components/icons";

export type Program = {
  title: string;
  description: string;
  Icon: ComponentType<IconProps>;
  color: string;
  tags?: string[];
  linkLabel?: string;
  linkHref?: string;
  badge?: string;
  dark?: boolean;
};

export const PROGRAMS: Program[] = [
  {
    title: "Monthly City Meetups",
    description:
      "Recurring meetups in Accra, Kumasi, Cape Coast, Tamale and Takoradi focused on onboarding, networking and education.",
    Icon: LocationPinIcon,
    color: "#24D155",
    tags: ["Accra", "Kumasi", "Cape Coast", "Tamale", "Takoradi"],
  },
  {
    title: "Campus Ambassador Program",
    description:
      "Partnering with universities to build campus blockchain clubs, train student ambassadors, and run developer communities on campus.",
    Icon: EducationIcon,
    color: "#1B4D4A",
    linkLabel: "Become an ambassador →",
    linkHref: "/getinvolved",
  },
  {
    title: "Weekly Media Platform",
    description:
      "A recurring X Space, podcast and YouTube show covering blockchain education, African Web3 stories, founder interviews and market insights.",
    Icon: MediaIcon,
    color: "#D03433",
    badge: "Live every Friday · 19:00 GMT",
  },
  {
    title: "Annual Flagship Conference",
    description:
      "A major yearly event positioning Ghana as a leading Web3 hub  keynotes, startup showcases, workshops, hackathons, networking and policy discussions.",
    Icon: CalendarStarIcon,
    color: "#24D155",
    badge: "First edition · November 2026",
    dark: true,
  },
];

export const RESEARCH_PROGRAM = {
  title: "Ecosystem Research & Reports",
  description:
    "Published reports on Web3 adoption, developer ecosystem trends and community insights in Ghana  establishing TBC Ghana as an ecosystem intelligence source.",
  Icon: DocumentChartIcon,
  color: "#1B4D4A",
};
