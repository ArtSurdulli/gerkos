import React from "react";
import BannerIMG from "../../img/BannerIMG.jpg";
import { useTranslation } from "react-i18next";
import "./Banner.scss";
function Banner() {
  const { t } = useTranslation();

  return (
    <div className="Home-banner">
      <div className="bg"></div>
      <h3>{t("home-banner-title-1")}</h3>
      <h1>
        {/* Ihr zuverlässiger Partner für Fachkräfte */}
        {t("home-banner-title-2")}
        <br />
        {t("home-banner-title-3")}
      </h1>
      <button type="button">
        {t("home-banner-button")}
        </button>
    </div>
  );
}

export default Banner;
