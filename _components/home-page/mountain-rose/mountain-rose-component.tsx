import Image from "next/image";
import classNames from "classnames";

import PageWrapper from "@/_lib/utils/page-wrapper";
import generalData from "@/_data/general-data.json";
import SectionHeading from "@/_components/ui/section-heading";
import ButtonLink from "@/_components/ui/buttons/button-link";

interface ImageItem {
  src: string;
  alt: string;
}

interface ImageListProps {
  images: ImageItem[];
  cssClasses?: string;
}

const ImageList = ({ images, cssClasses }: ImageListProps) => (
  <div
    className={classNames(
      "grid grid-cols-1 gap-7 tablet:grid-cols-2",
      cssClasses,
    )}
  >
    {images.map((image) => (
      <div
        key={image.src}
        className="relative aspect-video rounded-[6px] overflow-hidden desktop:aspect-auto"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 1280px) 100vw, 500px"
          className="object-cover"
        />
      </div>
    ))}
  </div>
);

export default function MountainRoseComponent() {
  const {
    heading,
    subheading,
    topImages,
    quote,
    bullets,
    buttons,
    bottomImages,
  } = generalData.homePage.mountainRoseSection;

  return (
    <div
      id="mountain-rose"
      className="bg-dark-blue scroll-mt-[81px] min-[1000px]:scroll-mt-[93px]"
    >
      <PageWrapper cssClasses="flex flex-col gap-7 py-15 desktop:flex-row desktop:items-stretch desktop:gap-10">
        <SectionHeading
          heading={heading}
          subheading={subheading}
          cssClasses="desktop:hidden"
          headingCssClasses="text-gold"
          subheadingCssClasses="text-white"
        />
        <div className="contents desktop:flex desktop:flex-col desktop:gap-7 desktop:w-[451px] desktop:shrink-0">
          <h2 className="hidden desktop:block text-gold">{heading}</h2>
          <ul className="order-3 flex flex-col gap-5">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <div className="size-1.5 mt-1.5 shrink-0 rounded-full bg-white" />
                <p className="text-white">{bullet}</p>
              </li>
            ))}
          </ul>
          <div className="order-4 flex flex-col gap-5 min-[600px]:flex-row desktop:gap-7">
            {buttons.map((button) => (
              <ButtonLink
                key={button.label}
                href={button.href}
                cssClasses="w-full tablet:w-auto"
              >
                {button.label}
              </ButtonLink>
            ))}
          </div>
        </div>
        <div className="contents desktop:flex desktop:flex-col desktop:gap-7 desktop:flex-1 desktop:min-w-0">
          <ImageList
            images={topImages}
            cssClasses="order-1 desktop:order-none desktop:flex-1"
          />
          <h3 className="hidden desktop:block text-center text-gold text-[28px] font-bold capitalize">
            {subheading}
          </h3>
          <h3 className="order-2 text-gold font-bold desktop:-mt-4 desktop:text-center desktop:text-[26px] desktop:font-light">
            {quote}
          </h3>
          <ImageList
            images={bottomImages}
            cssClasses="order-5 mt-3 desktop:mt-0 desktop:flex-1"
          />
        </div>
      </PageWrapper>
    </div>
  );
}
