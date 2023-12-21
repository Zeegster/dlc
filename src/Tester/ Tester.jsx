
import HeaderInner from "../components/HeaderInner";
import HomePageButton from "../components/buttons/HomePageButton";


const Tester = () => {

  return (
    <div className="h-screen flex flex-col justify-between relative  ">
      <HeaderInner
        title="Основные сведения об электрическом освещении"
      />
      

      <HomePageButton />
    </div>
  );
};

export default Tester;
