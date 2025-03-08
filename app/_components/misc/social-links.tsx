const SocialLinks = () => {
  return (
    <div className="flex flex-row items-center gap-4 md:gap-8 lg:gap-10 2xl:gap-12">
      <a
        href="https://github.com/NolanChan1"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Open my GitHub profile in another tab"
        className="fill-off-black-900 outline-none transition-transform hover:-translate-y-1 hover:fill-light-red focus-visible:-translate-y-1 focus-visible:fill-light-red dark:fill-dark-white-300 dark:hover:fill-white dark:focus-visible:fill-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          aria-hidden="true"
          role="img"
          width={98}
          height={98}
          viewBox="0 0 98 98"
          className="h-8 w-8 lg:h-10 lg:w-10 2xl:h-12 2xl:w-12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M49.04 1C22.025 1 .186 23 .186 50.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.06 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.7-5.378 3.074-6.6C29.304 70.75 17.9 66.514 17.9 47.609c0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0112.214-1.63c4.125 0 8.33.57 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.48 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.893 23 75.974 1 49.04 1z"
          />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/nolanchan1/"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Open my LinkedIn profile in another tab"
        className="fill-off-black-900 outline-none transition-transform hover:-translate-y-1 hover:fill-light-red focus-visible:-translate-y-1 focus-visible:fill-light-red dark:fill-dark-white-300 dark:hover:fill-white dark:focus-visible:fill-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          aria-hidden="true"
          role="img"
          width={72}
          height={72}
          viewBox="0 0 72 72"
          className="h-8 w-8 lg:h-10 lg:w-10 2xl:h-12 2xl:w-12"
        >
          <path
            d="M20.053-6.927a8 8 0 00-8 8v56a8 8 0 008 8h56a8 8 0 008-8v-56a8 8 0 00-8-8zm8.35 10c3.506 0 6.347 2.864 6.347 6.397 0 3.532-2.84 6.398-6.348 6.398-3.507 0-6.35-2.866-6.35-6.398 0-3.533 2.843-6.397 6.35-6.397zm33.032 16.274c7.353 0 12.618 4.49 12.618 13.777v21.95H63.369V36.875c0-4.99-1.897-7.777-5.846-7.777-4.296 0-6.54 2.901-6.54 7.777v18.197H40.684V20.407h10.297v4.668s3.097-5.728 10.453-5.728zm-38.35 1.06h10.737v34.666H23.086z"
            transform="translate(-12.053 6.927)"
            fillRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;
