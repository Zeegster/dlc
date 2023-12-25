import { create } from 'zustand';
import { produce } from 'immer';
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
    { id: 1, key: 'T' },
    { id: 2, key: 'F' },
    { id: 3, key: 'S' },
    { id: 4, key: 'X0' },
    { id: 5, key: 'Y0' },

    { id: 4, value: 'Исходная точка X' },
    { id: 3, value: 'Число оборотов' },
    { id: 1, value: 'Вызов инструмента' },
    { id: 5, value: 'Исходная точка Y' },
    { id: 2, value: 'Подача' },

    // Неупорядоченный словать ответов в формате text1: text2
    // text1 и text2 - строки из полей text из двух предыдущих списков соответственно
    {
      answers: {
        T: 'Вызов инструмента',
        F: 'Подача',
        S: 'Число оборотов',
        X0: 'Исходная точка X',
        Y0: 'Исходная точка Y',
      },
    },
  ],
  
  // Упорядоченный список из верных ответов
];

export const useQuestionsStepper = create(
  devtools((set) => ({
    questionType:{},
    QType:(type)=>set(produce((state)=>state.questionType = type)),
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
