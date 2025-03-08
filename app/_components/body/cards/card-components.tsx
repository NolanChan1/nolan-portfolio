import { PropsWithChildren } from "react";
import Image from "next/image";
import YouTube, { YouTubeProps, YouTubeEvent } from "react-youtube";

type CardHeaderProps = {
  headerText: string;
};
export const CardHeader: React.FC<CardHeaderProps> = ({ headerText }) => {
  return <h3 className="section-header">{headerText}</h3>;
};

// To apply styling to text within CardSubheaderContainer, wrap text with a <span>
type CardSubheaderContainerProps = {
  children: React.ReactNode;
};
export const CardSubheaderContainer: React.FC<CardSubheaderContainerProps> = ({ children }) => {
  return <div className="section-subheader-container">{children}</div>;
};

export const Dot = () => {
  return <div className="dot"></div>;
};

type CardTagsProps = {
  children: React.ReactNode;
};
export const CardTags: React.FC<CardTagsProps> = ({ children }) => {
  return (
    <ul role="list" className="section-tag-container">
      {children}
    </ul>
  );
};

type CardTagProps = {
  tagText: string;
};
export const CardTag: React.FC<CardTagProps> = ({ tagText }) => {
  return <li className="section-tag">{tagText}</li>;
};

type CardParagraphProps = PropsWithChildren<{
  addMargin?: "top" | "bottom" | "none";
}>;
export const CardParagraph: React.FC<CardParagraphProps> = ({ children, addMargin = "none" }) => {
  return (
    <p
      className={`${addMargin === "top" ? "mt-1 xl:mt-2" : ""} ${
        addMargin === "bottom" ? "mb-3 xl:mb-3.5 2xl:mb-4" : ""
      } section-paragraph `}
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
      className="section-link-text"
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
    <div className={`${isVisible ? "section-showcase-expanded" : "hidden"} section-showcase-container`}>
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
      className={`${addTopMargin ? "mt-2 xl:mt-2.5 2xl:mt-3" : ""} github-link-button`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
      >
        <path d="M136.37 187.53a12 12 0 010 17l-5.94 5.94a60 60 0 01-84.88-84.88l24.12-24.11A60 60 0 01152 99a12 12 0 11-16 18 36 36 0 00-49.37 1.47l-24.1 24.08a36 36 0 0050.92 50.92l5.94-5.94a12 12 0 0116.98 0zm74.08-142a60.09 60.09 0 00-84.88 0l-5.94 5.94a12 12 0 0017 17l5.94-5.94a36 36 0 0150.92 50.92l-24.11 24.12A36 36 0 01120 139a12 12 0 10-16 18 60 60 0 0082.3-2.43l24.12-24.11a60.09 60.09 0 00.03-84.91z" />
      </svg>
      <span>{buttonText}</span>
    </a>
  );
};

type ExpandedCardHeaderProps = {
  headerText: string;
};
export const ExpandedCardHeader: React.FC<ExpandedCardHeaderProps> = ({ headerText }) => {
  return <h4 className="section-header-hidden">{headerText}</h4>;
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
      iframeClassName="section-video-player-iframe"
      className="section-video-player-container"
    />
  );
};

type CardImageGridProps = {
  children: React.ReactNode;
};
export const CardImageGrid: React.FC<CardImageGridProps> = ({ children }) => {
  return <div className="section-screenshots-grid-container">{children}</div>;
};

type CardGridImageProps = {
  imageSrc: string;
  altText: string;
  width: number;
  height: number;
};
export const CardGridImage: React.FC<CardGridImageProps> = ({ imageSrc, altText, width, height }) => {
  return (
    <div className="section-screenshot-container">
      <Image src={imageSrc} alt={altText} width={width} height={height} className="section-screenshot"></Image>
    </div>
  );
};
