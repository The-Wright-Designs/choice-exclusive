import Link from "next/link";
import Image from "next/image";
import navData from "@/_data/nav-data.json";

const COMPANY_NAME = "Choice Property Group";

const FooterComponent = async () => {
  "use cache";

  return (
    <footer className="bg-white w-full border-t border-dark-blue">
      <div className="px-7 pt-15 pb-10 flex flex-col gap-7 desktop:max-w-[1280px] desktop:mx-auto desktop:pt-10 desktop:pb-5 min-[1336px]:px-0">
        <div className="flex flex-col gap-7 items-center desktop:flex-row desktop:justify-between desktop:items-start desktop:gap-0">
          <div className="flex flex-col gap-3 items-center">
            <Link
              href="https://www.choicenet.co.za"
              target="_blank"
              className="desktop:hover:opacity-90 ease-in-out duration-300"
            >
              <Image
                src="/logo/choice-properties-logo.png"
                alt={COMPANY_NAME}
                width={156}
                height={58}
              />
            </Link>
            <p className="hidden desktop:block text-[10px] font-extralight text-center">
              Registered with the PPRA
            </p>
          </div>
          <nav className="hidden desktop:block">
            <ul className="text-center">
              {navData.map(({ title, url }, id) => {
                return (
                  <li key={id}>
                    <Link
                      href={url}
                      className="text-[12px] font-extralight text-black desktop:hover:opacity-80"
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <p className="text-[14px] font-extralight text-center flex flex-col desktop:text-right">
            Designed &amp; Developed by
            <Link
              href="https://thewrightdesigns.co.za"
              className="text-dark-blue desktop:hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Wright Designs
            </Link>
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 w-full">
          <p className="text-[14px] font-extralight text-center w-full flex flex-col items-center desktop:gap-1 desktop:flex-row desktop:justify-center">
            © {COMPANY_NAME} {new Date().getFullYear()}
            <span className="hidden desktop:block text-[14px] font-extralight">
              |
            </span>
            <Link href="/" className="text-dark-blue desktop:hover:opacity-80">
              exclusive.choicenet.co.za
            </Link>
          </p>
          <p className="text-[10px] font-extralight text-center desktop:hidden">
            Registered with the PPRA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
