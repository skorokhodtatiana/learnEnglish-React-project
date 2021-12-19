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

  const [inputs, setInputs] = useState({
    englishWord: englishWord,
    transcription: transcription,
    translation: translation,
    topic: topic,
  });

  const [disabledSave, setdisabledSave] = useState(false);

  const onChangeInput = (e) => {
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
    e.target.value === "" ? setdisabledSave(true) : setdisabledSave(false);
  };

  const cancelChanges = () => {
    setselectEdit(false);
  };

  const handleDelete = () => {
    let newListCards = dataCards.filter((el) => el.id !== id);
    props.updateDataAfterDelete(newListCards);
  };

  const saveChanges = (id) => {
    const newArr = dataCards.map((item) =>
      item.id === id
        ? {
            ...item,
            englishWord: inputs.englishWord,
            transcription: inputs.transcription,
            translation: inputs.translation,
            topic: inputs.topic,
          }
        : item
    );

    props.updateEditWord(newArr);
    setselectEdit(false);
  };

  return selectEdit ? (
    <tr>
      <td>{id}</td>
      <td>
        <input
          type="text"
          className={inputs.englishWord === "" ? "borderPink" : "borderGreen"}
          name="englishWord"
          placeholder={englishWord}
          value={inputs.englishWord}
          onChange={(e) => onChangeInput(e)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          className={inputs.transcription === "" ? "borderPink" : "borderGreen"}
          name="transcription"
          placeholder={transcription}
          value={inputs.transcription}
          onChange={(e) => onChangeInput(e)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          className={inputs.translation === "" ? "borderPink" : "borderGreen"}
          name="translation"
          placeholder={translation}
          value={inputs.translation}
          onChange={(e) => onChangeInput(e)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          className={inputs.topic === "" ? "borderPink" : "borderGreen"}
          name="topic"
          placeholder={topic}
          value={inputs.topic}
          onChange={(e) => onChangeInput(e)}
        ></input>
      </td>
      <td>
        {disabledSave ? (
          <button disabled onClick={() => saveChanges(id)}>
            Save
          </button>
        ) : (
          <button onClick={() => saveChanges(id)}>Save</button>
        )}

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
