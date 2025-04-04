"use client";

import { useState } from "react";

import SectionCard from "@/app/_components/body/cards/section-card";
import {
  CardHeader,
  CardSubheaderContainer,
  Dot,
  CardTags,
  CardTag,
  CardParagraph,
  CardParagraphLink,
  ExpandedCardContent,
  CardYouTubePlayer,
  CardButtonLink,
  ExpandedCardHeader,
  CardImageGrid,
  CardGridImage,
} from "@/app/_components/body/cards/card-components";

type CardWithYoutubePlayerProps = {
  isVideoPlaying: boolean;
  setIsVideoPlaying: (newState: boolean) => void;
};

export const EasyMealCard: React.FC<CardWithYoutubePlayerProps> = ({ isVideoPlaying, setIsVideoPlaying }) => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <SectionCard
      sectionCardTitle="Tech Start EasyMeal Project"
      isExpanded={isCardExpanded}
      setIsExpanded={setIsCardExpanded}
      setIsVideoPlaying={setIsVideoPlaying}
    >
      <CardHeader headerText="Tech Start EasyMeal Mobile App" />
      <CardSubheaderContainer>
        <span className="shrink-0">Frontend Developer</span>
        <Dot />
        <span className="truncate pr-1 italic">October 2022 - April 2023</span>
      </CardSubheaderContainer>
      <CardTags>
        <CardTag tagText="TypeScript" />
        <CardTag tagText="React Native" />
        <CardTag tagText="Expo" />
      </CardTags>
      <CardParagraph addMargin="bottom">
        Frontend developer for a mobile application aimed to encourage users to cook more through gamification and by
        providing recipes. Additionally, integrated backend logic into the front end.
      </CardParagraph>
      <CardParagraph addMargin="bottom">
        Aside from the mobile application, developed an external website for users to delete their accounts and
        associated data.
      </CardParagraph>
      <CardParagraph>
        This project was developed within{" "}
        <CardParagraphLink linkText="Tech Start" hrefLink="https://techstartucalgary.com" stopPropagation={true} />, a
        university software development club. The project won the Best Overall award at the 2023 Tech Start showcase.
      </CardParagraph>

      <ExpandedCardContent isVisible={isCardExpanded}>
        <CardButtonLink
          buttonText="Link to Github repository"
          hrefLink="https://github.com/techstartucalgary/EasyMeal"
          stopPropagation={true}
        />
        <CardButtonLink
          buttonText="Account deletion website"
          hrefLink="https://nolanchan1.github.io/easymeal-account-deletion/"
          stopPropagation={true}
          addTopMargin={true}
        />
        <ExpandedCardHeader headerText="YouTube Demo" />
        <CardYouTubePlayer
          videoId="xKJvQRO3rrg"
          isVideoPlaying={isVideoPlaying}
          setIsVideoPlaying={setIsVideoPlaying}
          thumbnailSrc="/video-thumbnails/easymeal.webp"
          thumbnailWidth={1280}
          thumbnailHeight={720}
          thumbnailAlt="EasyMeal demo video thumbnail"
        />
      </ExpandedCardContent>
    </SectionCard>
  );
};

export const BeesARCard: React.FC<CardWithYoutubePlayerProps> = ({ isVideoPlaying, setIsVideoPlaying }) => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <SectionCard
      sectionCardTitle="Bees AR Capstone Project"
      isExpanded={isCardExpanded}
      setIsExpanded={setIsCardExpanded}
      setIsVideoPlaying={setIsVideoPlaying}
    >
      <CardHeader headerText="Bees AR Capstone Project" />
      <CardSubheaderContainer>
        <span className="shrink-0">Project Manager</span>
        <Dot />
        <span className="truncate pr-1 italic">September 2022 - April 2023</span>
      </CardSubheaderContainer>
      <CardTags>
        <CardTag tagText="Figma" />
        <CardTag tagText="HTML" />
        <CardTag tagText="CSS" />
        <CardTag tagText="JavaScript" />
        <CardTag tagText="jQuery" />
      </CardTags>
      <CardParagraph addMargin="bottom">
        Project manager for an augmented reality web application sponsored by{" "}
        <CardParagraphLink linkText="YYC Beeswax" hrefLink="https://yycwax.com" stopPropagation={true} />, a local
        e-commerce business. The motivation for the project was to create an application that provided an AR
        visualization of the sponsor&apos;s products to aid customer purchasing decisions and reduce customer returns.
      </CardParagraph>
      <CardParagraph>
        Aside from project management, worked on the project&apos;s front end and designed its UI/UX.
      </CardParagraph>

      <ExpandedCardContent isVisible={isCardExpanded}>
        <CardButtonLink
          buttonText="Link to the front end Github repository"
          hrefLink="https://github.com/NolanChan1/beesAR-frontend"
          stopPropagation={true}
        />
        <ExpandedCardHeader headerText="YouTube Demo" />
        <CardYouTubePlayer
          videoId="PAmQzdepNf4"
          isVideoPlaying={isVideoPlaying}
          setIsVideoPlaying={setIsVideoPlaying}
          thumbnailSrc="/video-thumbnails/beesAR.webp"
          thumbnailWidth={1280}
          thumbnailHeight={720}
          thumbnailAlt="Bees AR demo video thumbnail"
        />
      </ExpandedCardContent>
    </SectionCard>
  );
};

