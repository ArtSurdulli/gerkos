import React from "react";
import "./description.scss";
import { useTranslation } from "react-i18next";
function Description() {
  const { t } = useTranslation();

  return (
    <div className="Description">
      <h1>GERKOS - {t("home-description-title")}</h1>
      <div className="hr-description mt-3"></div>
      <div>
        <p className="text-center max-w-7xl	mt-4">
          {t("home-description-text-1")}
        </p>
      </div>
      <div>
        <p className="text-center max-w-7xl	mt-2">
          {t("home-description-text-2")}
        </p>
      </div>

      <div>
        <p className="text-center max-w-7xl	mt-2">
          {t("home-description-text-3")}
        </p>
      </div>
      <div>
        <p className="text-center max-w-7xl	">
        {t("home-description-text-4")}

        </p>
      </div>
    </div>
  );
}

export default Description;
