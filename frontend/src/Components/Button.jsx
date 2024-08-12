import React, { useState } from "react";

const cards = [
  { front: "Front 1", back: "Back 1" },
  { front: "Front 2", back: "Back 2" },
  { front: "Front 3", back: "Back 3" },
  // Add more cards as needed
];

export default function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

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
          <div className="box-front">{cards[currentCardIndex].front}</div>
          <div className="box-back">{cards[currentCardIndex].back}</div>
        </div>
      </div>

      <div className="navigation-buttons">
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
}
