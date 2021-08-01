import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "signIn": "Sign in",
            "russian": "Russian",
            "english": "English",
            "korean": "Korean",
            "faq": "FAQ",
            "4suppliers": "For suppliers",
            "4customers": "For customers",
            "favorites": "Favorites",
            "cart": "Cart",
            "hurryUp": "Hurry up to buy"
        }
    },
    ru: {
        translation: {
            "signIn": "Войти",
            "russian": "Русский",
            "english": "Английский",
            "korean": "Корейский",
            "faq": "Частые вопросы",
            "4suppliers": "Поставщикам",
            "4customers": "Покупателям",
            "favorites": "Избранное",
            "cart": "Корзина",
            "hurryUp": "Успей купить"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
        .init({
            resources,
            lng: "ru", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
            // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
            // if you're using a language detector, do not define the lng option

            interpolation: {
                escapeValue: false // react already safes from xss
            }
        });

export default i18n;