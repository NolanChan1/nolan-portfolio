"use client";

import PortfolioSectionContainer from "./PortfolioSectionContainer";

export default function PortfolioBody() {
  return (
    <main className="mx-5 mt-16 md:mx-0 md:mt-0">
      <section className="md:mt-[11vh]">
        <h2 className="mb-4 font-raleway text-3xl font-extrabold text-off-black-900 dark:text-white md:mb-5 lg:text-4xl 2xl:text-5xl">
          Projects
        </h2>
        <PortfolioSectionContainer expandable={true}>
          <h1>Hello</h1>
        </PortfolioSectionContainer>
      </section>
    </main>
  );
}
