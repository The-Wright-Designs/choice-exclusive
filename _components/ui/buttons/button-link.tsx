import { buttonStyles } from "@/_styles/button-styles";
import { ButtonProps } from "@/_types/button-types";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const ButtonLink = ({
  children,
  onClick,
  cssClasses,
  href = "#",
  disabled,
  ariaLabel,
  target = "_self",
}: ButtonProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={buttonStyles(cssClasses, disabled, false)}
      aria-label={ariaLabel}
      target={target}
    >
      {children}
      <ChevronRight
        size={20}
        color="#173060"
        className="ease-in-out duration-300 desktop:group-hover:translate-x-[5px]"
      />
    </Link>
  );
};

export default ButtonLink;
