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
import ForCompanies from "./pages/ForCompanies";
import It from "./pages/It";
import HandWerk from "./pages/HandWerk";
import Medizin from "./pages/Medizin";
import Ingenieurwesen from "./pages/Ingenieurwesen";
import Gastgewerbe from "./pages/Gastgewerbe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/interested" element={<Interested />} />
      <Route path="/for-companies" element={<ForCompanies />} />

      <Route path="/IT" element={<It/>} />
      <Route path="/HandWerk" element={<HandWerk/>} />
      <Route path="/Medizin" element={<Medizin/>} />
      <Route path="/Ingenieurwesen" element={<Ingenieurwesen/>} />
      <Route path="/Gastgewerbe" element={<Gastgewerbe/>} />


    </Routes>
  );
}

export default App;
