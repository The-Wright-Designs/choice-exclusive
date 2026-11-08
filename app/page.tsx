import PageWrapper from "@/_lib/utils/page-wrapper";
import HeroComponent from "@/_components/home-page/hero/hero-component";
import InfoComponent from "@/_components/home-page/info/info-component";

export default function HomePage() {
  return (
    <div>
      <HeroComponent />
      <InfoComponent />
      <PageWrapper>
        <h1>Heading</h1>
        <h3>Subheading</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </PageWrapper>
    </div>
  );
}
