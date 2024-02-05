// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import translationEN from "./locales/en/translation.json";
import translationDE from "./locales/de/translation.json";
import translationSQ from "./locales/sq/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    // Define your translations here
    de: {
      translation: translationDE,
    },
    sq: {
      translation: translationSQ,
    },
    // Add more languages as needed
    // fr: { translation: { /* French translations */ } },
    // es: { translation: { /* Spanish translations */ } },
  },
  lng: "de", // Set the default language
  fallbackLng: "de", // Fallback language if translation is not found in the current language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
