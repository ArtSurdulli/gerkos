import React from "react";
import { useTranslation } from "react-i18next";
import "./AboutUsBanner.scss";

function AboutUsBanner() {
  const { t } = useTranslation();

  return (
    <div className="Home-banner12">
      <div className="bg"></div>
      <h3 className="lg:mt-28">{t("Über uns")}</h3>

    </div>
  );
}

export default AboutUsBanner;





