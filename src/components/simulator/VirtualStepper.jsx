import React, { useState, useEffect } from 'react';

import { Stepper, Step } from '@material-tailwind/react';
import ProgressBar from '../ProgressBar';
import { SimulatorPageContent } from '../../store/content/SimulatorPageContent';
import CommonButton from '../buttons/CommonButton';
import StepContainer from './StepContainer';
import {useQuestionsStepper } from '../../store/StoreStepper';

export function VirtualStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    if (activeStep < totalSteps - 1) {
      setActiveStep((cur) => cur + 1);
      QChecked?(QCheckedState(),setDisabledState()):QChecked


    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep((cur) => cur - 1);
      QChecked?(QCheckedState(),setDisabledState()):QChecked

    }
  };

  const totalSteps = SimulatorPageContent.items.length;

  const activeItem = SimulatorPageContent.items[activeStep];
  const { addCorrectState, clearAnswer,answer,QChecked,QCheckedState,isDisabled,setDisabledState} = useQuestionsStepper();


  

  const checkAnswers = () => {
    QCheckedState()
    setDisabledState()
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
        <CommonButton
          onClick={checkAnswers}
          text='Проверить ответ'
          disabled={isDisabled}
        />
        <CommonButton
          onClick={handleNext}
          text='Далее'
        />
      </div>
    </>
  );
}
