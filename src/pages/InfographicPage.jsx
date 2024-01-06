import HeaderInner from "../components/HeaderInner";
import HomePageButton from "../components/buttons/HomePageButton";
import MenuList from "../components/infographic/MenuList";
import { InfographicPageContent } from "../store/content/InfographicPageContent";

const InfographicPage = () => {
  

  return (
    <>
      <div className="h-screen relative flex flex-col items-center justify-between min-h-full">
        <HeaderInner
          title={InfographicPageContent.title}
          subtitle={InfographicPageContent.subtitle}
        />

        <MenuList />

        <div className="w-full mt-10 h-14 bg-blue-100" />

        <HomePageButton />
      </div>
    </>
  );
};

export default InfographicPage;
