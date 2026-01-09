import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useParams } from "react-router-dom";
import { tenses } from "../data/tenses";
import TenseCard from '../components/TenseCard.jsx'; 

export default function LessonDetail() {
  const { tenseId } = useParams();

  const tense = tenses.find((t) => t.id === tenseId);

  if (!tense) {
    return <p>Tense not found</p>;
  }
  return (
    <>
      <Header></Header>
        <TenseCard
          title={tense.title}
          definition={tense.definition}
          usage={tense.usage}
          formula={tense.formula}
          example={tense.example}
        />
      <Footer></Footer>

    </> 
  );
}
