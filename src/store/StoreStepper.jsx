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
  addUserAnswer: (userAnswer) => {
    set(produce((state) => {
      state.answer.push({ userAnswer });
      
    
    }));
   },
   addCorrectState: (correct) => {
    set(produce((state) => {
    state.answer.forEach((userAnswer) => {
      userAnswer.correct = correct;
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
  ], */

