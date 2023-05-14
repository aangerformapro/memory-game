import dataset from "../helpers/dataset.mjs";
import EventManager from "../helpers/event-manager.mjs";
import { createElement, isInt, isString } from "../helpers/utils.mjs";
import Icon from "./icon.mjs";


/**
 * @link https://marina-ferreira.github.io/projects/js/memory-game/
 */

export class Card {

    #index
    #icon
    #elem


    get element() {
        return this.#elem;
    }

    get label() {
        return this.#icon.label;
    }


    get index() {
        return this.#index;
    }

    get icon() {
        return this.#icon;
    }



    get flipped() {
        return this.#elem.classList.contains('flip');
    }


    get detached() {
        return this.#elem.parentElement === null;
    }


    get order() {
        return parseInt(this.#elem.style.order ?? 0);
    }


    set order(num) {

        if (!isInt(num)) {
            throw new TypeError('num must be an integer');
        }
        this.#elem.style.order = num;
    }

    constructor(index, icon) {

        if (!isInt(index)) {
            throw new TypeError('name must be an integer');
        }

        if (isString(icon)) {
            icon = new Icon(icon);
        }

        if (icon instanceof Icon === false) {
            throw new TypeError('icon must be instance of Icon');
        }

        this.#icon = icon;
        this.#index = index;
        this.#elem = createElement('div', {
            class: 'memory-card col-3',
            'data-index': index,
            'style': 'order: ' + index
        }, [
            createElement('div', { class: 'front-face' }, [
                icon.element
            ]),
            createElement('div', { class: 'back-face' }),
        ]);

        Object.defineProperty(this.#elem, '_cardInstance', {
            value: this,
            configurable: true, enumerable: false
        });

        EventManager.mixin(this);


        this.#elem.addEventListener('click', e => {
            this.toggle();
        });
    }



    toggle() {
        if (!this.flipped) {
            this.#elem.classList.add('flip');
        } else {
            this.#elem.classList.remove('flip');
        }


        this.trigger('flipped', {
            card: this,
            flipped: this.flipped
        });
    }

    disable(flag = true) {

        if (flag) {
            this.#elem.classList.add('disabled');
        } else {
            this.#elem.classList.remove('disabled');
        }

    }


    get disabled() {
        return this.#elem.classList.contains('disabled');
    }

}


export default Card;