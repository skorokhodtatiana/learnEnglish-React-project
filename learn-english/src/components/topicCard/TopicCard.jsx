import React, { useState } from "react";
import FlashCard from "../flashCard/FlashCard";
import "./_topicCard.scss";
import dataCards from "../../assets/DataCards.js";

const TopicCard = (props) => {
  const { id, image, nameCard, size } = props;

  const openTopicCard = (id) => {
    props.onClickTopic(id);
  };

  const showTopicCards = props.isChosen ? "isNone" : " ";
  const showTable = props.isChosenTable ? "isNone" : " ";

  const arrTopic = dataCards.filter((word) => word.topic === props.nameCard);

  const [index, setIndex] = useState(0);

  const slideLeft = () => {
    console.log(arrTopic.length + " index " + index);
    if (index > 0 && index < arrTopic.length) {
      setIndex(index - 1);
      console.log("index-1 :" + index);
    }
  };

  const slideRight = () => {
    console.log(arrTopic.length + " index " + index);
    if (index >= 0 && index < arrTopic.length - 1) {
      setIndex(index + 1);
      console.log("index+1 :" + index);
    }
  };

  return (
    <div className={"topicCard" + showTopicCards + showTable}>
      {props.isChosen ? (
        <div>
          <h3 className="nameChoseTopic">Chosen topic is {nameCard}</h3>
          <div className="topicCard-wrapper">
            <button onClick={() => slideLeft()} className="btnStep">
              &larr;
            </button>
            <div className="card-container">
              {arrTopic.map((card, n) => {
                let position = n === index ? "activeCard" : "nextCard";

                return (
                  <FlashCard {...card} key={card.id} cardStyle={position} />
                );
              })}
            </div>

            <button
              onClick={() => slideRight(arrTopic[index])}
              className="btnStep"
            >
              &rarr;
            </button>
          </div>
          <div>{index + "/" + arrTopic.length}</div>
        </div>
      ) : (
        <div>
          <div className="topicCard__picture">{image}</div>
          <div className={"topicCard__name textCard"}>{nameCard}</div>
          <div className="textCard">{size}</div>
          <button
            id={id}
            onClick={() => {
              openTopicCard(id);
            }}
            className="topicCard__btnOpen"
          >
            Open
          </button>
        </div>
      )}
    </div>
  );
};

export default TopicCard;

// const TopicCard = (props) => {
//   const { id, image, nameCard, size } = props;

//   const openTopicCard = (id) => {
//     props.onClickTopic(id);
//   };

//   const showTopicCards = props.isChosen ? "isNone" : " ";
//   const showTable = props.isChosenTable ? "isNone" : " ";

//   // const classNameTopicCard = classNames("topicCard", {
//   //   isNone: props.isChosenTable && props.isChosen,
//   // });

//   return (
//     <div className={"topicCard" + showTopicCards + showTable}>
//       {props.isChosen ? (
//         <div>
//           <h3 className="nameChoseTopic">Chosen topic is {nameCard}</h3>
//           <div className="topicCard-wrapper">
//             {dataCards
//               .filter((word) => word.topic === props.nameCard)
//               .map((animal, id) => (
//                 <FlashCard
//                   key={id}
//                   englishWord={animal.englishWord}
//                   transcription={animal.transcription}
//                   translation={animal.translation}
//                 ></FlashCard>
//               ))}
//           </div>
//         </div>
//       ) : (
//         <div>
//           <div className="topicCard__picture">{image}</div>
//           <div className={"topicCard__name textCard"}>{nameCard}</div>
//           <div className="textCard">{size}</div>
//           <button
//             id={id}
//             onClick={() => {
//               openTopicCard(id);
//             }}
//             className="topicCard__btnOpen"
//           >
//             Open
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TopicCard;
