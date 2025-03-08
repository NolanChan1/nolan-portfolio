export type MobileSectionType = {
  title: string;
  id: string;
};

export const mobileSections: MobileSectionType[] = [
  {
    title: "About",
    id: "header-section",
  },
  {
    title: "Work",
    id: "work-section",
  },
  {
    title: "Projects",
    id: "projects-section",
  },
  {
    title: "Education",
    id: "education-section",
  },
  {
    title: "Skills",
    id: "skills-section",
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
    id: "work-section",
  },
  {
    order: 1,
    title: "Projects",
    id: "projects-section",
  },
  {
    order: 2,
    title: "Education",
    id: "education-section",
  },
  {
    order: 3,
    title: "Technical Skills",
    id: "skills-section",
  },
];
