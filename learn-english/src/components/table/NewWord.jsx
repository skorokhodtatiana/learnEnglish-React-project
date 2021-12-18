import { useState } from "react";
import { dataCards } from "../../assets/DataCards.js";

const NewWord = (props) => {
  const [disabledSave, setdisabledSave] = useState(true);

  const [words, letwords] = useState({
    newEnglishWord: "",
    newTranscriptionWord: "",
    newTranslationWord: "",
    newTopicWord: "",
  });

  const createNewWord = (e) => {
    letwords((words) => ({
      ...words,
      [e.target.name]: e.target.value,
    }));
    console.log({ [e.target.name]: e.target.value });
    e.target.value.length === ""
      ? setdisabledSave(true)
      : setdisabledSave(false);
  };

  const saveNewWord = (e) => {
    const newCard = {
      id: dataCards.length,
      englishWord: words.newEnglishWord,
      transcription: words.newTranscriptionWord,
      translation: words.newTranslationWord,
      topic: words.newTopicWord,
    };

    (words.newEnglishWord === "" ||
      words.newTranscriptionWord === "" ||
      words.newTranslationWord === "" ||
      words.newTopicWord === "") &&
      alert("Заполните все поля!");

    const newArr = [...dataCards];
    newArr.push(newCard);
    props.updateNewWord(newArr);
    letwords({
      newEnglishWord: "",
      newTranscriptionWord: "",
      newTranslationWord: "",
      newTopicWord: "",
    });
  };

  return (
    <tr>
      <td></td>
      <td>
        <input
          type="text"
          className={
            words.newEnglishWord.length < 1 ? "borderPink" : "borderGreen"
          }
          name="newEnglishWord"
          placeholder="new english word"
          value={words.newEnglishWord}
          onChange={(e) => createNewWord(e)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          className={
            words.newTranscriptionWord.length < 1 ? "borderPink" : "borderGreen"
          }
          name="newTranscriptionWord"
          placeholder="transcription"
          value={words.newTranscriptionWord}
          onChange={(e) => createNewWord(e)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          className={
            words.newTranslationWord.length < 1 ? "borderPink" : "borderGreen"
          }
          name="newTranslationWord"
          placeholder="translation"
          value={words.newTranslationWord}
          onChange={(e) => createNewWord(e)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          className={
            words.newTopicWord.length < 1 ? "borderPink" : "borderGreen"
          }
          name="newTopicWord"
          placeholder="topic"
          value={words.newTopicWord}
          onChange={(e) => createNewWord(e)}
        ></input>
      </td>
      <td>
        {disabledSave ? (
          <button disabled type="submit" onClick={saveNewWord}>
            Save
          </button>
        ) : (
          <button type="submit" onClick={saveNewWord}>
            Save
          </button>
        )}
      </td>
    </tr>
  );
};

export default NewWord;
