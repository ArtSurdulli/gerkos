import React from "react";
import { useTranslation } from "react-i18next";
import "./Banner.scss";
function Banner() {
  const { t } = useTranslation();

  return (
    <div className="Jobs-banner">
      <div className="bg"></div>
      <h1>{t("jobs-banner-title-1")}</h1>
      {/* <button type="button">{t("home-banner-button")}</button> */}
    </div>
  );
}

export default Banner;
