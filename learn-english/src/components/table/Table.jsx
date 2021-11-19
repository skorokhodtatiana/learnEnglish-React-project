import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

const Table = (props) => {
  const { id, engWord, transcription, rusWord, topic } = props;
  <table>
    <tr>
      <th>#</th>
      <th>english word</th>
      <th>transcription</th>
      <th>russian word</th>
      <th>topic</th>
      <th></th>
    </tr>
    <tr>
      <td>{id}</td>
      <td>{engWord}</td>
      <td>{transcription}</td>
      <td>{rusWord}</td>
      <td>{topic}</td>
      <td>
        <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>;
};

export default Table;
