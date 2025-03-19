const ResumeContact = () => {
  return (
    <div className="mt-4 flex flex-row gap-5 lg:mt-6 2xl:mt-8 2xl:gap-6">
      <a
        href="/files/nolanchan_web_resume.pdf"
        target="_blank"
        className="select-none rounded bg-off-black-900 px-4 py-1.5 text-3xs font-semibold text-off-white-100 outline-none hover:bg-light-red focus-visible:bg-light-red lg:px-5 lg:py-2 lg:text-xs xl:rounded-md xl:px-6 2xl:rounded-lg 2xl:px-7 2xl:py-2.5 2xl:text-base dark:bg-dark-white-200 dark:text-light-black-900 dark:hover:bg-white dark:focus-visible:bg-white"
      >
        Resume
      </a>
      <div className="rounded border border-off-black-900 bg-off-white-100 px-4 py-1.25 text-3xs font-semibold text-off-black-900 lg:border-2 lg:px-5 lg:py-1.5 lg:text-xs xl:rounded-md xl:px-6 2xl:rounded-lg 2xl:px-7 2xl:py-2 2xl:text-base dark:border-dark-white-100 dark:bg-light-black-900 dark:text-dark-white-100">
        nolanchan.contact@gmail.com
      </div>
    </div>
  );
};

export default ResumeContact;
