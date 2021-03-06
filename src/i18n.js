import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    ru: {
        translation: {
            "signIn": "Вход",
            "russian": "Русский",
            "english": "Английский",
            "korean": "Корейский",
            "faq": "Частые вопросы",
            "4suppliers": "Поставщикам",
            "4customers": "Покупателям",
            "favorites": "Избранное",
            "cart": "Корзина",
            "hurryUp": "Успей купить",
            "computers": "Компьютеры",
            "computers2": "Компьютеры 2",
            "mice": "Мыши",
            "keyboards": "Клавиатуры",
            "headphones": "Наушники",
            "vr": "VR",
            "accessories": "Аксессуары",
            "accessories2": "Аксессуары 2",
            "accessories3": "Аксессуары 3",
            "popularCategories": "Популярные категории",
            "allCategories": "Все категории",
            "productDetailsInfo": "Информация о технических характеристиках, комплекте поставки, стране изготовления, внешнем виде и цвете товара носит справочный характер и основывается на последних доступных к моменту публикации сведениях.",
            "reviews": "отзывов",
            "vendorCode": "Артикул",
            "favorite": "В избранном",
            'inStock': "В наличии",
            "color": "Цвет",
            "size": "Размер",
            "white": "Белый",
            "black": "Черный",
            "yellow": "Желтый",
            "notChosen": "Не выбрано",
            "buyNow": "Купить сейчас",
            "addToCart": "Добавить в корзину",
            "productDetails": "Характеристики",
            "productDescription": "Описание",
            "productReviews": "Отзывы",
            "doorDelivery": "Доставка до дверей",
            "returnGuarantee": "Гарантия возврата",
            "onlinePayment": "Оплата онлайн",
            "bronze": "Бронзовый",
            "supplierRating": "Рейтинг",
            "sendSupplierMessage": "Связаться с магазином",
            "collecting": "Коллекция",
            "material": "Материал",
            "cotton": "100% хлопок",
            "photosFromCustomers": "Фотографии покупателей",
            "sendReview": "Отправить отзыв",
            "onlyWithPhoto": "Только с фото",
            "byRatingDesc": "Сначала с низкой оценкой",
            "byRatingAsc": "Сначала с высокой оценкой",
            "basedOn": "На основании",
            "deliverySpeed": "Скорость доставки",
            "feedback": "Консультация",
            "productQuality": "Качество товара",
            "star": "звезда",
            "stars": "звезды",
            "sendRequest": "Ответить",
            "yourText": "Ваш текст",
            "yourReview": "Ваш отзыв",
            "yourName": "Ваше имя",
            "enterName": "Введите имя",
            "yourEmail": "Ваш Email",
            "enterEmail": "Введите Email",
            "reviewShopWork": "Оцените работу магазина",
            "addPhotos": "Добавьте фото",
            "orderList": "Заказы",
            "disputes": "Споры",
            "myFavorites": "Избранное",
            "messages": "Сообщения",
            "profileSettings": "Настройки профиля",
            "newOrders": "Новые заказы",
            "sentOrders": "Отправленные",
            "receivedOrders": "Полученные",
            "orderStatus1": "Заказ отправлен",
            "order": "Заказ",
            "total": "Сумма",
            "orderStatus3": "Заказ получен",
            "orderStatus2": "Заказ не отправлен",
            "disputesNotFound": "Споры не найдены",
            "dispute": "Спор",
            "disputeType1": "На рассмотрении",
            "disputeStatus3": "Возврат средств",
            "disputeType2": "Рассмотрено",
            "disputeStatus2": "Решение не вынесено",
            "disputeStatus1": "Отказ",
            "totalPrice": "Сумма заказа",
            "openedDisputes": "Открытые",
            "closedDisputes": "Рассмотрены",
            "favoritesNotFound": "Избранные товары не найдены",
            "sortBy": "Сортировка по:",
            "new": "новые",
            "priceAsc": "цена по убыв.",
            "priceDesc": "цена по возр.",
            "outOfStock": "Нет в наличии",
            "noMessagesHistory": "Нет истории",
            "choseChat": "Выберите собеседника",
            "readyDialog": "Начните диалог",
            "enterMessageText": "Введите сообщение",
            "send": "Отправить",
            "personalSettings": "Личные настройки",
            "generalInformation": "Основная информация",
            "avatar": "Изображение профиля",
            "name": "Имя",
            "surname": "Фамилия",
            "bornDate": "Дата рождения",
            "phone": "Телефон",
            "email": 'E-mail',
            'language': "Язык",
            "currency": "Валюта",
            "deliveryInformation": "Информация для доставки",
            "country": "Страна",
            "city": "Город",
            "address": "Адрес",
            "postalCode": "Индекс",
            "bankCards": "Банковские карты",
            "bankCardsInformation": "Сохраненные карты",
            "addBankCard": "Добавить карту",
            "mainCard": "Основная",
            "validityPeriod": "Срок действия",
            "enterCVC": "Введите CVC",
            "CVC": "Три цифры на обороте",
            "cardNumber": "Номер карты",
            "monthNumber": "ММ",
            "year": "ГГ",
            "main": "Основная для оплаты",
            "save": "Сохранить",
            "notifications": "Уведомления",
            "emailNotifications": "Оповещения на E-mail",
            "newMessages": "Новые сообщения",
            "news": "Новости",
            "pushNotifications": "Оповещения на сайте",
            "phoneNotifications": "Оповещения на телефон",
            "security": "Безопасность",
            "oldPassword": "Старый пароль",
            "newPassword": "Новый пароль",
            "repeatPassword": "Повторите пароль",
            "forCustomers": "Для покупателей",
            "forSuppliers": "Для продавцов",
            "aboutCompany": "О компании",
            "ourContacts": "Наши контакты",
            "russianRuble": "Российский рубль",
            "basket": "Корзина",
            "makingAnOrder": "Оформление заказа",
            "productsInBasket": "товар(а)",
            "yourBasket": "Ваша корзина",
            "products": "Товары",
            "sale": "Скидка",
            "totalCount": "Итого",
            "productTitle": "Название товара",
            "productPrice": "Цена",
            "productQuantity": "Кол-во",
            "makeOrder": "Оформить заказ",
            "sendOrder": "Отправить заказ",
            "userProfile": "Профиль",
            "signUp": "Зарегистрироваться",
            "signOut": "Выйти",
            "productCatalog": "Каталог товаров",
            "catalog": "Каталог",
            "reviewsList": "Отзывы",
            "sales": "Скидки",
            "productExport": "Экспорт товаров",
            "catalogCategory": "Категория",
            "relatedProducts": "Связанные товары",
            "addProduct": "Добавить товар",
            "addDetail": "Добавить характеристику",
            "season": "Сезон",
            "winter": "зима",
            "summer": "лето",
            "autumn": "осень",
            "values": "Значения",
            "category": "Категория",
            "wool": "шерсть",
            "editDetail": "Изменить характеристику",
            "choseCategory": "Выберите категорию",
            "title": "Название",
            "addSale": "Добавить скидку",
            "Sale 25 percent since 1000pcs.": "Скидка 25% от 1000шт.",
            "reviewingProduct": "Оцениваемый товар",
            "reviewMessage": "Текст отзыва",
            "totalRating": "Общая оценка",
            "ratingByParameters": "Оценка по параметрам",
            "sendResponse": "Отправить ответ",
            "responseText": "Текст",
            "allArticles": "Все статьи",
            "ourArticles": "Наши статьи",
            "ourShops": "Наши магазины",
            "howItWork": "Как это работает?",
            "customerSafety": "Защита покупателя",
            "paymentConditions": "Условия оплаты",
            "accountRegister": "Регистрация аккаунта",
            "howBeSupplier": "Как стать продавцом?",
            "cooperationRules": "Правила сотрудничества",
            "supplierPersonalPage": "Личный кабинет продавца",
            "aboutUs": "О нас",
            "supportService": "Служба поддержки",
            "copyrightReport": "Сообщить о нарушении авторских прав",
            "wantGetNewsAndSales": "Хочу получать новости и скидки",
            "subscribe": "Подписаться",
            "healthBeauty": "Красота и здоровье",
            "appliances": "Бытовая техника",
            "appliances2": "Бытовая техника",
            "appliances3": "Бытовая техника",
            "appliances4": "Бытовая техника",
            "allProducts": "Все товары",
            "allShops": "Все магазины",
            "showAll": "Читать полностью",
            "hideAll": "Скрыть",
            "password": "Пароль",
            "byPhoneNumber": "По номеру телефона",
            "forgotPassword": "Забыли пароль?",
            "addTrackNumber": "Добавить трек-номер",
            "trackNumber": "Трек-номер",
            "enterTrackNumber": "Введите трек-номер",
            "chooseValue": "Выберите",
            "selectAll": "Выбрать всё",
            "tShirts": "Футболки",
            "actionWithSelected": "Действие с выбранными",
            "apply": "Применить",
            "next": "Далее >",
            "back": "< Назад",
            "mainInformation": "Основная информация",
            "media": "Медиа",
            "variableAttributes": "Вариации товара",
            "details": "Характеристики",
            "addAttribute": "Добавить вариацию",
            "addImages": "Добавить изображения",
            "vendor_code": "Артикул",
            "price": "Цена",
            "choseSale": "Выберите скидку",
            "allFieldsMustFill": "Все поля должны быть заполнены!",
            "variationAttribute": "Вариация",
            "variationAttributeValue": "Значение вариации",
            "addDetails": "Добавить характеристику",
            "choseDetails": "Выберите характеристику",
            "amount": "Размер",
            "since": "С какого колличества",
            "ordersNotFound": "Заказы не найдены"
        }
    },
    'en-US': {
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
            "hurryUp": "Hurry up to buy",
            "computers": "Computers",
            "computers2": "Computers 2",
            "mice": "Mice",
            "keyboards": "Keyboards",
            "headphones": "Headphones",
            "vr": "VR",
            "accessories": "Accessories",
            "accessories2": "Accessories 2",
            "accessories3": "Accessories 3",
            "popularCategories": "Popular categories",
            "allCategories": "All categories"
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