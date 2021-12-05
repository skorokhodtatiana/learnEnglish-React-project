import "./assets/App.scss";
import Header from "./components/header/Header";
import logo from "./assets/images/logo.png";
import "font-awesome/css/font-awesome.min.css";
import TopicCard from "./components/topicCard/TopicCard";
import React, { useState } from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

import Table from "./components/table/Table";
import { initCards } from "./assets/DataCards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tabel from "./components/table/Table";
import Topic from "./components/topicCard/Topic";

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
      <BrowserRouter>
        <Header logo={logo}></Header>

        <Routes>
          <Route exact path="table" element={<Tabel />}></Route>
          <Route exact path="/" element={<TopicCard />}>
            <Route exact path="/:topicName" element={<Topic />}></Route>
          </Route>
          <Route
            path="/404"
            element={
              <main style={{ textAlign: "center", fontSize: "4rem" }}>
                <h1>404</h1>
                <h3>Not found</h3>
              </main>
            }
          ></Route>
          <Route
            path="*"
            element={
              <main
                style={{
                  padding: "1rem",
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>

        {/* <div className="topicCard-wrapper">
        <Outlet />
        {renderMainMenu()}
      </div> */}

        <Footer onClickButtonTable={() => setIsTable(!isTable)}></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
