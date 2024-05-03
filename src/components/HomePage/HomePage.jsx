import React from "react";
import Banner from "../Banner/Banner";
import Requirements from "../Requirements/Requirements";
import Description from "../Descriptions/Description";
import Steps from "../Steps/Steps";
import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Requirements />
      <Description />
      {/* <Steps /> */}
      {/* <Slider /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
