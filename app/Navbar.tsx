"use client";

import { useState, useEffect, useCallback } from "react";

import { ThemeToggleSwitch, ThemeToggleSwitchProps } from "./ThemeToggleSwitch";
import { mobileSections, desktopSections } from "./page-sections";

const Navbar: React.FC<ThemeToggleSwitchProps> = ({ toggleThemeFunction }) => {
  // Mobile and desktop sections currently scrolled to
  const [currentScrolledSectionM, setCurrentScrolledSectionM] = useState(
    mobileSections[0].title
  );
  const [currentScrolledSectionD, setCurrentScrolledSectionD] = useState(
    desktopSections[0].order
  );

  // Whether or not the mobile navigation menu is visible
  const [navMenuVisible, setNavMenuVisible] = useState(false);

  // Whether or not the desktop navbar is visible
  const [desktopNavbarVisible, setDesktopNavbarVisible] = useState(false);

  // For blocking updates in handleOnScroll when scrolling is done by the computer
  const [blockOnScrollUpdate, setBlockOnScrollUpdate] = useState(false);
  const [blockScrollUpdateTimeout, setBlockScrollUpdateTimeout] =
    useState<any>(undefined);

  // For keeping track if the user has scrolled up or not (hiding/unhiding navbars)
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(true);

  const handleOnScroll = useCallback(
    (e: Event) => {
      // For browsers that do not support onscrollend, use a timeout function
      if (!("onscrollend" in window)) {
        if (blockScrollUpdateTimeout && blockOnScrollUpdate === true) {
          clearTimeout(blockScrollUpdateTimeout);
          setBlockScrollUpdateTimeout(
            setTimeout(() => {
              setBlockOnScrollUpdate(false);
            }, 100)
          );
        }
      }

      // Determine which section the user has scrolled to
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
            setCurrentScrolledSectionD(
              desktopSections[i === 0 ? 0 : i - 1].order
            );
          }
          break;
        }
      }

      // Check scroll direction
      if (!navMenuVisible) {
        if (prevScrollY >= window.scrollY) {
          setScrollingUp(true);
        } else {
          if (window.scrollY > 32) {
            // Dont hide mobile navbar when at the top of the page
            setScrollingUp(false);
          }
        }
      }
      setPrevScrollY(window.scrollY);
    },
    [blockScrollUpdateTimeout, blockOnScrollUpdate, prevScrollY, navMenuVisible]
  );

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

  const scrollToSection = (
    sectionIndex: number,
    mobile: boolean,
    reverseIndex: boolean
  ) => {
    let sectionElement = undefined;
    let desktopIndex = sectionIndex;
    if (reverseIndex) {
      desktopIndex = Math.abs(desktopIndex - desktopSections.length + 1);
    }

    if (mobile) {
      sectionElement = document.getElementById(mobileSections[sectionIndex].id);
    } else {
      sectionElement = document.getElementById(
        desktopSections[desktopIndex].id
      );
    }

    if (sectionElement) {
      setBlockOnScrollUpdate(true);

      // If browser does not support onscrollend, use a timeout function
      if (!("onscrollend" in window)) {
        if (blockScrollUpdateTimeout) {
          clearTimeout(blockScrollUpdateTimeout);
        }
        setBlockScrollUpdateTimeout(
          setTimeout(() => {
            setBlockOnScrollUpdate(false);
          }, 100)
        );
      }
      /* Scroll with offset
      let sectionRect = sectionElement.getBoundingClientRect();
      window.scrollBy({
        top: sectionRect.top - 52,
        left: sectionRect.left,
        behavior: "smooth",
      });
      */
      sectionElement.scrollIntoView({ behavior: "smooth" });

      if (mobile) {
        setCurrentScrolledSectionM(mobileSections[sectionIndex].title);

        let adjustedIndex = sectionIndex === 0 ? 0 : sectionIndex - 1;
        setCurrentScrolledSectionD(desktopSections[adjustedIndex].order);
      } else {
        setCurrentScrolledSectionM(mobileSections[desktopIndex + 1].title);
        setCurrentScrolledSectionD(desktopSections[desktopIndex].order);
      }
    }
  };

  return (
    <div>
      {/* Mobile Nav */}
      <nav className="relative block w-full md:hidden">
        {/* Navbar */}
        <div
          className={`${
            scrollingUp
              ? "mobile-nav-transition-up opacity-100"
              : "mobile-nav-transition-down -translate-y-11 opacity-0"
          } mobile-navbar-shadow fixed left-0 top-0 z-10 flex h-11 w-full flex-row items-center bg-off-white-100 pl-5 pr-3 dark:bg-light-black-900`}
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
            <rect
              width={7}
              height={2}
              x={5}
              y={7}
              rx={1}
              ry={1}
              className="origin-right"
            />
            <rect
              width={14}
              height={2}
              x={5}
              y={11}
              rx={1}
              ry={1}
              className="origin-center"
            />
            <rect
              width={7}
              height={2}
              x={12}
              y={15}
              rx={1}
              ry={1}
              className="origin-left"
            />
          </svg>
        </button>

        {/* Nav menu */}
        <div
          className={`${
            navMenuVisible ? "visible opacity-60" : "invisible opacity-0"
          } fixed left-0 top-0 z-20 h-[100vh] w-full bg-black transition-opacity`}
        ></div>
        <div
          className={`${
            !navMenuVisible && "translate-x-64"
          } mobile-nav-shadow fixed right-0 top-0 z-30 h-[100vh] w-64 max-w-full bg-off-white-100 dark:bg-off-black-900`}
        ></div>
        <div
          className={`${
            !navMenuVisible && "translate-x-64 shadow-none"
          } fixed right-0 top-0 z-30 flex h-full w-64 max-w-full flex-col justify-center bg-off-white-100 transition-transform dark:bg-light-black-900`}
        >
          <div className="my-auto mr-6 flex flex-col items-end justify-start gap-6 align-middle">
            {mobileSections.map((mSection, idx) => {
              return (
                <button
                  key={mSection.title}
                  onClick={() => scrollToSection(idx, true, false)}
                  className="flex flex-row items-center justify-end gap-3 outline-none"
                >
                  <span
                    className={`${
                      currentScrolledSectionM === mSection.title
                        ? "text-light-red dark:text-white"
                        : "translate-x-11 text-off-black-900 dark:text-dark-white-300"
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
                        : "translate-x-6 fill-off-black-900 opacity-0 dark:fill-dark-white-300"
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
            <ThemeToggleSwitch toggleThemeFunction={toggleThemeFunction} />
          </div>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <nav className="hidden md:block">
        <button
          onClick={() => {
            setDesktopNavbarVisible((prevState) => {
              return !prevState;
            });
          }}
          className="hide-squished-nav fixed bottom-3.5 right-[0.8125rem] outline-none lg:bottom-4 lg:right-4 2xl:bottom-6 2xl:right-[1.375rem]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 32 32"
            className={`${
              !desktopNavbarVisible && "rotate-180"
            } h-4 w-4 fill-off-black-900 hover:fill-light-red dark:fill-dark-white-300 dark:hover:fill-white lg:h-[1.125rem] lg:w-[1.125rem] xl:h-5 xl:w-5 2xl:h-6 2xl:w-6`}
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

        <div
          className={`${
            desktopNavbarVisible && "desktop-nav-translations"
          } hide-squished-nav desktop-nav-container z-10 flex-row`}
        >
          {desktopSections
            .slice(0)
            .reverse()
            .map((dSection, idx) => {
              return (
                <button
                  key={dSection.id}
                  onClick={() => scrollToSection(idx, false, true)}
                  className={`${
                    currentScrolledSectionD >= dSection.order
                      ? "invisible translate-x-full opacity-0"
                      : "visible opacity-100"
                  } font-raleway text-base font-extrabold text-off-black-900 outline-none transition-all dark:text-dark-white-300 lg:text-lg xl:text-xl 2xl:text-2xl`}
                >
                  {dSection.title}
                </button>
              );
            })}
        </div>
        <div
          className={`${
            desktopNavbarVisible && "desktop-nav-translations"
          } hide-squished-nav desktop-nav-container z-20 flex-row-reverse`}
        >
          {desktopSections.map((dSection, idx) => {
            return (
              <button
                key={dSection.id}
                onClick={() => scrollToSection(idx, false, false)}
                className={`${
                  currentScrolledSectionD === dSection.order
                    ? "text-light-red dark:text-white"
                    : "text-off-black-900 dark:text-dark-white-300"
                } ${
                  currentScrolledSectionD >= dSection.order
                    ? "visible opacity-100"
                    : "invisible -translate-x-full opacity-0"
                } font-raleway text-base font-extrabold outline-none transition-all lg:text-lg xl:text-xl 2xl:text-2xl`}
              >
                {dSection.title}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
