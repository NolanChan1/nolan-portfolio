import { PropsWithChildren } from "react";

type SectionHeaderProps = {
  headerTitle: string;
};
export const SectionHeader: React.FC<SectionHeaderProps> = ({ headerTitle }) => {
  return (
    <h2 className="mb-3 font-raleway text-3xl font-extrabold text-off-black-900 lg:mb-4 lg:text-4xl xl:mb-5 2xl:text-5xl dark:text-white">
      {headerTitle}
    </h2>
  );
};

type SectionGroupProps = PropsWithChildren<{
  isGroupVisible?: boolean;
  sectionGroupId?: string;
  bottomMarginSize: "small" | "large";
}>;
export const SectionGroup: React.FC<SectionGroupProps> = ({
  children,
  isGroupVisible = true,
  sectionGroupId = undefined,
  bottomMarginSize,
}) => {
  return (
    <div
      id={sectionGroupId}
      className={`${isGroupVisible ? "flex" : "hidden"} ${
        bottomMarginSize === "large" ? "mb-10 lg:mb-12 xl:mb-14 2xl:mb-16" : "mb-5 lg:mb-6 xl:mb-7 2xl:mb-8"
      } flex flex-col gap-5 lg:gap-6 xl:gap-7 2xl:gap-8`}
    >
      {children}
    </div>
  );
};

type ToggleSectionGroupButtonProps = {
  buttonText: string;
  sectionGroupId: string;
  isSectionGroupVisible: boolean;
  toggleSectionGroupVisibility: () => void;
};
export const ToggleSectionGroupButton: React.FC<ToggleSectionGroupButtonProps> = ({
  buttonText,
  sectionGroupId,
  isSectionGroupVisible,
  toggleSectionGroupVisibility,
}) => {
  return (
    <button
      onClick={toggleSectionGroupVisibility}
      aria-label={`Toggle ${buttonText}`}
      aria-expanded={isSectionGroupVisible}
      aria-controls={sectionGroupId}
      className="mx-auto mb-5 flex flex-row items-center justify-center gap-2 outline-none focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[6px] focus-visible:outline-off-white-900 aria-expanded:focus-visible:outline-light-red lg:mb-6 lg:gap-2.5 xl:mb-7 xl:gap-3 xl:focus-visible:outline-[3px] xl:focus-visible:outline-offset-[8px] 2xl:mb-8 2xl:gap-4 2xl:focus-visible:outline-offset-[10px] dark:focus-visible:outline-light-black-100 dark:aria-expanded:focus-visible:outline-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
        className={`${
          isSectionGroupVisible
            ? "rotate-180 fill-light-red dark:fill-white"
            : "fill-off-white-900 dark:fill-light-black-100"
        } h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5`}
      >
        <path d="M6.906 6.594l-.718.687-3.907 3.907-.687.718L16 26.312l14.406-14.406-.687-.719-3.907-3.906-.718-.687L16 15.687zm-.031 2.843l8.406 8.376.719.687.719-.688 8.406-8.375 2.438 2.438L16 23.469 4.437 11.875z" />
      </svg>
      <span
        aria-hidden="true"
        className={`${
          isSectionGroupVisible ? "text-light-red dark:text-white" : "text-off-white-900 dark:text-light-black-100"
        } text-xs font-semibold lg:text-sm xl:text-base 2xl:text-lg`}
      >
        {`${isSectionGroupVisible ? "Hide" : "View"} ${buttonText}`}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
        className={`${
          isSectionGroupVisible
            ? "rotate-180 fill-light-red dark:fill-white"
            : "fill-off-white-900 dark:fill-light-black-100"
        } h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5`}
      >
        <path d="M6.906 6.594l-.718.687-3.907 3.907-.687.718L16 26.312l14.406-14.406-.687-.719-3.907-3.906-.718-.687L16 15.687zm-.031 2.843l8.406 8.376.719.687.719-.688 8.406-8.375 2.438 2.438L16 23.469 4.437 11.875z" />
      </svg>
    </button>
  );
};
