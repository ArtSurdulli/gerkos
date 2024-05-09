import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Contact/Contact";
import { Link } from "react-router-dom";

function It() {
  const professions = [
    { id: 1, name: "Softwareentwickler" },
    { id: 2, name: "Systemadministrator" },
    { id: 3, name: "IT-Support-Spezialist" },
    { id: 4, name: "Datenanalyst" },
    { id: 5, name: "Webentwickler" },
    { id: 6, name: "Sicherheitsexperte" },
    { id: 7, name: "Netzwerktechniker" },
    { id: 8, name: "Datenbankadministrator" },
    { id: 9, name: "UX/UI-Designer" }
  ];

  return (
    <div>
      <Navbar />

      <div className="row">
        <h1>Berufe im Bereich IT</h1>
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

export default It;
