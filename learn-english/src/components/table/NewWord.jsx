import { useState } from "react";
import dataCards from "../../assets/DataCards.js";

const NewWord = (props) => {
  const [newEnglishWord, letnewEnglishWord] = useState("");
  const [transcription, lettranscription] = useState("");
  const [translation, lettranslation] = useState("");
  const [topic, lettopic] = useState("");

  const saveNewWord = () => {
    const newCard = {
      id: dataCards.length,
      englishWord: newEnglishWord,
      transcription: transcription,
      translation: translation,
      topic: topic,
    };
    letnewEnglishWord(" ");
    lettranscription(" ");
    lettranslation(" ");
    lettopic(" ");

    const newArr = [...dataCards];
    newArr.push(newCard);
    props.updateNewWord(newArr);
  };
  return (
    <tr>
      <td></td>
      <td>
        <input
          type="text"
          placeholder="new english word"
          value={newEnglishWord}
          onChange={(e) => letnewEnglishWord(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="transcription"
          value={transcription}
          onChange={(e) => lettranscription(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="translation"
          value={translation}
          onChange={(e) => lettranslation(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="topic"
          value={topic}
          onChange={(e) => lettopic(e.target.value)}
        ></input>
      </td>
      <td>
        <button type="submit" onClick={saveNewWord}>
          Save
        </button>
      </td>
    </tr>
  );
};

export default NewWord;
