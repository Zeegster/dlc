import { useNavigate } from "react-router-dom";
import { useQuestions } from "../../store/store";
import PropTypes from 'prop-types';

const MenuItem = ({ question, id }) => {
  const navigate = useNavigate();

  const correctAnswers = useQuestions((state) => state.correctAnswers);
  const unCorrectAnswer = useQuestions((state) => state.unCorrectAnswer);
 

  const filteredAnswer = [...correctAnswers, ...unCorrectAnswer].map((el) => el.id)

  
  
  const handleClick = () => {
    redirectToQuestion(id);
  };

  const redirectToQuestion = (id) => {
    navigate(`/question/${id}`);
  };

  function getColor(value) {
    switch (value) {
      case 100: {
        return "bg-violent-100";
      }
      case 150: {
        return "bg-white-blue-100";
      }
      case 200: {
        return "bg-gray-200";
      }
      case 250: {
        return "bg-red-200";
      }
    }
  }

  const colorClass = getColor(question.value)

  return (
    <div
      className={`${filteredAnswer.indexOf(id) !== -1 ? 'hidden' : ' '} ${colorClass} p-12 mx-4 my-2 rounded shadow text-center text-blue-100 max-w-[254px] cursor-pointer`}
      onClick={handleClick}
    >
      <p className="font-bold">{question.value}</p>
    </div>
  );
};
MenuItem.propTypes={
  question:PropTypes.object,
  id:PropTypes.number,

}
export default MenuItem;
// p-12 mx-4 my-2 rounded shadow text-center text-blue-100 max-w-[254px]