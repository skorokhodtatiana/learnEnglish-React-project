import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import dataCards from "../../assets/DataCards.js";
import { useState } from "react";

const BodyTable = (props) => {
  const { id, englishWord, transcription, translation, topic } = props;

  const [selectEdit, setselectEdit] = useState(false);
  const handleClickEdit = () => {
    setselectEdit(!false);
  };
  const [changeInputEngWord, setchangeInputEngWord] = useState(englishWord);
  const [changeInputTranscription, setchangeInputTranscription] =
    useState(transcription);
  const [changeInputRus, setchangeInputRus] = useState(translation);

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
    let sortList = dataCards.filter((el) => el.id !== id);
    setoldListCards(sortList);
    const newWord = {
      id: id,
      englishWord: changeInputEngWord,
      transcription: changeInputTranscription,
      translation: changeInputRus,
      topic: topic,
    };
    // console.log(newWord);
    const newArr = [...sortList];
    newArr.push(newWord);
    // console.log(newArr);
  };

  const cancelChanges = () => {
    setselectEdit(false);
  };

  const [oldListCards, setoldListCards] = useState(dataCards);

  const handleDelete = () => {
    let newListCards = dataCards.filter((el) => el.id !== id);
    setoldListCards(newListCards);
    // console.log(newListCards);
    props.updateData(newListCards);
  };

  return selectEdit ? (
    <tr>
      <td>{id}</td>
      <td>
        <input
          type="text"
          name="value"
          placeholder={englishWord}
          // value={englishWord}
          onChange={(eng) => handleChangeEng(eng)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="value"
          placeholder={transcription}
          // value={transcription}
          onChange={(tr) => handleChangeTranscription(tr)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="value"
          placeholder={translation}
          // value={translation}
          onChange={(rus) => handleChangeRus(rus)}
        ></input>
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
      <td>{translation}</td>
      <td>{topic}</td>
      <td>
        <button onClick={handleClickEdit} className="button">
          <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
        </button>
        <button value={id} onClick={() => handleDelete()} className="button">
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </td>
    </tr>
  );
};

export default BodyTable;
