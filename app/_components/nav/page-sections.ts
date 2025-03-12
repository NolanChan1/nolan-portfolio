export type MobileSectionType = {
  title: string;
  id: string;
};

export const mobileSections: MobileSectionType[] = [
  {
    title: "About",
    id: "about",
  },
  {
    title: "Work",
    id: "work",
  },
  {
    title: "Projects",
    id: "projects",
  },
  {
    title: "Education",
    id: "education",
  },
  {
    title: "Skills",
    id: "skills",
  },
];

export type DesktopSectionType = {
  order: number;
  title: string;
  id: string;
};

export const desktopSections: DesktopSectionType[] = [
  {
    order: 0,
    title: "Work",
    id: "work",
  },
  {
    order: 1,
    title: "Projects",
    id: "projects",
  },
  {
    order: 2,
    title: "Education",
    id: "education",
  },
  {
    order: 3,
    title: "Technical Skills",
    id: "skills",
  },
];
