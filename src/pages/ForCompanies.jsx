import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/ForCompanies/Banner/Banner";
import Talent from "../components/ForCompanies/Talent/Talent";
import Professions from "../components/ForCompanies/Professions/Professions";
import Steps from "../components/Steps/Steps";
import Contact from "../components/Contact/Contact";

function ForCompanies() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Talent />
      <Professions />
      <Steps />
      <Contact />
      <Footer />
    </div>
  );
}

export default ForCompanies;
