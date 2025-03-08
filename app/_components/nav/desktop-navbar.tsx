"use client";

import { useState } from "react";

import { DesktopSectionType } from "./page-sections";

type DesktopNavbarProps = {
  desktopSections: DesktopSectionType[];
  currentScrolledSectionD: number;
  scrollToSection: (sectionIndex: number, mobile: boolean) => void;
};

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ desktopSections, currentScrolledSectionD, scrollToSection }) => {
  // Whether or not the desktop navbar is visible
  const [desktopNavbarVisible, setDesktopNavbarVisible] = useState(true);

  const toggleNavbarVisibility = () => {
    setDesktopNavbarVisible((prevState) => {
      return !prevState;
    });
  };

  return (
    <nav className="hidden md:block">
      {/* Top/above or selected sections */}
      <ul
        role="list"
        id="top-desktop-navbar"
        className={`${
          desktopNavbarVisible ? "desktop-nav-translations" : "hidden"
        } hide-squished-nav desktop-nav-container z-20 flex-row-reverse`}
      >
        {desktopSections.map((dSection, idx) => {
          return (
            <li key={dSection.id}>
              <button
                aria-label={`Scroll to ${dSection.title} section`}
                aria-pressed={currentScrolledSectionD === dSection.order}
                disabled={currentScrolledSectionD < dSection.order}
                onClick={() => scrollToSection(idx, false)}
                className="desktop-navbar-section-animation-fix visible font-raleway text-base font-extrabold text-off-black-900 opacity-100 outline-none transition-all focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-[3px] disabled:invisible disabled:-translate-x-full disabled:opacity-0 aria-pressed:text-light-red lg:text-lg xl:text-xl xl:focus-visible:decoration-[3px] xl:focus-visible:underline-offset-4 2xl:text-2xl dark:text-dark-white-300 dark:aria-pressed:text-white"
              >
                {dSection.title}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Bottom/further down sections */}
      <ul
        role="list"
        id="bottom-desktop-navbar"
        className={`${
          desktopNavbarVisible ? "desktop-nav-translations" : "hidden"
        } hide-squished-nav desktop-nav-container z-10 flex-row-reverse justify-end`}
      >
        {desktopSections.map((dSection, idx) => {
          return (
            <li key={dSection.id}>
              <button
                aria-label={`Scroll to ${dSection.title} section`}
                aria-pressed="false"
                disabled={currentScrolledSectionD >= dSection.order}
                onClick={() => scrollToSection(idx, false)}
                className="desktop-navbar-section-animation-fix visible font-raleway text-base font-extrabold text-off-black-900 opacity-100 outline-none transition-all focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-[3px] disabled:invisible disabled:translate-x-full disabled:opacity-0 lg:text-lg xl:text-xl xl:focus-visible:decoration-[3px] xl:focus-visible:underline-offset-4 2xl:text-2xl dark:text-dark-white-300"
              >
                {dSection.title}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Button to hide desktop navbar */}
      <button
        onClick={toggleNavbarVisibility}
        aria-label="Toggle desktop navbar visibility"
        aria-expanded={desktopNavbarVisible}
        aria-controls="top-desktop-navbar bottom-desktop-navbar"
        className="hide-squished-nav fixed bottom-3.5 right-[0.8125rem] outline-none focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-off-black-900 focus-visible:hover:outline-light-red lg:bottom-4 lg:right-4 xl:focus-visible:outline-offset-4 2xl:bottom-6 2xl:right-[1.375rem] 2xl:focus-visible:outline-[3px] dark:focus-visible:outline-dark-white-300 dark:focus-visible:hover:outline-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          aria-hidden="true"
          width={32}
          height={32}
          viewBox="0 0 32 32"
          className={`${
            !desktopNavbarVisible && "rotate-180"
          } h-4 w-4 fill-off-black-900 hover:fill-light-red lg:h-[1.125rem] lg:w-[1.125rem] xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 dark:fill-dark-white-300 dark:hover:fill-white`}
        >
          <g>
            <path
              d="M12.25 2.594l-.719.687-3.594 3.625-.687.688.688.718L15.625 16l-7.688 7.688-.687.718.688.688 3.593 3.625.719.687.719-.687 12-12 .687-.719-.687-.719-12-12zm0 2.844L22.813 16 12.25 26.563l-2.188-2.188 7.688-7.656.719-.719-.719-.719-7.688-7.656z"
              transform="translate(6.297)"
            />
            <path
              d="M-1.25 2.594l-.719.687-3.594 3.625-.687.688.688.718L2.125 16l-7.688 7.688-.687.718.688.688 3.593 3.625.719.687.719-.687 12-12 .687-.719-.687-.719-12-12zm0 2.844L9.313 16-1.25 26.563l-2.188-2.188 7.688-7.656.719-.719-.719-.719-7.688-7.656z"
              transform="translate(6.297)"
            />
          </g>
        </svg>
      </button>
    </nav>
  );
};

export default DesktopNavbar;
