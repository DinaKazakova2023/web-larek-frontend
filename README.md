# Проектная работа "Веб-ларек"
Интернет-магазин с товарами для веб-разработчиков - Web-ларек. В нем можно посмотреть каталог товаров, добавить товары в корзину и сделать заказ.

# Структура
Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```
# Архитектура проекта

Проект реализован на TS с использованием архитектурного паттерна MVC (делит код на три слоя):

1) Model (слой данных) - модель отвечает за данные и бизнес-логику приложения (хранит данные; выполняет операции с данными: добавление, удаление, изменение, чтение; обрабатывает бизнес-логику и правила; не зависит от пользовательского интерфейса (View) или пользовательских действий (Controller));
2) View (слой отображения) - отвечает за отображение данных пользователю (отвечает за показ карточек товаров, корзины, формы входа и т. д.);
3) Controller (слой управления) - обрабатывает пользовательские действия, вызывает методы модели для изменения данных, обновляет представление на основе изменений в модели.

## Model

1) Класс ProductCatalog (загружает и хранит данные о продуктах из API)

Методы:
fetchProducts(): — загружает список товаров из API;
getProductById(id: string): — возвращает товар по ID;
getProducts(): — возвращает весь список товаров.

2) Класс BasketProduct (управляет корзиной)

Методы:
addItem(item: Product): — добавляет товар в корзину;
removeItem(id: string): — удаляет товар по ID;
getItems(): — возвращает список товаров в корзине;
getTotal(): — рассчитывает общую стоимость корзины;
clearBasket(): — очищает корзину.

3) Класс OrderModel (управляет деталями заказа)

Методы:
setOrderDetails(details: OrderDetails): — устанавливает детали заказа;
getOrderDetails(): — возвращает детали заказа.

## View

1) Класс ProductView (для отображения каталога товаров)

Методы:
renderProducts(products: Product[]): — отображает список товаров.

2) Класс BasketView (для отображения содержания корзины)

Методы:
renderBasket(items: BasketItem[]): — отображает содержимое корзины.

3) Класс OrderView (для отображения формы заказа и контактых данных)

Методы:
renderOrderForm(): — отображает форму заказа.

4) Класс ModalView (отображение модальных окон)

Методы:
open(): - открывает модальное окно;
close(): - закрывает модальное окно;


## Класс EventEmitter (реализует событийную модель)

Методы:
on - регистрирует обработчик для указанного события;
off - удаляет конкретный обработчик для указанного события;
emit - уведомление подписчиков о наступлении события.

## Класс API

Методы:
getProducts(): - получает список продуктов;
getProduct(): - получает данные о продукте;
createOrder(): - отправляет заказ на сервер.

## Типы данных

interface ProductCatalog {
 id: string; // Уникальный идентификатор товара
 description: string; // Описание товара
 image: string; // Ссылка на изображение
 title: string; // Название товара
 category: ICategoryProduct; // Категория товара
 price: number | null; // Цена товара (число или null если цена не указана)
}

# Принцип работы онлайн-магазина "Веб-ларек" (и его страницы)

## Главная страница
Содержит каталог товара. 
При нажатии на карточку товара - открывается модальное окно с детальной информацией о товаре.
Так же содержит икноку корзину, при клике на которую открывается корзина.

## Просмотр товара
Информация о товаре.
Кнопка "купить" (добавляет товар в корзину)
При нажатии на кнопку "убрать" товар удаляется из корзины.

## Просмотр корзины
Название товара, цена, кнопка удалить и кнопка оформить.
Общая сумма товаров.

## Оформление товара
1 шаг:
выбор способа оплаты
ввод адреса доставки
(если адрес доставки не введен, появляется сообщение об ошибке).

2 шаг:
ввод почты и телефона
(так же ошибка, если поля не заполнены)
при нажатии на кнопку "оплатить" появляется сообщение об успешной оплате и товары удаляются из корзины.
1