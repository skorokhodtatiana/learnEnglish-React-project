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

  const [isFilledEng, setisFilledEng] = useState("borderGreen");
  const [isFilledTranscr, setisFilledTranscr] = useState("borderGreen");
  const [isFilledRus, setisFilledRus] = useState("borderGreen");
  const [isFilledTopic, setisFilledTopic] = useState("borderGreen");

  const [disabledSave, setdisabledSave] = useState(false);

  const saveChanges = (id) => {
    console.log(id);

    const newArr = dataCards.map((item) =>
      item.id === id
        ? {
            ...item,
            englishWord: changeInputEngWord,
            transcription: changeInputTranscription,
            translation: changeInputRus,
            topic: changeInputTopic,
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

  const onChangeInputEng = (e) => {
    setchangeInputEngWord(e.target.value);
    e.target.value === ""
      ? setisFilledEng("borderPink") && setdisabledSave(true)
      : setisFilledEng("borderGreen");
    e.target.value === "" ? setdisabledSave(true) : setdisabledSave(false);
  };

  const onChangeInputTransciption = (e) => {
    setchangeInputTranscription(e.target.value);
    e.target.value === ""
      ? setisFilledTranscr("borderPink") && setdisabledSave(true)
      : setisFilledTranscr("borderGreen");
    e.target.value === "" ? setdisabledSave(true) : setdisabledSave(false);
  };

  const onChangeInputRus = (e) => {
    setchangeInputRus(e.target.value);
    e.target.value === ""
      ? setisFilledRus("borderPink")
      : setisFilledRus("borderGreen");
    e.target.value === "" ? setdisabledSave(true) : setdisabledSave(false);
  };

  const onChangeInputTopic = (e) => {
    setchangeInputTopic(e.target.value);
    e.target.value === ""
      ? setisFilledTopic("borderPink")
      : setisFilledTopic("borderGreen");
    e.target.value === "" ? setdisabledSave(true) : setdisabledSave(false);
  };

  return selectEdit ? (
    <tr>
      <td>{id}</td>
      <td>
        <input
          type="text"
          className={isFilledEng}
          name="englishWord"
          placeholder={englishWord}
          value={changeInputEngWord}
          onChange={(e) => onChangeInputEng(e)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          className={isFilledTranscr}
          name="transcription"
          placeholder={transcription}
          value={changeInputTranscription}
          onChange={(e) => onChangeInputTransciption(e)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          className={isFilledRus}
          name="translation"
          placeholder={translation}
          value={changeInputRus}
          onChange={(e) => onChangeInputRus(e)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          className={isFilledTopic}
          name="value"
          placeholder={topic}
          value={changeInputTopic}
          onChange={(e) => onChangeInputTopic(e)}
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
