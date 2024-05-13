import React from "react";
import "./description.scss";
import { useTranslation } from "react-i18next";
function Description() {
  const { t } = useTranslation();

  return (
    <>
      <div className="Description">
        <h1>GERKOS</h1>
        <h2>{t("home-description-title")}</h2>
        {/* <div className="hr-description mt-3"></div> */}
        <div>
          <p className="text-center max-w-7xl	mt-4">
            {t("home-description-text-1")}
          </p>
        </div>
      </div>
      <div className="twoPlace ">
        <div className="twoPlace1">
          <h1 className="title">Für Bewerber</h1>
          <p>
            Träumen Sie von neuen beruflichen Perspektiven in Deutschland? Bei
            GERKOS finden Sie nicht nur vielfältige Karrieremöglichkeiten in
            nahezu allen Berufsgruppen, sondern auch Unterstützung bei der
            Integration und attraktive Arbeitsbedingungen. Starten Sie Ihre
            berufliche Reise mit uns!
          </p>
        </div>

        <div className="twoPlace2">
          <h1 className="title">Für Unternehmen</h1>
          <p>
            Sind Sie auf der Suche nach herausragenden Fachkräften, die Ihr Team
            stärken und Ihr Unternehmen voranbringen? GERKOS bietet Ihnen eine
            exklusive Auswahl an hochqualifizierten Fachkräften aus dem Kosovo.
            Entdecken Sie die Vorteile einer Zusammenarbeit mit uns – von
            exzellenter Fachkompetenz bis hin zu nachhaltiger
            Personalentwicklung.
          </p>
        </div>
      </div>
    </>
  );
}

export default Description;
