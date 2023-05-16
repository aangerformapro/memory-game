import EventManager from "../helpers/event-manager.mjs";
import { LocalStore } from "../helpers/storage/webstorage.mjs";
import { createElement } from "../helpers/utils.mjs";
import Dialog from "./dialog.mjs";
import RangeSlider from "./rangeslider.mjs";


const defaults = {
    difficulty: 4,
    timeout: 0,
    lives: 0
}, keys = Object.keys(defaults);

export class Settings {


    static get difficulty() {
        return new Promise(resolve => {
            LocalStore.get('difficulty', defaults.difficulty).then(resolve);
        });
    }

    static set difficulty(difficulty) {
        return new Promise(resolve => {
            LocalStore.set('difficulty', difficulty).then(resolve);
        });
    }


    static get timeout() {
        return new Promise(resolve => {
            LocalStore.get('timeout', defaults.timeout).then(resolve);
        });
    }

    static set timeout(timeout) {
        return new Promise(resolve => {
            LocalStore.set('timeout', timeout).then(resolve);
        });
    }

    static get lives() {
        return new Promise(resolve => {
            LocalStore.get('lives', defaults.lives).then(resolve);
        });
    }

    static set lives(lives) {
        return new Promise(resolve => {
            LocalStore.set('lives', lives).then(resolve);
        });
    }



    static get settings() {

        return new Promise(resolve => {

            Promise.all(keys.map(key => this[key])).then(values => {
                let result = {};
                keys.forEach((key, index) => {
                    result[key] = values[index];
                });
                resolve(result);
            });

        });

    }


}






export class DialogSettings {

    element
    dialog

    constructor() {

        const dialog = this.dialog = new Dialog('settings', {
            title: 'Réglages'
        });

        EventManager.mixin(this);


        //build form

        const

            difficultyRange = new RangeSlider('difficulty', {
                label: 'Difficulté',
                min: 4,
                max: 10,
                step: 2,
                value: 4
            }),

            timeoutRange = new RangeSlider('timeout', {
                label: 'Limite de temps',
                min: 0,
                max: 5,
                step: 1,
                value: 0,
                after: ' minutes'
            }),

            livesRange = new RangeSlider('lives', {
                label: 'Nombre de vies',
                min: 0,
                max: 3,
                step: 1,
                value: 0
            }),

            form = createElement('<form action="#"/>', {
                onsubmit(e) {
                    e.preventDefault();
                }
            }, [
                difficultyRange.element,
                timeoutRange.element,
                livesRange.element

            ]),
            elements = {
                form,
                difficultyRange,
                timeoutRange,
                livesRange
            };


        let changed = false, loaded = false;

        difficultyRange.on('change', e => {
            let value = e.data.value;
            difficultyRange.inputLabel = value + 'x' + value;
        });

        livesRange.on('change', e => {
            let value = e.data.value;
            if (0 === value) {
                livesRange.inputLabelAfter = '';
                livesRange.inputLabel = 'Illimité';
            } else {
                livesRange.inputLabelAfter = ' vie';
                if (value > 1) {
                    livesRange.inputLabelAfter += "s";
                }
            }

        });

        timeoutRange.on('change', e => {
            let value = e.data.value;
            if (0 === value) {
                timeoutRange.elements.inputLabel.dataset.after = '';
                timeoutRange.inputLabel = 'Illimité';
            } else {
                timeoutRange.elements.inputLabel.dataset.after = ' minutes';
            }
        });




        dialog.body = form;
        document.body.appendChild(dialog.element);

        this.element = dialog.element;

        this.one('loaded', () => {
            loaded = true;
        });

        // load settings

        Settings.settings.then(settings => {
            for (let key in settings) {
                let
                    value = settings[key],
                    range = key + 'Range';
                elements[range].value = value;
            }

            this.trigger('loaded', {
                dialog,
                settings
            });

            form.addEventListener('change', () => {
                changed = loaded;
            });
        });


        dialog.onSave(e => {

            console.debug(changed);

            Promise.all(keys.map(key => {
                let range = key + 'Range', value = elements[range].value;
                return Settings[key] = value;

            })).then(values => {


                let settings = {};

                keys.forEach((key, index) => {
                    settings[key] = values[index];
                });


                if (changed) {
                    this.trigger('update', {
                        dialog,
                        settings
                    });

                }

                this.trigger('save', {
                    dialog,
                    settings
                });

                changed = false;
            });
        });

    }



}



export default Settings;