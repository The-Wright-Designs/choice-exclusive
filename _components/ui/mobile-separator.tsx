import classNames from "classnames";

interface MobileSeparatorProps {
  cssClasses?: string;
}

const MobileSeparator = ({ cssClasses }: MobileSeparatorProps) => {
  return (
    <div
      className={classNames(
        "h-px mx-7 bg-dark-blue/35 tablet:hidden",
        cssClasses,
      )}
    />
  );
};

export default MobileSeparator;
