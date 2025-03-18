const PortfolioFooter = () => {
  return (
    <footer>
      <p className="mt-32 pb-16 text-center text-xs font-medium italic leading-normal text-off-black-900 md:pb-[11vh] md:text-left lg:text-sm xl:text-base 2xl:text-lg dark:text-dark-white-100">
        This website was designed and developed by me. Developed using Next.js and Tailwind CSS, and deployed through
        Vercel. If you want to view the source code, you can find it{" "}
        <a
          href="https://github.com/NolanChan1/nolan-portfolio"
          target="_blank"
          rel="noreferrer noopener"
          className="font-bold outline-none hover:text-light-red focus-visible:underline focus-visible:decoration-2 md:focus-visible:underline-offset-2 2xl:focus-visible:decoration-[3px] 2xl:focus-visible:underline-offset-[3px] dark:hover:text-white"
        >
          here
        </a>
        .
      </p>
    </footer>
  );
};

export default PortfolioFooter;
