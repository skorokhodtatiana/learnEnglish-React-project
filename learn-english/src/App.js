import "./assets/App.css";
import Header from "./components/Header";
import logo from "./assets/images/logo.png";
import TopicCard from "./components/TopicCards";

function App() {
  return (
    <div className="App">
      <Header logo={logo}></Header>
      <TopicCard></TopicCard>
    </div>
  );
}

export default App;
