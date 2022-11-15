import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { EN, PL } from "../constants";
import en from "./en/dictionary";
import pl from "./pl/dictionary";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      [EN]: {
        translation: en,
      },
      [PL]: {
        translation: pl,
      },
    },
  });

export default i18n;
