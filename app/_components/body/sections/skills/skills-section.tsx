import { PropsWithChildren } from "react";

import { SectionHeader } from "@/app/_components/body/sections/section-components";

const SkillsSection = () => {
  return (
    <section id="skills-section" className="mt-5 lg:mt-6 xl:mt-7 2xl:mt-8">
      <SectionHeader headerTitle="Technical Skills" />
      <table className="w-full border-separate border-spacing-x-0 border-spacing-y-1.5 selection:bg-white selection:text-light-black-900 xl:border-spacing-y-2">
        <tbody>
          <tr>
            <TableHeadCell variant="dark" cellText="Programming Languages:" />
            <TableDataCell variant="dark">
              <TableTagsList>
                <li>C/C++</li>
                <li>Java</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </TableTagsList>
            </TableDataCell>
          </tr>
          <tr>
            <TableHeadCell variant="light" cellText="App Development:" />
            <TableDataCell variant="light">
              <TableTagsList>
                <li>React Native</li>
              </TableTagsList>
            </TableDataCell>
          </tr>
          <tr>
            <TableHeadCell variant="dark" cellText="Frontend Development:" />
            <TableDataCell variant="dark">
              <TableTagsList>
                <li>HTML</li>
                <li>CSS</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Angular</li>
              </TableTagsList>
            </TableDataCell>
          </tr>
          <tr>
            <TableHeadCell variant="light" cellText="Backend Development:" />
            <TableDataCell variant="light">
              <TableTagsList>
                <li>REST</li>
                <li>Django</li>
                <li>Relational Databases (SQL)</li>
              </TableTagsList>
            </TableDataCell>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

type TableHeadCellProps = {
  variant: "light" | "dark";
  cellText: string;
};
const TableHeadCell: React.FC<TableHeadCellProps> = ({ variant, cellText }) => {
  return (
    <th
      className={`${
        variant === "light" ? "skills-table-row-odd" : "skills-table-row-even "
      } skills-table-head-cell selection:text-light-black-900`}
    >
      {cellText}
    </th>
  );
};

type TableDataCellProps = PropsWithChildren<{
  variant: "light" | "dark";
}>;
const TableDataCell: React.FC<TableDataCellProps> = ({ children, variant }) => {
  return (
    <td className={`${variant === "light" ? "skills-table-row-odd" : "skills-table-row-even"} skills-table-data-cell`}>
      {children}
    </td>
  );
};

type TableTagsListProps = {
  children: React.ReactNode;
};
const TableTagsList: React.FC<TableTagsListProps> = ({ children }) => {
  return (
    <ul role="list" className="skills-table-skill-list-container">
      {children}
    </ul>
  );
};

export default SkillsSection;
