"use client";

import i18n from "i18next";
import { I18nProvider } from "@refinedev/core";

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
