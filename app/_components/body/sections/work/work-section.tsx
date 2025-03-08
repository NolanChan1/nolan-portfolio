"use client";

import { useState } from "react";

import {
  SectionGroup,
  SectionHeader,
  ToggleSectionGroupButton,
} from "@/app/_components/body/sections/section-components";
import { CalgaryPublicLibraryCard, KMSToolsCard, VosynCard } from "@/app/_components/body/sections/work/work-cards";

const WorkSection = () => {
  const [isOlderWorkVisible, setIsOlderWorkVisible] = useState(false);

  const toggleHideOlderWork = () => {
    setIsOlderWorkVisible((prevState) => {
      return !prevState;
    });
  };

  return (
    <section id="work-section">
      <SectionHeader headerTitle="Work" />

      <SectionGroup bottomMarginSize="small">
        <VosynCard />
      </SectionGroup>

      <ToggleSectionGroupButton
        buttonText="older work experience"
        sectionGroupId="old-work-experience"
        isSectionGroupVisible={isOlderWorkVisible}
        toggleSectionGroupVisibility={toggleHideOlderWork}
      />

      <SectionGroup isGroupVisible={isOlderWorkVisible} sectionGroupId="old-work-experience" bottomMarginSize="large">
        <KMSToolsCard />
        <CalgaryPublicLibraryCard />
      </SectionGroup>
    </section>
  );
};

export default WorkSection;
