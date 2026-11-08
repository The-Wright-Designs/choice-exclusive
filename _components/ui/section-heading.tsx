import classNames from "classnames";

interface SectionHeadingProps {
  heading: string;
  subheading: string;
  cssClasses?: string;
}

const SectionHeading = ({
  heading,
  subheading,
  cssClasses,
}: SectionHeadingProps) => {
  return (
    <div className={classNames("flex flex-col gap-5", cssClasses)}>
      <h2 className="text-dark-gold">{heading}</h2>
      <h3 className="text-dark-blue">{subheading}</h3>
    </div>
  );
};

export default SectionHeading;
