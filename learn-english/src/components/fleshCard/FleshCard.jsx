const FleshCard = (props) => {
  const { image, nameCard } = props;
  return (
    <div>
      <img src={image} alt={nameCard}></img>
      <div>{nameCard}</div>
    </div>
  );
};

export default FleshCard;
