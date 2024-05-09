import React from "react";
import { useTranslation } from "react-i18next";
import "./Banner.scss";
function Banner() {
  const { t } = useTranslation();

  return (
    <div className="ForCompanies-banner">
      <div className="bg"></div>
      <h3>{t("forCompanies-banner-title-1")}</h3>
      <h1>
        {/* Ihr zuverlässiger Partner für Fachkräfte */}
        {t("forCompanies-banner-title-2")}
        <br />
        {t("forCompanies-banner-title-3")}
        <br />
        {t("forCompanies-banner-title-4")}
      </h1>
      {/* <button type="button">{t("home-banner-button")}</button> */}
    </div>
  );
}

export default Banner;
