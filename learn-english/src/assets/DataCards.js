//import { useState } from "react";
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
// const [newArrData, setnewArrData] = useState(dataCards);
export const dataCards = [
  {
    id: 0,
    englishWord: "butterfly",
    transcription: "[ˈbʌtəflaɪ]",
    translation: "бабочка",
    topic: "Animals",
    wordRu: false,
  },
  {
    id: 1,
    englishWord: "hedgehog",
    transcription: "[ˈhedʒhɒɡ]",
    translation: "еж",
    topic: "Animals",
    wordRu: false,
  },
  {
    id: 2,
    englishWord: "unicorn",
    transcription: "[ˈyo͞onəˌkôrn]",
    translation: "единорог",
    topic: "Animals",
    wordRu: false,
  },
  {
    id: 3,
    englishWord: "cow",
    transcription: "[kaʊ]",
    translation: "корова",
    topic: "Animals",
    wordRu: false,
  },
  {
    id: 4,
    englishWord: "tiger",
    transcription: "[ˈtaɪgə]",
    translation: "тигр",
    topic: "Animals",
    wordRu: false,
  },
  {
    id: 5,
    englishWord: "mother",
    transcription: "[ˈmʌðə]",
    translation: "мама",
    topic: "Family",
    wordRu: false,
  },
  {
    id: 6,
    englishWord: "dad",
    transcription: "[dæd]",
    translation: "папа",
    topic: "Family",
    wordRu: false,
  },
  {
    id: 7,
    englishWord: "nephew",
    transcription: "[ˈnɛfju]",
    translation: "племянник",
    topic: "Family",
    wordRu: false,
  },
  {
    id: 8,
    englishWord: "son",
    transcription: "[sʌn]",
    translation: "сын",
    topic: "Family",
    wordRu: false,
  },
  {
    id: 9,
    englishWord: "daughter",
    transcription: "[ˈdɔːtə]",
    translation: "дочь",
    topic: "Family",
    wordRu: false,
  },
  {
    id: 10,
    englishWord: "apple",
    transcription: "[aepl]",
    translation: "яблоко",
    topic: "Food",
    wordRu: false,
  },
  {
    id: 11,
    englishWord: "meat",
    transcription: "[mi:t]",
    translation: "мясо",
    topic: "Food",
    wordRu: false,
  },
  {
    id: 12,
    englishWord: "fish",
    transcription: "[fɪʃ]",
    translation: "рыба",
    topic: "Food",
    wordRu: false,
  },
  {
    id: 13,
    englishWord: "milk",
    transcription: "[milk]",
    translation: "молоко",
    topic: "Food",
    wordRu: false,
  },
  {
    id: 14,
    englishWord: "dog",
    transcription: "[dɒg]",
    translation: "собака",
    topic: "Animals",
    wordRu: false,
  },
  {
    id: 15,
    englishWord: "dinosaur",
    transcription: "[ˈdaɪnəsɔː]",
    translation: "динозавр",
    topic: "Animals",
    wordRu: false,
  },
  {
    id: 16,
    englishWord: "bread",
    transcription: "[bred]",
    translation: "хлеб",
    topic: "Food",
    wordRu: false,
  },
  {
    id: 17,
    englishWord: "uncle",
    transcription: "[ʌŋkl]",
    translation: "дядя",
    topic: "Family",
    wordRu: false,
  },
  {
    id: 18,
    englishWord: "sister",
    transcription: "[ˈsɪstə]",
    translation: "сестра",
    topic: "Family",
    wordRu: false,
  },
  {
    id: 19,
    englishWord: "plane",
    transcription: "[pleɪn]",
    translation: "самолет",
    topic: "Travel",
    wordRu: false,
  },
  {
    id: 20,
    englishWord: "attractions",
    transcription: "[əˈtrækʃn]",
    translation: "достопримечательности",
    topic: "Travel",
    wordRu: false,
  },
  {
    id: 21,
    englishWord: "train",
    transcription: "[treɪn]",
    translation: "поезд",
    topic: "Travel",
    wordRu: false,
  },
  {
    id: 22,
    englishWord: "ticket",
    transcription: "[ˈtɪkɪt]",
    translation: "билет",
    topic: "Travel",
    wordRu: false,
  },
  {
    id: 23,
    englishWord: "job",
    transcription: "[ʤəʊb]",
    translation: "работа",
    topic: "Work",
    wordRu: false,
  },
  {
    id: 24,
    englishWord: "tree",
    transcription: "[triː]",
    translation: "дерево",
    topic: "Nature",
    wordRu: false,
  },
];

export const initCards = [
  {
    id: 0,
    image: food,
    nameCard: "Food",
    size: 5,
    isChosen: false,
    isChosenTable: false,
  },
  {
    id: 1,
    image: family,
    nameCard: "Family",
    size: 5,
    isChosen: false,
    isChosenTable: false,
  },
  {
    id: 2,
    image: animal,
    nameCard: "Animals",
    size: 7,
    isChosen: false,
    isChosenTable: false,
  },
  {
    id: 3,
    image: travel,
    nameCard: "Travel",
    size: 5,
    isChosen: false,
    isChosenTable: false,
  },
  {
    id: 4,
    image: work,
    nameCard: "Work",
    size: 5,
    isChosen: false,
    isChosenTable: false,
  },
  {
    id: 5,
    image: nature,
    nameCard: "Nature",
    size: 5,
    isChosen: false,
    isChosenTable: false,
  },
];

// export default dataCards;
