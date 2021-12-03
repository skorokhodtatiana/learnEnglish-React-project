import React, { useState } from "react";
import "./_flashCard.scss";

const FlashCard = (props) => {
  const { englishWord, transcription, translation, wordRu } = props;
  const [pressed, setPressed] = useState(wordRu);
  const handlePressed = () => {
    setPressed(true);
  };

  return (
    <div className="fleshCard">
      <div className="fleshCard__englishWord">{englishWord}</div>
      <div className="fleshCard__transcription">{transcription}</div>
      {pressed ? (
        <div className="fleshCard__russianhWord">{translation}</div>
      ) : (
        <button className="fleshCard__btnOpen" onClick={() => handlePressed()}>
          Перевод
        </button>
      )}
    </div>
  );
};

export default FlashCard;
