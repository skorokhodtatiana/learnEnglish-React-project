import "./assets/App.scss";
import Header from "./components/header/Header";
import logo from "./assets/images/logo.png";
import "font-awesome/css/font-awesome.min.css";
import TopicCard from "./components/topicCard/TopicCard";
import FleshCard from "./components/fleshCard/FleshCard";
// import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header logo={logo}></Header>
      <TopicCard></TopicCard>
      <FleshCard></FleshCard>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
