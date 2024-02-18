import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.scss";
import al from "../../img/alb.webp";
import de from "../../img/de.png";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="LanguageSelector">
      <button onClick={() => changeLanguage("sq")}>
        <img src={al} alt="Albania flag" />
      </button>
      <button onClick={() => changeLanguage("de")}>
        <img src={de} alt="German flag" />
      </button>
    </div>
  );
};

export default LanguageSelector;
