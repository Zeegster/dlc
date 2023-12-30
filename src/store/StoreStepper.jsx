import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';
// import { persist } from "zustand/middleware";

export const useQuestionsStepper = create(
  devtools((set) => ({
    QStore: [
      //QStore = 0
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
      //QStore = 1
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
      //QStore = 2
      [
        {
          id: 0,
          answer: 'люксметр',
        },
      ],
      //QStore = 3
      [
        {
          id: 0,
          answer: '200',
        },
        {
          id: 1,
          answer: '50',
        },
        {
          id: 2,
          answer: 'прямыесолнечныелучи',
        },
      ],
      //QStore = 4
      [{ id: 0, answer: 'йод' }],
      //QStore = 5
      [
        {
          id: 0,
          text: ['ртути', 'металла', 'горючего'],
          answer: 'металла',
        },
        {
          id: 1,
          text: ['(Zn) цинка', '(Li) лития', '(Na) натрия'],
          answer: '(Na) натрия',
        },
        {
          id: 2,
          text: ['сварочными электродами', 'электронами',"электродами заземления", "электродами"],
          answer: 'электродами',
        },
      ],
      //QStore = 6
      // Упорядоченный список из верных ответов
      [
        { id: 0, answer: true },
        { id: 1, answer: true },
        { id: 2, answer: true },
        { id: 3, answer: true },
        { id: 4, answer: true },
        { id: 5, answer: true },
        { id: 6, answer: false },
        { id: 7, answer: true },
      ],
      //Qstore=7
      [
        { id: 0, text: 'Рассеиватель' },
        { id: 1, text: 'Мощный светодиод' },
        { id: 2, text: 'Радиатор теплоотвод' },
        { id: 3, text: 'Драйвер' },
        { id: 4, text: 'Цоколь под обычный патрон' },
        // Неупорядоченный словать ответов в формате text1: text2
        // text1 и text2 - строки из полей text из двух предыдущих списков соответственно
        {
          answer: [
            'Рассеиватель',
            'Мощный светодиод',
            'Радиатор теплоотвод',
            'Драйвер',
            'Цоколь под обычный патрон',
          ],
        },
      ],
      //QStore = 8
      [
        { id: 0, text: 'Универсаль' },
        { id: 1, text: 'Глубокоизлучатель' },
        { id: 2, text: 'Люцетта' },
        { id: 3, text: 'Молочный шар' },
        { id: 4, text: 'взрывобезопасный типа ВЗГ' },
        { id: 5, text: 'типа ОД' },
        { id: 6, text: 'типа ПВЛВ' },

        // Неупорядоченный словать ответов в формате text1: text2
        // text1 и text2 - строки из полей text из двух предыдущих списков соответственно
        {
          answer: [
            'Универсаль',
            'Глубокоизлучатель',
            'Люцетта',
            'Молочный шар',
            'взрывобезопасный типа ВЗГ',
            'типа ОД',
            'типа ПВЛВ',
          ],
        },
      ],

      //QStore = 9
      [
        { id: 0, textorder:"1", text: 'Корпус светильника' },
        { id: 1, textorder:"2", text: 'Отражатель' },
        { id: 2, textorder:"3", text: 'Лампа' },
        { id: 3, textorder:"4", text: 'Рассеивающее или защитное стекло' },
        { id: 4, textorder:"5", text: 'Экранирующая решетка' },
        { id: 5, textorder:"6", text: 'Уплотнение по горлу колбы лампы' },
        {
          id: 6, textorder:"7",
          text: 'Неуплотненное соединение корпуса светильника со стеклом',
        },
        {
          id: 7, textorder:"8",
          text: 'Уплотненное соединение корпуса светильника со стеклом',
        },
        { id: 8, textorder:"9", text: 'Уплотнение колбы люминесцентной лампы в патроне' },

        // Неупорядоченный словать ответов в формате text1: text2
        // text1 и text2 - строки из полей text из двух предыдущих списков соответственно

        {
          answer: [
            'Корпус светильника',
            'Отражатель',
            'Лампа',
            'Рассеивающее или защитное стекло',
            'Экранирующая решетка',
            'Уплотнение по горлу колбы лампы',
            'Неуплотненное соединение корпуса светильника со стеклом',
            'Уплотненное соединение корпуса светильника со стеклом',
            'Уплотнение колбы люминесцентной лампы в патроне',
          ],
        },
      ],
      //QStore = 10
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
          answer: {
            T: 'Вызов инструмента',
            F: 'Подача',
            S: 'Число оборотов',
            X0: 'Исходная точка X',
            Y0: 'Исходная точка Y',
          },
        },
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
            console.log(state.answer[existingAnswerIndex]);
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
    activeStep:0,
    setActiveStep: (step) => set({ activeStep: step }),
  }
  ))
);
