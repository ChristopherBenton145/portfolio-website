import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./Backgrounds/InfiniteBackground/InfiniteBackground.scss";
import Nav from  "./Nav/Nav";
import Home from  "../routes/Home/Home";
import Skills from  "../routes/Skills/Skills";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
