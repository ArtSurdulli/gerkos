import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Contact/Contact";

function Gastgewerbe() {
  const professions = [
    { id: 1, name: "Koch" },
    { id: 2, name: "Hotelfachmann" },
    { id: 3, name: "Restaurantmanager" },
    { id: 4, name: "Barkeeper" },
    { id: 5, name: "Empfangsmitarbeiter" },
    { id: 6, name: "Eventmanager" },
    { id: 7, name: "Zimmermädchen/Kammerjunge" },
    { id: 8, name: "Servicekraft" },
    { id: 9, name: "Küchenhilfe" }
  ];

  return (
    <div>
      <Navbar />

      <div className="row">
        <h1>Berufe im Bereich Gastgewerbe</h1>
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

export default Gastgewerbe;





