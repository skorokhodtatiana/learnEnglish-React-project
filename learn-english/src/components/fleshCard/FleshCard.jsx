const FleshCard = (props) => {
  const { englishWord, transcription, russianWord } = props;
  return (
    <div className="fleshCard">
      <div>{englishWord}</div>
      <div>{transcription}</div>
      <div>{russianWord}</div>
      <button>Перевод</button>
    </div>
  );
};

export default FleshCard;
