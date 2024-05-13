import React from "react";
import { useTranslation } from "react-i18next";
import "./InterestedBanner.scss";

function InterestedBanner() {
  const { t } = useTranslation();

  return (
    <div className="Home-banner">
      <div className="bg"></div>
      <h3 className="lg:mt-16">{t("interestedPage-banner-title")}</h3>
      <h3>
        {t("interestedPage-banner-text")}
        <br />
      </h3>
      <h5 style={{fontSize: "19px", zIndex:"99999"}}>
        Entdecke spannende Karrieremöglichkeiten und beginne ein neues Leben in
        Deutschland.
      </h5>
    </div>
  );
}

export default InterestedBanner;
