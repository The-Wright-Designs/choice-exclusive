import classNames from "classnames";

interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  cssClasses?: string;
  headingCssClasses?: string;
  subheadingCssClasses?: string;
}

const SectionHeading = ({
  heading,
  subheading,
  cssClasses,
  headingCssClasses = "text-dark-gold",
  subheadingCssClasses = "text-dark-blue",
}: SectionHeadingProps) => {
  return (
    <div className={classNames("flex flex-col gap-2", cssClasses)}>
      <h2 className={headingCssClasses}>{heading}</h2>
      {subheading && <h3 className={subheadingCssClasses}>{subheading}</h3>}
    </div>
  );
};

export default SectionHeading;
