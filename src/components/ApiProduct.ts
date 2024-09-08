import { IProductsItem, IOrder, IOrderData, IApi } from '../types/index';
import { Api, ApiListResponse } from './base/Api';

export class ApiProduct extends Api implements IApi {
	readonly cdn: string;
	constructor(cdn: string, baseUrl: string, options?: RequestInit) {
		super(baseUrl, options);
		this.cdn = cdn;
	}

	getProductsId(id: string): Promise<IProductsItem> {
		return this.get(`/product/${id}`).then((item: IProductsItem) => ({
			...item,
			image: this.cdn + item.image,
		}));
	}

	getProducts() {
		return this.get('/product').then((data: ApiListResponse<IProductsItem>) => {
			return data.items.map((item) => ({ ...item }));
		});
	}

	postOrder(order: IOrder): Promise<IOrderData> {
		return this.post(`/order`, order).then((data: IOrderData) => data);
	}
}