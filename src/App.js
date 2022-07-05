import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import Quiz from "./Components/Quiz";
import QuizApp from "./Quiz-App/QuizApp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="contact" element={<Contact />} />
        <Route path="quizApp" element={<QuizApp />} />
      </Routes>
    </div>
  );
}

export default App;
