import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./Backgrounds/InfiniteBackground/InfiniteBackground.scss";
import Nav from  "./Nav/Nav";
import Home from  "../routes/Home/Home";
import Skills from  "../routes/Skills/Skills";
import Projects from  "../routes/Projects/Projects";
import Contact from  "../routes/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='*' component={<Route404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
