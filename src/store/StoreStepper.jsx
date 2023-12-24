import { ReactNode } from 'react';
import { create } from 'zustand';
import { i1 } from '../assets/base64/infogragic';
import { Immer, produce } from 'immer';
import { devtools } from 'zustand/middleware';
// import { persist } from "zustand/middleware";

export const answers = {
  list: [
    {
      id: 1,
      text: 'Дисперсия',
    },
    {
      id: 2,
      text: 'Дифракция',
    },
    {
      id: 3,
      text: 'Интерференция',
    },
  ],
  list1: [
    'Универсаль',
    'Глубокоизлучатель',
    'Люцетта',
    'Молочный шар',
    'взрывобезопасный типа ВЗГ',
    'типа ОД',
    'типа ПВЛП',
  ],
};

export const questions = {
  list: [
    {
      id: 0,
      text: ['Дисперсия', 'Дифракция', 'Интерференция'],
      answer: 'Дисперсия',
    },
    {
      id: 1,
      text: ['Дифракция', 'Интерференция', 'Дисперсия'],
      answer: 'Дифракция',
    },
    {
      id: 2,
      text: ['Интерференция', 'Дифракция', 'Дисперсия'],
      answer: 'Интерференция',
    },
  ],
  list1: [
    {
      id: 1,
      order: 3,
      text: 'Универсаль',
    },
    { id: 2, order: 2, text: 'Глубокоизлучатель' },
    { id: 3, order: 1, text: 'Люцетта' },
    {
      id: 4,
      order: 4,
      text: 'Молочный шар',
    },
    { id: 5, order: 5, text: 'взрывобезопасный типа ВЗГ' },
    { id: 6, order: 7, text: 'типа ОД' },
    { id: 7, order: 6, text: 'типа ПВЛП' },
  ],
  // Упорядоченный список из верных ответов
};

export const useQuestionsStepper = create(devtools((set) => ({
  
  answer: [],
  addUserAnswer: (userAnswer, index) => {
    set(produce((state) => {
      const existingAnswerIndex = state.answer.findIndex(a => a.index === index);
      if (existingAnswerIndex !== -1) {
        // An answer with the same index already exists, update it
        state.answer[existingAnswerIndex].userAnswer = userAnswer;
      } else {
        // No answer with the same index exists, push a new one
        state.answer.push({ userAnswer, index });
      }
    }));
   },
   
   addCorrectState: (correct) => {
    set(produce((state) => {
      state.answer = state.answer.map((userAnswer, index) => {
        return { ...userAnswer, Correct: correct[index] };
      });
    }));
   }
   
   
   
   
   
})));


