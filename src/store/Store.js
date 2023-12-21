import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useQuestions = create((set) => ({
  questions: [
    {
      id: 1,
      question: "Часть цепи между двумя любыми точками - это",
      value: 100,
      options: [
        { id: 1, text: "Узел", isCorrect: 0 },
        { id: 2, text: "Участок цепи", isCorrect: 1 },
        { id: 3, text: "Ветвь", isCorrect: 0 },
        { id: 4, text: "Контур", isCorrect: 0 },
      ],
    },
    {
      id: 2,
      question: "Мощность измеряется",
      value: 150,
      options: [
        { id: 1, text: "Вольтметром", isCorrect: 0 },
        { id: 2, text: "Амперметром", isCorrect: 0 },
        { id: 3, text: "Ваттметром", isCorrect: 1 },
        { id: 4, text: "Омметром", isCorrect: 0 },
      ],
    },
    {
      id: 3,
      question: "Произведение тока на напряжение:",
      value: 200,
      options: [
        { id: 1, text: "Ток", isCorrect: 0 },
        { id: 2, text: "Напряжение", isCorrect: 0 },
        { id: 3, text: "Сопротивление", isCorrect: 0 },
        { id: 4, text: "Мощность", isCorrect: 1 },
      ],
    },
    {
      id: 4,
      question: "Единица измерения сопротивления:",
      value: 250,
      options: [
        { id: 1, text: "Вт", isCorrect: 0 },
        { id: 2, text: "В", isCorrect: 0 },
        { id: 3, text: "А", isCorrect: 0 },
        { id: 4, text: "Ом", isCorrect: 1 },
      ],
    },
    {
      id: 5,
      question: "Напряжение измеряется",
      value: 100,
      options: [
        { id: 1, text: "Вольтметром", isCorrect: 1 },
        { id: 2, text: "Амперметром", isCorrect: 0 },
        { id: 3, text: "Ваттметром", isCorrect: 0 },
        { id: 4, text: "Омметром", isCorrect: 0 },
      ],
    },
    {
      id: 6,
      question: "Вольтметр включается в цепь",
      value: 150,
      options: [
        { id: 1, text: "Смешано", isCorrect: 0 },
        { id: 2, text: "Параллельно", isCorrect: 1 },
        { id: 3, text: "Последовательно", isCorrect: 0 },
        { id: 4, text: "Параллельно и последовательно", isCorrect: 0 },
      ],
    },
    {
      id: 7,
      question: "Какая величина измеряется ваттметром?",
      value: 200,
      options: [
        { id: 1, text: "U", isCorrect: 0 },
        { id: 2, text: "I", isCorrect: 0 },
        { id: 3, text: "P", isCorrect: 1 },
        { id: 4, text: "R", isCorrect: 0 },
      ],
    },
    {
      id: 8,
      question:
        "Соединение, при котором начало соединяется с концом называется",
      value: 250,
      options: [
        { id: 1, text: "Параллельное", isCorrect: 0 },
        { id: 2, text: "Последовательное", isCorrect: 1 },
        { id: 3, text: "Звезда", isCorrect: 0 },
        { id: 4, text: "Треугольник", isCorrect: 0 },
      ],
    },
    {
      id: 9,
      question: "Соединение, при котором ток одинаковый называется",
      value: 100,
      options: [
        { id: 1, text: "Параллельное", isCorrect: 1 },
        { id: 2, text: "Последовательное", isCorrect: 0 },
        { id: 3, text: "Звезда", isCorrect: 0 },
        { id: 4, text: "Треугольник", isCorrect: 0 },
      ],
    },
    {
      id: 10,
      question:
        "Соединение, состоящее из 3 ветвей и имеющих один общий узел называется",
      value: 150,
      options: [
        { id: 1, text: "Параллельное", isCorrect: 0 },
        { id: 2, text: "Последовательное", isCorrect: 0 },
        { id: 3, text: "Звезда", isCorrect: 0 },
        { id: 4, text: "Треугольник", isCorrect: 1 },
      ],
    },
    {
      id: 11,
      question: "Величина, обратная сопротивлению, называется",
      value: 200,
      options: [
        { id: 1, text: "Ток", isCorrect: 0 },
        { id: 2, text: "Напряжение", isCorrect: 0 },
        { id: 3, text: "Мощность", isCorrect: 0 },
        { id: 4, text: "Проводимость", isCorrect: 1 },
      ],
    },
    {
      id: 12,
      question: "Отношение напряжения к току называется:",
      value: 250,
      options: [
        { id: 1, text: "Работа", isCorrect: 0 },
        { id: 2, text: "ЭДС", isCorrect: 0 },
        { id: 3, text: "Сопротивление", isCorrect: 1 },
        { id: 4, text: "Мощность", isCorrect: 0 },
      ],
    },
  ],

  correctAnswers: [],
  unCorrectAnswer: [],

  answerQuestion: (answer) =>
    set((state) => ({
      correctAnswers: [...state.correctAnswers, answer],
    })),

  unCorrect: (answer) =>
    set((state) => ({
      unCorrectAnswer: [...state.unCorrectAnswer, answer],
    })),
}));

