import React from 'react'
import { useTranslation } from "react-i18next";
import "./InterestedBanner.scss";

function InterestedBanner() {
  const { t } = useTranslation();

  return (
    <div className="Home-banner">
    <div className="bg"></div>
    <h3 className='lg:mt-16'>{t("interestedPage-banner-title")}</h3>
    <h3>
      {t("interestedPage-banner-text")}
      <br />
    </h3>
    
  </div>
  )
}

export default InterestedBanner