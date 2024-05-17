import React from "react";
import { useTranslation } from "react-i18next";
import "./Contact.scss";

function ContactBanner() {
  const { t } = useTranslation();

  return (
    <div className="Home-banner123">
      <div className="bg"></div>
      <h3 className="lg:mt-28">{t("contactus-page-title")}</h3>

    </div>
  );
}

export default ContactBanner;

