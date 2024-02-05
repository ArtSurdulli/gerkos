import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Logo from "../img/agency.jpg";
import "./pages.scss";
import Footer from "../components/Footer/Footer";
import AboutUsBanner from "../components/AboutUsBanner/AboutUsBanner";
import { FaInstagramSquare, FaFacebook, FaLinkedin } from "react-icons/fa";

function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutUsBanner />
      <div className="about-us">
        <div className="container-aboutus">
          <div className="row-aboutus">
            <div className="flex-aboutus">
              <h2>About Us</h2>
              <h3>Discover our team</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium optio harum earum ullam enim adipisci suscipit, illo
                maxime nulla unde omnis facere voluptatem esse ipsum impedit
                pariatur modi excepturi aut.
              </p>
              <div className="social-links">
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
              </div>
              <a href="" className="btn">
                Contact us
              </a>
            </div>
            <div className="flex-aboutus">
              <img src={Logo} alt="" />
            </div>
          </div>
        </div>
      </div>

      <section>
        <div class="row">
          <h1>Our Team</h1>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="img-container">
                {/* <img src="profile-img-1.png" /> */}
              </div>
              <h3>Luna Turner</h3>
              <p>Founder</p>
              <div className="icons">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="img-container">
                {/* <img src="profile-img-2.png" /> */}
              </div>
              <h3>Bryant Hall</h3>
              <p>Developer</p>
              <div className="icons">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i class="fab fa-github"></i>
                </a>
                <a href="#">
                  <i class="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="img-container">
                {/* <img src="profile-img-3.png" /> */}
              </div>
              <h3>Hope Watkins</h3>
              <p>Designer</p>
              <div class="icons">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i class="fab fa-github"></i>
                </a>
                <a href="#">
                  <i class="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutUs;
