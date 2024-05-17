import React from "react";
import "./Advantages.scss";
import { LuCheckSquare } from "react-icons/lu";
import { useTranslation } from "react-i18next";

function Advantages() {
  const { t } = useTranslation();
  const AdvantagesData = [
    {
      id: 1,
      title: t("forCompanies-advantages-card1-title"),
      text: t("forCompanies-advantages-card1-text"),
    },
    {
      id: 2,
      title: t("forCompanies-advantages-card2-title"),
      text: t("forCompanies-advantages-card2-text"),
    },
    {
      id: 3,
      title: t("forCompanies-advantages-card3-title"),
      text: t("forCompanies-advantages-card3-text"),
    },
    {
      id: 4,
      title: t("forCompanies-advantages-card4-title"),
      text: t("forCompanies-advantages-card4-text"),
    },
    {
      id: 5,
      title: t("forCompanies-advantages-card5-title"),
      text: t("forCompanies-advantages-card5-text"),
    },
  ];

  return (
    <div className="ForCompanies-Advantages">
      <h1>Ihr Vorteile auf einem Blick</h1>
      <div className="ForCompanies-Advantages-flex">
        {AdvantagesData.map((card) => {
          return (
            <div className="ForCompanies-Advantages-card" key={card.id}>
              <div className="ForCompanies-Advantages-card-top">
                <LuCheckSquare />
                <h3>{card.title}</h3>
              </div>
              <p>{card.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Advantages;
