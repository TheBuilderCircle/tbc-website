export type TeamMember = {
  name: string;
  /** "Lead", "Member", "Moderator", or a specific title for the convener. */
  position: string;
  image?: string;
  objectPosition?: string;
};

export type TeamGroup = {
  name: string;
  members: TeamMember[];
};

export const TEAM_GROUPS: TeamGroup[] = [
  {
    name: "Leadership",
    members: [
      { name: "Kwame Stalwart", position: "Convener & Chairperson", image: "/images/team/kwame.jpg", objectPosition: "center 20%" },
    ],
  },
  {
    name: "Technical",
    members: [
      { name: "Yini", position: "Lead", image: "/images/team/yini-portrait.png", objectPosition: "center 15%" },
      { name: "Samuel Akpah", position: "Member", image: "/images/team/samuel-akpah.jpeg", objectPosition: "center 25%" },
    ],
  },
  {
    name: "Secretary & Operations",
    members: [
      { name: "Francisca Mailiana Zonky", position: "Lead", image: "/images/team/mailliana.PNG", objectPosition: "center 20%" },
      { name: "Peter Okai", position: "Member", image: "/images/team/Peter.jpeg", objectPosition: "center 20%" },
    ],
  },
  {
    name: "Partnerships & Growth",
    members: [
      { name: "Wasiu Jimoh (Evergenius)", position: "Member", image: "/images/team/Evergenius.jpg", objectPosition: "center 20%" },
      { name: "Ola", position: "Member", image: "/images/team/Bello.jpg", objectPosition: "center 15%" },
    ],
  },
  {
    name: "Community",
    members: [
      { name: "Juliet Edeh", position: "Lead", image: "/images/team/uju.JPG", objectPosition: "center 25%" },
      { name: "Esther Oko", position: "Moderator", image: "/images/team/esther.jpeg", objectPosition: "center 20%" },
    ],
  },
];
