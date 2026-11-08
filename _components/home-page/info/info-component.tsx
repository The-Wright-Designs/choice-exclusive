import Image from "next/image";
import classNames from "classnames";

import PageWrapper from "@/_lib/utils/page-wrapper";
import generalData from "@/_data/general-data.json";
import InfoLandCards from "./info-land-cards";
import InfoDetailCards from "./info-detail-cards";

const imageStyles = [
  {
    wrapper: "aspect-video min-[1000px]:aspect-auto min-[1000px]:order-1",
    image: "min-[1000px]:object-bottom",
  },
  {
    wrapper: "aspect-video min-[1000px]:aspect-auto min-[1000px]:order-3",
    image: "min-[1000px]:object-[88%_center]",
  },
  {
    wrapper: "aspect-square min-[1000px]:aspect-auto min-[1000px]:order-2",
    image: "min-[1000px]:object-[center_32%]",
  },
];

export default function InfoComponent() {
  const { images, landCards, airport, location, coordinates } =
    generalData.homePage.infoSection;

  const renderImage = (index: number) => (
    <div
      className={classNames(
        "relative rounded-[6px] overflow-hidden min-[1000px]:h-[398px]",
        imageStyles[index].wrapper,
      )}
    >
      <Image
        src={images[index].src}
        alt={images[index].alt}
        fill
        sizes="(max-width: 1280px) 100vw, 427px"
        className={classNames("object-cover", imageStyles[index].image)}
      />
    </div>
  );

  return (
    <PageWrapper cssClasses="grid grid-cols-1 gap-7 py-15 min-[1000px]:grid-cols-3 desktop:pb-0">
      {renderImage(0)}
      <InfoLandCards cards={landCards} cssClasses="min-[1000px]:col-span-3" />
      {renderImage(1)}
      <InfoDetailCards
        cssClasses="min-[1000px]:col-span-3"
        airport={airport}
        location={location}
        coordinates={coordinates}
      />
      {renderImage(2)}
    </PageWrapper>
  );
}
