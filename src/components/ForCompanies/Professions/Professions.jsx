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
      title: "Für Berufstätige",
      img: img1,
      text1:
        "Wir suchen Bewerber mit beruflicher Praxis, die ihre Kompetenz in der Arbeitswelt bereits unter Beweis gestellt haben.",
      text2: t("interested-card2-text-2"),
    },
    {
      id: 2,
      title: "Für Universitätsabsolventen",
      img: img2,
      text1:
        "Absolventen mit akademischer Bildung, die bereit sind, ihr Wissen in praktische Erfolge umzusetzen.",
      text2: t("interested-card2-text-2"),
    },
    {
      id: 3,
      title: "Für Ausbildungsabsolventen",
      img: img3,
      text1:
        "Engagierte Fachkräfte mit abgeschlossener Berufsausbildung, die nach neuen Herausforderungen streben.",
      text2: t("interested-card3-text-2"),
    },
  ];

  return (
    <div className="ForCompanies--Professions">
      <div className="row">
        <h1>Dich suchen wir!</h1>
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
        <h1>Deine Vorteile mit GERKOS:</h1>
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
                KEINE Kosten für unsere Leistungen!
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
                Anerkennung deines Abschlusses in Deutschland
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
                Garantierter Arbeitsvertrag
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
                Attraktive Arbeitsstelle
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
                Entgelt nach deutschem Tarif
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professions;
