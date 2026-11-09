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
    <div
      id="conservation"
      className="relative overflow-hidden bg-dark-blue scroll-mt-[81px] min-[1000px]:scroll-mt-[93px]"
    >
      <div className="pointer-events-none absolute inset-0 mx-auto hidden max-w-[1280px] tablet:block">
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
      <PageWrapper cssClasses="relative flex flex-col gap-10 py-15 tablet:grid tablet:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] tablet:gap-x-7 tablet:gap-y-10 desktop:grid-cols-[869px_minmax(0,1fr)]">
        <div className="flex flex-col gap-10 tablet:contents desktop:flex">
          <SectionHeading
            heading={heading}
            subheading={subheading}
            cssClasses="tablet:col-span-2 desktop:col-span-1"
            headingCssClasses="text-gold"
            subheadingCssClasses="text-white"
          />
          <div className="relative flex flex-col gap-7 overflow-hidden rounded-[6px] bg-gold px-7 py-10 tablet:py-7">
            <Image
              src={graphic.src}
              alt=""
              width={1500}
              height={806}
              sizes="(max-width: 1280px) 100vw, 1224px"
              className="pointer-events-none absolute bottom-[8.5%] left-[-67.15%] h-auto w-[219.76%] max-w-none opacity-10 min-[500px]:bottom-[-25%] min-[700px]:bottom-[-40%] tablet:hidden"
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
          <p className="text-[22px] font-normal text-white tablet:col-span-2 desktop:col-span-1">
            {quote}
          </p>
        </div>
        <div className="flex flex-col gap-5 tablet:hidden">
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
        <div className="relative hidden rounded-[6px] overflow-hidden tablet:col-start-2 tablet:row-start-2 tablet:block desktop:row-start-1">
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
