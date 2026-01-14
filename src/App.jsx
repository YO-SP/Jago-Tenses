import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import Lessons from './pages/Lessons.jsx';
import LessonDetail from './pages/LessonDetail.jsx';
import About from './pages/AboutMe'; 
import Contact from './pages/Contact.jsx';
import Quiz from './pages/Quiz.jsx'
import QuizDetail from './pages/QuizDetail.jsx';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/lessons" element={<Lessons />}/>
          <Route path="/lessons/:tenseId" element={<LessonDetail />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/quiz" element={<Quiz />}/>
          <Route path="/quiz/:tenseId" element={<QuizDetail />}/>
      </Routes>
    </BrowserRouter>
  ) 
}

