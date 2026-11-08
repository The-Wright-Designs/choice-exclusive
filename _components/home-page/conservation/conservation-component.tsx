import Image from "next/image";
import classNames from "classnames";

import PageWrapper from "@/_lib/utils/page-wrapper";
import generalData from "@/_data/general-data.json";
import SectionHeading from "@/_components/ui/section-heading";

const imageOffsets = ["top-[-0.21%]", "top-[-112.64%]", "top-[-225.07%]"];

export default function ConservationComponent() {
  const { heading, subheading, bullets, paragraph, quote, graphic, image } =
    generalData.homePage.conservationSection;

  return (
    <div className="relative overflow-hidden bg-dark-blue">
      <div className="pointer-events-none absolute inset-0 mx-auto hidden max-w-[1280px] desktop:block">
        <div className="absolute left-[-255px] top-[-460px] h-[1536px] w-[1500px]">
          <Image
            src={graphic.src}
            alt=""
            width={1500}
            height={1536}
            sizes="1500px"
            className="absolute left-[3.68%] top-[24.04%] h-[48.64%] w-[92.7%] max-w-none object-cover opacity-10"
          />
        </div>
      </div>
      <PageWrapper cssClasses="relative flex flex-col gap-10 py-15 desktop:flex-row desktop:gap-7">
        <div className="flex flex-col gap-10 desktop:w-[869px] desktop:shrink-0">
          <SectionHeading
            heading={heading}
            subheading={subheading}
            headingCssClasses="text-gold"
            subheadingCssClasses="text-white"
          />
          <div className="relative flex flex-col gap-7 overflow-hidden rounded-[6px] bg-gold px-7 py-10 desktop:py-7">
            <Image
              src={graphic.src}
              alt=""
              width={1500}
              height={1536}
              sizes="(max-width: 1280px) 100vw, 1224px"
              className="pointer-events-none absolute left-[-67.15%] top-[49.14%] h-[42.36%] w-[219.76%] max-w-none object-cover opacity-10 desktop:hidden"
            />
            <ul className="relative flex flex-col gap-5">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <div className="size-1.5 mt-1.5 shrink-0 rounded-full bg-dark-blue" />
                  <p className="text-dark-blue">{bullet}</p>
                </li>
              ))}
            </ul>
            <p className="relative text-dark-blue">{paragraph}</p>
          </div>
          <p className="text-[22px] font-normal text-white">{quote}</p>
        </div>
        <div className="flex flex-col gap-5 desktop:hidden">
          {imageOffsets.map((offset, index) => (
            <div
              key={offset}
              className="relative h-[154px] rounded-[6px] overflow-hidden"
            >
              <Image
                src={image.src}
                alt={index === 0 ? image.alt : ""}
                width={1280}
                height={800}
                sizes="(max-width: 1280px) 100vw, 1224px"
                className={classNames(
                  "absolute left-0 h-[325.28%] w-full max-w-none object-cover",
                  offset,
                )}
              />
            </div>
          ))}
        </div>
        <div className="relative hidden flex-1 min-w-0 rounded-[6px] overflow-hidden desktop:block">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="383px"
            className="object-cover"
          />
        </div>
      </PageWrapper>
    </div>
  );
}
