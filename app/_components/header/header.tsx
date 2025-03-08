import HeaderInfo from "@/app/_components/header/header-info";
import ResumeContact from "@/app/_components/header/resume-contact";
import SocialLinks from "@/app/_components/misc/social-links";
import ThemeToggleSwitch from "@/app/_components/misc/theme-toggle-switch";

const Header = () => {
  return (
    <header
      id="header-section"
      className="mx-5 pt-[4.5rem] md:fixed md:mx-0 md:ml-[12.5vw] md:h-[89vh] md:w-[35.5vw] md:pt-[11vh]"
    >
      <HeaderInfo />
      <ResumeContact />
      <div className="hide-squished absolute bottom-0 left-0 w-full items-center justify-between">
        <SocialLinks />
        <ThemeToggleSwitch />
      </div>
    </header>
  );
};

export default Header;
