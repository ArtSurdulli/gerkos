import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Logo from "../img/agency.jpg";
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
              {/* <div className="social-links">
                <a
                  target="_blank"
                  href="http://www.facebook.com"
                  rel="noopener"
                >
                  <FaFacebook />
                </a>

                <a
                  target="_blank"
                  href="http://www.instagram.com"
                  rel="noopener"
                >
                  <FaInstagramSquare />
                </a>

                <a
                  target="_blank"
                  href="http://www.linkedin.com"
                  rel="noopener"
                >
                  <FaLinkedin />
                </a>
              </div> */}
              {/* <Link to="/contactus" className="btn">
                {t("contactus-page-title")}
              </Link> */}
            </div>
            <div className="flex-aboutus ">
              <img src={Logo} alt="" />
            </div>
          </div>
        </div>

        <div className="container-aboutus ">
          <div className="row-aboutus mt-10">
            <div className="flex-aboutus content-center flex flex-col items-center ">
              <div
                className="image-cto"
                style={{ backgroundImage: `url(${CTO})` }}
              ></div>
              <div className="text-container-ceo">
                <span>Bujar Merovci</span>
                <br />
                <span>Gründer & Hauptansprechpartner</span>
              </div>
            </div>
            <div className="flex-aboutus">
              <h2>{t("aboutus-page-team-title")}</h2>
              {/* <h3>{t("aboutus-page-title-2")}</h3> */}
              <p style={{ fontSize: "16px" }}>{t("aboutus-page-text-team")}</p>
              {/* <div className="social-links">
                <a
                  target="_blank"
                  href="http://www.facebook.com"
                  rel="noopener"
                >
                  <FaFacebook />
                </a>

                <a
                  target="_blank"
                  href="http://www.instagram.com"
                  rel="noopener"
                >
                  <FaInstagramSquare />
                </a>

                <a
                  target="_blank"
                  href="http://www.linkedin.com"
                  rel="noopener"
                >
                  <FaLinkedin />
                </a>
              </div> */}
              {/* <Link to="/contactus" className="btn">
                {t("contactus-page-title")}
              </Link> */}
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
