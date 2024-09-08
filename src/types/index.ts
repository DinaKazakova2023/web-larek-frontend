// Категории
type ProductCategory =
	| 'софт-скил'
	| 'другое'
	| 'дополнительное'
	| 'кнопка'
	| 'хард-скил';

export interface IApi {
	getProducts: () => Promise<IProductsItem[]>;
	postOrder: (order: IOrder) => Promise<IOrderData>;
	getProductsId: (id: string) => Promise<IProductsItem>;
}

//Для для товара
export interface IProductsItem {
	id: string;
	description: string;
	image: string;
	title: string;
	category: ProductCategory;
	price: number | null;
	index?: string;
}

//Для формы заказа
export interface IOrderForm {
	payment: string;
	address: string;
	email: string;
	phone: string;
}

//Для заказа
export interface IOrder extends IOrderForm {
	total: number;
	items: string[];
}

//Заказ
export interface IOrderData {
	id: string;
	total: number;
}

export interface IAppState {
	basket: IProductsItem[];
	order: IOrder | null;
	catalog: IProductsItem[];
	previe: string | null;
}

export interface IPage {
	catalog: HTMLElement;
	basket: HTMLElement;
	counter: HTMLElement;
	locked: HTMLElement;
}

export interface IActions {
	onClick: (e: MouseEvent) => void;
}
