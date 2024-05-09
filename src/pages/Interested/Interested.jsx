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
import InterestedBanner from "./InterestedBanner";
import Contact from "../../components/Contact/Contact";
import {
  ApartmentOutlined,
  EuroOutlined,
  FileDoneOutlined,
  MoneyCollectOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function Interested() {
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
    <div className="interestedPage">
      <Navbar />
      <InterestedBanner />

      <div className="Description">
        <div className="hr-description mt-3"></div>
        <div>
          <p className="text-center max-w-7xl	mt-4">
          {t('interestedPage-first-content')}
          </p>
        </div>
      </div>
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
          <div className="max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg w-full">
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
      <div className="row">
        <h1>{t('gerkos-profesions-fields')}</h1>
        <div className="flex flex-wrap justify-center w-full">
          <div className="max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg w-full">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 mt-3">{t('gerkos-propfesion-HandWerk')}</div>
              <p class="text-gray-700 text-base">
               {t('gerkos-profesions-related')}
              </p>
              <Link to="/HandWerk" >
                <p class="text-gray-500 text-sm mt-2">{t('gerkos-profesions-see-more')}</p>
              </Link>
            </div>
          </div>
          <div className="max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg w-full">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 mt-3">IT</div>
              <p class="text-gray-700 text-base">
              {t('gerkos-profesions-related')}

              </p>
               <Link to="/IT" >
                <p class="text-gray-500 text-sm mt-2">{t('gerkos-profesions-see-more')}</p>
              </Link>
              
            </div>
          </div>

          <div className="max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg w-full">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 mt-3">{t('gerkos-propfesion-Medizin')}</div>
              <p class="text-gray-700 text-base">
              {t('gerkos-profesions-related')}

              </p>
              <Link to="/Medizin" >
                <p class="text-gray-500 text-sm mt-2">{t('gerkos-profesions-see-more')}</p>
              </Link>
            </div>
          </div>
          <div className="max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg w-full">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 mt-3">{t('gerkos-propfesion-Ingenieurwesen')}</div>
              <p class="text-gray-700 text-base">
              {t('gerkos-profesions-related')}

              </p>
              <Link to="/Ingenieurwesen" >
                <p class="text-gray-500 text-sm mt-2">{t('gerkos-profesions-see-more')}</p>
              </Link>
            </div>
          </div>
          <div className="max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg w-full">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 mt-3">{t('gerkos-propfesion-Gastgewerbe')}</div>
              <p class="text-gray-700 text-base">
              {t('gerkos-profesions-related')}

              </p>
              <Link to="/Gastgewerbe" >
                <p class="text-gray-500 text-sm mt-2">{t('gerkos-profesions-see-more')}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Interested;
