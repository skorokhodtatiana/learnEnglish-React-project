import "./assets/App.scss";
import Header from "./components/header/Header";
import logo from "./assets/images/logo.png";
import "font-awesome/css/font-awesome.min.css";
import TopicCard from "./components/topicCard/TopicCard";
import React, { useState } from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

//import Table from "./components/table/Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tabel from "./components/table/Table";
import Topic from "./components/topicCard/Topic";
//import { TopicCardPattern } from "./components/topicCard/TopicCard";

function App() {
  const [isTable, setIsTable] = useState(false);
  // const renderMainMenu = () => {
  //   if (isTable) {
  //     return <Table />;
  //   } else {
  //     return <TopicCard />;
  //   }
  // };

  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo}></Header>

        <Routes>
          <Route exact path="table" element={<Tabel />}></Route>
          <Route exact path="/" element={<TopicCard />}></Route>
          <Route exact path="topicCard/:topicName" element={<Topic />}></Route>
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
                <h1>404</h1>
                <h3>Not found</h3>
              </main>
            }
          />
          <Route exact path="topicCard/:topicName" element={<Topic />}></Route>
        </Routes>

        <Footer onClickButtonTable={() => setIsTable(!isTable)}></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
