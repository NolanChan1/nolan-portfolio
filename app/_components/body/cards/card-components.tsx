import { PropsWithChildren } from "react";
import Image from "next/image";
import YouTube, { YouTubeProps, YouTubeEvent } from "react-youtube";

import styles from "./section-cards.module.css";

type CardHeaderProps = {
  headerText: string;
};
export const CardHeader: React.FC<CardHeaderProps> = ({ headerText }) => {
  return (
    <h3 className="text-xs font-bold text-off-black-900 lg:text-sm xl:text-base 2xl:text-lg dark:text-dark-white-100">
      {headerText}
    </h3>
  );
};

type CardSubheaderContainerProps = {
  children: React.ReactNode;
};
export const CardSubheaderContainer: React.FC<CardSubheaderContainerProps> = ({ children }) => {
  return (
    <div className="mt-1 flex flex-row items-center gap-2 text-3xs font-semibold text-off-black-600 lg:text-2xs xl:mt-1.5 xl:gap-2.5 xl:text-xs 2xl:mt-2 2xl:gap-3 2xl:text-base dark:text-dark-white-300">
      {children}
    </div>
  );
};

export const Dot = () => {
  return (
    <div className="h-[2px] w-[2px] rounded-full bg-off-black-600 xl:h-[3px] xl:w-[3px] 2xl:h-1 2xl:w-1 dark:bg-dark-white-300"></div>
  );
};

type CardTagsProps = {
  children: React.ReactNode;
};
export const CardTags: React.FC<CardTagsProps> = ({ children }) => {
  return (
    <ul role="list" className="my-2 flex flex-row flex-wrap items-center gap-2 xl:my-2.5 xl:gap-2.5 2xl:my-3 2xl:gap-3">
      {children}
    </ul>
  );
};

type CardTagProps = {
  tagText: string;
};
export const CardTag: React.FC<CardTagProps> = ({ tagText }) => {
  return (
    <li className="rounded-full bg-off-white-900 px-2 py-0.5 text-center text-3xs font-normal text-off-white-100 selection:bg-white selection:text-light-black-900 lg:px-2.5 lg:text-2xs xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm dark:bg-light-black-800 dark:text-light-black-100">
      {tagText}
    </li>
  );
};

type CardParagraphProps = PropsWithChildren<{
  addMargin?: "top" | "bottom" | "none";
}>;
export const CardParagraph: React.FC<CardParagraphProps> = ({ children, addMargin = "none" }) => {
  return (
    <p
      className={`${addMargin === "top" ? "mt-1 xl:mt-2" : ""} ${
        addMargin === "bottom" ? "mb-3 xl:mb-3.5 2xl:mb-4" : ""
      } text-2xs font-medium text-off-black-800 lg:text-xs lg:leading-normal xl:text-sm 2xl:text-base dark:text-light-black-100`}
    >
      {children}
    </p>
  );
};

type CardParagraphLinkProps = {
  linkText: string;
  hrefLink: string;
  stopPropagation?: boolean;
};
export const CardParagraphLink: React.FC<CardParagraphLinkProps> = ({
  linkText,
  hrefLink,
  stopPropagation = false,
}) => {
  return (
    <a
      href={hrefLink}
      target="_blank"
      rel="noreferrer noopener"
      onClick={
        stopPropagation
          ? (e) => {
              e.stopPropagation();
            }
          : undefined
      }
      className="inline font-bold outline-none hover:text-light-red focus-visible:underline lg:focus-visible:decoration-2 xl:focus-visible:underline-offset-2 dark:hover:text-white"
    >
      {linkText}
    </a>
  );
};

