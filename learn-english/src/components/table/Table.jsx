import BodyTable from "./BodyTable";
import dataCards from "../../assets/DataCards";
import HeadTable from "./HeadTable";
import "./_table.scss";
const Tabel = () => {
  return (
    <table className="table">
      <HeadTable></HeadTable>
      <tbody className="tbody">
        {dataCards.map((card) => (
          <BodyTable
            key={card.id}
            id={card.id}
            englishWord={card.englishWord}
            transcription={card.transcription}
            russianWord={card.russianWord}
            topic={card.topic}
          ></BodyTable>
        ))}
      </tbody>
    </table>
  );
};
export default Tabel;
