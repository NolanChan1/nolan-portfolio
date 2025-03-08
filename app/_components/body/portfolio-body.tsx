import WorkSection from "@/app/_components/body/sections/work/work-section";
import ProjectsSection from "@/app/_components/body/sections/projects/projects-section";
import EducationSection from "@/app/_components/body/sections/education/education-cards";
import SkillsSection from "@/app/_components/body/sections/skills/skills-section";
import PortfolioFooter from "@/app/_components/body/portfolio-footer";

export default function PortfolioBody() {
  return (
    <main className="mx-5 mt-16 md:relative md:left-[48vw] md:top-0 md:mx-0 md:mt-0 md:w-[39.5vw] md:pl-[4vw] md:pt-[11vh]">
      <WorkSection />
      <ProjectsSection />
      <EducationSection />
      <SkillsSection />

      <PortfolioFooter />
    </main>
  );
}
