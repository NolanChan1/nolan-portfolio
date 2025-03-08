"use client";

import { PropsWithChildren } from "react";
import { YouTubePlayer } from "react-youtube";

type SectionCardProps = PropsWithChildren<{
  sectionCardTitle?: string;
  isExpanded?: boolean;
  setIsExpanded?: (updateFunction: (prevState: boolean) => boolean) => void;
  videoElement?: YouTubePlayer;
}>;

const SectionCard: React.FC<SectionCardProps> = ({
  children,
  sectionCardTitle,
  isExpanded,
  setIsExpanded,
  videoElement,
}) => {
  const isCardExpandable = setIsExpanded !== undefined;

  const toggleExpandContainer = () => {
    if (isCardExpandable) {
      // Pause the video player
      if (videoElement !== undefined) {
        if (videoElement.target.playerInfo.playerState === 1 && isExpanded) {
          videoElement.target.pauseVideo();
        }
      }

      setIsExpanded((prevState) => {
        return !prevState;
      });
    }
  };

  return (
    <>
      {isCardExpandable ? (
        <button
          onClick={toggleExpandContainer}
          aria-expanded={isExpanded}
          aria-label={`Expand ${sectionCardTitle} card`}
          className="section-wrapper relative rounded-xl bg-off-black-900 outline-none xl:rounded-2xl dark:bg-light-black-100"
        >
          <div className="section-container relative rounded-xl border-2 border-off-black-900 bg-off-white-100 p-4 text-left transition-transform lg:px-5 xl:rounded-2xl xl:px-6 xl:py-5 2xl:px-8 2xl:py-6 dark:border-light-black-100 dark:bg-light-black-900">
            {children}

            {/* Text to inform section is expandable */}
            {!isExpanded && (
              <div className="absolute bottom-0.5 right-1.5 flex flex-row items-center justify-start gap-0.5 lg:gap-1 2xl:bottom-1 2xl:right-2">
                <span className="text-4xs italic text-off-black-600 lg:text-3xs 2xl:text-2xs">Expand to see more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  aria-hidden="true"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-2.5 w-2.5 fill-off-black-600 lg:h-3 lg:w-3 2xl:h-3.5 2xl:w-3.5"
                >
                  <path d="M16.59 8.295L12 12.875l-4.59-4.58L6 9.705l6 6 6-6z" />
                </svg>
              </div>
            )}
          </div>

          {/* Hover effect with chevrons */}
          <div
            className={`${
              isExpanded ? "expanded-hover-chevron -bottom-5 xl:-bottom-6" : "hover-chevron bottom-2.5 xl:bottom-2"
            } absolute -right-6 hidden flex-col content-start items-center opacity-0 md:flex lg:-right-7 xl:-right-8 2xl:-right-9`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              aria-hidden="true"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className={`-mb-[0.9375rem] h-5 w-5 fill-off-black-900 lg:-mb-[1.125rem] lg:h-6 lg:w-6 xl:-mb-[1.3125rem] xl:h-7 xl:w-7 2xl:-mb-6 2xl:h-8 2xl:w-8 dark:fill-light-black-100 ${
                isExpanded && "rotate-180"
              }`}
            >
              <path d="M16.59 8.295L12 12.875l-4.59-4.58L6 9.705l6 6 6-6z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              aria-hidden="true"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className={`h-5 w-5 fill-off-black-900 lg:h-6 lg:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 dark:fill-light-black-100 ${
                isExpanded && "rotate-180"
              }`}
            >
              <path d="M16.59 8.295L12 12.875l-4.59-4.58L6 9.705l6 6 6-6z" />
            </svg>
          </div>
        </button>
      ) : (
        <div className="relative rounded-xl border-2 border-off-black-900 bg-off-white-100 p-4 text-left lg:px-5 xl:rounded-2xl xl:px-6 xl:py-5 2xl:px-8 2xl:py-6 dark:border-light-black-100 dark:bg-light-black-900">
          {children}
        </div>
      )}
    </>
  );
};

export default SectionCard;
