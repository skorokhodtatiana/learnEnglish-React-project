import "./_headTable.scss";
const HeadTable = () => {
  return (
    <thead className="thead">
      <tr>
        <th>#</th>
        <th>ENGLISH WORD</th>
        <th>TRANSCRIPTION</th>
        <th>RUSSIAN WORD</th>
        <th>TOPIC</th>
        <th>ACTION</th>
      </tr>
    </thead>
  );
};

export default HeadTable;
