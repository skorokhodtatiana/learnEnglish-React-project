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
  const [isTable, setIsTable] = useState(false);
  const renderMainMenu = () => {
    if (isTable) {
      return <Table />;
    } else {
      return <TopicCard />;
    }
  };

  return (
    <div className="App">
      <Header logo={logo}></Header>

      <div className="topicCard-wrapper">
        <Outlet />
        {renderMainMenu()}
      </div>
      <Footer onClickButtonTable={() => setIsTable(!isTable)}></Footer>
    </div>
  );
}

export default App;
