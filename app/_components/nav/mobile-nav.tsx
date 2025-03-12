"use client";

import { MobileSectionType } from "./page-sections";
import MobileNavMenu from "@/app/_components/nav/mobile-nav-menu";

import styles from "./mobile-nav.module.css";

type MobileNavProps = {
  mobileSections: MobileSectionType[];
  currentScrolledSectionM: string;
  isScrollingUp: boolean;
  setIsNavMenuVisible: (updateFunction: (prevState: boolean) => boolean) => void;
  isNavMenuVisible: boolean;
  scrollToSection: (sectionIndex: number, mobile: boolean) => void;
};

const MobileNav: React.FC<MobileNavProps> = ({
  mobileSections,
  currentScrolledSectionM,
  isScrollingUp,
  setIsNavMenuVisible,
  isNavMenuVisible,
  scrollToSection,
}) => {
  const toggleNavMenu = () => {
    setIsNavMenuVisible((prevState) => {
      return !prevState;
    });
  };

  const closeNavMenu = () => {
    setIsNavMenuVisible(() => false);
  };

  return (
    <nav className="relative block w-full md:hidden">
      {/* Navbar */}
      <div
        className={`${
          isScrollingUp
            ? `${styles.displayNavbarTransition} opacity-100`
            : `${styles.hideNavbarTransition} -translate-y-11 opacity-0`
        } ${
          styles.navbarShadow
        } fixed left-0 top-0 z-10 flex h-11 w-full flex-row items-center bg-off-white-100 pl-5 pr-3 dark:bg-light-black-900`}
      >
        <span className="font-raleway text-base font-black text-off-black-900 dark:text-white">
          {currentScrolledSectionM}
        </span>
      </div>

      <ToggleMobileNavMenuButton
        isButtonHidden={!isScrollingUp}
        isNavMenuOpen={isNavMenuVisible}
        isNavbarButton={true}
        toggleNavMenu={toggleNavMenu}
      />

      <MobileNavMenu
        isOpen={isNavMenuVisible}
        closeNavMenu={closeNavMenu}
        toggleNavMenu={toggleNavMenu}
        mobileSections={mobileSections}
        scrollToSection={scrollToSection}
        currentScrolledSectionM={currentScrolledSectionM}
      />
    </nav>
  );
};

type ToggleMobileNavMenuButtonProps = {
  isButtonHidden?: boolean;
  isNavMenuOpen: boolean;
  isNavbarButton: boolean;
  toggleNavMenu: () => void;
};
export const ToggleMobileNavMenuButton: React.FC<ToggleMobileNavMenuButtonProps> = ({
  isButtonHidden = false,
  isNavMenuOpen,
  isNavbarButton,
  toggleNavMenu,
}) => {
  return (
    <button
      onClick={toggleNavMenu}
      aria-label={`${isNavMenuOpen ? "Close mobile navigation menu" : "Open mobile navigation menu"}`}
      className={`${
        isNavbarButton ? "" : `${styles.reverseMenuTransforms} ${isNavMenuOpen ? styles.undoReverseMenuTransforms : ""}`
      } ${
        isButtonHidden ? "-translate-y-11" : ""
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
        className={`${isNavMenuOpen ? styles.expandedHamburgerIcon : styles.unexpandedHamburgerIcon} ${
          styles.hamburgerIcon
        } h-9 w-9 fill-off-black-900 dark:fill-white`}
      >
        <rect width={7} height={2} x={5} y={7} rx={1} ry={1} className="origin-right" />
        <rect width={14} height={2} x={5} y={11} rx={1} ry={1} className="origin-center" />
        <rect width={7} height={2} x={12} y={15} rx={1} ry={1} className="origin-left" />
      </svg>
    </button>
  );
};

export default MobileNav;
