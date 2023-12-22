import React from 'react';

import { Stepper, Step } from '@material-tailwind/react';
import ProgressBar from '../ProgressBar';
import {
  SimulatorPageContent,
  
} from '../../store/content/SimulatorPageContent';
import CommonButton from '../buttons/CommonButton';
import StepContainer from './StepContainer';

export function VirtualStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [activItem, setActivItem] = React.useState(false)
  const handleNext = () =>
    activeStep < totalSteps - 1 ? setActiveStep((cur) => cur + 1) : '';

  const handlePrev = () =>
    activeStep > 0 ? setActiveStep((cur) => cur - 1) : '';

  const totalSteps = SimulatorPageContent.items.length;

  const activeItem = SimulatorPageContent.items[activeStep];

  const CheckAnswer = () => {
    // Проходим по всем вопросам в активном элементе
    activeItem.questions.map((question) => {
      // Получаем текущий ответ пользователя

      const userAnswer = question;
      let correctAnswer;
      console.log(userAnswer);
      // Получаем правильный ответ
      activeItem.answers.map((answer)=>{
        correctAnswer = answer
         
         return correctAnswer
      })
      
      // В зависимости от типа вопроса используем разные методы сравнения
      if (question.type === 'select') {
        // Если вопрос типа 'select', то сравниваем выбранный ответ с правильным
        if (userAnswer === correctAnswer) {
          // Ответ правильный, окрашиваем в зеленый
          question.isCorrect = true;
        } else {
          // Ответ неправильный, окрашиваем в красный
          question.isCorrect = false;
        }
      } else if (question.type === 'input') {
        // Если вопрос типа 'input', то сравниваем введенный текст с правильным ответом
        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
          // Ответ правильный, окрашиваем в зеленый
          question.isCorrect = true;
        } else {
          // Ответ неправильный, окрашиваем в красный
          question.isCorrect = false;
        }
      }
    });
    // Обновляем состояние
    setActivItem({ ...activeItem });
    console.log(activItem);
  };


  return (
    <>
      <div className='w-11/12 m-auto h-4/5 px-12  flex flex-col justify-evenly'>
        <ProgressBar
          activeStep={activeStep}
          totalSteps={totalSteps}
        />
        <Stepper
          className='h-5/6 bg-white'
          activeStep={activeStep}
        >
          <Step
            key={activeItem.id}
            className='w-full flex flex-col h-full bg-white place-items-stretch'
            onClick={() => setActiveStep(activeStep)}
          >
            <StepContainer
              title={activeItem.title}
              content={activeItem.content}
              steps={totalSteps}
              activeStep={activeStep}
            />
          </Step>
        </Stepper>
      </div>
      <div className='w-full h-min bg-blue-100 flex justify-center gap-4 p-1'>
        <CommonButton
          onClick={handlePrev}
          text='Назад'
        />
        <CommonButton text='Проверить ответ' onClick={CheckAnswer}/>
        <CommonButton
          onClick={handleNext}
          text='Далее'
        />
      </div>
    </>
  );
}

