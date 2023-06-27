"use client";

import { useState } from "react";

import PortfolioSectionContainer from "./PortfolioSectionContainer";

export default function PortfolioBody() {
  const [sectionExpanded1, setSectionExpanded1] = useState(false);

  return (
    <main className="mx-5 mt-16 md:relative md:left-[48vw] md:top-0 md:mx-0 md:mt-0 md:w-[39.5vw] md:pl-[4vw] md:pt-[11vh]">
      <section className="">
        <h2 className="section-title">Projects</h2>
        <PortfolioSectionContainer
          expanded={sectionExpanded1}
          expandFunction={setSectionExpanded1}
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
