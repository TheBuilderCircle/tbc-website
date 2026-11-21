export type UpcomingEvent = {
  dateLabel: string;
  dateSubLabel: string;
  dateColor: string;
  title: string;
  subtitle: string;
  tag: string;
  tagColor: "default" | "flagship";
};

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    dateLabel: "FRI",
    dateSubLabel: "Weekly",
    dateColor: "#D03433",
    title: "Weekly X Space",
    subtitle: "Mostly Fridays · 19:00 GMT · Online",
    tag: "Media",
    tagColor: "default",
  },
  {
    dateLabel: "TBC",
    dateSubLabel: "Seasonal",
    dateColor: "#1B4D4A",
    title: "Seasonal Accra Meetup",
    subtitle: "Next date to be confirmed · Accra",
    tag: "Community",
    tagColor: "default",
  },
  {
    dateLabel: "TBC",
    dateSubLabel: "Rotating",
    dateColor: "#1B4D4A",
    title: "City Meetups",
    subtitle: "Kumasi, Cape Coast, Tamale, Takoradi · Rotating",
    tag: "Community",
    tagColor: "default",
  },
  {
    dateLabel: "DEC",
    dateSubLabel: "2026",
    dateColor: "#D03433",
    title: "Flagship Blockchain & Crypto Conference",
    subtitle: "11 December 2026 · Ghana Shippers House, Accra",
    tag: "Flagship",
    tagColor: "flagship",
  },
];
