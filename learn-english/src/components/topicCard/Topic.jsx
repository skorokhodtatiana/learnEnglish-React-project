import { useParams } from "react-router-dom";
import FlashCard from "../flashCard/FlashCard";
import { dataCards } from "../../assets/DataCards";
import React, { useState, useRef, useEffect } from "react";

export default function Topic(props) {
  let params = useParams();

  const arrTopic = dataCards.filter((word) => word.topic === params.topicName);

  const [index, setIndex] = useState(0);
  const slideLeft = () => {
    setIndex(index - 1);
  };
  const slideRight = () => {
    setIndex(index + 1);
  };

  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, [index]);

  const [count, setcount] = useState(0);
  const [modifiedTopicArr, setcountWord] = useState(arrTopic);

  const addOneCard = () => {
    if (!arrTopic[index].isLearnWord) {
      setcount(count + 1);
    }
    modifiedTopicArr[index].isLearnWord = true;
  };

  return (
    <>
      <h2 className="nameChoseTopic">Topic card is {params.topicName}</h2>;
      <p className="numberCard">Выучено слов: {count}</p>
      <div>
        <div className="topicCard-wrapper">
          <div className="card-container">
            {index > 0 ? (
              <button onClick={() => slideLeft()} className="btnStep">
                &larr;
              </button>
            ) : (
              <button disabled className="btnStepDisabled">
                &larr;
              </button>
            )}
            <FlashCard
              key={arrTopic[index].id}
              englishWord={arrTopic[index].englishWord}
              transcription={arrTopic[index].transcription}
              translation={arrTopic[index].translation}
              wordRu={arrTopic[index].wordRu}
              addOneCard={addOneCard}
              ref={ref}
            />
            {index < arrTopic.length - 1 ? (
              <button
                onClick={() => slideRight(arrTopic[index])}
                className="btnStep"
              >
                &rarr;
              </button>
            ) : (
              <button disabled className="btnStepDisabled">
                &rarr;
              </button>
            )}
          </div>
        </div>
        <div className="count">{index + 1 + "/" + arrTopic.length}</div>
      </div>
    </>
  );
}
