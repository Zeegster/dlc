import { useQuestionsStepper } from '../store/StoreStepper';
import { Fragment, useState, useEffect, useLayoutEffect } from 'react';

export const SelectInput = ({ index, text, values, isCorrect }) => {
  const answer = useQuestionsStepper((state) => state.answer);
  const userAnswer = useQuestionsStepper((state) => state.addUserAnswer);
  const correctState = useQuestionsStepper((state) => state.answer.Correct);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState();

  const [selected, setSelected] = useState(isCorrect);

  const handleSelectChange = (selectedValue,index) => {
    userAnswer(selectedValue,index);
console.log(index);
    //  setIsCorrectAnswer(selectedValue === isCorrect);
  };
  useLayoutEffect(() => {
    setIsCorrectAnswer(correctState);
    console.log(answer);
  }, [answer]);

  return (
    <>
      <select
        id={index}
        values={isCorrect}
        onChange={(event) =>
          handleSelectChange(event.target.value, index)
        }
        className={`block  p-2 mb-2 border-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus-visible:outline-blue-300 ${
          answer[index] === undefined
            ? 'border-gray-300'
            : answer[index].Correct === undefined
            ? 'border-gray-300'
            : answer[index].Correct
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


/* {
        isCorrectAnswer == undefined
          ? null
          : isCorrectAnswer
          ? <p className='text-green-100'>Правильно</p>
          : <p className='text-red-100'>Неправильно</p>
      }
 */