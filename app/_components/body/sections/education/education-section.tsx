"use client";

import { useState } from "react";

import SectionCard from "@/app/_components/body/cards/section-card";
import {
  CardHeader,
  CardSubheaderContainer,
  Dot,
  ExpandedCardContent,
} from "@/app/_components/body/cards/card-components";

export const BachelorsDegreeCard = () => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <SectionCard
      sectionCardTitle="Bachelor's Degree in Software Engineering"
      isExpanded={isCardExpanded}
      setIsExpanded={setIsCardExpanded}
    >
      <CardHeader headerText="Bachelor of Science in Software Engineering" />
      <CardSubheaderContainer>
        <span className="shrink-0">University of Calgary</span>
        <Dot />
        <span className="truncate pr-1 italic">September 2018 - May 2023</span>
      </CardSubheaderContainer>
      <span className="mt-1 block text-2xs font-semibold text-off-black-800 lg:text-xs xl:mt-2 xl:text-sm 2xl:text-base dark:text-light-black-100">
        GPA: 3.90/4.00 — Earned “With Distinction” designation
      </span>

      <ExpandedCardContent isVisible={isCardExpanded}>
        <h4 className="mb-1 text-xs font-semibold text-off-black-900 lg:text-sm xl:mb-2 xl:text-base 2xl:text-lg dark:text-dark-white-100">
          Awards:
        </h4>
        <AwardsRow
          addBottomMargin={true}
          firstTextContent="Gerald J. Maier/Dean Wirasinghe Entrance Award, $24 000"
          secondTextContent="2018 - 2021"
        />
        <AwardsRow
          firstTextContent="Second Place in Schulich Junior Programming Competition"
          secondTextContent="2019"
        />
      </ExpandedCardContent>
    </SectionCard>
  );
};

type AwardsRowProps = {
  addBottomMargin?: boolean;
  firstTextContent: string;
  secondTextContent: string;
};
const AwardsRow: React.FC<AwardsRowProps> = ({ addBottomMargin = false, firstTextContent, secondTextContent }) => {
  return (
    <div
      className={`${
        addBottomMargin ? "mb-1 xl:mb-2" : ""
      } flex flex-row items-start justify-between text-2xs text-off-black-800 lg:text-xs xl:text-sm 2xl:text-base dark:text-light-black-100`}
    >
      <span className="font-medium italic">{firstTextContent}</span>
      <span className="ml-1 mr-0.5 shrink-0 font-semibold italic">{secondTextContent}</span>
    </div>
  );
};
