import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';
// import { persist } from "zustand/middleware";



export const useQuestionsStepper = create(
  devtools((set) => ({
    QStore: [
      //QStore = 0 Выбрать верный вариант(ы) ответов
      [
        { id: 0, answer: false,  text:`Технологический процесс – это этапы, которые проходят предметы на пути их превращения в изделия или готовую машину.` },
        { id: 1, answer: true, text:`Технологический процесс – часть производственного процесса, во время которого происходит изменение качественного состояния объекта, изменение формы и размеров заготовки, свойств металла (материала или полуфабриката).` },
        { id: 2, answer: false, text:`Технологический процесс - часть выполняемая непрерывно на одном рабочем месте, над одним или несколькими одновременно обрабатываемыми или собираемыми изделиями, одним или несколькими рабочими.` },
      ],
      //QStore = 1 Вставить слово
      [
        { id: 0, answer: 'основногопроизводства' },
        { id: 1, answer: 'вспомогательногопроизводства' },
      ],
      //QStore = 2 Выбрать верный вариант(ы) ответов
      [
        { id: 0, answer: true,  text:`Маркетинговое исследование рынка` },
        { id: 1, answer: false, text:`Контроль качества конструкционных и сварочных материалов` },
        { id: 2, answer: false, text:`Очистку листовой стали, литых, штампованных и других заготовок, являющихся составными частями сварной конструкции` },
        { id: 3, answer: false, text:`Заготовительные операции: правку, разметку, резку, подготовку кромок, гибку и т. п.` },
        { id: 4, answer: false, text:`Сборку и сварку конструкции` },
        { id: 5, answer: false, text:`Устранение технологических остаточных деформаций` },
        { id: 6, answer: false, text:`Термическую обработку сварной конструкции` },
        { id: 7, answer: false, text:`Механическую обработку резанием` },
        { id: 8, answer: false, text:`Общий контроль и испытания сварной конструкции` },
        { id: 9, answer: false, text:`Окраску и маркирование` },
        { id: 9, answer: true, text:`Транспортировка и эксплуатация` },
        { id: 9, answer: true, text:`Утилизация` },
      ],
      //QStore = 3 Вставить слово
      [
        { id: 0, answer: 'деформации' },
      ],
      //QStore = 4 Вставить слово
      [{ id: 0, answer: 'обратно-ступенчатую' },],
      //QStore = 5 Вставить слово
      [
        { id: 0, answer: 'частьконструкциивкоторойсвареныпримыкающиедругкдругуэлементы' },
      ],
      //QStore = 6 Сопоставить
      // Упорядоченный список из верных ответов
      [
        { id: 0, textorder:'1', text: 'Полная сборка узла или конструкции с последующей сваркой' },
        { id: 1, textorder:'2', text: 'Последовательная сборка и сварка конструкции наращиванием отдельных элементов' },
        { id: 2, textorder:'3', text: 'Сборка и сварка узлов, а затем сборка и сварка конструкции из узлов' },
        // Неупорядоченный словать ответов в формате text1: text2
        // text1 и text2 - строки из полей text из двух предыдущих списков соответственно
        {
          answer: [
            'Полная сборка узла или конструкции с последующей сваркой',
            'Последовательная сборка и сварка конструкции наращиванием отдельных элементов',
            'Сборка и сварка узлов, а затем сборка и сварка конструкции из узлов',
          ],
        },
      ],
      //Qstore=7 Сопоставить
      [
        { id: 0, textorder:'1', text: 'Облегчение станочной обработки и разгрузка крупных станков; недостаток — трудность обеспечения точности сварной конструкции; предметы производства — узлы невысокой точности с малым объемом сварки или очень крупные узлы' },
        { id: 1, textorder:'2', text: 'Точность и неизменяемость размеров и геометрической формы узла, отсутствие в конструкции внутренних сварочных напряжений; ее недостатки — высокая трудоемкость и длительность производственного цикла; область применения второй схемы — точные конструкции, узлы с большим объемом сварки' },
        { id: 2, textorder:'3', text: 'Вследствие расчленения обработки резанием последняя упрощается при повышении производительности и уменьшении загрузки крупных станков; недостаток схемы — усложнение технологического пути заготовок; область применения — крупные узлы высокой точности' },
        // Неупорядоченный словать ответов в формате text1: text2
        // text1 и text2 - строки из полей text из двух предыдущих списков соответственно
        {
          answer: [
            'Облегчение станочной обработки и разгрузка крупных станков; недостаток — трудность обеспечения точности сварной конструкции; предметы производства — узлы невысокой точности с малым объемом сварки или очень крупные узлы',
            'Точность и неизменяемость размеров и геометрической формы узла, отсутствие в конструкции внутренних сварочных напряжений; ее недостатки — высокая трудоемкость и длительность производственного цикла; область применения второй схемы — точные конструкции, узлы с большим объемом сварки',
            'Вследствие расчленения обработки резанием последняя упрощается при повышении производительности и уменьшении загрузки крупных станков; недостаток схемы — усложнение технологического пути заготовок; область применения — крупные узлы высокой точности',
          ],
        },
      ],
      //QStore = 8 Выбрать верный вариант(ы) ответов
      [
        { id: 0, answer: 'проектированием' },
        { id: 1, answer: 'документации' },
      ],
    ],
    QChecked: false,
    QCheckedState: () => {
      set(
        produce((state) => {
          state.QChecked = !state.QChecked;
        })
      );
    },
    isDisabled: false,
    setDisabledState: () => {
      set(
        produce((state) => {
          state.isDisabled = !state.isDisabled;
        })
      );
    },
    checkCount:0,
    setCheckCount: ()=>{
      set(produce((state)=>{
        state.checkCount = state.checkCount+1
      }))
    },
    shouldReload:false,
    setShouldReload: () => {
      set(
        produce((state) => {
          state.shouldReload = state.checkCount % 2 === 0;
        })
      );
     },
     
    reloadState:0,
    setReloadState: () => {
     set(
       produce((state) => {
         state.reloadState = state.reloadState + 1;
       })
     );
    },
    disableButton:true,
    setDisableButton:  () => {
      set(
        produce((state) => {
          state.disableButton = !state.disableButton;
        })
      );
    },
    questionType: {},
    QType: (type) => set(produce((state) => (state.questionType = type))),
    answer: [],
    addUserAnswer: (index, userAnswer) => {
      set(
        produce((state) => {
          const existingAnswerIndex = state.answer.findIndex(
            (a) => a.index === index
          );
          if (existingAnswerIndex !== -1) {
            // An answer with the same index already exists, update it
            state.answer[existingAnswerIndex] = { index, userAnswer };
          } else {
            // No answer with the same index exists, insert a new one at the correct position
            const newAnswer = { index, userAnswer };
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
