import "./assets/App.scss";
import Header from "./components/header/Header";
import logo from "./assets/images/logo.png";
import "font-awesome/css/font-awesome.min.css";
import TopicCard from "./components/topicCard/TopicCard";
import React, { useState } from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import Table from "./components/table/Table";
import { initCards } from "./assets/DataCards";

function App() {
  const [isTable, setIsTable] = useState(true);
  const renderMainMenu = () => {
    if (isTable) {
      return <Table />;
    } else {
      return <TopicCard />;
    }
  };

  // const [topicCards, setTopicCards] = useState(initCards);
  // const [isTopicChosen, setIsTopicChosen] = useState(false); //слежу за выбрано/не выбрано
  // const [chosenCardId, setChosenCardId] = useState(-1); //слежу за id топика

  // const handleClick = (id) => {
  //   setIsTopicChosen(true);
  //   setChosenCardId(id);
  //   topicCards[id].isChosen = true;
  // };

  const [isButtonClick, setisButtonClick] = useState(false);
  const [isChosenTable, setisChosenTable] = useState(false);

  const showTable = () => {
    setisButtonClick(true);
    setisChosenTable(true);
  };

  return (
    <div className="App">
      <Header logo={logo}></Header>
      <Outlet />

      <div className="topicCard-wrapper">
        {renderMainMenu()}
        {/* {!isTopicChosen &&
          topicCards.map((card, id) => (
            <Link to="/topicCard">
              <TopicCard
                key={card.id}
                id={card.id}
                image={card.image}
                nameCard={card.nameCard}
                size={"(" + card.size + " cards)"}
                isChosenTable={isChosenTable}
                onClickTopic={() => handleClick(id)}
                to={`/topicCards/${card.nameCard}`}
              ></TopicCard>
            </Link>
          ))}

        {isTopicChosen && (
          <TopicCard
            key={topicCards[chosenCardId].id}
            image={topicCards[chosenCardId].image}
            nameCard={topicCards[chosenCardId].nameCard}
            size={"(" + topicCards[chosenCardId].size + " cards)"}
            isChosen={topicCards[chosenCardId].isChosen}
            onClickTopic={() => handleClick()}
            // to={`/topicCards/${topicCards[chosenCardId].nameCard}`}
          ></TopicCard>
        )} */}
        {isButtonClick && <Table></Table>}
      </div>
      <Footer onClickButtonTable={() => showTable()}></Footer>
    </div>
  );
}

export default App;
