import SectionCard from "@/app/_components/body/cards/section-card";
import {
  CardHeader,
  CardParagraph,
  CardParagraphLink,
  CardSubheaderContainer,
  CardTag,
  CardTags,
  Dot,
} from "@/app/_components/body/cards/card-components";

export const VosynCard = () => {
  return (
    <SectionCard>
      <CardHeader headerText="Frontend Developer Intern" />
      <CardSubheaderContainer>
        <span className="shrink-0">Vosyn</span>
        <Dot />
        <span className="truncate pr-1 italic">February 2024 - Current</span>
      </CardSubheaderContainer>
      <CardTags>
        <CardTag tagText="React" />
        <CardTag tagText="Next.js" />
        <CardTag tagText="Material UI" />
        <CardTag tagText="React Testing Library" />
        <CardTag tagText="Agile (Methodology)" />
      </CardTags>
      <CardParagraph addMargin="bottom">
        Frontend developer at <CardParagraphLink linkText="Vosyn" hrefLink="https://vosyn.ai/" />, a startup that aims
        to change how people consume global content by breaking down language barriers through AI.
      </CardParagraph>
      <CardParagraph addMargin="bottom">
        Developed interactive and responsive web pages for two software projects in an Agile development environment.
      </CardParagraph>
      <CardParagraph>
        Additionally, led a small team of developers for a period of ~3 months. Leadership responsibilities included
        assigning tasks, guiding team members, and presenting progress updates.
      </CardParagraph>
    </SectionCard>
  );
};

export const KMSToolsCard = () => {
  return (
    <SectionCard>
      <CardHeader headerText="Merchandiser" />
      <CardSubheaderContainer>
        <span className="shrink-0">KMS Tools & Equipment</span>
        <Dot />
        <span className="truncate pr-1 italic">May 2019 - February 2021</span>
      </CardSubheaderContainer>
      <CardParagraph addMargin="top">
        Answered customer questions, organized/placed stock on store shelves, and set up display models. Took on
        additional tasks such as using distribution management software to manage stock received by the store and to
        invoice customer orders.
      </CardParagraph>
    </SectionCard>
  );
};

export const CalgaryPublicLibraryCard = () => {
  return (
    <SectionCard>
      <CardHeader headerText="Youth Volunteer" />
      <CardSubheaderContainer>
        <span className="shrink-0">Calgary Public Library</span>
        <Dot />
        <span className="truncate pr-1 italic">January 2017 - June 2017</span>
      </CardSubheaderContainer>
      <CardParagraph addMargin="top">
        Volunteered at a Calgary Public Library branch. Two of the programs volunteered for, Code Club and Coding
        Buddies, involved teaching and guiding children through fundamental coding paradigms.
      </CardParagraph>
    </SectionCard>
  );
};
