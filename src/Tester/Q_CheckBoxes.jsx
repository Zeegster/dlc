import { Checkbox } from 'react-daisyui';
import { useQuestionsStepper } from '../store/StoreStepper';
import { useEffect, useState } from 'react';

export default function QCheckBox({ index }) {
  const {
    QStore,
    QChecked,
    QCheckedState,
    answer,
    addUserAnswer,
    addCorrectState,
  } = useQuestionsStepper();

  // Хранилище ответов
  let qStore = QStore[index];

  const [checked, setChecked] = useState(false);
  // Хранилище пользовательских данных
  const [userCheck, setUserCheck] = useState(
    Array.isArray(qStore) ? Array(qStore.length).fill(false) : []
  );

  const handleClick = () => {
    setChecked(true);
  };
  const handleClick2 = () => {
    QCheckedState();
  };

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
    if (state !== false) {
      userCheck.map((u, index) => {
        u === qStore[index].answer
          ? { ...(checkedState[index] = true) }
          : { ...(checkedState[index] = false) };
      });
      return checkedState;
    }
  };
  matches(checked);
  matches(QChecked);

  // Initialize userCheck as an empty array

  // Initialize userCheck as an empty array

  useEffect(() => {
    console.log(userCheck);
    console.log(QChecked);
    console.log(checkedState);
  }, [userCheck, checked, checkedState]);

  return (
    <>
      {qStore.map((item, index) => (
        <li key={index}>
        <Checkbox
          id={item.id}
          type='checkbox'
          value={item.answer}
          checked={userCheck[index]}
          onChange={(e) => handleCheck(e, index)}
          key={index}
          color={
            QChecked === false
              ? 'neutral'
              : checkedState[index] === true
              ? 'success'
              : 'error'
          }
          className={
            QChecked === false
              ? ''
              : checkedState[index] === true
              ? 'bg-green-100'
              : 'bg-red-100'
          }
        />
        </li>
      ))}{' '}
     
    </>
  );
}
