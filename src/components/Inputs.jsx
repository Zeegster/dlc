import { Checkbox } from 'react-daisyui';

import { useQuestionsStepper } from '../store/StoreStepper';
import { useEffect, useState, useLayoutEffect, useRef } from 'react';

export const SelectInput = ({ QuestionStore, QuestionIndex,StoreName }) => {
const{QStore, checkCount,QChecked, isDisabled, reloadState, shouldReload}= useQuestionsStepper()
  const [userValues, setUserValues] = useState([]);
  const [checkedState, setCheckedState] = useState([]);
  const qStore = QStore[QuestionStore];

  const resetValues = () => {
    setUserValues([]);
    setCheckedState([]);
    // Clear the selected options
    const selectElements = document.querySelectorAll('select');
    selectElements.forEach((selectElement) => {
      selectElement.selectedIndex = 0;
    });
  };

  const handleSelectChange = (selectedIndex, selectedValue, event) => {
    setUserValues((prevUserValues) => ({
      ...prevUserValues,
      [selectedIndex]: selectedValue,
    }));
  };

  useEffect(() => {
    if (QChecked !== false ) {
      const newCheckedState = Object.keys(userValues).reduce((acc, curr) => {
        acc[curr] = userValues[curr] === qStore[parseInt(curr)].answer;
        return acc;
      }, {});
      setCheckedState(newCheckedState);

    } 
    if (shouldReload) {
      console.log("RELOADED?", userValues,shouldReload);
      resetValues();
    }
  }, [QChecked, shouldReload]);

  if (QuestionIndex !== undefined) {
    const qItem = qStore[QuestionIndex];
    return (
      <select
        disabled={isDisabled}
        key={qItem.id}
        id={qItem.id}
        onChange={(event) =>
          handleSelectChange(event.target.id, event.target.value, event)
        }
        className={`block p-2 mb-2 border-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 ${
          isDisabled ? 'cursor-not-allowed' : ''
        } focus:ring-blue-500 focus-visible:outline-blue-300 ${
          QChecked === false
            ? 'border-gray-300'
            : checkedState[QuestionIndex] === undefined
            ? 'border-gray-300'
            : checkedState[QuestionIndex] === true
            ? 'border-green-100 bg-green-100 focus-visible:outline-green-100 text-white'
            : 'border-red-100 bg-red-100 text-white focus-visible:outline-red-100'
        }`}
      >
        <option>Ваш ответ</option>
        {qItem.text.map((option, j) => (
          <option
            key={j}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    );
  } else {
    return qStore.map((q, i) => {
      return (
        <li
          key={q.id}
          className='flex items-center gap-2 w-fit'
        >
          <select
            id={i}
            disabled={isDisabled}
            onChange={(event) => handleSelectChange(i, event.target.value,event)}
            className={`block p-2 mb-2 border-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus-visible:outline-blue-300 ${
              isDisabled ? 'cursor-not-allowed' : ''
            } ${
              QChecked === false
                ? 'border-gray-300'
                : checkedState[i] === undefined
                ? 'border-gray-300'
                : checkedState[i] === true
                ? 'border-green-100 bg-green-100 focus-visible:outline-green-100 text-white'
                : 'border-red-100 bg-red-100 text-white focus-visible:outline-red-100'
            }`}
          >
            <option>Ваш ответ</option>
            {q.text.map((option, j) => {
              return (
                <option
                  key={j}
                  value={option}
                >
                  {option}
                </option>
              );
            })}
          </select>
        </li>
      );
    });
  }
};

export const TextInput = ({ QuestionStore, index }) => {
  const { QStore, QChecked, setDisabledState, isDisabled, reloadState,checkCount } =
    useQuestionsStepper();
  const [userValues, setUserValues] = useState([]);
  const [checkedState, setCheckedState] = useState([]);

  const qStore = QStore[QuestionStore];
  // console.log('qStore:', qStore);

  const handleInput = (value, index) => {
    let optimizedValue = value.toLowerCase().replace(/ /g, '');
    setUserValues((prev) => {
      const copy = [...prev];
      copy[index] = { index, value: optimizedValue };
      return copy;
    });
  };

  const matches = (state) => {
    if (state !== false) {
      const newCheckedState = userValues.map((s, index) => {
        // Check if the user has typed anything
        if (!s || !s.value) {
          return false;
        }
        // Compare the user's input with the answer
        if (qStore[index]) {
          return s.value === qStore[index].answer;
        } else {
          return false;
        }
      });
      console.log(newCheckedState);
      setCheckedState(newCheckedState);
    }
  };
  const resetValues = () => {
    setUserValues([]);
    setCheckedState([]);
  };
  useEffect(() => {
    matches(QChecked);
    console.log('QCHecked:', QChecked);
    console.log('qStore:', qStore);
    console.log('userVAlues:', userValues);
    console.log('checked:', checkedState);
    if (checkCount % 2 === 0) {
      resetValues();
    }
  }, [checkCount]);

  return (
    <input
      disabled={isDisabled}
      onChange={
        !isDisabled ? (event) => handleInput(event.target.value, index) : null
      }
      type='text'
      id={index}
      value={userValues && userValues[index] ? userValues[index].value : ''}
      placeholder='Заполните пропуск'
      className={`flex m-auto py-1 border-2 text-sm text-gray-900 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus-visible:outline-blue-300 text-center${
        isDisabled ? 'bg-gray-300 cursor-not-allowed' : ''
      } ${
        QChecked === false
          ? 'border-gray-300'
          : checkedState[index] === undefined
          ? 'border-gray-300'
          : checkedState[index]
          ? 'border-green-100 bg-green-100 focus-visible:outline-green-100 text-white'
          : 'border-red-100 bg-red-100 text-white focus-visible:outline-red-100'
      }`}
    />
  );
};

export function QCheckBox({ index }) {
  const { QStore, QChecked, isDisabled, reloadState, setDisableButton } =
    useQuestionsStepper();

  // Хранилище ответов
  let qStore = QStore[index];
  // Хранилище пользовательских данных
  const [userCheck, setUserCheck] = useState(
    Array.isArray(qStore) ? Array(qStore.length).fill(false) : []
  );

  const handleCheck = (event, index) => {
    // Create a copy of the userCheck array
    let updatedUserCheck = [...userCheck];
    // Update the specific index with the new checked status
    updatedUserCheck[index] = event.target.checked;
    // Set the state with the updated array
    setUserCheck(updatedUserCheck); // Update the state
    console.log(userCheck);
  };
  let checkedState = [];
  const matches = (state) => {
    if (state !== false && userCheck) {
      checkedState = [];
      userCheck.map((u, index) => {
        u === qStore[index].answer
          ? { ...(checkedState[index] = true) }
          : { ...(checkedState[index] = false) };
      });
      return checkedState;
    }
  };
  matches(QChecked);

  return (
    <>
      {qStore.map((item, index) => (
        <label
          key={index}
          className='cursor-pointer'
        >
          {item.text}
          <Checkbox
            id={item.id}
            type='checkbox'
            value={item.answer}
            onChange={!isDisabled ? (e) => handleCheck(e, index) : null}
            color={
              QChecked === false
                ? 'neutral'
                : checkedState[index] === undefined
                ? 'neutral'
                : checkedState[index] !== false
                ? 'success'
                : 'error'
            }
            className={
              QChecked === false
                ? 'neutral'
                : checkedState[index] === undefined
                ? 'neutral'
                : checkedState[index] !== false
                ? 'border-2 !bg-green-100 text-black'
                : 'border-2 !bg-red-100'
            }
          />
        </label>
      ))}{' '}
    </>
  );
}

export const MyDragList = ({ QuestionStore }) => {
  const { QStore, QChecked, isDisabled, shouldReload } = useQuestionsStepper();
  // const [staticList, setStaticList ] = useState([])

  const qStoreCopy = [...QStore[QuestionStore]];

  let indexAnswer = qStoreCopy.findIndex((item) =>
    item.hasOwnProperty('answer')
  );

  if (indexAnswer !== -1) {
    qStoreCopy.splice(indexAnswer, 1);
  }
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const qStore = shuffleArray([...qStoreCopy]);

  const [cardList, setCardList] = useState(qStore);
  const [currentCard, setCurrentCard] = useState(null);
  console.log('LOOK: ', cardList);
  useEffect(() => {
    if (shouldReload && !QChecked) {
      const shuffledList = shuffleArray([...qStoreCopy]);
      setCardList(
        shuffledList.map((item, index) => ({
          ...item,
          order: index,
        }))
      );
    }
  }, [shouldReload, QChecked]);

  let checkedState = [];
  const compareOrder = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false;
    }
    return arr1.every((value, index) => value === arr2[index]);
  };
  console.log('LOOK@: ', cardList);

  const matches = (state) => {
    // console.log('MATCHES INIT');
    if (state !== false && currentCard) {
      console.log('State = ', state);

      // Функция сортировки списков по полю order
      const sortCards = (a, b) => {
        if (a.order > b.order) {
          return 1;
        } else {
          return -1;
        }
      };
      // Создаем отсортированный список для дальнейшего сравнения
      const sortedcardList = cardList.sort(sortCards);
      // Проверка соответствия
      const answers = QStore[QuestionStore].find((item) =>
        item.hasOwnProperty('answer')
      ).answer;

      // Use the compareOrder function to compare the order of elements
      const isOrderSame = compareOrder(
        sortedcardList.map((item) => item.text),
        answers
      );

      // If the order is the same, set all elements in checkedState to true
      if (isOrderSame) {
        checkedState = sortedcardList.map(() => true);
      } else {
        // If the order is not the same, check each element individually
        sortedcardList.forEach((item, index) => {
          checkedState[index] = item.text === answers[index];
        });
      }

      return checkedState;
    }
  };

  matches(QChecked);

  function dragStartHandler(e, card) {
    setCurrentCard(card);
  }
  function dragLeaveHandler(e, card) {}

  function dragEndHandler(e, card) {}
  function dragOverHandler(e, card) {
    e.preventDefault();
  }
  function dropHandler(e, card) {
    e.preventDefault();
    setCardList(
      cardList.map((c) => {
        if (c.id === card.id) {
          return { ...c, order: currentCard.order };
        }
        if (c.id === currentCard.id) {
          return { ...c, order: card.order };
        }
        return c;
      })
    );
  }

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };
  // console.log(
  //   'Cardlist = ',
  //   cardList,
  //   'Store NUM = ',
  //   QuestionStore,
  //   'Check array = ',
  //   checkedState
  // );
  console.log('STATIC:', checkedState);
  return (
    <>
      {' '}
      <div className='flex w-full justify-between h-min'>
        {qStoreCopy.find((q) => q.textorder) && (
          <ul className='w-1/2 h-full flex flex-col'>
            {qStoreCopy
              .filter((q) => q.textorder)
              .map((q, index) => {
                return (
                  <li
                    key={q.id}
                    className={`p-2 border flex justify-start items-center h-[50px] mb-2 text-sm cursor-grab ${
                      QChecked === false
                        ? 'border-gray-300'
                        : checkedState[index] === undefined
                        ? 'border-gray-300'
                        : checkedState[index]
                        ? 'border-green-100 bg-green-100 focus-visible:outline-green-1 cursor-not-allowed'
                        : 'border-red-100 bg-red-100 focus-visible:outline-red-100 cursor-not-allowed'
                    }`}
                  >
                    <span>{q.textorder}</span>
                  </li>
                );
              })}
          </ul>
        )}
        <ul className='w-1/2 h-full flex flex-col justify-around'>
          {cardList.sort(sortCards).map((card, index) => (
            <li
              onDragStart={
                !isDisabled ? (e) => dragStartHandler(e, card) : null
              }
              onDragLeave={!isDisabled ? (e) => dragLeaveHandler(e) : null}
              onDragEnd={!isDisabled ? (e) => dragEndHandler(e) : null}
              onDragOver={!isDisabled ? (e) => dragOverHandler(e) : null}
              onDrop={!isDisabled ? (e) => dropHandler(e, card) : null}
              key={index}
              draggable={true}
              className={`p-2 border flex justify-start items-center h-[50px] mb-2 text-sm cursor-grab ${
                QChecked === false
                  ? 'border-gray-300'
                  : checkedState[index] === undefined
                  ? 'border-gray-300'
                  : checkedState[index]
                  ? 'border-green-100 bg-green-100 focus-visible:outline-green-1 cursor-not-allowed'
                  : 'border-red-100 bg-red-100 focus-visible:outline-red-100 cursor-not-allowed'
              }`}
            >
              {card.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
