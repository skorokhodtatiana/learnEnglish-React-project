import "./assets/App.scss";
import Header from "./components/header/Header";
import logo from "./assets/images/logo.png";
import "font-awesome/css/font-awesome.min.css";
import TopicCard from "./components/topicCard/TopicCard";

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
const topicCards = [
  { id: 1, image: food, nameCard: "Food", size: 5 },
  { id: 2, image: family, nameCard: "Family", size: 4 },
  { id: 3, image: animal, nameCard: "Animals", size: 7 },
  { id: 4, image: travel, nameCard: "Travel", size: 5 },
  { id: 5, image: work, nameCard: "Work", size: 5 },
  { id: 6, image: nature, nameCard: "Nature", size: 5 },
];

function App() {
  return (
    <div className="App">
      <Header logo={logo}></Header>
      <div className="topicCard-wrapper">
        {topicCards.map((card, id) => (
          <TopicCard
            key={card.id}
            image={card.image}
            nameCard={card.nameCard}
            size={"(" + card.size + " cards)"}
          ></TopicCard>
        ))}
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
