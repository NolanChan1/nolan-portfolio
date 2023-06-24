"use client";

import { PropsWithChildren } from "react";

type PortfolioSectionContainerProps = PropsWithChildren<{
  expandable: boolean;
}>;

const PortfolioSectionContainer: React.FC<PortfolioSectionContainerProps> = ({
  children,
  expandable,
}) => {
  return (
    <div className="mx-5 mb-8 rounded-xl border-2 border-off-black-900 p-4 dark:border-light-black-100 md:mx-0 2xl:rounded-2xl 2xl:px-8 2xl:py-6">
      {children}
    </div>
  );
};

export default PortfolioSectionContainer;
