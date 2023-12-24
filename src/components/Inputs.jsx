import {  useQuestionsStepper } from '../store/StoreStepper';
import {  useLayoutEffect } from 'react';

export const SelectInput = ({ index, text, values, isCorrect }) => {
  const answer = useQuestionsStepper((state) => state.answer);
  const userAnswer = useQuestionsStepper((state) => state.addUserAnswer);

  const handleSelectChange = (selectedValue, index) => {
    userAnswer(selectedValue, index);

    console.log(index);
  };
  useLayoutEffect(() => {
    console.log(answer);
  }, [answer]);

  return (
    <>
      <select
        id={index}
        values={isCorrect}
        onChange={(event) =>
          handleSelectChange(event.target.value, event.target.id)
        }
        className={`block  p-2 mb-2 border-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus-visible:outline-blue-300 ${
          answer[index] === undefined
            ? 'border-gray-300'
            : answer[index].Correct === undefined
            ? 'border-gray-300'
            : answer[index].Correct
            ? 'border-green-100 bg-green-100 focus-visible:outline-green-100 text-white'
            : 'border-red-100 bg-red-100 text-white focus-visible:outline-red-100'
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

export const TextInput = ({ index }) => {
  const userAnswer = useQuestionsStepper((state) => state.addUserAnswer);
  const answer = useQuestionsStepper((state) => state.answer);

  const handleInput = (value, index) => {
    let optimizedValue = value.toLowerCase().replace(/ /g, '');
    console.log(optimizedValue, index);
    userAnswer(optimizedValue, index);
  };

  return (
    <input
      onChange={(event) => handleInput(event.target.value, index)}
      type='text'
      id={index}
      placeholder='Заполните пропуск'
      className={`flex m-auto py-1 border-2 text-sm text-gray-900 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus-visible:outline-blue-300 text-center ${
        answer[index] === undefined
          ? 'border-gray-300'
          : answer[index].Correct === undefined
          ? 'border-gray-300'
          : answer[index].Correct
          ? 'border-green-100 bg-green-100 focus-visible:outline-green-100 text-white'
          : 'border-red-100 bg-red-100 text-white focus-visible:outline-red-100'
      }`}
    />
  );
};
