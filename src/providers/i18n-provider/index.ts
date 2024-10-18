"use client";

import i18n from "i18next";
import { I18nProvider } from "@refinedev/core";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import detector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(detector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["ja"],
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: ["common"],
    defaultNS: "common",
    fallbackLng: ["ja"],
  });

const i18nProvider: I18nProvider = {
  translate: (key: string, params?: object, defaultMessage?: string) => {
    return i18n.t(key, { ...params, defaultValue: defaultMessage });
  },
  changeLocale: async (lang: string) => {
    await i18n.changeLanguage(lang);
  },
  getLocale: () => {
    return i18n.language;
  },
};

export default i18nProvider;
