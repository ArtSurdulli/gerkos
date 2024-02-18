import logo from "./logo.svg";
import "./App.css";
import Requirements from "./components/Requirements/Requirements";
import Banner from "./components/Banner/Banner";
import Description from "./components/Descriptions/Description";
import Steps from "./components/Steps/Steps";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Interested from "./pages/Interested/Interested";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/interested" element={<Interested />} />
    </Routes>
  );
}

export default App;
