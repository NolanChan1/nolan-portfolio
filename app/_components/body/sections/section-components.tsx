import { PropsWithChildren } from "react";

type SectionHeaderProps = {
  headerTitle: string;
};
export const SectionHeader: React.FC<SectionHeaderProps> = ({ headerTitle }) => {
  return <h2 className="section-title">{headerTitle}</h2>;
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
        bottomMarginSize === "large" ? "hidden-section-group-bottom-margin" : ""
      } section-group`}
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
      className="hide-subsection-button"
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
        } `}
      >
        <path d="M6.906 6.594l-.718.687-3.907 3.907-.687.718L16 26.312l14.406-14.406-.687-.719-3.907-3.906-.718-.687L16 15.687zm-.031 2.843l8.406 8.376.719.687.719-.688 8.406-8.375 2.438 2.438L16 23.469 4.437 11.875z" />
      </svg>
      <span
        aria-hidden="true"
        className={`${
          isSectionGroupVisible ? "text-light-red dark:text-white" : "text-off-white-900 dark:text-light-black-100"
        } `}
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
        }`}
      >
        <path d="M6.906 6.594l-.718.687-3.907 3.907-.687.718L16 26.312l14.406-14.406-.687-.719-3.907-3.906-.718-.687L16 15.687zm-.031 2.843l8.406 8.376.719.687.719-.688 8.406-8.375 2.438 2.438L16 23.469 4.437 11.875z" />
      </svg>
    </button>
  );
};
