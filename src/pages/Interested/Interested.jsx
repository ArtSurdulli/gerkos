import React from "react";
import "./Interested.scss";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import InterestedCards from "./InterestedCards";
import img1 from "../../img/interested1.webp";
import img2 from "../../img/interested2.webp";
import img3 from "../../img/interested3.webp";
import img4 from "../../img/interested4.jpg";
import img5 from "../../img/interested5.png";
import img6 from "../../img/interested6.jpeg";

function Interested() {
  const { t } = useTranslation();

  const interestedData = [
    {
      id: 1,
      title: t("interested-card1-title-1"),
      img: img1,
      text1: t("interested-card1-text-1"),
      text2: t("interested-card1-text-2"),
    },
    {
      id: 2,
      title: t("interested-card2-title-1"),
      img: img2,
      text1: t("interested-card2-text-1"),
      text2: t("interested-card2-text-2"),
    },
    {
      id: 3,
      title: t("interested-card3-title-1"),
      img: img3,
      text1: t("interested-card3-text-1"),
      text2: t("interested-card3-text-2"),
    },
    {
      id: 4,
      title: t("interested-card4-title-1"),
      img: img4,
      text1: t("interested-card4-text-1"),
      text2: t("interested-card4-text-2"),
    },
    {
      id: 5,
      title: t("interested-card5-title-1"),
      img: img5,
      text1: t("interested-card5-text-1"),
      text2: t("interested-card5-text-2"),
    },
    {
      id: 6,
      title: t("interested-card6-title-1"),
      img: img6,
      text1: t("interested-card6-text-1"),
      text2: t("interested-card6-text-2"),
    },
  ];

  return (
    <div className="interestedPage">
      <Navbar />
      <div className="interestedPage-banner">
        <div className="bg"></div>

        <h1>{t("interestedPage-banner-title")}</h1>
        <h3>{t("interestedPage-banner-text")}</h3>
      </div>

      <div className="row">
        {interestedData.map((card, i) => {
          return (
            <InterestedCards
              key={card.id}
              title={card.title}
              img={card.img}
              text1={card.text1}
              text2={card.text2}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Interested;