export const useScore = create(
  persist(
    (set) => ({
      score: 0,
      attempt: 10,

      getScore: (value) => set((state) => ({ score: state.score + value })),
      clearScore: () => {
        localStorage.removeItem("score-storage");
      },
    }),
    { name: "score-storage" }
  )
);

export const useTimer = create(
  persist(
    (set, get) => ({
      timer: 0,
      interval: null,

      finishedTask: () => {
        window.activeTimer = null;
        set({ interval: null })
        localStorage.removeItem("timer-storage");
      },

      startTimer: () => {
        if (!window.activeTimer) {
          const interval = setInterval(() => {
            set((state) => ({
              timer: state.timer + 1,
            }));
          }, 1000);
          set({ interval: interval });
          window.activeTimer = true;
        }
        
        if (
          JSON.parse(localStorage.getItem("score-storage")).state.score >= 1550
        ) {
          clearInterval(get().interval);
          set({ interval: "finished" });
        }
      },

      formatTimer: (timer) => {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        return `${minutes}:${seconds}`;
      },

      stopTimer: () => {
        clearInterval(get().interval);
        set({ interval: 'finished' });
      },

      clearTimer: () => {
        set({ timer: 0 });
        localStorage.removeItem("timer-storage");
      },
    }),
    { name: "timer-storage" }
  )
);

export const useSorted2 = create(() => ({
  list1: [
    { id: 1, order: 3, text: "T" },
    { id: 2, order: 2, text: "F" },
    { id: 3, order: 1, text: "S" },
    { id: 4, order: 4, text: "X0" },
    { id: 5, order: 5, text: "Y0" },
  ],
  list2: [
    { id: 1, order: 3, text: "Вызов инструмента" },
    { id: 2, order: 2, text: "Подача" },
    { id: 3, order: 1, text: "Число оборотов" },
    { id: 4, order: 4, text: "Исходная точка X" },
    { id: 5, order: 5, text: "Исходная точка Y" },
  ],

  answers: {
    T: "Вызов инструмента",
    F: "Подача",
    S: "Число оборотов",
    X0: "Исходная точка X",
    Y0: "Исходная точка Y",
  },

  fn1: (l1, l2, answers) => {
    const sortCards = (a, b) => {
      if (a.order > b.order) {
        return 1;
      } else {
        return -1;
      }
    };

    const sortedList1 = l1.sort(sortCards);
    const sortedList2 = l2.sort(sortCards);

    for(let i = 0; i < sortedList1.length; i++) {
      if(answers(sortedList1[i].text) !== sortedList2[i].text) {
        return false
      }
    }

    return true;
  },
}));


