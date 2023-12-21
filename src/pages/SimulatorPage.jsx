
import HeaderInner from "../components/HeaderInner";
import { VirtualStepper } from "../components/simulator/VirtualStepper";
import HomePageButton from "../components/buttons/HomePageButton";


const Virtual = () => {

  return (
    <div className="h-screen flex flex-col justify-between relative  ">
      <HeaderInner
        title="Основные сведения об электрическом освещении"
      />
      
      <VirtualStepper />

      <HomePageButton />
    </div>
  );
};

export default Virtual;
