import MenuItem from "./MenuItem";
import { useQuestions, useScore } from "../../store/Store";
import { useQuestionsStepper } from "../../store/StoreStepper";
import { useEffect } from "react";
const MenuList = () => {
  const questions = useQuestions((state) => state.QStore);
  const score = useScore((state) => state.score);
  const attempt = useScore((state) => state.attempt);

  return (
    <>
      <ul className="flex flex-wrap max-w-4xl px-12">
        {questions.map((question) => (
          <li className="w-1/4" key={question.id}>
            <MenuItem question={question} id={question.id} />
          </li>
        ))}

        <div className="text-black font-semibold flex w-full justify-end">
          <span className="mr-12">Количество очков: {score}</span>
          <span>Количество попыток: {attempt}</span>
        </div>
      </ul>

    </>
  );
};

export default MenuList;
