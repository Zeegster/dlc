import { ReactNode } from 'react';
import { create } from 'zustand';
import { i1 } from '../assets/base64/infogragic';

// import { persist } from "zustand/middleware";

export const answers = {
  list: [
    {
      id: 1,
      text: 'явление дисперсии',
    },
    {
      id: 2,
      text: 'явление дифракции',
    },
    {
      id: 3,
      text: 'интерференцию',
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

export const questions= {
  
    list: [
      {
        id: 1,
        text: <>явление дисперсии</>,
      },
      {
        id: 2,
        text: <>явление дифракции</>,
      },
      {
        id: 3,
        text: <>интерференцию</>,
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
  }



export const useQuestionsStepper = create(
  (set) => ({
    wrappers:[

    ],
    questions: [
      { id: 1, order: 3, text: 'T' },
      { id: 2, order: 2, text: 'F' },
      { id: 3, order: 1, text: 'S' },
      { id: 4, order: 4, text: 'X0' },
      { id: 5, order: 5, text: 'Y0' },
    ],

    answers: {
      T: 'Вызов инструмента',
      F: 'Подача',
      S: 'Число оборотов',
      X0: 'Исходная точка X',
      Y0: 'Исходная точка Y',
    },

    // getScore: (value) => set((state) => ({ score: state.score + value })),
    // clearScore: () => {
    //   localStorage.removeItem("score-storage");
    // },
  })
  // { name: "score-storage" }
);

export function Question() {
  return;
}

export function checkAnswer(type, questions, answers) {}

