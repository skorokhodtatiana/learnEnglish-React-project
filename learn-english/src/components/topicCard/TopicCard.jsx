import "./_topicCard.scss";
const TopicCard = (props) => {
  const { image, nameCard, size } = props;
  return (
    <div className="topicCard">
      <div className="topicCard__picture">{image}</div>
      <div className={"topicCard__name textCard"}>{nameCard}</div>
      <div className="textCard">{size}</div>

      <button className="topicCard__btnOpen">Open</button>
    </div>
  );
};

export default TopicCard;
