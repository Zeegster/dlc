import { useState } from 'react';
import { i1 } from '../../assets/base64/infogragic';
import { SelectInput } from '../../components/Inputs';
import { questions } from '../StoreStepper';

export const HandleNewAnswer = (newAnswer) => {
  const [answers, setAnswers] = useState([]);

  setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
};

export default function RenderQuestion(id) {
  if (id === 0) {
    return (
      <div className='flex mt-10  whitespace-wrap'>
        <div className='w-1/2'>
          <figure className='relative'>
            <img
              width={600}
              src={i1}
            />
            <span
              className='p-1 rounded-[100%] w-10 h-10 text-center border bg-white absolute top-[45%] left-[24%]'
              name='one'
              id='one'
            >
              1
            </span>
            <span
              className='p-1 rounded-[100%] w-10 h-10 text-center border bg-white absolute top-[20%] left-[40%]'
              name='two'
              id='2'
            >
              2
            </span>
            <span
              className='p-1 rounded-[100%] w-10 h-10 text-center border bg-white absolute top-[60%] left-[65%]'
              name='three'
              id='3'
            >
              3
            </span>
          </figure>
        </div>
        <ul className='list-inside list-decimal'>
          <p className='font-bold'>Определите явления</p>
          {questions.list.map((li) => {
            return (
              <li
                className='flex items-center gap-2 w-fit'
                key={li.id}
              >
                <SelectInput
                  values={li.text}
                  isCorrect={li.answer}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  return;
}
