import { useQuestionsStepper } from '../store/StoreStepper';
import { Fragment, useState, useEffect } from 'react';

export const SelectInput = ({ text, values, isCorrect }) => {
  const answer = useQuestionsStepper((state) => state.answer);
  const userAnswer = useQuestionsStepper((state) => state.addUserAnswer);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState();

  const [selected, setSelected] = useState(isCorrect);

  const handleSelectChange = (selectedValue,target) => {
   userAnswer(selectedValue);
   setIsCorrectAnswer(selectedValue === isCorrect);
   
 
  };


  return (
    <><select
      values={isCorrect}
      onChange={(event) => handleSelectChange(event.target.value,event.target)}
      className={`block  p-2 mb-2 border-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus-visible:outline-blue-300 ${
        isCorrectAnswer == undefined
          ? 'border-gray-300'
          : isCorrectAnswer
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