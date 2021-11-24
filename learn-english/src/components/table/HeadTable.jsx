import "./_headTable.scss";
const HeadTable = () => {
  return (
    <thead className="thead">
      <tr>
        <th>#</th>
        <th>english word</th>
        <th>transcription</th>
        <th>russian word</th>
        <th>topic</th>
        <th>ACTION</th>
      </tr>
    </thead>
  );
};

export default HeadTable;
