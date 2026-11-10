import type { Metadata } from "next";
import VideoComponent from "@/_components/media-page/video-component";
import GallerySlider from "@/_components/media-page/gallery-slider";
import SectionHeading from "@/_components/ui/section-heading";
import PageWrapper from "@/_lib/utils/page-wrapper";
import generalData from "@/_data/general-data.json";

const title = "Media | Mountain Rose, Hemel-en-Aarde Valley, Hermanus";
const description =
  "Watch the Mountain Rose film: a 155Ha Hemel-en-Aarde Valley farm near Hermanus with vineyard land, protected fynbos, mountain streams and ocean views.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/media" },
  openGraph: {
    title,
    description,
    url: "/media",
    type: "website",
    locale: "en_ZA",
    siteName: "Choice Property Group",
    images: [{ url: "/open-graph-image.webp" }],
  },
};

const MediaPage = () => {
  return (
    <div>
      <VideoComponent />
      <PageWrapper cssClasses="flex flex-col gap-6 py-10">
        <SectionHeading heading="Gallery" />
        <GallerySlider data={generalData.mediaPage.gallery} />
      </PageWrapper>
    </div>
  );
};

export default MediaPage;
