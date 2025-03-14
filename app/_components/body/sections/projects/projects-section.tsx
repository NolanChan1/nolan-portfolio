"use client";

import { useState } from "react";

import {
  SectionHeader,
  SectionGroup,
  ToggleSectionGroupButton,
} from "@/app/_components/body/sections/section-components";
import {
  BeesARCard,
  EasyMealCard,
  MediaBiasCard,
  TamagotchiImitationCard,
  WhereToCard,
} from "@/app/_components/body/sections/projects/projects-cards";

const ProjectsSection = () => {
  const [isOlderProjectsVisible, setIsOlderProjectsVisible] = useState(false);

  // Needed to unexpand card when older projects are hidden
  const [isTamagotchiImitationCardExpanded, setIsTamagotchiImitationCardExpanded] = useState(false);

  // References to YouTube video players
  const [isEasyMealVideoPlaying, setIsEasyMealVideoPlaying] = useState(true);
  const [isBeesARVideoPlaying, setIsBeesARVideoPlaying] = useState(true);
  const [isTamagotchiImitationVideoPlaying, setIsTamagotchiImitationVideoPlaying] = useState(true);

  const toggleHideOlderProjects = () => {
    // Pause any playing video players
    if (isOlderProjectsVisible) {
      setIsTamagotchiImitationVideoPlaying(false);
      setIsTamagotchiImitationCardExpanded(false);
    }

    setIsOlderProjectsVisible((prevState) => {
      return !prevState;
    });
  };

  return (
    <section id="projects">
      <SectionHeader headerTitle="Projects" />

      <SectionGroup bottomMarginSize="small">
        <EasyMealCard isVideoPlaying={isEasyMealVideoPlaying} setIsVideoPlaying={setIsEasyMealVideoPlaying} />
        <BeesARCard isVideoPlaying={isBeesARVideoPlaying} setIsVideoPlaying={setIsBeesARVideoPlaying} />
        <WhereToCard />
      </SectionGroup>

      <ToggleSectionGroupButton
        buttonText="older projects"
        sectionGroupId="old-projects"
        isSectionGroupVisible={isOlderProjectsVisible}
        toggleSectionGroupVisibility={toggleHideOlderProjects}
      />

      <SectionGroup isGroupVisible={isOlderProjectsVisible} sectionGroupId="old-projects" bottomMarginSize="large">
        <TamagotchiImitationCard
          isVideoPlaying={isTamagotchiImitationVideoPlaying}
          setIsVideoPlaying={setIsTamagotchiImitationVideoPlaying}
          isCardExpanded={isTamagotchiImitationCardExpanded}
          setIsCardExpanded={setIsTamagotchiImitationCardExpanded}
        />
        <MediaBiasCard />
      </SectionGroup>
    </section>
  );
};

export default ProjectsSection;
