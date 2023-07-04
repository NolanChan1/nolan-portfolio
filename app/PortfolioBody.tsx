"use client";

import { useState } from "react";
import Image from "next/image";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";

import PortfolioSectionContainer from "./PortfolioSectionContainer";

export default function PortfolioBody() {
  const [sectionExpandedP1, setSectionExpandedP1] = useState(false);

  const [sectionVideoP1, setSectionVideoP1] =
    useState<YouTubePlayer>(undefined);

  const youtubePlayerOptions: YouTubeProps["opts"] = {
    playerVars: {
      modestbranding: 1,
    },
  };

  return (
    <main className="mx-5 mt-16 md:relative md:left-[48vw] md:top-0 md:mx-0 md:mt-0 md:w-[39.5vw] md:pl-[4vw] md:pt-[11vh]">
      <section>
        <h2 className="section-title">Projects</h2>
        <PortfolioSectionContainer
          expanded={sectionExpandedP1}
          expandFunction={setSectionExpandedP1}
          videoElement={sectionVideoP1}
        >
          <h3 className="section-header">Tech Start EasyMeal Mobile App</h3>
          <div className="section-subheader-container">
            <span>Front-end Developer</span>
            <div className="dot"></div>
            <span className="italic">October 2022 - April 2023</span>
          </div>
          <div className="section-tag-container">
            <span className="section-tag">TypeScript</span>
            <span className="section-tag">React Native</span>
            <span className="section-tag">Expo</span>
          </div>
          <p className="section-paragraph mb-3 xl:mb-3.5 2xl:mb-4">
            In charge of front-end development for a mobile application aimed to
            encourage users to cook more through gamification and by providing
            recipes. Additionally, integrated backend functions to front-end
            code.
          </p>
          <p className="section-paragraph">
            The project was developed by a{" "}
            <span
              onClick={(event) => {
                window.open("https://techstartucalgary.com/");
                event.stopPropagation();
              }}
              className="section-link-text"
            >
              Tech Start
            </span>{" "}
            project team. The project won the Best Overall award at the 2023
            Tech Start showcase.
          </p>
          <div
            className={`${
              sectionExpandedP1
                ? "section-container-hidden-video-expanded"
                : "section-container-hidden-collapsed"
            } section-container-hidden-transition overflow-hidden`}
          >
            <div
              onClick={(event) => {
                window.open("https://github.com/techstartucalgary/EasyMeal");
                event.stopPropagation();
              }}
              className="github-link-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path d="M136.37 187.53a12 12 0 010 17l-5.94 5.94a60 60 0 01-84.88-84.88l24.12-24.11A60 60 0 01152 99a12 12 0 11-16 18 36 36 0 00-49.37 1.47l-24.1 24.08a36 36 0 0050.92 50.92l5.94-5.94a12 12 0 0116.98 0zm74.08-142a60.09 60.09 0 00-84.88 0l-5.94 5.94a12 12 0 0017 17l5.94-5.94a36 36 0 0150.92 50.92l-24.11 24.12A36 36 0 01120 139a12 12 0 10-16 18 60 60 0 0082.3-2.43l24.12-24.11a60.09 60.09 0 00.03-84.91z" />
              </svg>
              <span>Link to Github repository</span>
            </div>
            <h4 className="section-header-hidden">YouTube Demo</h4>
            <YouTube
              videoId="xKJvQRO3rrg"
              opts={youtubePlayerOptions}
              onReady={(event) => {
                setSectionVideoP1(event);
              }}
              iframeClassName="section-video-player-iframe"
              className="section-video-player-container"
            />
          </div>
        </PortfolioSectionContainer>
        <PortfolioSectionContainer>
          <h3 className="section-header">Tech Start EasyMeal Mobile App</h3>
          <div className="section-subheader-container">
            <span>Front-end Developer</span>
            <div className="dot"></div>
            <span className="italic">October 2022 - April 2023</span>
          </div>
          <div className="section-tag-container">
            <span className="section-tag">TypeScript</span>
            <span className="section-tag">React Native</span>
            <span className="section-tag">Expo</span>
          </div>
          <p className="section-paragraph mb-3 xl:mb-3.5 2xl:mb-4">
            In charge of front-end development for a mobile application aimed to
            encourage users to cook more through gamification and by providing
            recipes. Additionally, integrated backend functions to front-end
            code.
          </p>
          <p className="section-paragraph">
            The project was developed by a{" "}
            <a
              href="https://techstartucalgary.com/"
              target="_blank"
              className="section-link-text"
            >
              Tech Start
            </a>{" "}
            project team. The project won the Best Overall award at the 2023
            Tech Start showcase.
          </p>
        </PortfolioSectionContainer>
        <PortfolioSectionContainer>
          <h3 className="section-header">Tech Start EasyMeal Mobile App</h3>
          <div className="section-subheader-container">
            <span>Front-end Developer</span>
            <div className="dot"></div>
            <span className="italic">October 2022 - April 2023</span>
          </div>
          <div className="section-tag-container">
            <span className="section-tag">TypeScript</span>
            <span className="section-tag">React Native</span>
            <span className="section-tag">Expo</span>
          </div>
          <p className="section-paragraph mb-3 xl:mb-3.5 2xl:mb-4">
            In charge of front-end development for a mobile application aimed to
            encourage users to cook more through gamification and by providing
            recipes. Additionally, integrated backend functions to front-end
            code.
          </p>
          <p className="section-paragraph">
            The project was developed by a{" "}
            <a
              href="https://techstartucalgary.com/"
              target="_blank"
              className="section-link-text"
            >
              Tech Start
            </a>{" "}
            project team. The project won the Best Overall award at the 2023
            Tech Start showcase.
          </p>
        </PortfolioSectionContainer>
      </section>
    </main>
  );
}
