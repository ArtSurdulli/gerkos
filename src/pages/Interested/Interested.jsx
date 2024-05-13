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

  const professions = [
    { id: 1, value: "icon", name: "KEINE Kosten für unsere Leistungen!" },
    {
      id: 2,
      value: "icon",
      name: "Anerkennung deines Abschlusses in Deutschland",
    },
    { id: 3, value: "icon", name: "Garantierter Arbeitsvertrag" },
    { id: 4, value: "icon", name: "Attraktive Arbeitsstelle" },
    { id: 5, value: "icon", name: "Entgelt nach deutschem Tarif" },
  ];

  return (
    <div>
      <Navbar />
      <InterestedBanner />

      <section className="text-center">
        <h1 className="font-bold mt-4 ">Deine Vorteile mit GERKOS:</h1>
        <div className="row">
          <div className="flex flex-wrap justify-center w-full">
            {professions.map((profession) => (
              <div
                key={profession.id}
                className=" card max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg"
              >
                <div className="px-6 py-4">
                  <div className="flex justify-center font-bold text-xl mb-2">
                    {profession.value}
                  </div>
                  <div className=" mb-2">{profession.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="Description">
        <h2 className="font-bold  ">Dich suchen wir!</h2>
        <div>
          <p className="text-center max-w-7xl	mt-4">
            Egal ob du bereits voll im Berufsleben stehst, frisch die
            Universität absolviert hast oder eine abgeschlossene
            Berufsausbildung vorweisen kannst – unser Konzept ist dein Weg nach
            Deutschland.
          </p>
        </div>
      </div>

      <div className="flex justify-evenly">
        <div class="card1">
          <div class="content-card">
            <h4 className="font-bold">Universität Studenten & Absolventen</h4>
            <p>
              Studenten oder Absolventen mit akademischer Bildung, die bereit
              sind, ihr Wissen in praktische Erfolge umzusetzen.
            </p>
          </div>
          <img src={img1} alt="Banner" className="w-full" />
        </div>
        <div class="card1">
          <div class="content-card">
            <h4 className="font-bold">Ausbildungsabsolventen</h4>
            <p>
              Engagierte Fachkräfte mit abgeschlossener Berufsausbildung, die
              nach neuen Herausforderungen streben.
            </p>
          </div>
          <img src={img1} alt="Banner" className="w-full" />
        </div>
        <div class="card1">
          <div class="content-card">
            <h2 className="font-bold">Berufstätige</h2>
            <p>
              Wir suchen Bewerber mit beruflicher Praxis, die ihre Kompetenz in
              der Arbeitswelt bereits unter Beweis gestellt haben.
            </p>
          </div>
          <img src={img1} alt="Banner" className="w-full" />
        </div>
      </div>
      <br />
      <br />

      <Contact />
      <Footer />
    </div>
  );
}

export default Interested;
