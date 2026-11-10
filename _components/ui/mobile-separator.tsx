import classNames from "classnames";

interface MobileSeparatorProps {
  cssClasses?: string;
}

const MobileSeparator = ({ cssClasses }: MobileSeparatorProps) => {
  return (
    <div
      className={classNames(
        "h-px mx-7 bg-dark-blue/35 min-[1000px]:hidden",
        cssClasses,
      )}
    />
  );
};

export default MobileSeparator;
