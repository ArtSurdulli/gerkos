import React from "react";
import { useTranslation } from "react-i18next";
import "./Fields.scss";
import img1 from "../../../img/field1.jpg";
import img2 from "../../../img/fields2.jpg";

function Fields() {
  const { t } = useTranslation();

  const fieldsData = [
    {
      id: 1,
      title: t("jobs-fields1-title"),
      text: t("jobs-fields1-text"),
      img: img1,
    },
    {
      id: 2,
      title: t("jobs-fields2-title"),
      text: t("jobs-fields2-text"),
      img: img2,
    },
  ];

  return (
    <div className="Jobs-Fields">
      {fieldsData.map((field) => (
        <div key={field.id} className="Jobs-Fields-card">
          <div
            className="bg"
            style={{ backgroundImage: `url(${field.img})` }}
          ></div>
          <h2>{field.title}</h2>
          <p>{field.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Fields;
