import React, { useState } from "react";
import "./_topicCard.scss";
import { initCards } from "../../assets/DataCards.js";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const TopicCardPattern = (props) => {
  const { id, image, nameCard, size } = props;
  const openTopicCard = (id) => {
    props.onClickTopic(id);
  };
  return (
    <div>
      {
        <div className="topicCard">
          <div className="topicCard__picture">{image}</div>
          <div className={"topicCard__name textCard"}>{nameCard}</div>
          <div className="textCard">{size}</div>
          <button
            id={id}
            onClick={() => {
              openTopicCard(id);
            }}
            className="topicCard__btnOpen"
          >
            Open
          </button>
        </div>
      }
    </div>
  );
};

const TopicCard = (props) => {
  const [topicCards, setTopicCards] = useState(initCards);
  const [isTopicChosen, setIsTopicChosen] = useState(false); //слежу за выбрано/не выбрано
  const [chosenCardId, setChosenCardId] = useState(-1); //слежу за id топика

  const handleClick = (id) => {
    setIsTopicChosen(true);
    setChosenCardId(id);
    topicCards[id].isChosen = true;
  };

  return (
    <div className="topicCard-wrapper">
      {!isTopicChosen &&
        topicCards.map((card, id) => (
          <Link
            className="link"
            to={`/topicCard/${card.nameCard}`}
            key={card.id}
          >
            <TopicCardPattern
              key={card.id}
              id={card.id}
              image={card.image}
              nameCard={card.nameCard}
              size={"(" + card.size + " cards)"}
              onClickTopic={() => handleClick(id)}
            ></TopicCardPattern>
          </Link>
        ))}

      {isTopicChosen && (
        <TopicCardPattern
          key={topicCards[chosenCardId].id}
          image={topicCards[chosenCardId].image}
          nameCard={topicCards[chosenCardId].nameCard}
          size={"(" + topicCards[chosenCardId].size + " cards)"}
          isChosen={topicCards[chosenCardId].isChosen}
          onClickTopic={() => handleClick()}
        ></TopicCardPattern>
      )}
      <Outlet />
    </div>
  );
};

export default TopicCard;
