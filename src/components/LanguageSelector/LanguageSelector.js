import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.scss";
import xk from "../../img/xk.png";
import de from "../../img/de.png";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="LanguageSelector">
      <button onClick={() => changeLanguage("sq")}>
        <img src={xk} alt="Kosovo flag" />
      </button>
      <button onClick={() => changeLanguage("de")}>
        <img src={de} alt="German flag" />
      </button>
    </div>
  );
};

export default LanguageSelector;
