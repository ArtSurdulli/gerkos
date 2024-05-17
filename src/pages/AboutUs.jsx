import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Logo from "../img/agency.jpg";
import Logo1 from "../img/arrow.avif";

import CTO from "../../src/img/bujar.JPG";

import "./pages.scss";
import Footer from "../components/Footer/Footer";
import AboutUsBanner from "../components/AboutUsBanner/AboutUsBanner";
import { FaInstagramSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Contact from "../components/Contact/Contact";

function AboutUs() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <AboutUsBanner />
      <div className="about-us">
        <div className="container-aboutus">
          <div className="row-aboutus">
            <div className="flex-aboutus">
              <h2>{t("aboutus-page-title")}</h2>
              {/* <h3>{t("aboutus-page-title-2")}</h3> */}
              <p style={{ fontSize: "16px" }}>{t("aboutus-page-text")}</p>
            </div>
            <div className="flex-aboutus ">
              <img src={Logo1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="about-us">
        <div className="container-aboutus">
          <div className="row-aboutus">
            <div className="flex-aboutus ">
              <img src={Logo} alt="" />
            </div>
            <div className="flex-aboutus">
              <h2>{t("aboutus-page-team-title")}</h2>
              {/* <h3>{t("aboutus-page-title-2")}</h3> */}
              <p style={{ fontSize: "16px" }}>{t("aboutus-page-text-team")}</p>
            </div>
          </div>

          <div className="container-aboutus ">
            <div className="row-aboutus mt-10">
              <div className="flex-aboutus content-center flex flex-col items-center">
                <p>Ihr Hauptansprechpartner</p>
                <div
                  className="image-cto flex items-center justify-center"
                  style={{
                    width: "350px",
                    height: "200px",
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <span>Foto folgt in Kürze</span>
                </div>
                <div className="text-container-ceo">
                  <span>Bujar Merovci</span>
                  <br />
                  <span>Gründer & Hauptansprechpartner</span>
                  <br />
                  <span>
                  +49 152/34152130
                  <br/>
                  info@gerkos.de
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />

      <Footer />
    </>
  );
}

export default AboutUs;
