import Image from "next/image";

import PageWrapper from "@/_lib/utils/page-wrapper";
import generalData from "@/_data/general-data.json";
import SectionHeading from "@/_components/ui/section-heading";
import Accordion from "@/_components/ui/accordian";

export default function OverviewComponent() {
  const { heading, subheading, accordion, images } =
    generalData.homePage.overviewSection;

  return (
    <PageWrapper
      id="overview"
      cssClasses="flex flex-col gap-10 py-15 scroll-mt-[81px] min-[1000px]:scroll-mt-[93px] desktop:flex-row desktop:gap-7"
    >
      <div className="flex flex-col gap-10 desktop:flex-1 desktop:min-w-0">
        <SectionHeading heading={heading} subheading={subheading} />
        <Accordion
          items={accordion}
          defaultOpenIndex={0}
          cssClasses="min-[1100px]:hidden"
        />
        <div className="hidden min-[1100px]:flex flex-col bg-dark-blue rounded-[6px] overflow-hidden">
          <div className="flex px-7 py-4 border-b border-gold/50">
            <p className="w-[218px] shrink-0 text-[18px] font-bold text-gold">
              Attributes
            </p>
            <p className="flex-1 text-[18px] font-bold text-gold">Detail</p>
          </div>
          {accordion.map((item) => (
            <div
              key={item.title}
              className="flex px-7 py-4 border-b border-gold/50 last:border-b-0"
            >
              <p className="w-[218px] shrink-0 font-semibold text-gold">
                {item.title}
              </p>
              <div className="flex-1">
                {item.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-gold">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-7 tablet:grid-cols-2 desktop:flex desktop:flex-col desktop:w-[550px] desktop:shrink-0">
        {images.map((image) => (
          <div
            key={image.src}
            className="relative aspect-video tablet:aspect-auto rounded-[6px] overflow-hidden tablet:h-[320px] desktop:flex-1 desktop:h-auto"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
