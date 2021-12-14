import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { dataCards } from "../../assets/DataCards.js";
import { useState } from "react";

const BodyTable = (props) => {
  const { id, englishWord, transcription, translation, topic } = props;

  const [selectEdit, setselectEdit] = useState(false);
  const handleClickEdit = () => {
    setselectEdit(true);
  };
  const [changeInputEngWord, setchangeInputEngWord] = useState(englishWord);
  const [changeInputTranscription, setchangeInputTranscription] =
    useState(transcription);
  const [changeInputRus, setchangeInputRus] = useState(translation);
  const [changeInputTopic, setchangeInputTopic] = useState(topic);

  const saveChanges = (id) => {
    console.log(id);

    const newArr = dataCards.map((item) =>
      item.id === id
        ? {
            ...item,
            englishWord: changeInputEngWord,
            transcription: changeInputTranscription,
            translation: changeInputRus,
          }
        : item
    );

    props.updateEditWord(newArr);
    setselectEdit(false);
  };

  const cancelChanges = () => {
    setselectEdit(false);
  };

  const handleDelete = () => {
    let newListCards = dataCards.filter((el) => el.id !== id);
    props.updateDataAfterDelete(newListCards);
  };

  return selectEdit ? (
    <tr>
      <td>{id}</td>
      <td>
        <input
          type="text"
          name="value"
          placeholder={englishWord}
          value={changeInputEngWord}
          onChange={(eng) => setchangeInputEngWord(eng.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="value"
          placeholder={transcription}
          value={changeInputTranscription}
          onChange={(tr) => setchangeInputTranscription(tr.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="value"
          placeholder={translation}
          value={changeInputRus}
          onChange={(rus) => setchangeInputRus(rus.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="value"
          placeholder={topic}
          value={changeInputTopic}
          onChange={(top) => setchangeInputTopic(top.target.value)}
        ></input>
      </td>
      <td>
        <button onClick={() => saveChanges(id)}>Save</button>
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
        <button onClick={() => handleClickEdit()} className="button">
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
