"use client";

import { useState, useEffect, useCallback } from "react";

import { mobileSections, desktopSections } from "./page-sections";
import DesktopNavbar from "@/app/_components/nav/desktop-navbar";
import MobileNav from "@/app/_components/nav/mobile-nav";

const Navbar = () => {
  // Mobile and desktop sections currently scrolled to
  const [currentScrolledSectionM, setCurrentScrolledSectionM] = useState(mobileSections[0].title);
  const [currentScrolledSectionD, setCurrentScrolledSectionD] = useState(desktopSections[0].order);

  // Whether or not the mobile navigation menu is visible
  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false);

  // For blocking updates in handleOnScroll when scrolling is done by the browser
  const [blockOnScrollUpdate, setBlockOnScrollUpdate] = useState(false);
  const [blockScrollUpdateTimeout, setBlockScrollUpdateTimeout] = useState<any>(undefined);
  const [hashSection, setHashSection] = useState<any>(undefined);

  // For keeping track if the user has scrolled up or not (hiding/unhiding navbars)
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  const handleOnScroll = useCallback(
    (e: Event) => {
      // For browsers that do not support onscrollend, use a timeout function
      if (blockScrollUpdateTimeout && blockOnScrollUpdate === true) {
        clearTimeout(blockScrollUpdateTimeout);
        setBlockScrollUpdateTimeout(
          setTimeout(() => {
            setBlockOnScrollUpdate(false);
            if (hashSection) {
              window.location.hash = `#${hashSection}`;
              setHashSection(undefined);
            }
          }, 100)
        );
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
            setCurrentScrolledSectionD(desktopSections[i === 0 ? 0 : i - 1].order);
          }
          break;
        }
      }

      // Check scroll direction
      if (!isNavMenuVisible) {
        if (prevScrollY >= window.scrollY) {
          setIsScrollingUp(true);
        } else {
          if (window.scrollY > 32) {
            // Dont hide mobile navbar when at the top of the page
            setIsScrollingUp(false);
          }
        }
      }
      setPrevScrollY(window.scrollY);
    },
    [blockScrollUpdateTimeout, blockOnScrollUpdate, prevScrollY, isNavMenuVisible, hashSection]
  );

  useEffect(() => {
    // const handleOnScrollEnd = () => {
    //   setBlockOnScrollUpdate(false);
    //   if (hashSection) {
    //     window.location.hash = `#${hashSection}`;
    //     setHashSection(undefined);
    //   }
    // };

    const handleResize = () => {
      // Hide nav menu when it is no longer visible
      if (window.matchMedia("(min-width: 768px)").matches) {
        setIsNavMenuVisible(false);
      }
    };

    window.addEventListener("scroll", handleOnScroll);
    //window.addEventListener("scrollend", handleOnScrollEnd);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
      //window.removeEventListener("scrollend", handleOnScrollEnd);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleOnScroll, hashSection]);

  const scrollToSection = (sectionIndex: number, mobile: boolean) => {
    let sectionElement = undefined;
    let sectionId: any = undefined;

    if (mobile) {
      sectionId = mobileSections[sectionIndex].id;
    } else {
      sectionId = desktopSections[sectionIndex].id;
    }
    sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      setBlockOnScrollUpdate(true);

      // If browser does not support onscrollend, use a timeout function
      if (blockScrollUpdateTimeout) {
        clearTimeout(blockScrollUpdateTimeout);
      }
      setBlockScrollUpdateTimeout(
        setTimeout(() => {
          setBlockOnScrollUpdate(false);
          window.location.hash = `#${sectionId}`;
        }, 100)
      );
      /* Scroll with offset
      let sectionRect = sectionElement.getBoundingClientRect();
      window.scrollBy({
        top: sectionRect.top - 52,
        left: sectionRect.left,
        behavior: "smooth",
      });
      */

      sectionElement.scrollIntoView({ behavior: "instant" });
      setHashSection(sectionId);

      if (mobile) {
        setCurrentScrolledSectionM(mobileSections[sectionIndex].title);

        let adjustedIndex = sectionIndex === 0 ? 0 : sectionIndex - 1;
        setCurrentScrolledSectionD(desktopSections[adjustedIndex].order);
      } else {
        setCurrentScrolledSectionM(mobileSections[sectionIndex + 1].title);
        setCurrentScrolledSectionD(desktopSections[sectionIndex].order);
      }
    }
  };

  return (
    <>
      <MobileNav
        mobileSections={mobileSections}
        currentScrolledSectionM={currentScrolledSectionM}
        isScrollingUp={isScrollingUp}
        setIsNavMenuVisible={setIsNavMenuVisible}
        isNavMenuVisible={isNavMenuVisible}
        scrollToSection={scrollToSection}
      />
      <DesktopNavbar
        desktopSections={desktopSections}
        currentScrolledSectionD={currentScrolledSectionD}
        scrollToSection={scrollToSection}
      />
    </>
  );
};

export default Navbar;
