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


    constructor(root, index, icon) {


        if (root instanceof Element === false) {
            throw new TypeError('root must be an Element');
        }


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
            class: 'memory-card',
            'data-index': index
        }, [
            icon.element,
            createElement('div', { class: 'back-face' }),
        ]);

        Object.defineProperty(this.#elem, '_cardInstance', {
            value: this,
            configurable: true, enumerable: false
        });

        EventManager.mixin(this);


        this.#elem.addEventListener('click', e => {

            if (!this.flipped) {
                this.#elem.classList.add('flip');
            } else {
                this.#elem.classList.remove('flip');
            }


            this.trigger('flipped', {
                card: this
            })

        });
    }

}


export default Card;