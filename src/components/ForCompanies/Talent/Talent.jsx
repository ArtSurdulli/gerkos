import React from "react";
import { useTranslation } from "react-i18next";
import "./Talent.scss";

function Talent() {
  const { t } = useTranslation();

  return (
    <div className="ForCompanies--Talent">
      <p>{t("forCompanies--talent-paragraph-1")}</p>
      <p>{t("forCompanies--talent-paragraph-2")}</p>
      <p>{t("forCompanies--talent-paragraph-3")}</p>
      <p>{t("forCompanies--talent-paragraph-4")}</p>
      <p>{t("forCompanies--talent-paragraph-5")}</p>
      <p>{t("forCompanies--talent-paragraph-6")}</p>
      <p>{t("forCompanies--talent-paragraph-7")}</p>
      <p>{t("forCompanies--talent-paragraph-8")}</p>
      <p>{t("forCompanies--talent-paragraph-9")}</p>
      <p>{t("forCompanies--talent-paragraph-10")}</p>
      <p>{t("forCompanies--talent-paragraph-11")}</p>
      <p>{t("forCompanies--talent-paragraph-12")}</p>
      <p>{t("forCompanies--talent-paragraph-13")}</p>
    </div>
  );
}

export default Talent;
