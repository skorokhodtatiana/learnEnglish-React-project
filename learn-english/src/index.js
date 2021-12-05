import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tabel from "./components/table/Table";
import TopicCard from "./components/topicCard/TopicCard";
//import FlashCard from "./components/flashCard/FlashCard";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route path="table" render={(props) => <Tabel {...props} />}></Route> */}
          <Route path="table" element={<Tabel />}></Route>
          <Route
            path="topicCard"
            // path="topicCard"
            // render={(props) => <TopicCard {...props} />}
            element={<TopicCard />}
          ></Route>
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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
