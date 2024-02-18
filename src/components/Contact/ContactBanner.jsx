import React from "react";
import BannerIMG from "../../img/contactus.jpg";
import { useTranslation } from "react-i18next";

function ContactBanner() {
  const { t } = useTranslation();

  return (
    <div className="relative flex items-center justify-center">
      <img src={BannerIMG} alt="Banner" className="w-full" />
      <div className="absolute bg-opacity-75 p-4 text-center">
        <h1 className="text-white text-md lg:text-2xl">
          {t("contactus-page-title")}
        </h1>
      </div>
    </div>
  );
}

export default ContactBanner;
