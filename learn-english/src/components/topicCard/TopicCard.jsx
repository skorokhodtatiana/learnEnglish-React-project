import "./_topicCard.scss";
const TopicCard = (props) => {
  const { image, nameCard, size, btnOpen } = props;
  return (
    <div className="topicCard">
      <div className="topicCard__picture">{image}</div>
      <div>{nameCard}</div>
      <div>{size}</div>
      <div>{btnOpen}</div>
    </div>
  );
};

export default TopicCard;
