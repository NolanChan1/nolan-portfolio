"use client";

import { useState, useEffect, useCallback } from "react";

import { ThemeToggleSwitch, ThemeToggleSwitchProps } from "./ThemeToggleSwitch";
import { mobileSections, desktopSections } from "./page-sections";

const Navbar: React.FC<ThemeToggleSwitchProps> = ({
  darkModeEnabled,
  toggleThemeFunction,
}) => {
  const [currentScrolledSectionM, setCurrentScrolledSectionM] = useState(
    mobileSections[0].title
  );
  const [navMenuVisible, setNavMenuVisible] = useState(false);
  const [blockOnScrollUpdate, setBlockOnScrollUpdate] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(true);

  const handleOnScroll = useCallback(
    (e: Event) => {
      let sectionElement = undefined;
      let sectionRect = undefined;
      for (let i = mobileSections.length - 1; i >= 0; i--) {
        sectionElement = document.getElementById(mobileSections[i].id);
        if (!sectionElement) {
          return;
        }
        sectionRect = sectionElement.getBoundingClientRect();

        if (sectionRect.top <= 0) {
          if (!blockOnScrollUpdate) {
            setCurrentScrolledSectionM(mobileSections[i].title);
          }
          break;
        }
      }

      // Check scroll direction
      if (!navMenuVisible) {
        if (prevScrollY >= window.scrollY) {
          setScrollingUp(true);
        } else if (window.scrollY > 32) {
          setScrollingUp(false);
        }
      }
      setPrevScrollY(window.scrollY);
    },
    [blockOnScrollUpdate, prevScrollY, navMenuVisible]
  );

  const scrollToSectionMobile = (sectionIndex: number) => {
    let sectionElement = document.getElementById(
      mobileSections[sectionIndex].id
    );

    if (sectionElement) {
      setBlockOnScrollUpdate(true);
      /* Scroll with offset
      let sectionRect = sectionElement.getBoundingClientRect();
      window.scrollBy({
        top: sectionRect.top - 52,
        left: sectionRect.left,
        behavior: "smooth",
      });
      */
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
    setCurrentScrolledSectionM(mobileSections[sectionIndex].title);
  };

  useEffect(() => {
    const handleOnScrollEnd = () => {
      setBlockOnScrollUpdate(false);
    };

    window.addEventListener("scroll", handleOnScroll);
    window.addEventListener("scrollend", handleOnScrollEnd);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
      window.removeEventListener("scrollend", handleOnScrollEnd);
    };
  }, [handleOnScroll]);

  return (
    <div>
      {/* Mobile Navbar */}
      <nav className="relative block w-full md:hidden">
        {/* Navbar */}
        <div
          className={`${
            scrollingUp
              ? "mobile-nav-transition-up opacity-100"
              : "mobile-nav-transition-down -translate-y-11 opacity-0"
          } mobile-nav-shadow fixed left-0 top-0 z-10 flex h-11 w-full flex-row items-center bg-off-white-100 pl-5 pr-3 shadow-lg dark:bg-light-black-900`}
        >
          <span className="font-raleway text-base font-black text-off-black-900 dark:text-white">
            {currentScrolledSectionM}
          </span>
        </div>
        <button
          onClick={() => {
            setNavMenuVisible((prevState) => {
              return !prevState;
            });
          }}
          aria-controls="primary-navigation"
          aria-expanded={navMenuVisible}
          className={`${
            !scrollingUp && "-translate-y-11"
          } fixed right-3 top-1 z-40 outline-none transition-transform`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className={`${
              navMenuVisible
                ? "hamburger-icon-expanded"
                : "hamburger-icon-unexpanded"
            } hamburger-icon h-9 w-9 fill-off-black-900 dark:fill-white`}
          >
            <rect width={7} height={2} x={5} y={7} rx={1} ry={1} />
            <rect width={14} height={2} x={5} y={11} rx={1} ry={1} />
            <rect width={7} height={2} x={12} y={15} rx={1} ry={1} />
          </svg>
        </button>

        {/* Nav menu */}
        <div
          className={`${
            navMenuVisible ? "visible opacity-60" : "invisible opacity-0"
          } fixed left-0 top-0 z-20 h-full w-full bg-black transition-opacity`}
        ></div>
        <div
          className={`${
            !navMenuVisible && "translate-x-64 shadow-none"
          } fixed right-0 top-0 z-30 flex h-full w-64 max-w-full flex-col justify-center bg-off-white-100 shadow-2xl transition-transform dark:bg-light-black-900`}
        >
          <div className="my-auto mr-6 flex flex-col items-end justify-start gap-6 align-middle">
            {mobileSections.map((mSection, idx) => {
              return (
                <button
                  key={mSection.title}
                  onClick={() => scrollToSectionMobile(idx)}
                  className="flex flex-row items-center justify-end gap-3 outline-none"
                >
                  <span
                    className={`${
                      currentScrolledSectionM === mSection.title
                        ? "text-light-red dark:text-white"
                        : "translate-x-11 text-off-black-900 dark:text-dark-white-100"
                    } text-end font-raleway text-3.5xl font-black transition-transform`}
                  >
                    {mSection.title}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 12 12"
                    className={`${
                      currentScrolledSectionM === mSection.title
                        ? "fill-light-red opacity-100 dark:fill-white"
                        : "translate-x-6 fill-off-black-900 opacity-0 dark:fill-dark-white-100"
                    } arrow-transition h-8 w-8`}
                  >
                    <path d="M10.5 6a.75.75 0 00-.75-.75H3.81l1.97-1.97a.75.75 0 00-1.06-1.06L1.47 5.47a.75.75 0 000 1.06l3.25 3.25a.75.75 0 001.06-1.06L3.81 6.75h5.94A.75.75 0 0010.5 6z" />
                  </svg>
                </button>
              );
            })}
          </div>
          <div className="absolute bottom-0 right-0 flex w-full flex-row items-center justify-between px-6 pb-6">
            <div className="flex flex-row items-center justify-start gap-4">
              <a
                href="https://github.com/NolanChan1"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={98}
                  height={98}
                  viewBox="0 0 98 98"
                  className="h-8 w-8 fill-off-black-900 dark:fill-light-black-100"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M49.04 1C22.025 1 .186 23 .186 50.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.06 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.7-5.378 3.074-6.6C29.304 70.75 17.9 66.514 17.9 47.609c0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0112.214-1.63c4.125 0 8.33.57 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.48 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.893 23 75.974 1 49.04 1z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/nolanchan1/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={72}
                  height={72}
                  viewBox="0 0 72 72"
                  className="h-8 w-8 fill-off-black-900 dark:fill-light-black-100"
                >
                  <path
                    d="M20.053-6.927a8 8 0 00-8 8v56a8 8 0 008 8h56a8 8 0 008-8v-56a8 8 0 00-8-8zm8.35 10c3.506 0 6.347 2.864 6.347 6.397 0 3.532-2.84 6.398-6.348 6.398-3.507 0-6.35-2.866-6.35-6.398 0-3.533 2.843-6.397 6.35-6.397zm33.032 16.274c7.353 0 12.618 4.49 12.618 13.777v21.95H63.369V36.875c0-4.99-1.897-7.777-5.846-7.777-4.296 0-6.54 2.901-6.54 7.777v18.197H40.684V20.407h10.297v4.668s3.097-5.728 10.453-5.728zm-38.35 1.06h10.737v34.666H23.086z"
                    transform="translate(-12.053 6.927)"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <ThemeToggleSwitch
              darkModeEnabled={darkModeEnabled}
              toggleThemeFunction={toggleThemeFunction}
            />
          </div>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <nav className="hidden md:block">
        <div className="fixed right-0 top-0 flex h-8 w-[100vh] origin-top-right -translate-x-8 -rotate-90 flex-row items-center justify-start gap-8 bg-dev">
          <span>Skills</span>
          <span>Work</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
