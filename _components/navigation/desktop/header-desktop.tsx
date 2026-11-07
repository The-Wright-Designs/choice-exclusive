import Link from "next/link";
import Image from "next/image";
import navData from "@/_data/nav-data.json";
import classNames from "classnames";

const COMPANY_NAME = "Choice Property Group";

interface DesktopHeaderProps {
  cssClasses?: string;
}

const HeaderDesktop = ({ cssClasses }: DesktopHeaderProps) => {
  return (
    <div className={classNames("items-center justify-between", cssClasses)}>
      <Link href="/">
        <Image
          src="/logo/choice-properties-logo.png"
          alt={COMPANY_NAME}
          width={129}
          height={48}
        />
      </Link>
      <nav className="flex gap-2.5 items-center">
        {navData.map((item) => (
          <Link
            key={item.title}
            className="text-[14px] font-light text-black desktop:hover:text-dark-blue"
            href={item.url}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default HeaderDesktop;
