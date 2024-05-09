import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Contact/Contact";

function Ingenieurwesen() {
  const professions = [
    { id: 1, name: "Maschinenbauingenieur" },
    { id: 2, name: "Elektroingenieur" },
    { id: 3, name: "Bauingenieur" },
    { id: 4, name: "Verfahrenstechnikingenieur" },
    { id: 5, name: "Luft- und Raumfahrtingenieur" },
    { id: 6, name: "Umweltingenieur" },
    { id: 7, name: "Chemieingenieur" },
    { id: 8, name: "Automatisierungsingenieur" }
  ];

  return (
    <div>
      <Navbar />

      <div className="row">
        <h1>Berufe im Bereich Ingenieurwesen</h1>
        <div className="flex flex-wrap justify-center w-full">
          {professions.map((profession) => (
            <div
              key={profession.id}
              className="max-w-xs mx-2 my-4 rounded overflow-hidden shadow-lg w-full flex justify-center items-center"
              style={{ height: "200px" }}
            >
              <div className="px-6 py-4">
                <p className="text-gray-700 text-lg text-center">{profession.name}</p>
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

export default Ingenieurwesen;
