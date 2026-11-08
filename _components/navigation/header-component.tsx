import HeaderDesktop from "./desktop/header-desktop";
import { HeaderMobile } from "./mobile/header-mobile";

const HeaderComponent = () => {
  return (
    <header className="top-0 sticky z-20 bg-white px-5 py-5 border-b border-dark-blue min-[1000px]:px-10 min-[1000px]:pt-5 min-[1000px]:pb-6 min-[1000px]:border-dark-blue">
      <HeaderDesktop cssClasses="hidden min-[1000px]:flex max-w-[1200px] mx-auto" />
      <HeaderMobile cssClasses="min-[1000px]:hidden" />
    </header>
  );
};

export default HeaderComponent;
