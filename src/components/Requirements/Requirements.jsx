import React from "react";
import { useTranslation } from "react-i18next";
import "./Requirements.scss";

function Requirements() {
  const { t } = useTranslation();

  return (
    <section className="Requirements">
      <h1>{t("home-requirements-title")}</h1>
      <div className="Requirements--cards">
        <div className="Requirements-card">
          <h4>{">"}20</h4>
          <p>{t("home-requirements-1")}</p>
        </div>
        <div className="Requirements-card">
          <h4>50</h4>
          <p>{t("home-requirements-2")}</p>
        </div>
        <div className="Requirements-card">
          <h4>{">"}500</h4>
          <p>{t("home-requirements-3")}</p>
        </div>
        <div className="Requirements-card">
          <h4>100%</h4>
          <p>{t("home-requirements-4")}</p>
        </div>
      </div>
    </section>
  );
}

export default Requirements;
