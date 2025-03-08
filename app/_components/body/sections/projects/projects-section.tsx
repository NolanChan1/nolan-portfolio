"use client";

import { useState } from "react";
import { YouTubePlayer } from "react-youtube";

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

  // References to YouTube video players
  const [easyMealVideo, setEasyMealVideo] = useState<YouTubePlayer>(undefined);
  const [beesARVideo, setBeesARVideo] = useState<YouTubePlayer>(undefined);
  const [tamagotchiImitationVideo, setTamagotchiImitationVideo] = useState<YouTubePlayer>(undefined);

  const toggleHideOlderProjects = () => {
    // Pause any playing video players
    if (tamagotchiImitationVideo !== undefined) {
      if (tamagotchiImitationVideo.target.playerInfo.playerState === 1 && isOlderProjectsVisible) {
        tamagotchiImitationVideo.target.pauseVideo();
      }
    }

    setIsOlderProjectsVisible((prevState) => {
      return !prevState;
    });
  };

  return (
    <section id="projects-section">
      <SectionHeader headerTitle="Projects" />

      <SectionGroup bottomMarginSize="small">
        <EasyMealCard videoElement={easyMealVideo} setVideoElement={setEasyMealVideo} />
        <BeesARCard videoElement={beesARVideo} setVideoElement={setBeesARVideo} />
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
          videoElement={tamagotchiImitationVideo}
          setVideoElement={setTamagotchiImitationVideo}
        />
        <MediaBiasCard />
      </SectionGroup>
    </section>
  );
};

export default ProjectsSection;
