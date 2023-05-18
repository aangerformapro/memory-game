import { createElement, decode, encode, isArray } from "../helpers/utils.mjs";



class RadioElement {


    element
    elements


    get value() {
        return decode(this.elements.input.value)
    }

    get name() {
        return this.elements.input.getAttribute('name');
    }

    get id() {
        return this.elements.input.getAttribute('id');
    }

    get checked() {
        return this.elements.input.checked === true;
    }
    set checked(checked) {
        this.elements.input.checked = checked === true;
    }
    constructor(id, name, value) {


        const

            label = createElement('label', { for: id }),
            input = createElement('<input type="radio">', {
                id, name, value: encode(value)
            }),
            root = createElement('span', {
                class: "color-picker d-inline-block mx-3"
            }, [
                input,
                label
            ]);



        this.elements = {
            root, label, input
        };

        this.element = root;
    }

}


export class ThemeSelector {


    elements

    element

    get value() {
        for (let theme of this.elements) {
            if (theme.checked) {
                return theme.value;
            }
        }

        return null;
    }

    constructor(themes, value) {
        if (!isArray(themes)) {
            throw new TypeError('themes must be an Array');
        }

        themes = themes.map(value => new RadioElement('theme' + value, 'theme', value));

        const
            root = createElement('div', {
                class: 'theme-selector',
                id: 'themeFormElement'
            }, [
                createElement('<div class="form-label"/>', 'Theme'),
                createElement('<div class="d-flex">', themes.map(t => t.element))
            ]);

        this.elements = themes;
        this.element = root;


        themes.forEach(theme => {
            if (theme.value === value) {
                theme.checked = true;
            }
        });
    }

}


export default ThemeSelector;