import { createElement, isArray, isFunction, isString, uniqid } from "../helpers/utils.mjs";



const
    { Modal } = bootstrap;


function innerHTML(elem, html) {

    if (elem instanceof Element) {
        if (isString(html) || html instanceof Element) {
            html = [html];
        }

        if (isArray(html)) {
            elem.innerHTML = '';

            html.forEach(item => {
                if (isString(html)) {
                    elem.innerHTML += item;
                } else if (html instanceof Element) {
                    elem.appendChild(item);
                }
            });


        }
    }



    return elem;
}



export class Dialog {

    elements

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

    constructor(id, titleText, bodyContents) {


        id ??= uniqid();

        titleText ??= document.title;

        bodyContents ??= '';

        const
            title = createElement(`<h1 class="modal-title fs-5" id="${id}Label"/>`, titleText),
            header = createElement(' <div class="modal-header"/>', [
                title,
                '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'
            ]),

            body = createElement('<div class="modal-body"/>', [
                bodyContents
            ]),

            cancelBtn = createElement('<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>'),
            saveBtn = createElement('<button type="button" class="btn btn-primary">Sauvegarder</button>'),
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
            root = createElement(`<div class="modal fade" id="${id}" tabindex="-1" aria-labelledby="${id}Label" aria-hidden="true"/>`, dialog)
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


}



export default Dialog;