import BodyTable from "./BodyTable";
import dataCards from "../../assets/DataCards";
import HeadTable from "./HeadTable";
import NewWord from "./NewWord";
import "./_table.scss";
import { useState } from "react";

const Tabel = (props) => {
  const [newArrData, setnewArrData] = useState(dataCards);

  const updateDataAfterDelete = (newArr) => {
    console.log("Работвет передача при удалении");
    setnewArrData(newArr);
  };

  const updateEditWord = (newArr) => {
    console.log("Работвет передача при редактировании");
    setnewArrData(newArr);
  };

  const updateNewWord = (newArr) => {
    console.log("Работвет передача с новым словом");
    setnewArrData(newArr);
  };
  return (
    <table className="table">
      <HeadTable></HeadTable>

      <tbody className="tbody">
        <NewWord updateNewWord={updateNewWord}></NewWord>
        {newArrData.map((card) => (
          <BodyTable
            key={card.id}
            id={card.id}
            englishWord={card.englishWord}
            transcription={card.transcription}
            translation={card.translation}
            topic={card.topic}
            // updateData={props.setnewArrData}
            updateEditWord={updateEditWord}
            updateDataAfterDelete={updateDataAfterDelete}
          ></BodyTable>
        ))}
      </tbody>
    </table>
  );
};
export default Tabel;
