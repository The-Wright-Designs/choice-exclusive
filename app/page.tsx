import PageWrapper from "@/_lib/utils/page-wrapper";
import HeroComponent from "@/_components/home-page/hero/hero-component";
import InfoComponent from "@/_components/home-page/info/info-component";
import OverviewComponent from "@/_components/home-page/overview/overview-component";
import MountainRoseComponent from "@/_components/home-page/mountain-rose/mountain-rose-component";
import ViticultureComponent from "@/_components/home-page/viticulture/viticulture-component";
import ConservationComponent from "@/_components/home-page/conservation/conservation-component";
import MapsComponent from "@/_components/home-page/maps/maps-component";
import Image from "next/image";
import MobileSeparator from "@/_components/ui/mobile-separator";
import ContactComponent from "@/_components/home-page/contact/contact-component";

export default function HomePage() {
  return (
    <div>
      <HeroComponent />
      <InfoComponent />
      <MobileSeparator />
      <OverviewComponent />
      <MountainRoseComponent />
      <ViticultureComponent />
      <ConservationComponent />
      <MapsComponent />
      <Image
        src="/images/Mountain-Rose__011.jpg"
        alt="Aerial view of Mountain Rose overlooking the coast"
        width={1920}
        height={1280}
        sizes="(max-width: 1920px) 100vw, 1920px"
        className="mx-auto h-auto w-full max-w-[1920px]"
      />
      <ContactComponent />
    </div>
  );
}
