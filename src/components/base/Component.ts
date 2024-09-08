export abstract class Component<T> {
	protected constructor(protected readonly container: HTMLElement) {}

	toggleClass(element: HTMLElement, className: string, force?: boolean) {
		element.classList.toggle(className, force);
	}

	protected setText(element: HTMLElement, text: unknown) {
		if (element) {
			element.textContent = String(text);
		}
	}

	protected setImage(item: HTMLImageElement, src: string, alt?: string) {
		if (item) {
			item.src = src;
			if (alt) {
				item.alt = alt;
			}
		}
	}

	setDissabled(element: HTMLElement, state: boolean) {
		if (element) {
			if (state) element.setAttribute('disabled', 'disabled');
			else element.removeAttribute('disabled');
		}
	}

	protected setVisible(element: HTMLElement) {
		element.style.removeProperty('display');
	}

	protected setHidden(element: HTMLElement) {
		element.style.display = 'none';
	}

	render(data?: Partial<T>): HTMLElement {
		Object.assign(this as object, data ?? {});
		return this.container;
	}
}
