import HeaderDesktop from "./desktop/header-desktop";
import { HeaderMobile } from "./mobile/header-mobile";

const HeaderComponent = () => {
  return (
    <header className="top-0 sticky z-20 bg-white px-5 py-5 border-b border-dark-blue desktop:px-10 desktop:pt-5 desktop:pb-6 desktop:border-dark-blue">
      <HeaderDesktop cssClasses="hidden desktop:flex max-w-[1200px] mx-auto" />
      <HeaderMobile cssClasses="desktop:hidden" />
    </header>
  );
};

export default HeaderComponent;
