import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/view/Home";
import Footer from "./components/common/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
