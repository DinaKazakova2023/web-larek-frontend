import { IEvents } from '../base/Events';
import { ensureElement } from '../../utils/utils';
import { Component } from '../base/Component';

export interface IModal {
	content: HTMLElement;
}

export class Modal extends Component<IModal> {
	protected _closeButton: HTMLButtonElement;
	protected _content: HTMLElement;

	constructor(container: HTMLElement, protected events: IEvents) {
		super(container);
		this._content = ensureElement<HTMLElement>(
			'.modal__content',
			this.container
		);
		this._closeButton = ensureElement<HTMLButtonElement>(
			'.close__button',
			this.container
		);

		this._closeButton.addEventListener('click', this.closeModal.bind(this));
	}
	closeModal() {
		this.toggleClass(this.container, 'modal_active', false);
		this.events.emit('modal:close');
	}
	openModal() {
		this.toggleClass(this.container, 'modal_active', true);
		this.events.emit('modal:open');
	}
}
