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
## Об архитектуре
Взаимодействия внутри приложения происходят через события. Модели инициализируют события, слушатели событий в основном коде выполняют передачу данных компонентам отображения и вычислениями между этой передачей, и еще они меняют значения в моделях.

# Документация

## ProductCategory
Тип описывающий все возможные ватегории товара

type ProductCategory =
	| 'софт-скил'
	| 'другое'
	| 'дополнительное'
	| 'кнопка'
	| 'хард-скил';

## ProductsItem
Хранит в себе типы данных модели продукта

interface ProductsItem {
	id: string;
	description: string;
	image: string;
	title: string;
	category: ProductCategory;
	price: number | null;
}

## ProductsList
Список товаров на главной странице

interface ProductsList {
	products: ProductsItem[];
}

## ProductModal extends ProductsItem
Модальное окно карточки товара

interface ProductModal extends ProductsItem {
	button: string;
}

# Базовый код

## Класс Model
Абстрактный базовый класс, для управления данными и их взаимодействия с ситемой событий

## Класс Component
Абстрактный, является базовым классом для компонентов интерфейса

## Класс Api
Базовый класс - клиент для взаимодействия с внешним API и сервером

## Класс EventEmitter
Базовый класс, центральный брокер событий. Позволяет компонентам подписываться на события и реагировать на них

