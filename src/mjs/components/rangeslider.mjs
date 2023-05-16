
import EventManager from "../helpers/event-manager.mjs";
import { createElement, isInt, isPlainObject, isString, uniqid } from "../helpers/utils.mjs";


export class RangeSlider {
    elements
    element

    get id() {
        return this.elements.input.id;
    }


    get label() {
        return this.elements.label.innerHTML;
    }

    set label(label) {
        if (isString(label)) {
            this.elements.label.innerHTML = label;
        }
    }

    get value() {
        return JSON.parse(this.elements.input.value);
    }

    set value(value) {
        if (isInt(value)) {
            value = JSON.stringify(value);
        }

        if (/^\d+$/.test(value)) {
            this.elements.input.value = value;
            this.elements.input.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }



    get inputLabel() {
        return this.elements.inputLabel.innerHTML;
    }


    set inputLabel(label) {
        this.elements.inputLabel.innerHTML = label;
    }


    constructor(id, params) {
        const defaults = {
            label: '',
            min: 0,
            max: 1,
            step: 1,
            value: 0,
            after: ''

        };

        id ??= uniqid();
        params = Object.assign({}, defaults, isPlainObject(params) ? params : {});

        EventManager.mixin(this);

        const

            label = createElement(`<label for="${id}" class="form-label" />`, params.label),

            input = createElement('input', {
                type: 'range',
                class: 'form-range',
                min: params.min,
                max: params.max,
                step: params.step,
                value: params.value,
                id,
                name: id,
                after: ''
            }),
            inputLabel = createElement('<span class="input-label ms-auto"/>', {
                'data-after': params.after
            },
                '' + input.value
            ),

            inputContainer = createElement('<div class="d-flex"/>', [
                createElement('<div class="col-8"/>', input),
                inputLabel
            ]),

            root = createElement('<div class="row flex-column mb-3"/>', {
                id: id + 'FormElement'
            }, [
                label,
                inputContainer
            ]);


        this.elements = {
            root,
            label,
            input,
            inputLabel
        };

        this.element = root;


        input.addEventListener('change', () => {
            inputLabel.innerHTML = input.value;
            this.trigger('change', { value: this.value, slider: this });
        });



    }
}


export default RangeSlider;