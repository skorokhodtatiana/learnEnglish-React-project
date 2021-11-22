import "./assets/App.scss";
import Header from "./components/header/Header";
import logo from "./assets/images/logo.png";
import "font-awesome/css/font-awesome.min.css";
import TopicCard from "./components/topicCard/TopicCard";
import React, { useState } from "react";
// import dataCards from "./assets/DataCards";
import dataCards from "./assets/DataCards.js";
import Footer from "./components/footer/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faUserFriends,
  faCat,
  faSuitcaseRolling,
  faBriefcase,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
import Table from "./components/table/Table";

const food = (
  <FontAwesomeIcon
    icon={faHamburger}
    className={"topic-picture food-purple"}
  ></FontAwesomeIcon>
);
const family = (
  <FontAwesomeIcon
    icon={faUserFriends}
    className={"topic-picture family-red"}
  ></FontAwesomeIcon>
);
const animal = (
  <FontAwesomeIcon
    icon={faCat}
    className={"topic-picture animal-orange"}
  ></FontAwesomeIcon>
);
const travel = (
  <FontAwesomeIcon
    icon={faSuitcaseRolling}
    className={"topic-picture travel-yellow"}
  ></FontAwesomeIcon>
);
const work = (
  <FontAwesomeIcon
    icon={faBriefcase}
    className={"topic-picture work-green"}
  ></FontAwesomeIcon>
);
const nature = (
  <FontAwesomeIcon
    icon={faTree}
    className={"topic-picture nature-blue"}
  ></FontAwesomeIcon>
);

function App() {
  const initCards = [
    {
      id: 0,
      image: food,
      nameCard: "Food",
      size: 5,
      isChosen: false,
      isChosenTable: false,
    },
    {
      id: 1,
      image: family,
      nameCard: "Family",
      size: 4,
      isChosen: false,
      isChosenTable: false,
    },
    {
      id: 2,
      image: animal,
      nameCard: "Animals",
      size: 7,
      isChosen: false,
      isChosenTable: false,
    },
    {
      id: 3,
      image: travel,
      nameCard: "Travel",
      size: 5,
      isChosen: false,
      isChosenTable: false,
    },
    {
      id: 4,
      image: work,
      nameCard: "Work",
      size: 5,
      isChosen: false,
      isChosenTable: false,
    },
    {
      id: 5,
      image: nature,
      nameCard: "Nature",
      size: 5,
      isChosen: false,
      isChosenTable: false,
    },
  ];

  const [topicCards, setTopicCards] = useState(initCards);
  const [isTopicChosen, setIsTopicChosen] = useState(false); //слежу за выбрано/не выбрано
  const [chosenCardId, setChosenCardId] = useState(-1); //слежу за id топика

  const handleClick = (id) => {
    setIsTopicChosen(true);
    setChosenCardId(id);
    topicCards[id].isChosen = true;
  };

  const [topCards, settopCards] = useState(initCards);
  const [isButtonClick, setisButtonClick] = useState(false);
  const [isChosenTable, setisChosenTable] = useState(false);

  const showTable = () => {
    setisButtonClick(!false);
    setisChosenTable(!false);
    topCards.isChosenTable = true;
  };

  return (
    <div className="App">
      <Header logo={logo}></Header>
      <div className="topicCard-wrapper">
        {!isTopicChosen &&
          topicCards.map((card, id) => (
            <TopicCard
              key={card.id}
              id={card.id}
              image={card.image}
              nameCard={card.nameCard}
              size={"(" + card.size + " cards)"}
              onClickTopic={() => handleClick(id)}
            ></TopicCard>
          ))}

        {isTopicChosen && (
          <TopicCard
            key={topicCards[chosenCardId].id}
            image={topicCards[chosenCardId].image}
            nameCard={topicCards[chosenCardId].nameCard}
            size={"(" + topicCards[chosenCardId].size + " cards)"}
            isChosen={topicCards[chosenCardId].isChosen}
            onClickTopic={() => handleClick()}
          ></TopicCard>
        )}

        {isButtonClick &&
          dataCards.map((card, id) => (
            <Table
              key={card.id}
              englishWord={card.englishWord}
              transcription={card.transcription}
              russianWord={card.russianWord}
              topic={card.topic}
            ></Table>
          ))}
      </div>
      <Footer onClickButtonTable={() => showTable()}></Footer>
    </div>
  );
}

export default App;
