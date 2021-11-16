import React, { useState } from "react";
const FleshCard = (props) => {
  const [pressed, setPressed] = useState(false);
  const { englishWord, transcription, russianWord } = props;
  const handlePressed = () => {
    setPressed(!pressed);
  };

  return (
    <div className="fleshCard">
      <div>{englishWord}</div>
      <div>{transcription}</div>
      {pressed ? (
        <div>{russianWord}</div>
      ) : (
        <button onClick={handlePressed}>Перевод</button>
      )}
    </div>
  );
};

export default FleshCard;
