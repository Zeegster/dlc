import React from "react";
import { useState } from "react";



export const MyDragList = (data) => {
  const [cardList, setCardList] = useState(data.data);
  const [currentCard, setCurrentCard] = useState(null);


  function dragStartHandler(e, card) {
    setCurrentCard(card);
  }
  function dragLeaveHandler(e, card) {
    e.target.style.background = "white";
  }

  function dragEndHandler(e, card) {
    e.target.style.background = "white";
  }
  function dragOverHandler(e, card) {
    e.preventDefault();
    e.target.style.background = "lightgray";
  }
  function dropHandler(e, card) {
    e.preventDefault();
    setCardList(
      cardList.map((c) => {
        if (c.id === card.id) {
          return { ...c, order: currentCard.order };
        }
        if (c.id === currentCard.id) {
          return { ...c, order: card.order };
        }
        return c;
      })
    );
    e.target.style.background = "white";
  }

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <>
      {cardList.sort(sortCards).map((card) => (
        <div
          onDragStart={(e) => dragStartHandler(e, card)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, card)}

          key={card.id}
          draggable={true}
          className="w-64 p-2 border flex justify-center items-center m-4 cursor-grab"
        >
          {card.text}
        </div>
      ))}
    </>
  );
};
