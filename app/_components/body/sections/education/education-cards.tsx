import { SectionGroup, SectionHeader } from "@/app/_components/body/sections/section-components";
import { BachelorsDegreeCard } from "@/app/_components/body/sections/education/education-section";

const EducationSection = () => {
  return (
    <section id="education-section">
      <SectionHeader headerTitle="Education" />
      <SectionGroup bottomMarginSize="large">
        <BachelorsDegreeCard />
      </SectionGroup>
    </section>
  );
};

export default EducationSection;
