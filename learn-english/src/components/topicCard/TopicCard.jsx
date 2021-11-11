const TopicCard = (props) => {
  const { image, nameCard, size, btnOpen } = props;
  return (
    <div>
      <img src={image} alt={nameCard}></img>
      <div>{nameCard}</div>
      <div>{size}</div>
      <div>{btnOpen}</div>
    </div>
  );
};

export default TopicCard;
