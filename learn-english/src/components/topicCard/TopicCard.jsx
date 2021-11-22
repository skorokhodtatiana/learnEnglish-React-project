// import React, { useState } from "react";
import FlashCard from "../flashCard/FlashCard";
import "./_topicCard.scss";
import dataCards from "../../assets/DataCards.js";
//import * as classnames from "classnames";
// let classNames = require("classnames");

const TopicCard = (props) => {
  const { id, image, nameCard, size } = props;

  const openTopicCard = (id) => {
    props.onClickTopic(id);
  };

  const showTopicCards = props.isChosen ? "isNone" : " ";
  const showTable = props.isChosenTable ? "isNone" : " ";
  // console.log(props.isChosenTable);

  // const classNameTopicCard = classNames("topicCard", {
  //   isNone: props.isChosenTable && props.isChosen,
  // });

  return (
    <div className={"topicCard" + showTopicCards + showTable}>
      {props.isChosen ? (
        <div>
          <h3 className="nameChoseTopic">Chosen topic is {nameCard}</h3>
          <div className="topicCard-wrapper">
            {dataCards
              .filter((word) => word.topic === props.nameCard)
              .map((animal, id) => (
                <FlashCard
                  key={id}
                  englishWord={animal.englishWord}
                  transcription={animal.transcription}
                  russianWord={animal.russianWord}
                ></FlashCard>
              ))}
          </div>
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

export default TopicCard;
