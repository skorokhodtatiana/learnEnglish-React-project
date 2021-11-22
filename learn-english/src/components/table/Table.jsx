import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./_table.scss";
import { useState } from "react";

const Table = (props) => {
  const { id, englishWord, transcription, russianWord, topic } = props;

  const [selectEdit, setselectEdit] = useState(false);

  const handleClickEdit = (id) => {
    // props.onclickEditWords(id);
    setselectEdit(!false);
  };

  return (
    <table className="table">
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
      <tbody>
        {selectEdit ? (
          <tr>
            <td># + {id}</td>
            <td>
              <form action="#">
                <input type="text" placeholder={englishWord} value=""></input>
              </form>
            </td>
            <td>
              <form action="#">
                <input type="text" placeholder={transcription} value=""></input>
              </form>
            </td>
            <td>
              <form action="#">
                <input type="text" placeholder={russianWord} value=""></input>
              </form>
            </td>
            <td>
              <button>Save</button>
              <button>Cancel hange</button>
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
