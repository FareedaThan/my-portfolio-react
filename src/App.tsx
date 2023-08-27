import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ArtGallery from "./pages/ArtGallery";
import Footer from "./components/Footer";
import ScrollBtn from "./components/ScrollBtn";
import Blog from "./pages/Blog";
import BarGraph from "./blogs/BarGraph";
import Myth from "./blogs/Myth";

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artgallery" element={<ArtGallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/graph" element={<BarGraph />} />
          <Route path="/myth" element={<Myth />} />
        </Routes>
      </Navbar>
      <ScrollBtn />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
