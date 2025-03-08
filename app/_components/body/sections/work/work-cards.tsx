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
      <CardHeader headerText="Front-end Developer Intern" />
      <CardSubheaderContainer>
        <span className="shrink-0">Vosyn</span>
        <Dot />
        <span className="section-date italic">February 2024 - Current</span>
      </CardSubheaderContainer>
      <CardTags>
        <CardTag tagText="React" />
        <CardTag tagText="Redux" />
        <CardTag tagText="JavaScript" />
        <CardTag tagText="Agile (Methodology)" />
      </CardTags>
      <CardParagraph addMargin="bottom">
        Front-end developer intern at <CardParagraphLink linkText="Vosyn" hrefLink="https://vosyn.ai/" />, an AI startup
        that aims to change how people consume global content by breaking down language barriers.
      </CardParagraph>
      <CardParagraph>
        Developed interactive and responsive web pages for two separate software projects. One project is a
        consumer-facing web application, and the other is a web application designed for internal and potential investor
        use.
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
        <span className="section-date italic">May 2019 - February 2021</span>
      </CardSubheaderContainer>
      <CardParagraph addMargin="top">
        Responsibilities included answering customer questions, organizing/placing stock on store shelves, and setting
        up display models. Took on additional tasks such as using distribution management software to manage stock
        received by the store and to invoice customer orders.
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
        <span className="section-date italic">January 2017 - June 2017</span>
      </CardSubheaderContainer>
      <CardParagraph addMargin="top">
        Volunteered at a Calgary Public Library branch. Two of the programs volunteered for, Code Club and Coding
        Buddies, involved teaching and guiding children through fundamental coding paradigms.
      </CardParagraph>
    </SectionCard>
  );
};
