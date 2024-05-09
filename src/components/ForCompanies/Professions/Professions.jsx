import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../../../img/interested1.webp";
import img2 from "../../../img/interested2.webp";
import img3 from "../../../img/interested3.webp";
import img4 from "../../../img/interested4.jpg";
import img5 from "../../../img/interested5.png";
import img6 from "../../../img/interested6.jpeg";
import InterestedCards from "../../../pages/Interested/InterestedCards";
import "./Professions.scss";
import {
  ApartmentOutlined,
  EuroOutlined,
  FileDoneOutlined,
  MoneyCollectOutlined,
  ReadOutlined,
} from "@ant-design/icons";

function Professions() {
  const { t } = useTranslation();
  const interestedData = [
    {
      id: 1,
      title: t('interestedPage-profesions'),
      img: img1,
      text1:t('interestedPage-profesions-content'),
      text2: t("interested-card2-text-2"),
    },
    {
      id: 2,
      title: t('interestedPage-profesions1'),
      img: img2,
      text1:t('interestedPage-profesions-content1'),
      text2: t("interested-card2-text-2"),
    },
    {
      id: 3,
      title: t('interestedPage-profesions2'),
      img: img3,
      text1:t('interestedPage-profesions-content2'),
      text2: t("interested-card3-text-2"),
    },
  ];

  return (
    <div className="ForCompanies--Professions">
      <div className="row">
        <h1>{t('interestedPage-card-title')}</h1>
        {/* 
        <div>
          <p>
            Egal ob du bereits voll im Berufsleben stehst, frisch die
            Universität absolviert hast oder oder eine abgeschlossene
            Berufsausbildung vorweisen kannst – unser Konzept ist dein Weg nach
            Deutschland.
          </p>
        </div> */}

        {interestedData.map((card, i) => {
          return (
            <InterestedCards
              key={card.id}
              title={card.title}
              img={card.img}
              text1={card.text1}
              text2=""
            />
          );
        })}
      </div>
      <div className="row">
        <h1>{t('gerkos-vorteile')}</h1>
        <div className="flex flex-wrap justify-center w-full">
          <div className="max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="flex justify-center mb-4">
                <EuroOutlined
                  style={{ color: "#fadc18" }}
                  className="text-4xl"
                />
              </div>
              <div className="font-bold text-xl mb-2">
               {t('gerkos-advance1')}
              </div>
            </div>
          </div>

          <div className="max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg w-full">
            <div className="px-6 py-4">
              <div className="flex justify-center mb-4">
                <ReadOutlined
                  style={{ color: "#fadc18" }}
                  className="text-4xl"
                />
              </div>
              <div className="font-bold text-xl mb-2">
              {t('gerkos-advance2')}

              </div>
            </div>
          </div>

          <div className="max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg w-full">
            <div className="px-6 py-4">
              <div className="flex justify-center mb-4">
                <FileDoneOutlined
                  style={{ color: "#fadc18" }}
                  className="text-4xl"
                />
              </div>
              <div className="font-bold text-xl mb-2">
               {t('gerkos-advance3')}
                
              </div>
            </div>
          </div>

          <div className="max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg w-full">
            <div className="px-6 py-4">
              <div className="flex justify-center mb-4">
                <ApartmentOutlined
                  style={{ color: "#fadc18" }}
                  className="text-4xl"
                />
              </div>
              <div className="font-bold text-xl mb-2">
              {t('gerkos-advance4')}
              
              </div>
            </div>
          </div>

          <div className="max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg w-full">
            <div className="px-6 py-4">
              <div className="flex justify-center mb-4">
                <MoneyCollectOutlined
                  style={{ color: "#fadc18" }}
                  className="text-4xl"
                />
              </div>
              <div className="font-bold text-xl mb-2">
               {t('gerkos-advance5')}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professions;
