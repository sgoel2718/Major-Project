import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
//import Opportunities from "./components/Opportunities";
import Footer from "./components/Footer";
import Jobs from "./components/Jobs";
import Tourism from "./components/Tour";
import { Routes, Route } from "react-router-dom";
import Opportunities from "./components/Opportunities";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Opportunities />} />
        <Route path="Jobs" element={<Jobs />} />
        <Route path="Tourism" element={<Tourism />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
