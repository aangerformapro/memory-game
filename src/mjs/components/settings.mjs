import EventManager from "../helpers/event-manager.mjs";
import { LocalStore } from "../helpers/storage/webstorage.mjs";
import { createElement } from "../helpers/utils.mjs";
import Dialog from "./dialog.mjs";
import RangeSlider from "./rangeslider.mjs";
import ThemeSelector from "./themeselector.mjs";


const defaults = {
    difficulty: 4,
    timeout: 0,
    lives: 0,
    matched: 1
}, keys = Object.keys(defaults);

export class Settings {


    static get difficulty() {


        return LocalStore.get('difficulty', defaults.difficulty);

    }

    static set difficulty(difficulty) {
        LocalStore.set('difficulty', difficulty);
    }


    static get timeout() {
        return LocalStore.get('timeout', defaults.timeout);
    }

    static set timeout(timeout) {
        LocalStore.set('timeout', timeout);
    }

    static get lives() {
        return LocalStore.get('lives', defaults.lives);
    }

    static set lives(lives) {
        LocalStore.set('lives', lives);
    }
    static get matched() {
        return LocalStore.get('matched', defaults.matched);
    }

    static set matched(matched) {
        LocalStore.set('matched', matched);
    }


    static get theme() {
        return LocalStore.get('theme', -1);
    }

    static set theme(theme) {
        return LocalStore.set('theme', theme);
    }



    static get settings() {

        const result = {};

        for (let key in defaults) {

            result[key] = this[key];
        }

        return result;

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
                min: 2,
                max: 8,
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
                max: 5,
                step: 1,
                value: 0
            }),

            matchedRange = new RangeSlider('matched', {

                label: 'Enlever les cartes valides',
                min: 0,
                max: 1,
                step: 1,
                value: 0

            }),

            themeSelector = new ThemeSelector([-1, 1, 2, 3, 4], Settings.theme),


            form = createElement('<form action="#"/>', {
                onsubmit(e) {
                    e.preventDefault();
                }
            }, [
                difficultyRange.element,
                timeoutRange.element,
                livesRange.element,
                matchedRange.element,
                themeSelector.element,

            ]),
            elements = {
                form,
                difficultyRange,
                timeoutRange,
                livesRange,
                matchedRange,
                themeSelector
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
                livesRange.inputLabel = '&infin;';
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
                timeoutRange.inputLabelAfter = '';
                timeoutRange.inputLabel = '&infin;';
            } else {
                timeoutRange.inputLabelAfter = ' minute';
                if (value > 1) {
                    timeoutRange.inputLabelAfter += "s";
                }
            }
        });

        matchedRange.on('change', e => {
            let value = e.data.value;
            matchedRange.inputLabel = 'on';
            if (0 === value) {
                matchedRange.inputLabel = 'off';
            }

        });


        dialog.body = form;
        document.body.appendChild(dialog.element);

        this.element = dialog.element;

        this.one('loaded', () => {
            loaded = true;
        });

        // load settings
        const { settings } = Settings;

        for (let key in settings) {
            let
                value = settings[key],
                range = key + 'Range';
            if (elements[range]) {
                elements[range].value = value;
            }

        }

        this.trigger('loaded', {
            dialog,
            settings
        });

        form.addEventListener('change', () => {
            changed = loaded;
        });



        dialog.onSave(e => {


            for (let key in defaults) {
                let range = key + 'Range', value;
                if (elements[range]) {
                    Settings[key] = elements[range].value;
                }
            }

            Settings.theme = themeSelector.value;

            if (changed) {
                this.trigger('update', {
                    dialog,
                    settings: Settings
                });
            }

            this.trigger('save', {
                dialog,
                settings: Settings
            });
            changed = false;

        });

    }



}



export default Settings;