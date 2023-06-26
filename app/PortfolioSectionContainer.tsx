"use client";

import { useState, PropsWithChildren } from "react";

type PortfolioSectionContainerProps = PropsWithChildren<{
  expanded?: boolean;
  expandFunction?: (updateFunction: (prevState: boolean) => boolean) => void;
}>;

const PortfolioSectionContainer: React.FC<PortfolioSectionContainerProps> = ({
  children,
  expanded,
  expandFunction,
}) => {
  return (
    <button
      onClick={() => {
        if (expandFunction !== undefined) {
          expandFunction((prevState) => {
            return !prevState;
          });
        }
        return false;
      }}
      disabled={expandFunction === undefined}
      className={`${
        expandFunction !== undefined &&
        "section-container transition-shadow hover:shadow-xl"
      } relative mb-8 rounded-xl border-2 border-off-black-900 p-4 text-left shadow-none outline-none dark:border-light-black-100 lg:px-5 xl:rounded-2xl xl:px-6 xl:py-5 2xl:px-8 2xl:py-6`}
    >
      {children}
      <div
        className={`${
          expandFunction !== undefined && "hover-chevron"
        } absolute -right-6 bottom-2.5 hidden flex-col content-start items-center opacity-0 md:flex lg:-right-7 xl:-right-8 xl:bottom-2 2xl:-right-9`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="-mb-[0.9375rem] h-5 w-5 fill-off-black-900 dark:fill-light-black-100 lg:-mb-[1.125rem] lg:h-6 lg:w-6 xl:-mb-[1.3125rem] xl:h-7 xl:w-7 2xl:-mb-6 2xl:h-8 2xl:w-8"
        >
          <path d="M16.59 8.295L12 12.875l-4.59-4.58L6 9.705l6 6 6-6z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-off-black-900 dark:fill-light-black-100 lg:h-6 lg:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8"
        >
          <path d="M16.59 8.295L12 12.875l-4.59-4.58L6 9.705l6 6 6-6z" />
        </svg>
      </div>
    </button>
  );
};

export default PortfolioSectionContainer;
