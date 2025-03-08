"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeToggleSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Handle hydration mismatch issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeSwitch = () => {
    setTheme((prevState) => {
      return prevState === "light" ? "dark" : "light";
    });
  };

  if (!mounted) {
    return <div className="h-8 lg:h-10 2xl:h-12"></div>;
  }

  return (
    <button
      aria-label="Toggle light mode theme"
      aria-pressed={theme === "light" ? "true" : "false"}
      onClick={handleThemeSwitch}
      className="relative flex h-8 flex-row items-center justify-between rounded-full bg-off-black-900 outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-off-black-900 lg:h-10 lg:focus-visible:outline-4 2xl:h-12 dark:bg-light-black-100 dark:focus-visible:outline-light-black-100"
    >
      {/* Sun icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        className="ml-2 h-4 w-4 select-none lg:ml-3 lg:h-5 lg:w-5 2xl:h-6 2xl:w-6"
      >
        <path
          fill="#111111"
          fillRule="evenodd"
          d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm4 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-.464 4.95l.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 1.414Zm2.12-10.607a1 1 0 0 1 0 1.414l-.706.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM17 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1Zm-7 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM5.05 6.464A1 1 0 1 0 6.465 5.05l-.708-.707a1 1 0 0 0-1.414 1.414l.707.707Zm1.414 8.486l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414ZM4 11a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1Z"
          clipRule="evenodd"
        />
      </svg>

      {/* Moon icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        transform="rotate(90)"
        className="mx-2 h-4 w-4 select-none lg:mx-3 lg:h-5 lg:w-5 2xl:h-6 2xl:w-6"
      >
        <path
          fill="#fffffc"
          d="M13.574 3.138a1.01 1.01 0 0 0-1.097 1.408a6 6 0 0 1-7.931 7.931a1.01 1.01 0 0 0-1.409 1.097A9 9 0 0 0 21 12a9.001 9.001 0 0 0-7.426-8.862Z"
        />
      </svg>

      {/* Switch ball */}
      <div
        aria-hidden="true"
        className="absolute left-1.5 top-1.5 h-5 w-5 rounded-full bg-off-white-100 transition-transform lg:left-2 lg:top-2 lg:h-6 lg:w-6 2xl:h-8 2xl:w-8 dark:translate-x-6 dark:bg-light-black-900 lg:dark:translate-x-9"
      ></div>
    </button>
  );
};

export default ThemeToggleSwitch;
