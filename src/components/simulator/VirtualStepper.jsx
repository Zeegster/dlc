import React, { useState } from 'react';

import { Stepper, Step } from '@material-tailwind/react';
import ProgressBar from '../ProgressBar';
import {
  SimulatorPageContent,
  
} from '../../store/content/SimulatorPageContent';
import CommonButton from '../buttons/CommonButton';
import StepContainer from './StepContainer';
import { questions, useQuestionsStepper } from '../../store/StoreStepper';


export function VirtualStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [activItem, setActivItem] = React.useState(false)
  const handleNext = () =>
    activeStep < totalSteps - 1 ? setActiveStep((cur) => cur + 1) : '';

  const handlePrev = () =>
  activeStep > 0 ? setActiveStep((cur) => cur - 1) : '';

  const totalSteps = SimulatorPageContent.items.length;

  const activeItem = SimulatorPageContent.items[activeStep];
  const answer = useQuestionsStepper((state)=> state.answer)
const addCorrectState = useQuestionsStepper((state)=>state.addCorrectState)
 
  
const checkAnswers = () => {
  let correctAnswers = [];
  answer.forEach((answerItem, index) => {
    const question = questions.list.find(q => q.id === index);
    if (question && question.answer === answerItem.userAnswer) {
      correctAnswers.push(true);
    } else {
      correctAnswers.push(false);
    }
  });
  addCorrectState(correctAnswers,activeStep);
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
        <CommonButton onClick={checkAnswers} text='Проверить ответ' />
        <CommonButton
          onClick={handleNext}
          text='Далее'
        />
      </div>
    </>
  );
}
