import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enJSON from './en.json'
import elJSON from './el.json'
i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    el: { ...elJSON },
  },
  lng: "en",
});