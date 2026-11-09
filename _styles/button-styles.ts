import classNames from "classnames";

export const buttonStyles = (
  cssClasses?: string,
  disabled?: boolean,
  pending?: boolean,
) =>
  classNames(
    "group flex items-center justify-center gap-2.5 min-w-[160px] px-5 py-3 rounded-[6px] bg-gold text-dark-blue text-[16px] font-bold text-center shadow-[0_4px_4px_-4px_rgba(12,12,13,0.05),0_16px_32px_-4px_rgba(12,12,13,0.1)] ease-in-out duration-300",
    cssClasses,
    {
      "opacity-50 cursor-not-allowed": pending || disabled,
      "desktop:hover:cursor-pointer desktop:hover:bg-dark-gold": !(
        disabled || pending
      ),
    },
  );
