import { create } from "zustand";

// ---------------------------------------- //
// Стор для задач типа "Сопоставь 2 списка" //
// ---------------------------------------- //
export const useCompareLists = create((set) => ({
    // Упорядоченные списки, за порядок отвечает параметр order
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
    // Неупорядоченный словать ответов в формате text1: text2
    // text1 и text2 - строки из полей text из двух предыдущих списков соответственно
    answers: {
        T: "Вызов инструмента",
        F: "Подача",
        S: "Число оборотов",
        X0: "Исходная точка X",
        Y0: "Исходная точка Y",
    },
    // Функция проверки ответа, возвращает Bool
    //
    // Алгоритм - сортирует оба списка по полю order и проверяет, что 
    // пара list1[N]: list2[N] содержится в словаре answers
    // 
    // ВАЖНО - так как значения text из list1 используются в качестве ключей, они обязаны быть уникальными
    checkAnswer: (list1, list2, answers) => {
        // Функция сортировки списков по полю order
        const sortCards = (a, b) => {
            if (a.order > b.order) {
                return 1
            } else {
                return -1
            }
        };
        // Создаем 2 отсортированных списка для дальнейшего сравнения
        const sortedList1 = list1.sort(sortCards);
        const sortedList2 = list2.sort(sortCards);
        // Проверка соответствия
        for (let index = 0; index < sortedList1.length; index++) {
            const key = sortedList1[index].text
            const value = sortedList2[index].text
            // Если хотя бы одно значение не совпадает - сразу возвращаем false
            if (answers[key] != value) {
                return false
            }
        }
        // Если все значения по итогу совпали - возвращаем true
        return true
    }
}))

// --------------------------------------------------- //
// Стор для задач типа "Правильная последовательность" //
// --------------------------------------------------- //
export const useRightOrder = create((set) => ({
    // Упорядоченный список, за порядок отвечает параметр order
    list1: [
        { id: 1, order: 3, text: "Выбираем инструмент «Линия по конечным точкам» и указываем, что это «Полилиния»." },
        { id: 2, order: 2, text: "Выбираем линию и нажимаем клавишу «Пробел»." },
        { id: 3, order: 1, text: "Нажимаем клавишу Enter." },
        { id: 4, order: 4, text: "Нажимаем клавишу «Пробел» и вводим координаты конечной точки." },
        { id: 5, order: 5, text: "Нажимаем клавишу Enter." },
    ],
    // Упорядоченный список из верных ответов
    answers: [
        "Выбираем инструмент «Линия по конечным точкам» и указываем, что это «Полилиния».",
        "Выбираем линию и нажимаем клавишу «Пробел».",
        "Нажимаем клавишу Enter.",
        "Нажимаем клавишу «Пробел» и вводим координаты конечной точки.",
        "Нажимаем клавишу Enter.",
    ],
    // Функция проверки ответа, возвращает Bool
    //
    // Алгоритм - сортирует список list1, движемся по нему и
    // сравниваем со значениями из answers поэлементно
    // 
    // ВАЖНО - т.к. мы сравниваем поэлементно, значения могут повторяться в отличие от
    // стора для задач типа "Сопоставь 2 списка"
    checkAnswer: (list1, answers) => {
         // Функция сортировки списков по полю order
         const sortCards = (a, b) => {
            if (a.order > b.order) {
                return 1
            } else {
                return -1
            }
        };
        // Создаем отсортированный список для дальнейшего сравнения
        const sortedList1 = list1.sort(sortCards);
        // Проверка соответствия
        for (let index = 0; index < sortedList1.length; index++) {
            // Если хотя бы одно значение не совпадает - сразу возвращаем false
            if (sortedList1[index].text != answers[index]) {
                return false
            }
        }
        // Если все значения по итогу совпали - возвращаем true
        return true
    }
}))
