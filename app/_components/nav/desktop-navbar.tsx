"use client";

import { useState, Fragment } from "react";

import { DesktopSectionType } from "./page-sections";

import styles from "./desktop-navbar.module.css";

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
      <NavbarHeadersList
        isTopVariant={true}
        isVisible={desktopNavbarVisible}
        listId="top-desktop-navbar"
        desktopSections={desktopSections}
        currentScrolledSection={currentScrolledSectionD}
        scrollToSection={scrollToSection}
      />

      {/* Bottom/further down sections */}
      <NavbarHeadersList
        isTopVariant={false}
        isVisible={desktopNavbarVisible}
        listId="bottom-desktop-navbar"
        desktopSections={desktopSections}
        currentScrolledSection={currentScrolledSectionD}
        scrollToSection={scrollToSection}
      />

      {/* Button to hide desktop navbar */}
      <button
        onClick={toggleNavbarVisibility}
        aria-label="Toggle desktop navbar visibility"
        aria-expanded={desktopNavbarVisible}
        aria-controls="top-desktop-navbar bottom-desktop-navbar"
        className={`${styles.hideSquishedNavbar} fixed bottom-3.5 right-[0.8125rem] outline-none focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-off-black-900 focus-visible:hover:outline-light-red lg:bottom-4 lg:right-4 xl:focus-visible:outline-offset-4 2xl:bottom-6 2xl:right-[1.375rem] 2xl:focus-visible:outline-[3px] dark:focus-visible:outline-dark-white-300 dark:focus-visible:hover:outline-white`}
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

type NavbarHeadersListProps = {
  isTopVariant: boolean;
  isVisible: boolean;
  listId: string;
  desktopSections: DesktopSectionType[];
  currentScrolledSection: number;
  scrollToSection: (sectionIndex: number, mobile: boolean) => void;
};
const NavbarHeadersList: React.FC<NavbarHeadersListProps> = ({
  isTopVariant,
  isVisible,
  listId,
  desktopSections,
  currentScrolledSection,
  scrollToSection,
}) => {
  return (
    <ul
      role="list"
      id={listId}
      className={`${
        isVisible
          ? `${styles.displayNavbarList} flex -translate-x-[1.9375rem] lg:-translate-x-[2.3125rem] xl:-translate-x-[2.4375rem] 2xl:-translate-x-[3rem]`
          : "hidden"
      } ${isTopVariant ? "z-20" : "z-10 justify-end"} ${styles.navbarListTransition} ${
        styles.hideSquishedNavbar
      } invisible fixed right-0 top-0 h-[1.9375rem] w-[100vh] origin-top-right -rotate-90 flex-row-reverse items-center justify-start gap-5 pb-3 pl-10 pr-5 lg:h-[2.3125rem] lg:gap-6 lg:pb-4 lg:pl-12 lg:pr-6 xl:h-[2.4375rem] 2xl:h-[3rem] 2xl:gap-7 2xl:pb-5 2xl:pl-16 2xl:pr-8`}
    >
      {desktopSections.map((desktopSection, idx) => {
        return (
          <Fragment key={desktopSection.id}>
            <NavbarHeadersListItem
              isTopVariant={isTopVariant}
              listIndex={idx}
              desktopSection={desktopSection}
              currentScrolledSection={currentScrolledSection}
              scrollToSection={scrollToSection}
            />
          </Fragment>
        );
      })}
    </ul>
  );
};

type NavbarHeadersListItemProps = {
  isTopVariant: boolean;
  listIndex: number;
  desktopSection: DesktopSectionType;
  currentScrolledSection: number;
  scrollToSection: (sectionIndex: number, mobile: boolean) => void;
};
const NavbarHeadersListItem: React.FC<NavbarHeadersListItemProps> = ({
  isTopVariant,
  listIndex,
  desktopSection,
  currentScrolledSection,
  scrollToSection,
}) => {
  return (
    <li>
      <button
        aria-label={`Scroll to ${desktopSection.title} section`}
        aria-pressed={currentScrolledSection === desktopSection.order}
        disabled={
          isTopVariant ? currentScrolledSection < desktopSection.order : currentScrolledSection >= desktopSection.order
        }
        onClick={() => scrollToSection(listIndex, false)}
        className={`${styles.transformAnimationFix} ${
          isTopVariant ? "disabled:-translate-x-full" : "disabled:translate-x-full"
        } visible font-raleway text-base font-extrabold text-off-black-900 opacity-100 outline-none transition-all focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-[3px] disabled:invisible disabled:opacity-0 aria-pressed:text-light-red lg:text-lg xl:text-xl xl:focus-visible:decoration-[3px] xl:focus-visible:underline-offset-4 2xl:text-2xl dark:text-dark-white-300 dark:aria-pressed:text-white`}
      >
        {desktopSection.title}
      </button>
    </li>
  );
};

export default DesktopNavbar;
