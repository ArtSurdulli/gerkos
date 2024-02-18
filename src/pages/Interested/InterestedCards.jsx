import React from "react";
import "./Interested.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function InterestedCards(props) {
  const { t } = useTranslation();

  return (
    <div className="interested-Card">
      <img src={props.img} alt={props.title} />
      <div className="content">
        <div className="text">
          <h3>{props.title}</h3>
          <p>
            {props.text1}
            <br />
            {props.text2}
          </p>
        </div>
        <Link to="/contact">{t("home-blog-link")}</Link>
      </div>
    </div>
  );
}

export default InterestedCards;
