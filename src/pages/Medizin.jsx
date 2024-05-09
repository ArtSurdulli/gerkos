import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Contact/Contact";

function Medizin() {
  const professions = [
    { id: 1, name: "Gesundheits- und Krankenpfleger" },
    { id: 2, name: "Medizinisch-technischer Assistent" },
    { id: 3, name: "Apotheker" },
    { id: 4, name: "Physiotherapeut" },
    { id: 5, name: "Zahnmedizinischer Fachangestellter" },
    { id: 6, name: "Altenpfleger" },
    { id: 7, name: "Ergotherapeut" },
    { id: 8, name: "Notfallsanitäter" },
    { id: 9, name: "Medizinischer Fachangestellter" }
  ];

  return (
    <div>
      <Navbar />

      <div className="row">
        <h1>Berufe im Bereich Medizin</h1>
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

export default Medizin;





