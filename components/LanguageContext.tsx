"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type Language = 'sr' | 'en';
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, Record<Language, string>>;
};

const defaultTranslations = {
  nav_about: { sr: "O nama", en: "About Us" },
  nav_products: { sr: "Proizvodi", en: "Products" },
  nav_contact: { sr: "Kontakt", en: "Contact" },

  hero_title: { sr: "Aqua Prime – Čista voda za zdrav život", en: "Aqua Prime – Pure Water for a Healthy Life" },
  hero_subtitle: { sr: "Naši filteri čuvaju zdravlje vaše porodice", en: "Our filters protect your family's health" },

  about_title: { sr: "Dobrodošli u Aqua Prime", en: "Welcome to Aqua Prime" },
  about_text: { sr: "Sa Aqua Prime filterima, vaša porodica pije samo najčišću vodu. Naši filteri su jednostavni za upotrebu i prilagođeni potrebama domaćinstava širom Srbije.",
                en: "With Aqua Prime filters, your family drinks only the purest water. Our filters are easy to use and tailored to the needs of households across Serbia." },

  cta_title: { sr: "Spremni za čistiju vodu?", en: "Ready for cleaner water?" },
  cta_text: { sr: "Pređite na Aqua Prime filtere i omogućite svojoj porodici zdravu i sigurnu vodu.",
              en: "Switch to Aqua Prime filters and give your family healthy, safe water." },
  cta_btn_products: { sr: "Pogledajte proizvode", en: "View Products" },
  cta_btn_contact: { sr: "Kontaktirajte nas", en: "Contact Us" },
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'sr',
  setLanguage: () => {},
  translations: defaultTranslations
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('sr');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: defaultTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
