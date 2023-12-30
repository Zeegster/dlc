import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import HeaderInner from '../HeaderInner';
import { useQuestions, useScore } from '../../store/store';
import CommonButton from '../buttons/CommonButton';

const Question = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const questions = useQuestions((state) => state.QStore[id]);

  const answerQuestion = useQuestions((state) => state.answerQuestion);
  const unCorrect = useQuestions((state) => state.unCorrect);

  const getScore = useScore((state) => state.getScore);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswers, setShowAnswers] = useState(false);

  // const question = questions.find((q) => q.id == id);

  const correctAnswerClass = 'bg-green-100 text-white';
  const wrongAnswerClass = 'bg-red-100 text-white';

  const getAnswerClass = (option) => {
    if (option.isCorrect) {
      return correctAnswerClass;
    } else {
      return wrongAnswerClass;
    }
  };

  if (!questions) {
    return <div></div>;
  }

  const handleSubmit = () => {
    setShowAnswers(true);
  };

  function handleAnswer(answer, question) {
    if (answer.isCorrect) {
      answerQuestion(question);
      getScore(question.value);
      useScore.setState((state) => ({
        attempt: state.attempt - 1,
      }));
    }

    if (!answer.isCorrect) {
      unCorrect(questions);
    }

    if (!answer.isCorrect) {
      useScore.setState((state) => ({
        attempt: state.attempt - 1,
      }));
    }

    handleSubmit();
  }

  return (
    <>
      <div className='flex flex-col justify-between items-center h-screen'>
        <HeaderInner
          title='Выберите правильный вариант ответа'
          subtitle={questions.question}
        />
        {questions.content}
        {/* Условный рендер */}
        <div className='flex flex-col w-2/3 justify-center h-[50vh] cursor-pointer'>
          {showAnswers
            ? // Показать все варианты с подсветкой
              questions.options.map((option) => (
                <div
                  key={option.id}
                  className={`${getAnswerClass(
                    option
                  )} mb-2 mt-2 p-4 rounded-lg `}
                >
                  {option.text}
                </div>
              ))
            : // Обычный рендер без подсветки
              questions.options.map((option) => (
                <div
                  className='text-black bg-blue-50 mb-2 mt-2 p-4 rounded-lg hover:bg-blue-700 '
                  onClick={() => {
                    setSelectedAnswer(option.id);
                    handleAnswer(option, questions);
                  }}
                  key={option.id}
                >
                  {option.text}
                </div>
              ))}
        </div>

        <div className='w-full h-14 bg-blue-100 flex justify-center py-1'>
          {/* Кнопка Ответить */}
          {selectedAnswer && (
            <CommonButton
              onClick={() => navigate('/question')}
              text={'Ответить'}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Question;
