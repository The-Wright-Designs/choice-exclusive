import { stat } from "fs/promises";
import path from "path";

import PageWrapper from "@/_lib/utils/page-wrapper";
import generalData from "@/_data/general-data.json";
import MapCard from "@/_components/home-page/maps/map-card";

export default async function MapsComponent() {
  "use cache";

  const { heading, paragraph, maps } = generalData.homePage.mapsSection;

  const mapsWithPdfInfo = await Promise.all(
    maps.map(async (map) => {
      const { size } = await stat(path.join(process.cwd(), "public", map.pdf));
      return {
        ...map,
        pdfName: decodeURIComponent(map.pdf.split("/").pop() ?? ""),
        pdfSize: `${(size / (1024 * 1024)).toFixed(1)} MB`,
      };
    }),
  );

  return (
    <PageWrapper
      id="maps"
      cssClasses="flex flex-col gap-7 py-15 scroll-mt-[81px] min-[1000px]:scroll-mt-[93px]"
    >
      <h2 className="tablet:text-center">{heading}</h2>
      <p className="text-dark-blue tablet:order-3 tablet:text-justify">
        {paragraph}
      </p>
      <div className="flex flex-col gap-7 tablet:flex-row">
        {mapsWithPdfInfo.map((map) => (
          <MapCard
            key={map.pdf}
            image={map.image}
            pdfHref={map.pdf}
            pdfName={map.pdfName}
            pdfSize={map.pdfSize}
          />
        ))}
      </div>
    </PageWrapper>
  );
}
