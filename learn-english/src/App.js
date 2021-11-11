import "./assets/App.scss";
import Header from "./components/header/Header";
import logo from "./components/header/logo.png";
import TopicCard from "./components/topicCard/TopicCard";
import FleshCard from "./components/fleshCard/FleshCard";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <Header logo={logo}></Header>
      <TopicCard></TopicCard>
      <FleshCard></FleshCard>
    </div>
  );
}

export default App;
