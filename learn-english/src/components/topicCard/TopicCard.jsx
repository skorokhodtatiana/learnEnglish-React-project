import React, { useState } from "react";
import FleshCard from "../fleshCard/FleshCard";
import "./_topicCard.scss";

const animalWords = [
  {
    id: "1",
    englishWord: "butterfly",
    transcription: "[ ˈbʌtəflaɪ ]",
    russianWord: "бабочка",
  },
  {
    id: "2",
    englishWord: "hedgehog",
    transcription: "[ ˈhedʒhɒɡ ]",
    russianWord: "еж",
  },
  {
    id: "3",
    englishWord: "unicorn",
    transcription: "[ˈyo͞onəˌkôrn]",
    russianWord: "единорог",
  },
  {
    id: "4",
    englishWord: "cow",
    transcription: " [kaʊ]",
    russianWord: "корова",
  },
  {
    id: "5",
    englishWord: "tiger",
    transcription: "[ˈtaɪgə]",
    russianWord: "тигр",
  },
];

const TopicCard = (props) => {
  const { id, image, nameCard, size } = props;

  const [isOpen, setOpen] = useState(false);
  const [isHidden, setHidden] = useState(false);

  const openTopicCard = () => {
    setOpen(!isOpen);

    setHidden(!isHidden);
  };

  const showTopicCards = isHidden ? "isNone" : " ";
  return (
    <div className={"topicCard" + showTopicCards} id={id}>
      {isOpen ? (
        <div className="topicCard-wrapper">
          {animalWords.map((animal, id) => (
            <FleshCard
              key={animal.id}
              englishWord={animal.englishWord}
              transcription={animal.transcription}
              russianWord={animal.russianWord}
            ></FleshCard>
          ))}
        </div>
      ) : (
        <div>
          <div className="topicCard__picture">{image}</div>
          <div className={"topicCard__name textCard"}>{nameCard}</div>
          <div className="textCard">{size}</div>
          <button
            onClick={() => {
              openTopicCard();
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
