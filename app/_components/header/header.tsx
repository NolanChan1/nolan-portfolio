import HeaderInfo from "@/app/_components/header/header-info";
import ResumeContact from "@/app/_components/header/resume-contact";
import SocialLinks from "@/app/_components/misc/social-links";
import ThemeToggleSwitch from "@/app/_components/misc/theme-toggle-switch";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header
      id="header-section"
      className={`${styles.headerWidth} relative mx-5 pt-[4.5rem] md:fixed md:mx-0 md:ml-[12.5vw] md:h-[89vh] md:pt-[11vh]`}
    >
      <HeaderInfo />
      <ResumeContact />
      <div className={`${styles.positionBottomHeader} w-full items-center`}>
        <SocialLinks />
        <ThemeToggleSwitch />
      </div>
    </header>
  );
};

export default Header;
