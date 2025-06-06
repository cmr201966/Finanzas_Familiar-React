import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa los JSON de traducción
//import esLogin from './locales/es/login.json';
//import enLogin from './locales/en/login.json';
//import esRegister from './locales/es/register.json';
//import enRegister from './locales/en/register.json';
//import esPresupuesto from './locales/es/presup.json';
//import enPresupuesto from './locales/en/presup.json';
import esHome from './locales/es/home.json';
import enHome from './locales/en/home.json';
//import esCuentas from './locales/es/cuentas.json';
//import enCuentas from './locales/en/cuentas.json';
//import esCategorias from './locales/es/categorias.json';
//import enCategorias from './locales/en/categorias.json';
//import esCategoriaBanco from './locales/es/categoriaBanco.json';
//import enCategoriaBanco from './locales/en/categoriaBanco.json';

const resources = {
  es: {
    //login: esLogin,
    //register: esRegister,
    home: esHome,
    //presup: esPresupuesto,
    //cuentas: esCuentas,
    //categorias: esCategorias,
    //categoriaBanco: esCategoriaBanco,
  },
  en: {
    //login: enLogin,
    //register: enRegister,
    home: enHome,
    //presup: enPresupuesto,
    //cuentas: enCuentas,
    //categorias: enCategorias,
    //categoriaBanco: enCategoriaBanco,
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'en',
    ns: ['login', 'register', 'home', 'presup', 'cuentas', 'categorias', 'categoriaBanco'], // namespaces
    defaultNS: 'home',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, // si no quieres usar Suspense
    }
  });

export default i18n;