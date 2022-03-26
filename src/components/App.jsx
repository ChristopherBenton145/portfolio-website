import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./Backgrounds/InfiniteBackground/InfiniteBackground.scss";
import Home from  "../routes/Home/Home";
import Nav from  "./Nav/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
