import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import Lessons from './pages/Lessons.jsx'; 
import About from './pages/AboutMe'; 
import Contact from './pages/Contact.jsx';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/lessons" element={<Lessons />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}


