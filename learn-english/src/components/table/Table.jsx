import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

const Table = (props) => {
  const { id, englishWord, transcription, russianWord, topic } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>english word</th>
          <th>transcription</th>
          <th>russian word</th>
          <th>topic</th>
          <th></th>
        </tr>
        <tr>
          <td></td>
          <td>
            <form>
              <input type="text" placeholder="english word"></input>
            </form>
          </td>
          <td>
            <form>
              <input type="text" placeholder="transcription"></input>
            </form>
          </td>
          <td>
            <form>
              <input type="text" placeholder="russian word"></input>
            </form>
          </td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{englishWord}</td>
          <td>{transcription}</td>
          <td>{russianWord}</td>
          <td>{topic}</td>
          <td>
            <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
