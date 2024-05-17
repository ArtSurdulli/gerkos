import React from "react";
import { useTranslation } from "react-i18next";
import "./Positions.scss";

function Positions() {
  const { t } = useTranslation();
  const jobCategories = [
    {
      id: 1,
      category: t("jobs-positions1-category"),
      positions: [
        t("jobs-positions1-position1"),
        t("jobs-positions1-position2"),
        t("jobs-positions1-position3"),
        t("jobs-positions1-position4"),
        t("jobs-positions1-position5"),
        t("jobs-positions1-position6"),
        t("jobs-positions1-position7"),
        t("jobs-positions1-position8"),
      ],
    },
    {
      id: 2,
      category: t("jobs-positions2-category"),
      positions: [
        t("jobs-positions2-position1"),
        t("jobs-positions2-position2"),
        t("jobs-positions2-position3"),
        t("jobs-positions2-position4"),
        t("jobs-positions2-position5"),
        t("jobs-positions2-position6"),
        t("jobs-positions2-position7"),
        t("jobs-positions2-position8"),
        t("jobs-positions2-position9"),
      ],
    },
    {
      id: 3,
      category: t("jobs-positions3-category"),
      positions: [
        t("jobs-positions3-position1"),
        t("jobs-positions3-position2"),
        t("jobs-positions3-position3"),
        t("jobs-positions3-position4"),
        t("jobs-positions3-position5"),
        t("jobs-positions3-position6"),
        t("jobs-positions3-position7"),
        t("jobs-positions3-position8"),
        t("jobs-positions3-position9"),
      ],
    },
    {
      id: 4,
      category: t("jobs-positions4-category"),
      positions: [
        t("jobs-positions4-position1"),
        t("jobs-positions4-position2"),
        t("jobs-positions4-position3"),
        t("jobs-positions4-position4"),
        t("jobs-positions4-position5"),
        t("jobs-positions4-position6"),
        t("jobs-positions4-position7"),
        t("jobs-positions4-position8"),
      ],
    },
    {
      id: 5,
      category: t("jobs-positions5-category"),
      positions: [
        t("jobs-positions5-position1"),
        t("jobs-positions5-position2"),
        t("jobs-positions5-position3"),
        t("jobs-positions5-position4"),
        t("jobs-positions5-position5"),
        t("jobs-positions5-position6"),
        t("jobs-positions5-position7"),
        t("jobs-positions5-position8"),
        t("jobs-positions5-position9"),
      ],
    },
  ];

  return (
    <div className="Jobs-Positions">
      {jobCategories.map((category) => (
        <div key={category.id} className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h2>{category.category}</h2>
            </div>
            <div className="flip-card-back">
              <h2>{category.category}</h2>

              <ul>
                {category.positions.map((position, index) => (
                  <li key={index}>{position}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Positions;
