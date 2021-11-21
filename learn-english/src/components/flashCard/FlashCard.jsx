import React, { useState } from "react";
import "./_flashCard.scss";

const FlashCard = (props) => {
  const [pressed, setPressed] = useState(false);
  const { englishWord, transcription, russianWord } = props;
  const handlePressed = () => {
    setPressed(!pressed);
  };

  return (
    <div className="fleshCard">
      <div className="fleshCard__englishWord">{englishWord}</div>
      <div className="fleshCard__transcription">{transcription}</div>
      {pressed ? (
        <div className="fleshCard__russianhWord">{russianWord}</div>
      ) : (
        <button className="fleshCard__btnOpen" onClick={handlePressed}>
          Перевод
        </button>
      )}
    </div>
  );
};

export default FlashCard;
