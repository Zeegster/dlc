import React, { useState } from 'react';
import { Button, List, ListItem, Typography } from '@material-tailwind/react';
import Xarrow from 'react-xarrows';
import { useQuestionsStepper } from '../store/StoreStepper';

const QuizComponent = ({ keys, values }) => {
  const [selectedKey, setSelectedKey] = useState({ value: null, id: null });
  const [selectedValue, setSelectedValue] = useState({ value: null, id: null });
  const [drawnArrows, setDrawnArrows] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]); // New state variable
  const { answer, addUserAnswer } = useQuestionsStepper();

  // Get the matched pairs as key-value pairs
  const getMatchedPairsAsKeyValuePairs = () => {
    return matchedPairs.map((pair) => {
      return { [pair.key.value]: pair.value.value };
    });
  };
  
  const handleClick = (item, id, list) => {
    
    const matchedPairIndex = matchedPairs.findIndex(
      (pair) => pair.key.id === id || pair.value.id === id
    );
    if (matchedPairIndex !== -1) {
      const newMatchedPairs = [...matchedPairs];
      newMatchedPairs.splice(matchedPairIndex, 1);
      setMatchedPairs(newMatchedPairs);
      const newDrawnArrows = [...drawnArrows];
      newDrawnArrows.splice(matchedPairIndex, 1);
      setDrawnArrows(newDrawnArrows);
      return;
    }
    // Check if the item is part of a matched pair
    if (
      matchedPairs.some((pair) => pair.key.id === id || pair.value.id === id)
    ) {
      return;
    }
    // Check the list property to prevent matching keys with keys and values with values
    if (
      (!selectedKey.value ||
        (selectedKey.value !== item && selectedKey.list !== list)) &&
      (!selectedValue.value ||
        (selectedValue.value !== item && selectedValue.list !== list))
    ) {
      if (!selectedKey.value && !selectedValue.value) {
        setSelectedKey({ value: item, id: id, list: list });
      } else if (selectedKey.value && !selectedValue.value) {
        setSelectedValue({ value: item, id: id, list: list });
      } else {
        setSelectedKey({ value: null, id: null, list: null });
        setSelectedValue({ value: null, id: null, list: null });
      }
    }
    // Get the matched pairs as key-value pairs
    const matchedPairsKeyValuePairs = getMatchedPairsAsKeyValuePairs();
    console.log(selectedKey.list, answer);
    
    // Check which list the item comes from and store it in the corresponding state variable
    

    addUserAnswer(matchedPairsKeyValuePairs);
  };

  React.useEffect(() => {
    if (selectedKey.value && selectedValue.value) {
      setDrawnArrows([
        ...drawnArrows,
        { start: selectedKey.id, end: selectedValue.id },
      ]);
      // Add the matched pair to the state
      setMatchedPairs([
        ...matchedPairs,
        { key: selectedKey, value: selectedValue },
      ]);
      setSelectedKey({ value: null, id: null, list: null });
      setSelectedValue({ value: null, id: null, list: null });
    }
  }, [selectedKey, selectedValue, answer]);

  const resetSelection = () => {
    setSelectedKey({ value: null, id: null });
    setSelectedValue({ value: null, id: null });
    setDrawnArrows([]);
  };
  return (
    <div className='flex flex-col  m-auto'>
      <Typography
        className='m-auto'
        variant='h4'
      >
        Quiz
      </Typography>
      <div className='flex gap-20'>
        <List className=''>
          {keys.map((key, index) => (
            <ListItem
              className='active:border-blue-200 focus:border-blue-200
               rounded-sm border-2 flex items-center justify-center p-2'
              onClick={() => handleClick(key, 'key-' + index, 'key')}
              id={'key-' + index}
              key={index}
            >
              {key}
            </ListItem>
          ))}
        </List>
        <List>
          {values.map((value, index) => (
            <ListItem
              className='active:border-blue-200 focus:border-blue-200
               rounded-sm border-2 flex items-center justify-center p-2'
              onClick={() => handleClick(value, 'value-' + index, 'value')}
              id={'value-' + index}
              key={index}
            >
              {value}
            </ListItem>
          ))}
        </List>

        {drawnArrows.map((arrow, index) => (
          <Xarrow
            headShape={'circle'}
            showTail
            tailShape={'circle'}
            start={arrow.start.toString()}
            end={arrow.end.toString()}
            key={index}
          />
        ))}
        <Button
          variant='outlined'
          color='black'
          onClick={resetSelection}
        >
          Reset Selection
        </Button>
      </div>
    </div>
  );
};

export default QuizComponent;


// if (list === 'key') {
//   setSelectedKey({ value: item, id: id });
// } else if (list === 'value') {
//   setSelectedValue({ value: item, id: id });
// }