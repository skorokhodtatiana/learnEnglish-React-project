import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./_table.scss";
import dataCards from "../../assets/DataCards.js";
import { useState } from "react";

const HeadTable = () => {
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>english word</th>
        <th>transcription</th>
        <th>russian word</th>
        <th>topic</th>
        <th></th>
      </tr>
    </thead>
  );
};

const Table = (props) => {
  const { id, englishWord, transcription, russianWord, topic } = props;

  const [selectEdit, setselectEdit] = useState(false);
  const handleClickEdit = () => {
    setselectEdit(!false);
  };

  // const [changeInput, setchangeInput] = useState(props);

  // const saveChanges = (e) => {
  //   // const handleChange = (e) => {
  //   //   console.log(e);
  //   // };
  //   setchangeInput(e.target.value);
  //   console.log(e.target.value);
  // };

  const [changeInputEngWord, setchangeInputEngWord] = useState(props);
  const handleChange = (e) => {
    setchangeInputEngWord(e.target.value);
    // console.log(e.target.value);
    const newWord = { id: { id }, englishWord: { changeInputEngWord } };
    const newArr = dataCards.push(newWord);
    console.log(newArr);
    console.log(changeInputEngWord);
  };

  const cancelChanges = () => {
    setselectEdit(false);
  };

  return (
    <table className="table">
      <HeadTable></HeadTable>
      <tbody>
        {selectEdit ? (
          <tr>
            <td>{id}</td>
            <td>
              <form action="#">
                <input
                  type="text"
                  name="value"
                  placeholder={englishWord}
                  // value={englishWord}
                  onBlur={(e) => handleChange(e)}
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
                  onBlur={(e) => handleChange(e)}
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
                  onBlur={(e) => handleChange(e)}
                ></input>
              </form>
            </td>
            <td>
              <button>Save</button>
              {/* <button onClick={() => saveChanges()}>Save</button> */}
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
              <button onClick={handleClickEdit}>
                <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
              </button>
              <button>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
              </button>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
