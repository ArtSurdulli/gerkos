import React from "react";
import { useTranslation } from "react-i18next";
import "./Requirements.scss";

function Requirements() {
  const { t } = useTranslation();
  const professions = [
    { id: 1, value: ">20", name: "Jahre Erfahrung" },
    { id: 2, value: "10", name: "Standorte in Deutschland" },
    { id: 3, value: ">240", name: "Offene Jobs im Angebot" },
    { id: 4, value: "33", name: "Mitarbeiter in unseren Niederlassungen" },
    { id: 5, value: ">1000", name: "Externe Fachkräfte" },
  ];

  return (
    <section className="text-center">
      <h1 className="font-bold ">{t("home-requirements-title")}</h1>
      <div className="row"> 
        <div className="flex flex-wrap justify-center w-full">
          {professions.map((profession) => (
            <div key={profession.id} className=" card max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="flex justify-center font-bold text-xl mb-2">
                {profession.value}
                </div>
                <div className=" text-xl mb-2">
                  {profession.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Requirements;
