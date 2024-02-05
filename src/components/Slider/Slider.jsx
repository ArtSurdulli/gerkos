import React from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import "./slider.scss";
import img1 from "../../img/blog1.png";
import img2 from "../../img/blog2.png";
import img3 from "../../img/blog3.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Slider() {
  const { t } = useTranslation();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
  ];

  const blogData = [
    {
      title: t("home-blog-title-1"),
      img: img1,
      to: "/",
    },
    {
      title: t("home-blog-title-2"),
      img: img2,
      to: "/",
    },
    {
      title: t("home-blog-title-3"),
      img: img3,
      to: "/",
    },
    {
      title: t("home-blog-title-3"),
      img: img3,
      to: "/",
    },
    {
      title: t("home-blog-title-3"),
      img: img3,
      to: "/",
    },
  ];

  return (
    <div className="slider">
      <h1>{t("home-blog-title")}</h1>
      <div className="hr-steps mt-3"></div>

      <Carousel
        className="slider-carousel"
        breakPoints={breakPoints}
        disableArrowsOnEnd={false}
      >
        {blogData.map((item, i) => {
          return (
            <div className="sliderCard">
              <img src={item.img} alt={item.title} />
              <div className="content">
                <p>{item.title}</p>
                <Link to="/">{t("home-blog-link")}</Link>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Slider;
