import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "../locales/en.json";
import uzTranslation from "../locales/uz.json";
import ruTranslation from "../locales/ru.json";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
        en: { translation: enTranslation },
        uz: { translation: uzTranslation },
        ru: { translation: ruTranslation }
      },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
