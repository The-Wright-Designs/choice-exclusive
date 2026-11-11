import Image from "next/image";
import classNames from "classnames";

import PageWrapper from "@/_lib/utils/page-wrapper";
import generalData from "@/_data/general-data.json";
import SectionHeading from "@/_components/ui/section-heading";
import ButtonLink from "@/_components/ui/buttons/button-link";

export default function ViticultureComponent() {
  const { heading, subheading, image, highlight, bullets, quote, buttons } =
    generalData.homePage.viticultureSection;

  return (
    <PageWrapper
      id="viticulture"
      cssClasses="flex flex-col gap-10 py-15 scroll-mt-[81px] min-[1000px]:scroll-mt-[93px] desktop:flex-row desktop:items-stretch desktop:gap-7"
    >
      <div className="contents desktop:flex desktop:flex-col desktop:gap-10 desktop:w-[583px] desktop:shrink-0 desktop:justify-center">
        <SectionHeading
          heading={heading}
          subheading={subheading}
          cssClasses="order-first"
        />
        <h3 className="text-dark-blue font-bold">{highlight}</h3>
        <ul className="flex flex-col gap-5">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <div className="size-1.5 mt-1.5 shrink-0 rounded-full bg-dark-blue" />
              <p className="text-dark-blue">{bullet}</p>
            </li>
          ))}
        </ul>
        <p className="text-[21px] font-semibold text-dark-blue">{quote}</p>
        <div className="flex flex-col gap-5 min-[600px]:flex-row desktop:gap-7">
          {buttons.map((button) => (
            <ButtonLink
              key={button.label}
              href={button.href}
              cssClasses="w-full tablet:w-auto bg-dark-gold! desktop:hover:bg-gold!"
            >
              {button.label}
            </ButtonLink>
          ))}
        </div>
      </div>
      <div className="relative aspect-video rounded-[6px] overflow-hidden -order-1 desktop:hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="hidden desktop:flex desktop:flex-1 desktop:min-w-0 desktop:gap-7">
        {[0, 1].map((index) => (
          <div
            key={index}
            className="relative flex-1 min-w-0 rounded-[6px] overflow-hidden"
          >
            <div
              className={classNames(
                "absolute top-0 h-full w-[calc(200%+28px)]",
                index === 0 ? "left-0" : "left-[calc(-100%-28px)]",
              )}
            >
              <Image
                src={image.src}
                alt={index === 0 ? image.alt : ""}
                fill
                sizes="1280px"
                className="object-cover object-left"
              />
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