type ExpandedCardContentProps = PropsWithChildren<{
  isVisible: boolean;
}>;
export const ExpandedCardContent: React.FC<ExpandedCardContentProps> = ({ children, isVisible }) => {
  return (
    <div
      className={`${isVisible ? `${styles.expandedCardSection} mt-4 grid xl:mt-5 2xl:mt-6` : "mt-0 hidden"} ${
        styles.expandableCardSection
      }`}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

type CardButtonLinkProps = {
  buttonText: string;
  hrefLink: string;
  stopPropagation?: boolean;
  addTopMargin?: boolean;
};
export const CardButtonLink: React.FC<CardButtonLinkProps> = ({
  buttonText,
  hrefLink,
  stopPropagation = false,
  addTopMargin = false,
}) => {
  return (
    <a
      href={hrefLink}
      target="_blank"
      rel="noreferrer noopener"
      onClick={
        stopPropagation
          ? (e) => {
              e.stopPropagation();
            }
          : undefined
      }
      className={`${
        addTopMargin ? "mt-2 xl:mt-2.5 2xl:mt-3" : ""
      } flex w-fit select-none flex-row items-center gap-1.5 rounded bg-off-black-900 py-1.5 pl-2 outline-none hover:bg-light-red focus-visible:bg-light-red lg:gap-2 lg:py-2 lg:pl-3 dark:bg-dark-white-200 dark:hover:bg-white dark:focus-visible:bg-white`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        className="h-3 w-3 fill-off-white-100 lg:h-3.5 lg:w-3.5 xl:h-4 xl:w-4 dark:fill-light-black-900"
      >
        <path d="M136.37 187.53a12 12 0 010 17l-5.94 5.94a60 60 0 01-84.88-84.88l24.12-24.11A60 60 0 01152 99a12 12 0 11-16 18 36 36 0 00-49.37 1.47l-24.1 24.08a36 36 0 0050.92 50.92l5.94-5.94a12 12 0 0116.98 0zm74.08-142a60.09 60.09 0 00-84.88 0l-5.94 5.94a12 12 0 0017 17l5.94-5.94a36 36 0 0150.92 50.92l-24.11 24.12A36 36 0 01120 139a12 12 0 10-16 18 60 60 0 0082.3-2.43l24.12-24.11a60.09 60.09 0 00.03-84.91z" />
      </svg>
      <span className="pr-3 text-2xs font-semibold text-off-white-100 lg:pr-4 lg:text-xs xl:text-sm dark:text-light-black-900">
        {buttonText}
      </span>
    </a>
  );
};

type ExpandedCardHeaderProps = {
  headerText: string;
};
export const ExpandedCardHeader: React.FC<ExpandedCardHeaderProps> = ({ headerText }) => {
  return (
    <h4 className="mb-2 mt-4 text-xs font-semibold text-off-black-900 lg:text-sm xl:mt-5 xl:text-base 2xl:mt-6 2xl:text-lg dark:text-dark-white-100">
      {headerText}
    </h4>
  );
};

type CardYouTubePlayerProps = {
  videoId: string;
  setVideoElement: (videoElement: YouTubeEvent) => void;
};
const youtubePlayerOptions: YouTubeProps["opts"] = {
  playerVars: {
    modestbranding: 1,
  },
};
export const CardYouTubePlayer: React.FC<CardYouTubePlayerProps> = ({ videoId, setVideoElement }) => {
  return (
    <YouTube
      videoId={videoId}
      opts={youtubePlayerOptions}
      onReady={(event: YouTubeEvent) => {
        setVideoElement(event);
      }}
      iframeClassName="absolute left-0 top-0 h-full w-full rounded"
      className="relative mb-0 w-full select-none rounded border-2 border-off-white-900 bg-off-white-900 pb-[56.25%] lg:mb-1 2xl:mb-2 dark:border-dark-white-400 dark:bg-dark-white-400"
    />
  );
};

type CardImageGridProps = {
  children: React.ReactNode;
};
export const CardImageGrid: React.FC<CardImageGridProps> = ({ children }) => {
  return <div className="grid grid-cols-3 gap-4 lg:gap-5 2xl:gap-8">{children}</div>;
};

type CardGridImageProps = {
  imageSrc: string;
  altText: string;
  width: number;
  height: number;
};
export const CardGridImage: React.FC<CardGridImageProps> = ({ imageSrc, altText, width, height }) => {
  return (
    <div className="select-none rounded bg-off-white-900 dark:bg-dark-white-400">
      <Image
        src={imageSrc}
        alt={altText}
        width={width}
        height={height}
        className="rounded border-2 border-off-white-900 dark:border-dark-white-400"
      ></Image>
    </div>
  );
};
