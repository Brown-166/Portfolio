import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptTranslation from './locales/pt/translation.json'
import enTranslation from './locales/en/translation.json'


i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng:'pt',
        fallbackLng: 'en',
        resources: {
            pt:{
                translation: ptTranslation
            },
            en:{
                translation: enTranslation
            }
        },
        //debug: true,

        interpolation: {
            escapeValue: false,
        }
    });


export default i18n;