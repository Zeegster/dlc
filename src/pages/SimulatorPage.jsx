
import HeaderInner from "../components/HeaderInner";
import { VirtualStepper } from "../components/simulator/VirtualStepper";
import HomePageButton from "../components/buttons/HomePageButton";
import { useQuestionsStepper } from "../store/StoreStepper";
import { useNavigate } from "react-router-dom";


const Virtual = () => {
const {QCheckedState, QChecked,setDisabledState,isDisabled} = useQuestionsStepper()
let navigate = useNavigate();

  const handleClick = () => {
    QChecked&&QCheckedState()
    isDisabled&&setDisabledState()
    navigate('/')
  }
  return (
    <div className="h-screen flex flex-col justify-between relative ">
      <HeaderInner
        title="Основные сведения об электрическом освещении"
      />
      
      <VirtualStepper />

      <HomePageButton onClick={()=>handleClick()}/>
    </div>
  );
};

export default Virtual;
