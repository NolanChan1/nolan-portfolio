"use client";

import { MobileSectionType } from "./page-sections";
import SocialLinks from "@/app/_components/misc/social-links";
import ThemeToggleSwitch from "@/app/_components/misc/theme-toggle-switch";

type MobileNavbarProps = {
  mobileSections: MobileSectionType[];
  currentScrolledSectionM: string;
  isScrollingUp: boolean;
  setIsNavMenuVisible: (updateFunction: (prevState: boolean) => boolean) => void;
  isNavMenuVisible: boolean;
  scrollToSection: (sectionIndex: number, mobile: boolean) => void;
};

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  mobileSections,
  currentScrolledSectionM,
  isScrollingUp,
  setIsNavMenuVisible,
  isNavMenuVisible,
  scrollToSection,
}) => {
  return (
    <nav className="relative block w-full md:hidden">
      {/* Navbar */}
      <div
        className={`${
          isScrollingUp
            ? "mobile-nav-transition-up opacity-100"
            : "mobile-nav-transition-down -translate-y-11 opacity-0"
        } mobile-navbar-shadow fixed left-0 top-0 z-10 flex h-11 w-full flex-row items-center bg-off-white-100 pl-5 pr-3 dark:bg-light-black-900`}
      >
        <span className="font-raleway text-base font-black text-off-black-900 dark:text-white">
          {currentScrolledSectionM}
        </span>
      </div>

      {/* Hamburger menu button */}
      <button
        onClick={() => {
          setIsNavMenuVisible((prevState) => {
            return !prevState;
          });
        }}
        aria-label="Toggle mobile navigation menu"
        aria-expanded={isNavMenuVisible}
        aria-controls="primary-navigation"
        className={`${
          !isScrollingUp && "-translate-y-11"
        } fixed right-3 top-1 z-40 rounded-lg outline-none transition-transform focus-visible:outline focus-visible:outline-[3px] focus-visible:-outline-offset-2 focus-visible:outline-off-black-900`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className={`${
            isNavMenuVisible ? "hamburger-icon-expanded" : "hamburger-icon-unexpanded"
          } hamburger-icon h-9 w-9 fill-off-black-900 dark:fill-white`}
        >
          <rect width={7} height={2} x={5} y={7} rx={1} ry={1} className="origin-right" />
          <rect width={14} height={2} x={5} y={11} rx={1} ry={1} className="origin-center" />
          <rect width={7} height={2} x={12} y={15} rx={1} ry={1} className="origin-left" />
        </svg>
      </button>

      {/* Nav menu */}
      <div
        className={`${
          isNavMenuVisible ? "mobile-nav-overlay-visible" : "hidden opacity-0"
        } mobile-nav-overlay-transition fixed left-0 top-0 z-20 h-[100vh] w-full bg-black transition-opacity`}
      ></div>
      <div
        className={`${
          isNavMenuVisible ? "mobile-nav-visible" : "hidden translate-x-64 shadow-none"
        } mobile-nav-shadow mobile-nav-transition fixed right-0 top-0 z-30 h-[100vh] w-64 max-w-full bg-off-white-100 dark:bg-light-black-900`}
      ></div>
      <div
        id="primary-navigation"
        className={`${
          isNavMenuVisible ? "mobile-nav-visible" : "hidden translate-x-64 shadow-none"
        } mobile-nav-transition fixed right-0 top-0 z-30 flex h-full w-64 max-w-full flex-col justify-center bg-off-white-100 dark:bg-light-black-900`}
      >
        <ul role="list" className="my-auto mr-6 flex flex-col items-end justify-start gap-6 align-middle">
          {mobileSections.map((mSection, idx) => {
            return (
              <li key={mSection.title}>
                <button
                  onClick={() => scrollToSection(idx, true)}
                  className={`${
                    currentScrolledSectionM === mSection.title
                      ? "focus-visible:decoration-light-red dark:focus-visible:decoration-white"
                      : "focus-visible:decoration-off-black-900 dark:focus-visible:decoration-dark-white-300"
                  } flex flex-row items-center justify-end gap-3 outline-none focus-visible:underline focus-visible:decoration-4 focus-visible:underline-offset-[5px]`}
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
              </li>
            );
          })}
        </ul>

        <div className="absolute bottom-0 right-0 flex w-full flex-row items-center justify-between px-6 pb-6">
          <SocialLinks />
          <ThemeToggleSwitch />
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
