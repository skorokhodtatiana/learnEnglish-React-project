import "./assets/App.css";
import Header from "./components/Header";
import logo from "./assets/images/logo.png";
import TopicCard from "./components/TopicCards";
import FleshCard from "./components/FleshCards";

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
