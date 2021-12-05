import React, { useState } from "react";
import FlashCard from "../flashCard/FlashCard";
import "./_topicCard.scss";
import { dataCards, initCards } from "../../assets/DataCards.js";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const TopicCardPattern = (props) => {
  const { id, image, nameCard, size } = props;

  const openTopicCard = (id) => {
    props.onClickTopic(id);
  };

  const showTopicCards = props.isChosen ? "isNone" : " ";
  const tableVisible = props.isChosenTable ? "isNone" : " ";

  const arrTopic = dataCards.filter((word) => word.topic === props.nameCard);

  const [index, setIndex] = useState(0);

  const slideLeft = () => {
    setIndex(index - 1);
  };

  const slideRight = () => {
    setIndex(index + 1);
  };

  return (
    <div className={"topicCard" + showTopicCards + tableVisible}>
      {props.isChosen ? (
        <div>
          <h3 className="nameChoseTopic">Chosen topic is {nameCard}</h3>
          <div className="topicCard-wrapper">
            <div className="card-container">
              {index > 0 && (
                <button onClick={() => slideLeft()} className="btnStep">
                  &larr;
                </button>
              )}
              <FlashCard
                key={arrTopic[index].id}
                englishWord={arrTopic[index].englishWord}
                transcription={arrTopic[index].transcription}
                translation={arrTopic[index].translation}
                wordRu={arrTopic[index].wordRu}
              />
              {index < arrTopic.length - 1 && (
                <button
                  onClick={() => slideRight(arrTopic[index])}
                  className="btnStep"
                >
                  &rarr;
                </button>
              )}
            </div>
          </div>
          <div className="count">{index + 1 + "/" + arrTopic.length}</div>
        </div>
      ) : (
        <div>
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
      )}
    </div>
  );
};

const TopicCard = () => {
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
          <TopicCardPattern
            key={card.id}
            id={card.id}
            image={card.image}
            nameCard={card.nameCard}
            size={"(" + card.size + " cards)"}
            onClickTopic={() => handleClick(id)}
            to={`/topicCards/${card.nameCard}`}
          ></TopicCardPattern>
        ))}

      {isTopicChosen && (
        <TopicCardPattern
          key={topicCards[chosenCardId].id}
          image={topicCards[chosenCardId].image}
          nameCard={topicCards[chosenCardId].nameCard}
          size={"(" + topicCards[chosenCardId].size + " cards)"}
          isChosen={topicCards[chosenCardId].isChosen}
          onClickTopic={() => handleClick()}
          to={`/topicCards/${topicCards[chosenCardId].nameCard}`}
        ></TopicCardPattern>
      )}
    </div>
  );
};

export default TopicCard;
