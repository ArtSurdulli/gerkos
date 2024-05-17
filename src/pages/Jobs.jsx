import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Jobs/Banner/Banner";
import Fields from "../components/Jobs/Fields/Fields";
import Positions from "../components/Jobs/Positions/Positions";

function Jobs() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Fields />
      <Positions />
      <Contact />
      <Footer />
    </div>
  );
}

export default Jobs;
