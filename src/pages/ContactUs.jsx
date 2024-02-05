import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactBanner from "../components/Contact/ContactBanner";

import "./pages.scss";
function ContactUs() {
  const [formState, setFormState] = useState({});

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  return (
    <>
      <Navbar />
      <ContactBanner />
      <div class="container">
        <div class="content mt-10">
          <div class="left-side">
            <div class="address details">
              <i class="fas fa-map-marker-alt"></i>
              <div class="topic">Address</div>
              <div class="text-one">Heinrich-Kamp-Str. 1</div>
              <div class="text-two">58300 Wetter a. d. Ruhr</div>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt"></i>
              <div class="topic">Phone</div>
              <div class="text-one">0152 / 34 15 21 30</div>
              {/* <div class="text-two">+0096 3434 5678</div> */}
            </div>
            <div class="email details">
              <i class="fas fa-envelope"></i>
              <div class="topic">Email</div>
              <div class="text-one">0152 / 34 15 21 30</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Send us a message</div>
            <p>Feel free tp contact us in any time </p>
            <form action="#">
              <div class="input-box">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                />
              </div>
              <div class="input-box">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>
              <div class="input-box message-box">
                <textarea
                  typeof="text"
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div class="button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-20"></div>
      <Footer />
    </>
  );
}

export default ContactUs;
