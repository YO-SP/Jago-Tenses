import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useParams } from "react-router-dom";
import { questions } from "../data/questions.js";
import QuizCard from '../components/QuizCard.jsx'; 

export default function QuizDetail() {
  const { tenseId } = useParams();

  const question = questions.find((q) => q.id === tenseId);

  if (!question) {
    return <p>question not found</p>;
  }
  return (
    <>
      <Header></Header>
        <QuizCard
            title={question.title}
        />
      <Footer></Footer>

    </> 
  );
}