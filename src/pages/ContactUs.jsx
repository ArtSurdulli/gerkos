import React, { useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactBanner from "../components/Contact/ContactBanner";
import emailjs from "@emailjs/browser";
import "./pages.scss";
import { useTranslation } from "react-i18next";
function ContactUs() {
  const { t } = useTranslation();

  // const [formState, setFormState] = useState({});

  // const handleChange = (event) => {
  //   setFormState({ ...formState, [event.target.name]: event.target.value });
  // };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_doqwofp",
        "template_pnqpgju",
        form.current,
        "75nWHhEjk4IVM0yD8"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("send");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
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
              <div class="topic">{t("contactus-page-address")}</div>
              <div class="text-one">Heinrich-Kamp-Str. 1</div>
              <div class="text-two">58300 Wetter a. d. Ruhr</div>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt"></i>
              <div class="topic">{t("contactus-page-phone")}</div>
              <div class="text-one">0152 / 34 15 21 30</div>
              {/* <div class="text-two">+0096 3434 5678</div> */}
            </div>
            <div class="email details">
              <i class="fas fa-envelope"></i>
              <div class="topic">{t("contactus-page-email")}</div>
              <div class="text-one">0152 / 34 15 21 30</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">{t("contactus-page-message-1")}</div>
            <p>{t("contactus-page-message-2")}</p>
            <form ref={form} onSubmit={sendEmail} action="#">
              <div class="input-box">
                <input
                  type="text"
                  name="user_name"
                  placeholder={t("contactus-page-input-1")}
                  // onChange={handleChange}
                />
              </div>
              <div class="input-box">
                <input
                  type="email"
                  name="user_email"
                  placeholder={t("contactus-page-input-2")}

                  // placeholder="Enter your email"
                  // onChange={handleChange}
                />
              </div>
              <div class="input-box message-box">
                <textarea
                  typeof="text"
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder={t("contactus-page-input-1")}

                  // placeholder="Enter message"
                  // onChange={handleChange}
                ></textarea>
              </div>
              <div class="button">
                <input type="submit" value={t("contactus-page-button")} />
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
