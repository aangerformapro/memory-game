import { createElement, isArray, isFunction, isPlainObject, isString, uniqid } from "../helpers/utils.mjs";



const
    { Modal } = bootstrap,
    defaults = {
        title: document.title,
        body: ''
    };


function innerHTML(elem, html) {

    if (elem instanceof Element) {
        if (isString(html) || html instanceof Element) {
            html = [html];
        }

        if (isArray(html)) {
            elem.innerHTML = '';

            html.forEach(item => {
                if (isString(item)) {
                    elem.innerHTML += item;
                } else if (item instanceof Element) {
                    elem.appendChild(item);
                }
            });


        }
    }



    return elem;
}



export class Dialog {

    elements

    element

    #modal

    get modal() {
        return this.#modal;
    }

    get title() {
        return this.elements.title.innerHTML;
    }

    set title(title) {
        if (isString(title)) {
            this.elements.title.innerHTML = title;
        }
    }

    get body() {
        return this.elements.body;
    }

    set body(body) {
        innerHTML(this.elements.body, body);
    }

    constructor(id, params) {


        params = Object.assign({}, defaults, isPlainObject(params) ? params : {});

        id ??= uniqid();

        let
            titleText = params.title,
            bodyContents = params.body;

        const
            title = createElement(`<h1 class="modal-title fs-5" id="${id}Label"/>`, titleText),
            header = createElement('<div class="modal-header"/>', [
                title,
                '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'
            ]),

            body = createElement('<div class="modal-body"/>', [
                bodyContents
            ]),

            cancelBtn = createElement('<button type="button" class="btn btn-secondary" data-bs-dismiss="modal"/>', 'Annuler'),
            saveBtn = createElement('<button type="button" class="btn btn-primary"/>', {
                onclick(e) {
                    e.preventDefault();
                    e.target.dispatchEvent(new Event('save.bs.modal', { bubbles: true }));
                    modal.hide();
                }
            }, 'Sauvegarder'),
            footer = createElement('<div class="modal-footer"/>', [
                cancelBtn,
                saveBtn
            ]),

            content = createElement('<div class="modal-content"/>', [
                header,
                body,
                footer
            ]),
            dialog = createElement('<div class="modal-dialog modal-dialog-centered"/>', content),
            root = createElement(`<div class="modal fade" id="${id}" tabindex="-1" aria-labelledby="${id}Label" aria-hidden="true"/>`, dialog),
            modal = new Modal(root);

        this.#modal = modal;
        this.elements = {
            root,
            dialog,
            content,
            header,
            title,
            body,
            footer,
            cancelBtn,
            saveBtn
        };
        this.element = root;


    }



    hide(...args) {
        return this.#modal.hide(...args);
    }

    show(...args) {
        return this.#modal.show(...args);
    }

    toggle(...args) {
        return this.#modal.toggle(...args);
    }


    #addEventListener(listener, type) {
        if (isFunction(listener)) {
            this.elements.root.addEventListener(type, listener);
        }
    }

    onHide(listener) {
        this.#addEventListener(listener, 'hide.bs.modal');
    }

    onHidden(listener) {
        this.#addEventListener(listener, 'hiden.bs.modal');
    }

    onShow(listener) {
        this.#addEventListener(listener, 'show.bs.modal');
    }

    onShown(listener) {
        this.#addEventListener(listener, 'shown.bs.modal');
    }

    onSave(listener) {
        this.#addEventListener(listener, 'save.bs.modal');
    }


}



export default Dialog;