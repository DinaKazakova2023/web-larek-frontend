import { Model } from '../base/Model';
import { IProductsItem, IOrder, IOrderForm, IAppState } from '../../types';

export class AppState extends Model<IAppState> {
	catalog: IProductsItem[];
	basket: IProductsItem[] = [];
	order: IOrder = {
		total: 0,
		address: '',
		payment: '',
		items: [],
		phone: '',
		email: '',
	};

	setCatalog(products: IProductsItem[]) {
		this.catalog = products;
		this.emitChanges('items:changed', { catalog: this.catalog });
	}

	getCatalog(): IProductsItem[] {
		return this.catalog;
	}

	getProduct(id: string): IProductsItem {
		return this.catalog.find((item) => item.id === id);
	}
}