export const WhereToCard = () => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <SectionCard
      sectionCardTitle="Tech Start Where To? Project"
      isExpanded={isCardExpanded}
      setIsExpanded={setIsCardExpanded}
    >
      <CardHeader headerText="Tech Start Where To? Web App" />
      <CardSubheaderContainer>
        <span className="shrink-0">Frontend Developer</span>
        <Dot />
        <span className="truncate pr-1 italic">October 2021 - April 2022</span>
      </CardSubheaderContainer>
      <CardTags>
        <CardTag tagText="Figma" />
        <CardTag tagText="TypeScript" />
        <CardTag tagText="Next.js" />
        <CardTag tagText="Redux" />
        <CardTag tagText="Chakra UI" />
      </CardTags>
      <CardParagraph addMargin="bottom">
        Frontend developer and UI/UX designer for a web app aimed to help friend groups decide on a location to meet up
        and hang out. After inputting their interests, the web app provides a list of locations that the friend group
        can then vote on.
      </CardParagraph>
      <CardParagraph>
        This project was developed within{" "}
        <CardParagraphLink linkText="Tech Start" hrefLink="https://techstartucalgary.com" stopPropagation={true} />, a
        university software development club. The project won the Best UI award at the 2022 Tech Start showcase.
      </CardParagraph>

      <ExpandedCardContent isVisible={isCardExpanded}>
        <CardButtonLink
          buttonText="Link to the front end Github repository"
          hrefLink="https://github.com/techstartucalgary/decision-frontend"
          stopPropagation={true}
        />
        <ExpandedCardHeader headerText="Demo Screenshots" />
        <CardImageGrid>
          <CardGridImage
            imageSrc="/screenshots/wt-00.webp"
            altText="Where To? landing page screenshot"
            width={1440}
            height={3040}
          />
          <CardGridImage
            imageSrc="/screenshots/wt-01.webp"
            altText="Where To? preferences page screenshot"
            width={1440}
            height={3040}
          />
          <CardGridImage
            imageSrc="/screenshots/wt-02.webp"
            altText="Where To? link generation page screenshot"
            width={1440}
            height={3040}
          />
        </CardImageGrid>
      </ExpandedCardContent>
    </SectionCard>
  );
};

type TamagotchiImitationCardProps = {
  isVideoPlaying: boolean;
  setIsVideoPlaying: (newState: boolean) => void;
  isCardExpanded: boolean;
  setIsCardExpanded: (updateFunction: (prevState: boolean) => boolean) => void;
};

export const TamagotchiImitationCard: React.FC<TamagotchiImitationCardProps> = ({
  isVideoPlaying,
  setIsVideoPlaying,
  isCardExpanded,
  setIsCardExpanded,
}) => {
  return (
    <SectionCard
      sectionCardTitle="Arduino/Raspberry Pi Tamagotchi Imitation Project"
      isExpanded={isCardExpanded}
      setIsExpanded={setIsCardExpanded}
      setIsVideoPlaying={setIsVideoPlaying}
    >
      <CardHeader headerText="Arduino/Raspberry Pi Tamagotchi Imitation" />
      <CardSubheaderContainer>
        <span className="truncate pr-1 italic">January 2021 - September 2021</span>
      </CardSubheaderContainer>
      <CardTags>
        <CardTag tagText="C++" />
        <CardTag tagText="Python" />
      </CardTags>
      <CardParagraph>
        Created a digital “pet” program using an Arduino and low-level hardware components such as a 128x32 I2C
        monochrome display. Later ported the Arduino program to work on a Raspberry Pi to practice development with an
        object-oriented approach and to add features such as music playback.
      </CardParagraph>

      <ExpandedCardContent isVisible={isCardExpanded}>
        <CardButtonLink
          buttonText="Link to Github repository"
          hrefLink="https://github.com/NolanChan1/projectpet"
          stopPropagation={true}
        />
        <ExpandedCardHeader headerText="YouTube Demo" />
        <CardYouTubePlayer
          videoId="8HMey3eF_vQ"
          isVideoPlaying={isVideoPlaying}
          setIsVideoPlaying={setIsVideoPlaying}
          thumbnailSrc="/video-thumbnails/tamagotchiImitation.webp"
          thumbnailWidth={1280}
          thumbnailHeight={720}
          thumbnailAlt="Tamagotchi imitation demo video thumbnail"
        />
      </ExpandedCardContent>
    </SectionCard>
  );
};

export const MediaBiasCard = () => {
  return (
    <SectionCard>
      <CardHeader headerText="Media Bias Project" />
      <CardSubheaderContainer>
        <span className="truncate pr-1 italic">June 2021 - August 2021</span>
      </CardSubheaderContainer>
      <CardTags>
        <CardTag tagText="MariaDB" />
        <CardTag tagText="Python" />
      </CardTags>
      <CardParagraph>
        Set up a relational database for storing news articles using MariaDB. This database was for a planned machine
        learning model that uses natural language processing to predict bias in news media. Additionally, wrote Python
        code to interface with the database and to extract articles from a CSV dataset.
      </CardParagraph>
    </SectionCard>
  );
};
