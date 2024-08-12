import { useState } from "react";

export default function Box() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped); // Toggle the flipped state
  };

  return (
    <div className="box-container" onClick={handleClick}>
      <div className={`box ${isFlipped ? "is-flipped" : ""}`}>
        <div className="box-front">Front</div>
        <div className="box-back">Back</div>
      </div>
    </div>
  );
}
