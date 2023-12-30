
import HeaderInner from "../components/HeaderInner";
import { VirtualStepper } from "../components/simulator/VirtualStepper";
import HomePageButton from "../components/buttons/HomePageButton";
import { useNavigate } from "react-router-dom";
import { useQuestionsStepper } from "../store/StoreStepper";



const Virtual = () => {
  let navigate = useNavigate();
  const { setActiveStep , QChecked, QCheckedState, setDisabledState, isDisabled } = useQuestionsStepper();

  function HandleClick(){
    setActiveStep(0);
    navigate('/')
    QChecked && QCheckedState() 
    isDisabled && setDisabledState();

  }
  return (
    <div className="h-screen flex flex-col justify-between relative  ">
      <HeaderInner
        title="Основные сведения об электрическом освещении"
      />
      
      <VirtualStepper />

      <HomePageButton onClick={HandleClick} />
    </div>
  );
};

export default Virtual;
