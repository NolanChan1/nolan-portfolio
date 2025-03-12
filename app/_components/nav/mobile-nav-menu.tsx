"use client";

import { useRef, useEffect } from "react";

import { MobileSectionType } from "@/app/_components/nav/page-sections";
import { ToggleMobileNavMenuButton } from "@/app/_components/nav/mobile-nav";
import SocialLinks from "@/app/_components/misc/social-links";
import ThemeToggleSwitch from "@/app/_components/misc/theme-toggle-switch";

import styles from "./mobile-nav.module.css";

type MobileNavMenuProps = {
  isOpen: boolean;
  closeNavMenu: () => void;
  toggleNavMenu: () => void;
  mobileSections: MobileSectionType[];
  scrollToSection: (sectionIndex: number, mobile: boolean) => void;
  currentScrolledSectionM: string;
};

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({
  isOpen,
  closeNavMenu,
  toggleNavMenu,
  mobileSections,
  scrollToSection,
  currentScrolledSectionM,
}) => {
  const menuRef = useRef<HTMLDialogElement | null>(null);

  // Sync isOpen state with <dialog>
  useEffect(() => {
    if (isOpen) {
      menuRef.current?.showModal();
    } else {
      menuRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={menuRef}
      onCancel={closeNavMenu}
      className={`${styles.navMenuContainer} fixed top-0 z-20 ml-auto mr-0 flex h-full max-h-full w-64 max-w-full flex-col justify-center bg-off-white-100 dark:bg-light-black-900`}
    >
      {/* Hidden background to mask background shift when scrolling in mobile browsers */}
      <div className="fixed right-0 top-0 z-10 h-[100vh] w-full bg-off-white-100 dark:bg-light-black-900"></div>

      <ToggleMobileNavMenuButton isNavMenuOpen={isOpen} isNavbarButton={false} toggleNavMenu={toggleNavMenu} />

      <ul role="list" className="relative z-40 my-auto mr-6 flex flex-col items-end justify-start gap-6 align-middle">
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
                  } ${styles.arrowTransition} h-8 w-8`}
                >
                  <path d="M10.5 6a.75.75 0 00-.75-.75H3.81l1.97-1.97a.75.75 0 00-1.06-1.06L1.47 5.47a.75.75 0 000 1.06l3.25 3.25a.75.75 0 001.06-1.06L3.81 6.75h5.94A.75.75 0 0010.5 6z" />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="absolute bottom-0 right-0 z-40 flex w-full flex-row items-center justify-between px-6 pb-6">
        <SocialLinks />
        <ThemeToggleSwitch />
      </div>
    </dialog>
  );
};

export default MobileNavMenu;
