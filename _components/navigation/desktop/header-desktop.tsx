import Link from "next/link";
import Image from "next/image";
import navData from "@/_data/nav-data.json";
import classNames from "classnames";

interface DesktopHeaderProps {
  cssClasses?: string;
}

const HeaderDesktop = ({ cssClasses }: DesktopHeaderProps) => {
  return (
    <div className={classNames("items-center justify-between", cssClasses)}>
      <Link
        href="http://choicenet.co.za/"
        target="blank"
        className="desktop:hover:opacity-80 ease-in-out duration-300"
      >
        <Image
          src="/logo/choice-properties-logo.png"
          alt="Choice Property Group"
          width={129}
          height={48}
        />
      </Link>
      <nav className="flex gap-2.5 items-center">
        {navData.map((item) => (
          <Link
            key={item.title}
            className={classNames(
              "relative text-[14px] font-light text-black transition-colors desktop:hover:text-dark-blue",
              "after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-center after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 after:content-['']",
              "desktop:hover:after:scale-x-100",
            )}
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
