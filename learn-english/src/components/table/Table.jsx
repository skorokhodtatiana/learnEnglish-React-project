import BodyTable from "./BodyTable";
import dataCards from "../../assets/DataCards";
import HeadTable from "./HeadTable";
import "./_table.scss";
import { useState } from "react";
const Tabel = (props) => {
  const [newArrData, setnewArrData] = useState(dataCards);
  const updateData = (newArr) => {
    console.log("Работвет передача");
    setnewArrData(newArr);
  };
  return (
    <table className="table">
      <HeadTable></HeadTable>
      <tbody className="tbody">
        {newArrData.map((card) => (
          <BodyTable
            key={card.id}
            id={card.id}
            englishWord={card.englishWord}
            transcription={card.transcription}
            russianWord={card.russianWord}
            topic={card.topic}
            // updateData={props.setnewArrData}
            updateData={updateData}
          ></BodyTable>
        ))}
      </tbody>
    </table>
  );
};
export default Tabel;
