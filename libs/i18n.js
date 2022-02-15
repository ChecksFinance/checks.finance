import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from 'i18next-browser-languagedetector';
import resources from './i18n.json';

i18n
  .use(languageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false  
    }
  });

export default i18n;