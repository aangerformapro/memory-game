import EventManager from "../helpers/event-manager.mjs";
import { createElement, isInt, isPlainObject, isString } from "../helpers/utils.mjs";


const defaults = {
    difficulty: 4,
    timeout: 0,

};


export class Settings {

    get difficulty() {
        return this.#settings.difficulty;
    }

    set difficulty(num) {

        if (!isInt(num)) {
            return;
        }
        let settings = this.#settings;
        settings.difficulty = Math.max(4, num);
        this.#settings = settings;
    }


    set timeout(timeout) {

        if (!isInt(timeout)) {
            return;
        }
        let settings = this.#settings;
        settings.timeout = Math.max(0, timeout);
        this.#settings = settings;

    }


    get timeout() {

        return this.#settings.timeout;
    }



    get #settings() {


        let settings = localStorage.getItem('settings') ?? defaults;

        if (isString(settings)) {
            settings = JSON.parse(settings);
        }

        return settings;
    }


    set #settings(obj) {
        if (!isPlainObject(obj)) {
            return;
        }


        localStorage.setItem('settings', JSON.stringify(obj));
    }




}



export class SettingsUI {

    #elem

    #modal
    #form
    #difficulty
    #timeout
    #savebtn
    #settings



    set timeout(timeout) {

    }

    get element() {
        return this.#elem;
    }

    get settings() {
        return this.#settings;
    }


    constructor(settings) {

        settings ??= new Settings();
        if (settings instanceof Settings === false) {
            throw new TypeError('settings must be an instance of Settings.');
        }

        EventManager.mixin(this);

        this.#settings = settings;
        this.#elem = document.querySelector('#settings');

        this.#modal = new bootstrap.Modal(this.#elem);
        this.#form = this.#elem.querySelector('form');
        this.#savebtn = this.#elem.querySelector('.btn-primary');
        const formElements = [this.#difficulty, this.#timeout] = [this.#form.querySelector('#difficulty'), this.#form.querySelector('#timeout')];


        this.#form.addEventListener('submit', e => e.preventDefault());

        this.#form.addEventListener('change', e => {

            let input = e.target.closest('input');

            if (input) {
                let
                    { id, value } = input,
                    span = input.closest('.d-flex').querySelector('span');

                if (id === 'difficulty') {
                    span.innerHTML = value + 'x' + value;
                } else if (id === 'timeout') {
                    span.innerHTML = value + ' minutes';
                }
            }
        });


        this.#savebtn.addEventListener('click', e => {
            e.preventDefault();
            formElements.forEach(elem => {
                this.settings[elem.id] = JSON.parse(elem.value);
                this.#modal.hide();
            });

            this.trigger('saved', {
                ui: this,
                settings: this.settings
            });

        })



        //init parameters
        this.#difficulty.value = JSON.stringify(settings.difficulty);
        this.#timeout.value = JSON.stringify(settings.timeout);
        this.#difficulty.dispatchEvent(new Event('change', { bubbles: true }));
        this.#timeout.dispatchEvent(new Event('change', { bubbles: true }));

        this.trigger('loaded', {
            ui: this,
            settings: this.settings
        });

    }
}



export default Settings;