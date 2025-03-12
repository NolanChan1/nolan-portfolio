import { PropsWithChildren } from "react";

import { SectionHeader } from "@/app/_components/body/sections/section-components";

const SkillsSection = () => {
  return (
    <section id="skills" className="mt-5 lg:mt-6 xl:mt-7 2xl:mt-8">
      <SectionHeader headerTitle="Technical Skills" />
      <table className="w-full border-separate border-spacing-x-0 border-spacing-y-1.5 selection:bg-white selection:text-light-black-900 xl:border-spacing-y-2">
        <tbody>
          <tr>
            <TableHeadCell variant="dark" cellText="Programming Languages:" />
            <TableDataCell variant="dark">
              <TableTagsList>
                <TableTag tagText="C/C++" />
                <TableTag tagText="Java" />
                <TableTag tagText="Python" />
                <TableTag tagText="JavaScript" />
                <TableTag tagText="TypeScript" />
              </TableTagsList>
            </TableDataCell>
          </tr>
          <tr>
            <TableHeadCell variant="light" cellText="App Development:" />
            <TableDataCell variant="light">
              <TableTagsList>
                <TableTag tagText="React Native" />
              </TableTagsList>
            </TableDataCell>
          </tr>
          <tr>
            <TableHeadCell variant="dark" cellText="Frontend Development:" />
            <TableDataCell variant="dark">
              <TableTagsList>
                <TableTag tagText="HTML" />
                <TableTag tagText="CSS" />
                <TableTag tagText="jQuery" />
                <TableTag tagText="React" />
                <TableTag tagText="Next.js" />
                <TableTag tagText="Angular" />
              </TableTagsList>
            </TableDataCell>
          </tr>
          <tr>
            <TableHeadCell variant="light" cellText="Backend Development:" />
            <TableDataCell variant="light">
              <TableTagsList>
                <TableTag tagText="REST" />
                <TableTag tagText="Django" />
                <TableTag tagText="Relational Databases (SQL)" />
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
        variant === "light"
          ? "bg-light-black-800 dark:bg-light-black-825"
          : "bg-light-black-900 dark:bg-light-black-850"
      } whitespace-nowrap rounded-l-lg pl-2.5 pr-2.5 text-left text-xs font-semibold text-off-white-100 selection:text-light-black-900 lg:pl-3 lg:pr-3 lg:text-sm xl:rounded-l-xl xl:pl-4 xl:pr-4 xl:text-base 2xl:pr-5 2xl:text-lg`}
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
    <td
      className={`${
        variant === "light"
          ? "bg-light-black-800 dark:bg-light-black-825"
          : "bg-light-black-900 dark:bg-light-black-850"
      } rounded-r-lg py-1.5 pr-1.5 xl:rounded-r-xl xl:py-2 xl:pr-2`}
    >
      {children}
    </td>
  );
};

type TableTagsListProps = {
  children: React.ReactNode;
};
const TableTagsList: React.FC<TableTagsListProps> = ({ children }) => {
  return (
    <ul role="list" className="flex flex-row flex-wrap gap-1.5 xl:gap-2">
      {children}
    </ul>
  );
};

type TableTagProps = {
  tagText: string;
};
const TableTag: React.FC<TableTagProps> = ({ tagText }) => {
  return (
    <li className="line-clamp-1 rounded-full border border-off-white-100 px-1.5 py-0.5 text-3xs font-normal text-off-white-100 selection:text-light-black-900 lg:px-2 lg:text-2xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm">
      {tagText}
    </li>
  );
};

export default SkillsSection;
