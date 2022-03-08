import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import PTBR from "./i18n/locales/pt/pt-br.json";
import ENGUS from "./i18n/locales/en/en-us.json";

const resources = {
  en: {
    translation: ENGUS,
  },
  pt: {
    translation: PTBR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language,
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;
