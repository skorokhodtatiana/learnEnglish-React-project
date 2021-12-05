import { useParams } from "react-router-dom";

export default function Topic() {
  let params = useParams();
  return <h2>Topic: {params.topicName}</h2>;
}
