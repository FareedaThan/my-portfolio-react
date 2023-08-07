import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ArtGallery from "./pages/ArtGallery";
import Footer from "./components/Footer";
import ScrollBtn from "./components/ScrollBtn";

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artgallery" element={<ArtGallery />} />
        </Routes>
      </Navbar>
      <ScrollBtn />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
