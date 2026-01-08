import { useParams } from "react-router-dom";
import { tenses } from "../data/tenses";

export default function LessonDetail() {
  const { tenseId } = useParams();

  const tense = tenses.find((t) => t.id === tenseId);

  if (!tense) {
    return <p>Tense not found</p>;
  }

  return (
    <div>
      <h1>{tense.title}</h1>
      <h1>{tenses.material}</h1>
      
    </div>
  );
}
