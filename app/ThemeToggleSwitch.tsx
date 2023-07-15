"use client";

import { PropsWithChildren } from "react";
import Image from "next/image";

export type ThemeToggleSwitchProps = PropsWithChildren<{
  darkModeEnabled: boolean;
  toggleThemeFunction: (
    updateFunction: (prevState: boolean) => boolean
  ) => void;
}>;

export const ThemeToggleSwitch: React.FC<ThemeToggleSwitchProps> = ({
  darkModeEnabled,
  toggleThemeFunction,
}) => {
  return (
    <button
      onClick={() =>
        toggleThemeFunction((prevState) => {
          return !prevState;
        })
      }
      className="relative flex h-8 flex-row items-center justify-between rounded-full bg-off-black-900 outline-0 dark:bg-light-black-100 lg:h-10 2xl:h-12"
    >
      <div
        className={`absolute left-1.5 top-1.5 h-5 w-5 rounded-full bg-off-white-100 transition-transform dark:translate-x-6 dark:bg-light-black-900 lg:left-2 lg:top-2 lg:h-6 lg:w-6 lg:dark:translate-x-9 2xl:h-8 2xl:w-8`}
      ></div>
      <Image
        src="/icons/sun-fill.svg"
        alt="sun icon"
        height={24}
        width={24}
        className="ml-2 h-4 w-4 lg:ml-3 lg:h-5 lg:w-5 2xl:h-6 2xl:w-6"
      ></Image>
      <Image
        src="/icons/moon-fill.svg"
        alt="moon icon"
        height={24}
        width={24}
        className="mx-2 h-4 w-4 lg:mx-3 lg:h-5 lg:w-5 2xl:h-6 2xl:w-6"
      ></Image>
    </button>
  );
};
