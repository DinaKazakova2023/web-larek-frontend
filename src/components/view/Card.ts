import { IProductsItem, IActions } from '../../types';
import { Component } from '../base/Component';
import { ensureElement } from '../../utils/utils';

export class Card extends Component<IProductsItem> {
	protected _price: HTMLElement;
	protected _image: HTMLImageElement;
	protected _title: HTMLElement;
	protected _category: HTMLElement;
	protected _id: HTMLElement;
	protected _button: HTMLButtonElement;

	constructor(container: HTMLElement, actions?: IActions) {
		super(container);

		this._price = ensureElement<HTMLElement>(`.card__price`, container);
		this._image = container.querySelector(`.card__image`);
		this._title = ensureElement<HTMLElement>(`.card__title`, container);
		this._category = container.querySelector(`.card__category`);
		this._id = container.querySelector(`.card__id`);
		this._button = container.querySelector(`.card__button`);

		if (actions?.onClick) {
			if (this._button) {
				this._button.addEventListener('click', actions.onClick);
			} else {
				container.addEventListener('click', actions.onClick);
			}
		}
	}
	set id(value: string) {
		this.container.dataset.id = value;
	}
	get id(): string {
		return this.container.dataset.id || '';
	}
	set title(value: string) {
		this.setText(this._title, value);
	}
	get title(): string {
		return this._title.textContent || '';
	}
	set category(value: string) {
		this.setText(this._category, value);
		switch (value) {
			case 'софт-скил':
				this.toggleClass(this._category, 'card__category_soft', true);
				break;
			case 'хард-скил':
				this.toggleClass(this._category, 'card__category_hard', true);
				break;
			case 'дополнительное':
				this.toggleClass(this._category, 'card__category_additional', true);
				break;
			case 'кнопка':
				this.toggleClass(this._category, 'card__category_button', true);
				break;
			default:
				this.toggleClass(this._category, 'card__category_other', true);
				break;
		}
	}
	set price(value: number | null) {
		this.setText(
			this._price,
			value ? `${value.toString()} синапсов` : 'Бесценно'
		);
	}
	set image(value: string) {
		this.setImage(this._image, value, this.title);
	}
}
