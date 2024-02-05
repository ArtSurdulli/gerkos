import React from "react";
import { useTranslation } from "react-i18next";

function Requirements() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 justify-center first-section">
        <div className="cards">
          <h4>≈100</h4>
          <p>{t("home-requirements-1")}</p>
        </div>
        <div className="cards ">
          <h4>≥ B1</h4>
          <p>{t("home-requirements-2")}</p>
        </div>
        <div className="cards">
          <h4>6 {t("home-requirements-monate")}</h4>
          <p>{t("home-requirements-3")}</p>
        </div>
        <div className="cards">
          <h4>&lt; 40</h4>
          <p>{t("home-requirements-4")}</p>
        </div>
        <div className="cards">
          <h4>100%</h4>
          <p>{t("home-requirements-5")}</p>
        </div>
      </section>
    </div>
  );
}

export default Requirements;
