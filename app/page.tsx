import PageWrapper from "@/_lib/utils/page-wrapper";
import HeroComponent from "@/_components/home-page/hero/hero-component";
import InfoComponent from "@/_components/home-page/info/info-component";
import OverviewComponent from "@/_components/home-page/overview/overview-component";
import MountainRoseComponent from "@/_components/home-page/mountain-rose/mountain-rose-component";
import ViticultureComponent from "@/_components/home-page/viticulture/viticulture-component";
import ConservationComponent from "@/_components/home-page/conservation/conservation-component";
import MapsComponent from "@/_components/home-page/maps/maps-component";
import MobileSeparator from "@/_components/ui/mobile-separator";

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
    </div>
  );
}
