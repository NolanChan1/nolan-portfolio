"use client";

import { useState } from "react";
import Image from "next/image";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";

import PortfolioSectionContainer from "./PortfolioSectionContainer";

export default function PortfolioBody() {
  // For keeping track of which projects are expanded in Projects section
  const [sectionExpandedP1, setSectionExpandedP1] = useState(false);
  const [sectionExpandedP2, setSectionExpandedP2] = useState(false);
  const [sectionExpandedP3, setSectionExpandedP3] = useState(false);
  const [sectionExpandedPH1, setSectionExpandedPH1] = useState(false);

  // For keeping track of if education is expanded
  const [sectionExpandedE1, setSectionExpandedE1] = useState(false);

  // For keeping track of whether or not the Projects or Work subsections are visible
  const [olderProjectsVisible, setOlderProjectsVisible] = useState(false);
  const [olderWorkVisible, setOlderWorkVisible] = useState(false);

  // For keeping track of references to YouTube players
  const [sectionVideoP1, setSectionVideoP1] =
    useState<YouTubePlayer>(undefined);
  const [sectionVideoP2, setSectionVideoP2] =
    useState<YouTubePlayer>(undefined);
  const [sectionVideoPH1, setSectionVideoPH1] =
    useState<YouTubePlayer>(undefined);

  const youtubePlayerOptions: YouTubeProps["opts"] = {
    playerVars: {
      modestbranding: 1,
    },
  };

  const toggleUnhideOlderProjects = () => {
    // Pause any playing video players
    if (sectionVideoPH1 !== undefined) {
      if (
        sectionVideoPH1.target.playerInfo.playerState === 1 &&
        olderProjectsVisible
      ) {
        sectionVideoPH1.target.pauseVideo();
      }
    }

    setOlderProjectsVisible((prevState) => {
      return !prevState;
    });
  };

  const toggleUnhideOlderWork = () => {
    setOlderWorkVisible((prevState) => {
      return !prevState;
    });
  };

  return (
    <main className="mx-5 mt-16 md:relative md:left-[48vw] md:top-0 md:mx-0 md:mt-0 md:w-[39.5vw] md:pl-[4vw] md:pt-[11vh]">
      <section id="work-section">
        <h2 className="section-title">Work</h2>
        <PortfolioSectionContainer>
          <h3 className="section-header">Front-end Developer Intern</h3>
          <div className="section-subheader-container">
            <span className="shrink-0">Vosyn</span>
            <div className="dot"></div>
            <span className="section-date italic">February 2024 - Current</span>
          </div>
          <div className="section-tag-container">
            <span className="section-tag">React</span>
            <span className="section-tag">Redux</span>
            <span className="section-tag">JavaScript</span>
            <span className="section-tag">Agile (Methodology)</span>
          </div>
          <p className="section-paragraph mb-3 xl:mb-3.5 2xl:mb-4">
            Front-end developer intern at{" "}
            <a
              href="https://vosyn.ai/"
              target="_blank"
              rel="noreferrer noopener"
              className="section-link-text"
            >
              Vosyn
            </a>
            , an AI startup that aims to change how people consume global
            content by breaking down language barriers.
          </p>
          <p className="section-paragraph">
            Developed interactive and responsive web pages for two separate
            software projects. One project is a consumer-facing web application,
            and the other is a web application designed for internal and
            potential investor use.
          </p>
        </PortfolioSectionContainer>

        {/* Work subsection (older work) */}
        <button
          onClick={toggleUnhideOlderWork}
          className="hide-subsection-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            className={`${
              olderWorkVisible
                ? "rotate-180 fill-light-red dark:fill-white"
                : "fill-off-white-900 dark:fill-light-black-100"
            } `}
          >
            <path d="M6.906 6.594l-.718.687-3.907 3.907-.687.718L16 26.312l14.406-14.406-.687-.719-3.907-3.906-.718-.687L16 15.687zm-.031 2.843l8.406 8.376.719.687.719-.688 8.406-8.375 2.438 2.438L16 23.469 4.437 11.875z" />
          </svg>
          <span
            className={`${
              olderWorkVisible
                ? "text-light-red dark:text-white"
                : "text-off-white-900 dark:text-light-black-100"
            } `}
          >
            {olderWorkVisible ? "Hide" : "View"} older work experience
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            className={`${
              olderWorkVisible
                ? "rotate-180 fill-light-red dark:fill-white"
                : "fill-off-white-900 dark:fill-light-black-100"
            }`}
          >
            <path d="M6.906 6.594l-.718.687-3.907 3.907-.687.718L16 26.312l14.406-14.406-.687-.719-3.907-3.906-.718-.687L16 15.687zm-.031 2.843l8.406 8.376.719.687.719-.688 8.406-8.375 2.438 2.438L16 23.469 4.437 11.875z" />
          </svg>
        </button>
        <div
          className={`${
            olderWorkVisible ? "block" : "hidden"
          } hidden-section-bottom-margin`}
        >
          <PortfolioSectionContainer>
            <h3 className="section-header">Merchandiser</h3>
            <div className="section-subheader-container">
              <span className="shrink-0">KMS Tools & Equipment</span>
              <div className="dot"></div>
              <span className="section-date italic">
                May 2019 - February 2021
              </span>
            </div>
            <p className="section-paragraph mt-1 xl:mt-2">
              Work involved answering customer questions, organizing/placing
              stock on store shelves, and setting up display models. Took on
              additional tasks such as using distribution management software to
              manage stock received by the store and to invoice customer orders.
            </p>
          </PortfolioSectionContainer>
          <PortfolioSectionContainer>
            <h3 className="section-header">Calgary Public Library</h3>
            <div className="section-subheader-container">
              <span className="section-date italic">
                January 2017 - June 2017
              </span>
            </div>
            <p className="section-paragraph mt-1 xl:mt-2">
              Volunteered at a Calgary Public Library branch. Two of the
              programs volunteered for, Code Club and Coding Buddies, involved
              teaching and guiding children through fundamental coding
              paradigms.
            </p>
          </PortfolioSectionContainer>
        </div>
      </section>

      <section id="projects-section">
        <h2 className="section-title">Projects</h2>
        <PortfolioSectionContainer
          expanded={sectionExpandedP1}
          expandFunction={setSectionExpandedP1}
          videoElement={sectionVideoP1}
        >
          <h3 className="section-header">Tech Start EasyMeal Mobile App</h3>
          <div className="section-subheader-container">
            <span className="shrink-0">Front-end Developer</span>
            <div className="dot"></div>
            <span className="section-date italic">
              October 2022 - April 2023
            </span>
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
          <p className="section-paragraph mb-3 xl:mb-3.5 2xl:mb-4">
            The project was developed by a{" "}
            <span
              onClick={(event) => {
                window.open("https://techstartucalgary.com");
                event.stopPropagation();
              }}
              className="section-link-text"
            >
              Tech Start
            </span>{" "}
            project team. The project won the Best Overall award at the 2023
            Tech Start showcase.
          </p>
          <p className="section-paragraph">
            After project completion, developed an external website for users to
            delete their account and their data for deployment onto Google Play.
          </p>
          <div
            className={`${
              sectionExpandedP1 && "section-showcase-expanded"
            } section-showcase-container`}
          >
            <div className="overflow-hidden">
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
              <div
                onClick={(event) => {
                  window.open(
                    "https://nolanchan1.github.io/easymeal-account-deletion/"
                  );
                  event.stopPropagation();
                }}
                className="github-link-button mt-2 xl:mt-2.5 2xl:mt-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path d="M136.37 187.53a12 12 0 010 17l-5.94 5.94a60 60 0 01-84.88-84.88l24.12-24.11A60 60 0 01152 99a12 12 0 11-16 18 36 36 0 00-49.37 1.47l-24.1 24.08a36 36 0 0050.92 50.92l5.94-5.94a12 12 0 0116.98 0zm74.08-142a60.09 60.09 0 00-84.88 0l-5.94 5.94a12 12 0 0017 17l5.94-5.94a36 36 0 0150.92 50.92l-24.11 24.12A36 36 0 01120 139a12 12 0 10-16 18 60 60 0 0082.3-2.43l24.12-24.11a60.09 60.09 0 00.03-84.91z" />
                </svg>
                <span>Account deletion website</span>
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
          </div>
        </PortfolioSectionContainer>
        <PortfolioSectionContainer
          expanded={sectionExpandedP2}
          expandFunction={setSectionExpandedP2}
          videoElement={sectionVideoP2}
        >
          <h3 className="section-header">Bees AR Capstone Project</h3>
          <div className="section-subheader-container">
            <span className="shrink-0">Project Manager</span>
            <div className="dot"></div>
            <span className="section-date italic">
              September 2022 - April 2023
            </span>
          </div>
          <div className="section-tag-container">
            <span className="section-tag">Figma</span>
            <span className="section-tag">HTML</span>
            <span className="section-tag">CSS</span>
            <span className="section-tag">JavaScript</span>
            <span className="section-tag">jQuery</span>
          </div>
          <p className="section-paragraph mb-3 xl:mb-3.5 2xl:mb-4">
            Project manager for an augmented reality web application capstone
            project sponsored by{" "}
            <span
              onClick={(event) => {
                window.open("https://yycwax.com");
                event.stopPropagation();
              }}
              className="section-link-text"
            >
              YYC Beeswax
            </span>
            , a local e-commerce business. The motivation for the project was to
            create an application that provided an AR visualization of the
            sponsor’s products to aid customer purchasing decisions and reduce
            customer returns.
          </p>
          <p className="section-paragraph">
            Aside from project management, developed a chunk of the front end
            and designed the UI/UX for the project.
          </p>
          <div
            className={`${
              sectionExpandedP2 && "section-showcase-expanded"
            } section-showcase-container`}
          >
            <div className="overflow-hidden">
              <div
                onClick={(event) => {
                  window.open("https://github.com/NolanChan1/beesAR-frontend");
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
                <span>Link to the frontend Github repository</span>
              </div>
              <h4 className="section-header-hidden">YouTube Demo</h4>
              <YouTube
                videoId="PAmQzdepNf4"
                opts={youtubePlayerOptions}
                onReady={(event) => {
                  setSectionVideoP2(event);
                }}
                iframeClassName="section-video-player-iframe"
                className="section-video-player-container"
              />
            </div>
          </div>
        </PortfolioSectionContainer>
        <PortfolioSectionContainer
          expanded={sectionExpandedP3}
          expandFunction={setSectionExpandedP3}
        >
          <h3 className="section-header">Tech Start Where To? Web App</h3>
          <div className="section-subheader-container">
            <span className="shrink-0">Front-end Developer</span>
            <div className="dot"></div>
            <span className="section-date italic">
              October 2021 - April 2022
            </span>
          </div>
          <div className="section-tag-container">
            <span className="section-tag">Figma</span>
            <span className="section-tag">TypeScript</span>
            <span className="section-tag">Next.js</span>
            <span className="section-tag">React Redux</span>
            <span className="section-tag">Chakra UI</span>
          </div>
          <p className="section-paragraph mb-3 xl:mb-3.5 2xl:mb-4">
            Front-end developer and UI/UX designer for a web app aimed to help
            friend groups decide on a location to meet up and hang out. After
            inputting their interests, the web app provides a list of locations
            that the friend group can then vote on.
          </p>
          <p className="section-paragraph">
            The project was developed by a{" "}
            <span
              onClick={(event) => {
                window.open("https://techstartucalgary.com");
                event.stopPropagation();
              }}
              className="section-link-text"
            >
              Tech Start
            </span>{" "}
            project team. The project won the Best UI award at the 2022 Tech
            Start showcase.
          </p>
          <div
            className={`${
              sectionExpandedP3 && "section-showcase-expanded"
            } section-showcase-container`}
          >
            <div className="overflow-hidden">
              <div
                onClick={(event) => {
                  window.open(
                    "https://github.com/techstartucalgary/decision-frontend"
                  );
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
                <span>Link to the frontend Github repository</span>
              </div>
              <h4 className="section-header-hidden">Demo Screenshots</h4>
              <div className="section-screenshots-grid-container">
                <div className="section-screenshot-container">
                  <Image
                    src="/screenshots/wt-00.webp"
                    alt="Where To? landing page screenshot"
                    height={3040}
                    width={1440}
                    className="section-screenshot"
                  ></Image>
                </div>
                <div className="section-screenshot-container">
                  <Image
                    src="/screenshots/wt-01.webp"
                    alt="Where To? preferences page screenshot"
                    height={3040}
                    width={1440}
                    className="section-screenshot"
                  ></Image>
                </div>
                <div className="section-screenshot-container">
                  <Image
                    src="/screenshots/wt-02.webp"
                    alt="Where To? link generation page screenshot"
                    height={3040}
                    width={1440}
                    className="section-screenshot"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </PortfolioSectionContainer>

        {/* Projects subsection (older projects) */}
        <button
          onClick={toggleUnhideOlderProjects}
          className="hide-subsection-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            className={`${
              olderProjectsVisible
                ? "rotate-180 fill-light-red dark:fill-white"
                : "fill-off-white-900 dark:fill-light-black-100"
            } `}
          >
            <path d="M6.906 6.594l-.718.687-3.907 3.907-.687.718L16 26.312l14.406-14.406-.687-.719-3.907-3.906-.718-.687L16 15.687zm-.031 2.843l8.406 8.376.719.687.719-.688 8.406-8.375 2.438 2.438L16 23.469 4.437 11.875z" />
          </svg>
          <span
            className={`${
              olderProjectsVisible
                ? "text-light-red dark:text-white"
                : "text-off-white-900 dark:text-light-black-100"
            } `}
          >
            {olderProjectsVisible ? "Hide" : "View"} older projects
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            className={`${
              olderProjectsVisible
                ? "rotate-180 fill-light-red dark:fill-white"
                : "fill-off-white-900 dark:fill-light-black-100"
            }`}
          >
            <path d="M6.906 6.594l-.718.687-3.907 3.907-.687.718L16 26.312l14.406-14.406-.687-.719-3.907-3.906-.718-.687L16 15.687zm-.031 2.843l8.406 8.376.719.687.719-.688 8.406-8.375 2.438 2.438L16 23.469 4.437 11.875z" />
          </svg>
        </button>
        <div
          className={`${
            olderProjectsVisible ? "block" : "hidden"
          } hidden-section-bottom-margin`}
        >
          <PortfolioSectionContainer
            expanded={sectionExpandedPH1}
            expandFunction={setSectionExpandedPH1}
            disabled={!olderProjectsVisible}
            videoElement={sectionVideoPH1}
          >
            <h3 className="section-header">
              Arduino/Raspberry Pi Tamagotchi Imitation
            </h3>
            <div className="section-subheader-container">
              <span className="section-date italic">
                January 2021 - September 2021
              </span>
            </div>
            <div className="section-tag-container">
              <span className="section-tag">C++</span>
              <span className="section-tag">Python</span>
            </div>
            <p className="section-paragraph">
              Created a digital “pet” program using an Arduino and low-level
              hardware components such as a 128x32 I2C monochrome display. Later
              ported the Arduino program to work on a Raspberry Pi to attempt
              development with an object-oriented approach and to add features
              such as music playback.
            </p>
            <div
              className={`${
                sectionExpandedPH1 && "section-showcase-expanded"
              } section-showcase-container`}
            >
              <div className="overflow-hidden">
                <div
                  onClick={(event) => {
                    window.open("https://github.com/NolanChan1/projectpet");
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
                  videoId="8HMey3eF_vQ"
                  opts={youtubePlayerOptions}
                  onReady={(event) => {
                    setSectionVideoPH1(event);
                  }}
                  iframeClassName="section-video-player-iframe"
                  className="section-video-player-container"
                />
              </div>
            </div>
          </PortfolioSectionContainer>
          <PortfolioSectionContainer>
            <h3 className="section-header">Media Bias Project</h3>
            <div className="section-subheader-container">
              <span className="section-date italic">
                June 2021 - August 2021
              </span>
            </div>
            <div className="section-tag-container">
              <span className="section-tag">MariaDB</span>
              <span className="section-tag">Python</span>
            </div>
            <p className="section-paragraph">
              Set up a relational database for storing news articles using
              MariaDB. This database was for a planned machine learning model
              that uses natural language processing to predict bias in news
              media. Additionally, wrote Python code to interface with the
              database and to extract articles from a CSV dataset.
            </p>
          </PortfolioSectionContainer>
        </div>
      </section>

      <section id="education-section">
        <h2 className="section-title">Education</h2>
        <PortfolioSectionContainer
          expanded={sectionExpandedE1}
          expandFunction={setSectionExpandedE1}
        >
          <h3 className="section-header">
            Bachelor of Science in Software Engineering
          </h3>
          <div className="section-subheader-container">
            <span className="shrink-0">University of Calgary</span>
            <div className="dot"></div>
            <span className="section-date italic">
              September 2018 - May 2023
            </span>
          </div>
          <span className="mt-1 block text-2xs font-semibold text-off-black-800 dark:text-light-black-100 lg:text-xs xl:mt-2 xl:text-sm 2xl:text-base">
            GPA: 3.90/4.00 — Earned “With Distinction” designation
          </span>
          <div
            className={`${
              sectionExpandedE1 && "section-showcase-expanded"
            } section-showcase-container`}
          >
            <div className="overflow-hidden">
              <h4 className="mb-1 text-xs font-semibold text-off-black-900 dark:text-dark-white-100 lg:text-sm xl:mb-2 xl:text-base 2xl:text-lg">
                Awards:
              </h4>
              <div className="awards-row-container mb-1 xl:mb-2">
                <span>
                  Gerald J. Maier/Dean Wirasinghe Entrance Award, $24 000
                </span>
                <span>2018 - 2021</span>
              </div>
              <div className="awards-row-container">
                <span>
                  Second Place in Schulich Junior Programming Competition
                </span>
                <span>2019</span>
              </div>
            </div>
          </div>
        </PortfolioSectionContainer>
      </section>

      <section id="skills-section" className="mt-5 lg:mt-6 xl:mt-7 2xl:mt-8">
        <h2 className="section-title">Technical Skills</h2>
        <table className="w-full border-separate border-spacing-x-0 border-spacing-y-1.5 selection:bg-white selection:text-light-black-900 xl:border-spacing-y-2">
          <tbody>
            <tr>
              <th className="skills-table-head-cell skills-table-row-even">
                Programming Languages:
              </th>
              <td className="skills-table-data-cell skills-table-row-even">
                <div className="skills-table-skill-list-container">
                  <span>C/C++</span>
                  <span>Java</span>
                  <span>Python</span>
                  <span>JavaScript</span>
                  <span>TypeScript</span>
                </div>
              </td>
            </tr>
            <tr>
              <th className="skills-table-head-cell skills-table-row-odd">
                App Development:
              </th>
              <td className="skills-table-data-cell skills-table-row-odd">
                <div className="skills-table-skill-list-container">
                  <span>React Native</span>
                </div>
              </td>
            </tr>
            <tr>
              <th className="skills-table-head-cell skills-table-row-even">
                Frontend Development:
              </th>
              <td className="skills-table-data-cell skills-table-row-even">
                <div className="skills-table-skill-list-container">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>jQuery</span>
                  <span>React</span>
                  <span>Next.js</span>
                  <span>Angular</span>
                </div>
              </td>
            </tr>
            <tr>
              <th className="skills-table-head-cell skills-table-row-odd">
                Backend Development:
              </th>
              <td className="skills-table-data-cell skills-table-row-odd">
                <div className="skills-table-skill-list-container">
                  <span>REST</span>
                  <span>Django</span>
                  <span>Relational Databases (SQL)</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer>
        <p className="mt-32 pb-16 text-center text-xs font-medium italic leading-normal text-off-black-900 dark:text-dark-white-100 md:pb-[11vh] md:text-left lg:text-sm xl:text-base 2xl:text-lg">
          This website was designed and developed by me. Built with Next.js and
          Tailwind CSS–and deployed with Vercel. If you want to look at the
          source code, you can view it{" "}
          <a
            href="https://github.com/NolanChan1/nolan-portfolio"
            target="_blank"
            rel="noreferrer noopener"
            className="font-bold hover:text-light-red dark:hover:text-white"
          >
            here
          </a>
          .
        </p>
      </footer>
    </main>
  );
}
