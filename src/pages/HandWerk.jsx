import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Contact/Contact";
import { useTranslation } from "react-i18next";

function HandWerk() {
  const { t } = useTranslation();

  const professions = [
    { id: 1, name: t("handwerk-professions-1") },
    { id: 2, name: t("handwerk-professions-2") },
    { id: 3, name: t("handwerk-professions-3") },
    { id: 4, name: t("handwerk-professions-4") },
    { id: 5, name: t("handwerk-professions-5") },
    { id: 6, name: t("handwerk-professions-6") },
    { id: 7, name: t("handwerk-professions-7") },
    { id: 8, name: t("handwerk-professions-8") },
    { id: 9, name: t("handwerk-professions-9") },
  ];

  return (
    <div>
      <Navbar />

      <div className="row">
        <h1>{t("handwerk-page-professions")}</h1>
        <div className="flex flex-wrap justify-center w-full">
          {professions.map((profession) => (
            <div
              key={profession.id}
              className="max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg w-full flex justify-center items-center"
              style={{ height: "200px" }}
            >
              <div className="px-6 py-4">
                <p className="text-gray-700 text-lg text-center">
                  {profession.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

export default HandWerk;
