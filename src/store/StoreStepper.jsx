import { create } from 'zustand';
import {  produce } from 'immer';
import { devtools } from 'zustand/middleware';
// import { persist } from "zustand/middleware";

export const questions = [
  [
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
  [
    {
      id: 0,
      answer: 'вт',
    },
    {
      id: 1,
      answer: 'силаизлучения',
    },
    {
      id: 2,

      answer: 'вт/м2',
    },
  ],
  [
    {
      id: 0,
      answer: 'люксметр',
    },
  ],
  [
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
];

export const useQuestionsStepper = create(
  devtools((set) => ({
    answer: [],
    addUserAnswer: (userAnswer, index) => {
      set(
        produce((state) => {
          const existingAnswerIndex = state.answer.findIndex(
            (a) => a.index === index
          );
          if (existingAnswerIndex !== -1) {
            // An answer with the same index already exists, update it
            state.answer[existingAnswerIndex].userAnswer = userAnswer;
          } else {
            // No answer with the same index exists, insert a new one at the correct position
            const newAnswer = { userAnswer, index };
            const sortedIndex = state.answer.findIndex(
              (a) => a.index > index || a.index === undefined
            );
            if (sortedIndex !== -1) {
              state.answer.splice(sortedIndex, 0, newAnswer);
            } else {
              state.answer.push(newAnswer);
            }
          }
        })
      );
    },

    addCorrectState: (correct) => {
      set(
        produce((state) => {
          state.answer = state.answer.map((userAnswer, index) => {
            return { ...userAnswer, Correct: correct[index] };
          });
        })
      );
    },
    clearAnswer: () => {
      set(
        produce((state) => {
          state.answer = [];
        })
      );
    },
  }))
);
