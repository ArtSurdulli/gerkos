import React from "react";
import "./steps.scss";
import { useTranslation } from "react-i18next";

function Steps() {
  const { t } = useTranslation();

  const stepsData = [
    {
      num: 1,
      title: t("home-steps-title-1"),
      text: t("home-steps-text-1"),
    },
    {
      num: 2,
      title: t("home-steps-title-2"),
      text: t("home-steps-text-2"),
    },
    {
      num: 3,
      title: t("home-steps-title-3"),
      text: t("home-steps-text-3"),
    },
    {
      num: 4,
      title: t("home-steps-title-4"),
      text: t("home-steps-text-4"),
    },
  ];

  return (
    <div className="steps w-full">
      <div className="grid place-items-center  mt-4">
        <div className="mt-7">
          <h1>{t("home-steps-title")}</h1>
        </div>
        <div className="hr-steps mt-3"></div>
      </div>
      <div className="steps-row">
        {stepsData.map((item, i) => {
          return (
            <div className="steps-card">
              <p className="firstNumber">{item.num}</p>
              <div className="steps-card-col">
                <h3 className="text-gray-900 font-semibold text-center steps-card-title">
                  {item.title}
                </h3>
                <p className="text-center steps-card-text">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <br />
    </div>
  );
}

export default Steps;