/* questions: [
    {
      type: [
        {
          select: [
            [
              {
                item: [
                  {
                    id: 1,
                    text: 'Дисперсия',
                    answer: null,
                  },
                  {
                    id: 2,
                    text: 'Дифракция',
                    answer: null,
                  },
                  {
                    id: 3,
                    text: 'Интерференция',
                    answer: null,
                  },
                ],
              },
            ],
            [
              {
                id: 1,
                text: 'Вт',
                answer: null,
              },
              {
                id: 2,
                text: 'Энергетическая яркость',
                answer: null,
              },
              {
                id: 3,
                text: 'Вт/м2',
                answer: null,
              },
            ],
            [
              {
                id: 1,
                text: 'Вт',
                answer: null,
              },
              {
                id: 2,
                text: 'Энергетическая яркость',
                answer: null,
              },
              {
                id: 3,
                text: 'Вт/м2',
                answer: null,
              },
            ],
            [
              {
                id: 1,
                text: 'Рассеиватель',
                answer: null,
              },
              {
                id: 2,
                text: 'Мощный светодиод',
                answer: null,
              },
              {
                id: 3,
                text: 'Радиатор теплоотвода',
                answer: null,
              },
              {
                id: 4,
                text: 'Драйвер',
                answer: null,
              },
              {
                id: 5,
                text: 'Цоколь под обычный патрон Е27',
                answer: null,
              },
            ],
          ],
        },
        {
          input: [
            [
              {
                id: 1,
                text: 'Люксметр',
                answer: null,
              },
            ],
            [
              {
                id: 1,
                text: '200',
                answer: null,
              },
              {
                id: 2,
                text: '50',
                answer: null,
              },
              {
                id: 3,
                text: 'Прямые солнечные лучи',
                answer: null,
              },
            ],
            [
              {
                id: 1,
                text: 'йод',
                answer: null,
              },
            ],
            [
              {
                id: 1,
                text: 'Аргон',
                answer: null,
              },
            ],
            [
              {
                id: 1,
                text: '6',
                answer: null,
              },
            ],
          ],
        },
        {
          orders: [
            [
              {
                id: 1,
                order: 3,
                text: 'Универсаль',
                answer: null,
              },
              { id: 2, order: 2, text: 'Глубокоизлучатель', answer: null },
              { id: 3, order: 1, text: 'Люцетта', answer: null },
              {
                id: 4,
                order: 4,
                text: 'Молочный шар',
                answer: null,
              },
              {
                id: 5,
                order: 5,
                text: 'взрывобезопасный типа ВЗГ',
                answer: null,
              },
              { id: 6, order: 7, text: 'типа ОД', answer: null },
              { id: 7, order: 6, text: 'типа ПВЛП', answer: null },
            ],
          ],
        },
      ],
    },
  ], 
  */



  /* 
  
  import { useQuestionsStepper } from '../store/StoreStepper';
import { Fragment, useState, useEffect,useLayoutEffect } from 'react';

export const SelectInput = ({ text, values, isCorrect }) => {
  const answer = useQuestionsStepper((state) => state.answer);
  const userAnswer = useQuestionsStepper((state) => state.addUserAnswer);
  const correctState = useQuestionsStepper((state) => state.answer.Correct);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState();

  const [selected, setSelected] = useState(isCorrect);

  const handleSelectChange = (selectedValue,target) => {
   userAnswer(selectedValue);
  //  setIsCorrectAnswer(selectedValue === isCorrect);
  };

  useLayoutEffect(() => {
    setIsCorrectAnswer(correctState)
      console.log(answer.map((a)=>a.userAnswer));
    
   }, [answer]);
   

  return (
    <><select
      values={isCorrect}
      onChange={(event) => handleSelectChange(event.target.value,event.target)}
      className={`block  p-2 mb-2 border-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus-visible:outline-blue-300 ${
        answer.every(a => a.Correct === undefined)
         ? 'border-gray-300'
         : answer.every(a => a.Correct ===true)
         ? 'border-green-100 focus-visible:outline-green-100'
         : 'border-red-100 focus-visible:outline-red-100'
      }`}
    >
      <option defaultValue>Выберите ответ</option>
      {values.map((value, index) => (
        <option
          id={index}
          key={index}
          value={value}
        >
          {value}
          
        </option>
      ))}
      
    </select>
    </>
  );
};



import { ReactNode } from 'react';
import { create } from 'zustand';
import { i1 } from '../assets/base64/infogragic';
import { Immer, produce } from 'immer';
import { devtools } from 'zustand/middleware';
// import { persist } from "zustand/middleware";

export const questions = {
  list: [
    {
      id: 0,
      text: ['Дисперсия', 'Дифракция', 'Интерференция'],
      answer: 'Дисперсия',
    },
    {
      id: 1,
      text: ['Дифракция', 'Интерференция', 'Дисперсия'],
      answer: 'Дифракция',
    },
    {
      id: 2,
      text: ['Интерференция', 'Дифракция', 'Дисперсия'],
      answer: 'Интерференция',
    },
  ],
  list1: [
    {
      id: 1,
      order: 3,
      text: 'Универсаль',
    },
    { id: 2, order: 2, text: 'Глубокоизлучатель' },
    { id: 3, order: 1, text: 'Люцетта' },
    {
      id: 4,
      order: 4,
      text: 'Молочный шар',
    },
    { id: 5, order: 5, text: 'взрывобезопасный типа ВЗГ' },
    { id: 6, order: 7, text: 'типа ОД' },
    { id: 7, order: 6, text: 'типа ПВЛП' },
  ],
  // Упорядоченный список из верных ответов
};

export const useQuestionsStepper = create(devtools((set) => ({
  
  answer: [],
  addUserAnswer: (userAnswer) => {
    set(produce((state) => {
      state.answer.push({ userAnswer });
      
    
    }));
   },
   addCorrectState: (correct) => {
    set(produce((state) => {
      state.answer = state.answer.map((userAnswer, index) => {
        return { ...userAnswer, Correct: correct[index] };
      });
    }));
   }
   
   
   
   
   
})));

import { i1 } from '../../assets/base64/infogragic';
import { questions, useQuestionsStepper } from '../StoreStepper';
import { SelectInput } from '../../components/Inputs';
import { create } from 'zustand';

export const SimulatorPageContent = {

  items: [
    {

      id: 1,
      title: '1. Физические явления света',
      content: (
        <>
          <p className='mb-2'>
            {' '}
            Поведение света в виде электромагнитной волны наблюдается в таких
            физических явлениях:{' '}
          </p>{' '}
          <ul className='list-disc ml-8 mb-2'>
            {' '}
            <li>- Дисперсия</li> <li>- Дифракция</li>{' '}
            <li>- Интерференция света</li>{' '}
          </ul>{' '}
          <p className='mb-2'> Скорость света С= 300 000км/с </p>{' '}
          <p className='mb-2 font-bold'>
            {' '}
            <u>Диспе́рсия све́та</u> - это совокупность явлений обусловленных
            зависимостью абсолютного показателя вещества от частоты (или длины
            волны) света.{' '}
          </p>{' '}
          <p className='mb-2 font-bold'>
            {' '}
            <u>Дифракцией света</u> называется явление отклонения света от
            прямолинейного направления распространения при прохождении вблизи
            препятствия.{' '}
          </p>{' '}
          <p className='font-bold'>
            {' '}
            <u>Интерфере́нция све́та</u> - это перераспределение интенсивности
            света в результате наложения (суперпозиции) нескольких световых
            волн.{' '}
          </p>
          <div className='flex mt-10  whitespace-wrap'>
        <div className='w-1/2'>
          <figure className='relative'>
            <img
              width={600}
              src={i1}
            />
            <span
              className='p-1 rounded-[100%] w-10 h-10 text-center border bg-white absolute top-[45%] left-[24%]'
              name='one'
              id='one'
            >
              1
            </span>
            <span
              className='p-1 rounded-[100%] w-10 h-10 text-center border bg-white absolute top-[20%] left-[40%]'
              name='two'
              id='2'
            >
              2
            </span>
            <span
              className='p-1 rounded-[100%] w-10 h-10 text-center border bg-white absolute top-[60%] left-[65%]'
              name='three'
              id='3'
            >
              3
            </span>
          </figure>
        </div>
        <ul className='list-inside list-decimal'>
          <p className='font-bold'>Определите явления</p>
          {questions.list.map((li) => {
            return (
              <li
                className='flex items-center gap-2 w-fit'
                key={li.id}
              >
                <SelectInput
                  values={li.text}
                  isCorrect={li.answer}
                />
              </li>
            );
          })}
        </ul>
      </div>
        </>
      ),
    },]}

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
  addCorrectState(correctAnswers);
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



  */