import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Contact/Contact";

function HandWerk() {
  const professions = [
    { id: 1, name: "Elektriker" },
    { id: 2, name: "Tischler" },
    { id: 3, name: "Kfz-Mechatroniker" },
    { id: 4, name: "Installateur für Heizung und Sanitär" },
    { id: 5, name: "Schweißer" },
    { id: 6, name: "Maurer" },
    { id: 7, name: "Zimmermann" },
    { id: 8, name: "Maler und Lackierer" },
    { id: 9, name: "Fliesenleger" },
  ];

  return (
    <div>
      <Navbar />

      <div className="row">
        <h1>Berufe im Bereich HandWerk</h1>
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

export default HandWerk;


