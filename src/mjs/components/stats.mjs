import EventManager from "../helpers/event-manager.mjs";
import { createElement } from "../helpers/utils.mjs";
import { Chronometer } from "./timer.mjs";

const defaults = {
    score: 0,
    lives: 0,

};

export class Stats {


    get pairs() {
        return this.#deck.pairs;
    }

    get lives() {
        return this.#lives;
    }

    get missed() {
        return this.#missed;
    }


    get score() {
        return this.#score;
    }


    get elapsed() {
        return 0;
    }


    element
    elements
    #deck
    #settings

    #lives = 0

    #score = 0

    #missed = 0


    constructor(deck, params) {
        this.#deck = deck;
        EventManager.mixin(this);
    }



}



export class Clock {

    get seconds() {

        return this.chrono.export().seconds;

    }

    get hours() {
        return this.chrono.export().hours;
    }


    get minutes() {
        return this.chrono.export().minutes;
    }


    get elapsed() {
        return Math.floor(this.chrono.elapsed / 1000);
    }


    get started() {
        return this.chrono.isStarted();
    }

    get paused() {
        return this.chrono.isPaused();
    }

    chrono


    elements

    element

    #interval

    constructor() {


        const
            hours = createElement('<div class="hours" />'),
            minutes = createElement('<div class="minutes"/>'),
            seconds = createElement('<div class="seconds"/>'),
            root = createElement('<div class="time d-flex"/>', [
                hours, minutes, seconds
            ]);

        this.chrono = new Chronometer(false);

        this.elements = {
            root, hours, minutes, seconds
        };

        this.element = root;

        EventManager.mixin(this);
    }

    #update() {

        const data = this.chrono.export();

        ['hours', 'minutes', 'seconds'].forEach(key => {
            let value = data[key];
            this.elements[key].innerHTML = value < 10 ? `0${value}` : `${value}`;
        });

        this.trigger('update', {
            data,
            clock: this
        });



    }


    start() {
        if (!this.chrono.isStarted()) {
            this.chrono.start();
            this.#interval = setInterval(() => {
                this.#update();
            }, 50);

            this.trigger('start', {
                clock: this
            });

            this.#update();
        }
    }


    stop() {
        if (this.#interval) {
            this.chrono.stop();
            clearInterval(this.#interval);
            this.trigger('stop', {
                clock: this
            });

            this.#update();
        }

        this.#interval = null;
    }


    pause() {

        this.chrono.pause();
        this.#update();

    }


    resume() {
        this.chrono.resume();
    }
}



export default Stats;