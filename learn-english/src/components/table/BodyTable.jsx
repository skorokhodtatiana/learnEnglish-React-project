import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import dataCards from "../../assets/DataCards.js";
import { useState } from "react";

const BodyTable = (props) => {
  const { id, englishWord, transcription, russianWord, topic } = props;

  const [selectEdit, setselectEdit] = useState(false);
  const handleClickEdit = () => {
    setselectEdit(!false);
  };
  const [changeInputEngWord, setchangeInputEngWord] = useState(englishWord);
  const [changeInputTranscription, setchangeInputTranscription] =
    useState(transcription);
  const [changeInputRus, setchangeInputRus] = useState(russianWord);

  const handleChangeEng = (eng) => {
    setchangeInputEngWord(eng.target.value);
    console.log(changeInputEngWord);
  };

  const handleChangeTranscription = (tr) => {
    setchangeInputTranscription(tr.target.value);
    console.log(changeInputTranscription);
  };

  const handleChangeRus = (rus) => {
    setchangeInputRus(rus.target.value);
    console.log(changeInputRus);
  };
  const saveChanges = () => {
    const newWord = {
      id: id,
      englishWord: changeInputEngWord,
      transcription: changeInputTranscription,
      russianWord: changeInputRus,
      topic: topic,
    };
    console.log(newWord);
    const newArr = [...dataCards];
    // const newArr = dataCards.push(newWord);
    newArr.push(newWord);
    console.log(newArr);
  };

  const cancelChanges = () => {
    setselectEdit(false);
  };

  const [oldListCards, setoldListCards] = useState(dataCards);

  const handleDelete = (id) => {
    console.log(id);
    console.log(oldListCards);
    let newListCards = oldListCards.filter((el) => el.id !== id);
    setoldListCards(newListCards);
  };

  return selectEdit ? (
    <tr>
      <td>{id}</td>
      <td>
        <form action="#">
          <input
            type="text"
            name="value"
            placeholder={englishWord}
            // value={englishWord}
            onChange={(eng) => handleChangeEng(eng)}
          ></input>
        </form>
      </td>
      <td>
        <form action="#">
          <input
            type="text"
            name="value"
            placeholder={transcription}
            // value={transcription}
            onChange={(tr) => handleChangeTranscription(tr)}
          ></input>
        </form>
      </td>
      <td>
        <form action="#">
          <input
            type="text"
            name="value"
            placeholder={russianWord}
            // value={russianWord}
            onChange={(rus) => handleChangeRus(rus)}
          ></input>
        </form>
      </td>
      <td>
        <button>Save</button>
        <button onClick={() => saveChanges()}>Save</button>
        <button onClick={() => cancelChanges()}>Cancel change</button>
      </td>
    </tr>
  ) : (
    <tr>
      <td>{id}</td>
      <td>{englishWord}</td>
      <td>{transcription}</td>
      <td>{russianWord}</td>
      <td>{topic}</td>
      <td>
        <button onClick={handleClickEdit} className="button">
          <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
        </button>
        <button
          value={id}
          onClick={(id) => handleDelete(id)}
          className="button"
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </td>
    </tr>
  );
  //   </tbody>
  // </table>
};

export default BodyTable;
