import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import HeaderInner from '../HeaderInner';
import { useQuestions, useScore } from '../../store/store';
import CommonButton from '../buttons/CommonButton';
import { SelectInput, TextInput, QCheckBox, MyDragList } from '../Inputs';
import { useQuestionsStepper } from '../../store/StoreStepper';

const Question = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { QStore, answerQuestion, unCorrect, correctAnswers, unCorrectAnswer } =
    useQuestions();
  const { QChecked, isDisabled, setDisabledState, QCheckedState, answer } =
    useQuestionsStepper();
  const questions = QStore[id];
  const { getScore } = useScore();
  let userAnswer = Object.assign([], answer); // Create a copy of answer;

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
    console.log(answer);
    if (answer.isCorrect || answer.userAnswer) {
      answerQuestion(question);
      getScore(question.value);
      useScore.setState((state) => ({
        attempt: state.attempt - 1,
      }));
      console.log('CORRECT ANSWER');
    }

    if (!answer.isCorrect|| !answer.userAnswer) {
      unCorrect(questions);
      useScore.setState((state) => ({
        attempt: state.attempt - 1,
      }));
      console.log('UNCORRECT ANSWER');
    }

    handleSubmit();
  }

  useEffect(() => {
    console.log('UseEffect',QChecked, userAnswer, correctAnswers, unCorrectAnswer);
  }, [answer,correctAnswers, unCorrectAnswer]);

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
          {showAnswers && !questions.type ? (
            // Показать все варианты с подсветкой
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
          ) : questions.type == 'select' ? (
            <SelectInput
              QuestionStore={id}
              Store={useQuestions}
            />
          ) : questions.type == 'input' ? (
            <TextInput
              QuestionStore={id}
              Store={useQuestions}
            />
          ) : questions.type == 'checkbox' ? (
            <QCheckBox
              index={id}
              Store={useQuestions}
            />
          ) : questions.type == 'draglist' ? (
            <MyDragList
              QuestionStore={id}
              Store={useQuestions}
            />
          ) : (
            // Обычный рендер без подсветки
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
            ))
          )}
        </div>

        <div className='w-full h-14 bg-blue-100 flex justify-center py-1'>
          {/* Кнопка Ответить */}
          {!isDisabled && questions.type == 'draglist' && (
            <CommonButton
              onClick={() => (
                setDisabledState(),
                QCheckedState(),
                setSelectedAnswer(questions.id),
                handleAnswer(userAnswer, questions)
              )}
              text={'Проверить'}
            />
          )}
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
