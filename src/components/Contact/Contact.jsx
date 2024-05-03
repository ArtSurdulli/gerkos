import React from "react";
import "../../App.css";
import "./Contact.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Contact() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="Home-contact">
      <h3>{t("home-contact-title")}</h3>

      <div className="Home-contact-row">
        <button onClick={() => navigate("/contact")} type="button">
          {t("home-contact-link-1")}
        </button>

        {/* <button type="button">{t("home-contact-link-2")}</button> */}
      </div>
    </div>
  );
}

export default Contact;
