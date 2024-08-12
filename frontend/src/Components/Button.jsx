import React, { useState } from "react";
import { useGetFlashCards } from "../api/GetFlashCardsApi";

const Button = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const { problems, isLoading } = useGetFlashCards();

  if (isLoading) {
    return <>Loading...</>
  }

  if (!problems){
    return <>Cannot get data..</>
  }

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
      console.log(`Switched to card index: ${currentCardIndex - 1}`);
    }
  };

  const nextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
      console.log(`Switched to card index: ${currentCardIndex + 1}`);
    }
  };

  return (
    <div className="App">
      <div className="box-container" onClick={handleClick}>
        <div className={`box ${isFlipped ? "is-flipped" : ""}`}>
          <div className="box-front">
            <div className="font-bold text-white text-2xl">
              {problems[currentCardIndex].title}
            </div>
            <div className="text-white">
              {problems[currentCardIndex].statement}
            </div>
          </div>
          <div className="box-back text-white">{problems[currentCardIndex].solution}</div>
        </div>
      </div>

      <div className="navigation-buttons flex gap-16">
        <button onClick={prevCard} disabled={currentCardIndex === 0}>
          Previous
        </button>
        <button
          onClick={nextCard}
          disabled={currentCardIndex === cards.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Button;
