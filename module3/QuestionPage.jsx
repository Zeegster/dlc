import HeaderInner from "../src/components/HeaderInner";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MenuList from "../src/components/question/MenuList";
import Timer from "../src/components/Timer";
import { useQuestions,useScore, useTimer } from "../src/store/store";
import HomePageButton from "../src/components/buttons/HomePageButton";
import MenuItem from "../src/components/question/MenuItem";


const QuestionPage = () => {

  const navigate = useNavigate();
  const questions = useQuestions((state) => state.questions);
  const startTimer = useTimer(state => state.startTimer);
  const interval = useTimer(state => state.interval);
  const currentScore = useScore(state => state.score);
  const attempt = useScore(state => state.attempt);
  
  console.log(currentScore);
  console.log(questions.length);
 

  useEffect(() => {
    setTimeout(() => {
      startTimer();
    }, 100)

    if(currentScore >= 1550) {
      navigate('/result')
      clearInterval(JSON.parse(localStorage.getItem('timer-storage')).state.interval)
    }
    

    if(attempt === 0) {
      navigate('/result')
      clearInterval(JSON.parse(localStorage.getItem('timer-storage')).state.interval)
    }
    
  },[currentScore, attempt])
  

  return (
    <div className="h-screen relative flex flex-col items-center justify-between min-h-full">
      <HeaderInner
        title="Диагностика"
        subtitle="Перед вами задания разных уровней сложности. У вас 10 попыток, чтобы получить призовые 1550 
        очков. Кликните на карточку, чтобы перейти к заданию. Выберите вариант (варианты) ответа и нажмите
        кнопку “Ответить”."
      />

      <MenuList />

      <div className="w-full h-14 bg-blue-100 flex items-center pl-32">
        <Timer />
      </div>

      <HomePageButton />
    </div>
  );
};

export default QuestionPage;
