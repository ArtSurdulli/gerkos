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

function Interested() {
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
    <div className="interestedPage">
      <Navbar />
      <InterestedBanner />

      <div className="Description">
        <div className="hr-description mt-3"></div>
        <div>
          <p className="text-center max-w-7xl	mt-4">
            Egal ob du bereits voll im Berufsleben stehst, frisch die
            Universität absolviert hast oder oder eine abgeschlossene
            Berufsausbildung vorweisen kannst – unser Konzept ist dein Weg nach
            Deutschland.
          </p>
        </div>
      </div>
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
          <div className="max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg w-full">
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
      <div className="row">
        <h1>Ein kleiner Auszug unserer Berufsgruppen:</h1>
        <div className="flex flex-wrap justify-center w-full">
          <div className="max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg w-full">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 mt-3">HandWerk</div>
              <p class="text-gray-700 text-base">
                See all the profesion related with this field
              </p>
              <p class="text-gray-500 text-sm mt-2">See More</p>
            </div>
          </div>
          <div className="max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg w-full">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 mt-3">IT</div>
              <p class="text-gray-700 text-base">
                See all the profesion related with this field
              </p>
              <p class="text-gray-500 text-sm mt-2">See More</p>
            </div>
          </div>

          <div className="max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg w-full">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 mt-3">Medizin</div>
              <p class="text-gray-700 text-base">
                See all the profesion related with this field
              </p>
              <p class="text-gray-500 text-sm mt-2">See More</p>
            </div>
          </div>
          <div className="max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg w-full">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 mt-3"> Ingenieurwesen</div>
              <p class="text-gray-700 text-base">
                See all the profesion related with this field
              </p>
              <p class="text-gray-500 text-sm mt-2">See More</p>
            </div>
          </div>
          <div className="max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg w-full">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 mt-3">Gastgewerbe</div>
              <p class="text-gray-700 text-base">
                See all the profesion related with this field
              </p>
              <p class="text-gray-500 text-sm mt-2">See More</p>
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
