import classNames from "classnames";

import ButtonLink from "@/_components/ui/buttons/button-link";

interface HeroBoxProps {
  cssClasses?: string;
}

const HeroBox = ({ cssClasses }: HeroBoxProps) => {
  return (
    <div
      className={classNames(
        "bg-dark-blue/85 flex flex-col px-7 py-10 rounded-b-[6px] desktop:items-center desktop:gap-4 desktop:px-10 desktop:py-7 desktop:rounded-t-[6px]",
        cssClasses,
      )}
    >
      <div className="flex flex-col gap-3 desktop:gap-7">
        <div className="flex flex-col gap-2 desktop:gap-1">
          <p className="text-[length:min(5vw,20px)] leading-none text-gold phone:text-[length:min(5vw,28px)] font-bold text-center uppercase desktop:text-[28px]">
            Pre-Sale Exclusive
          </p>
          <h1 className="max-[389px]:text-[length:min(9.98vw,41px)] leading-none border-y border-white/50 py-1 self-center text-white phone:text-[length:min(10vw,64px)] font-bold text-center uppercase font-[family-name:var(--font-cormorant)] desktop:text-[64px]">
            Mountain Rose
          </h1>
          <p className="text-[length:min(3.67vw,15px)] text-gold phone:text-[length:min(3.5vw,20px)] font-normal text-center desktop:text-[20px]">
            Hemel-en-Aarde Valley, Hermanus, South Africa
          </p>
        </div>
        <div className="hidden desktop:flex gap-7">
          <ButtonLink href="/media" cssClasses="flex-1">
            Video
          </ButtonLink>
          <ButtonLink href="/#contact" cssClasses="flex-1">
            Contact
          </ButtonLink>
        </div>
      </div>
      <p className="hidden desktop:block text-gold text-[16px] font-medium">
        Viewing Strictly by Appointment
      </p>
    </div>
  );
};

export default HeroBox;
