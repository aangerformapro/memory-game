import { decode, encode } from "../helpers/dataset.mjs";
import EventManager from "../helpers/event-manager.mjs";
import { createElement, isInt } from "../helpers/utils.mjs";
import { Chronometer, MINUTE, TimeStamp } from "./timer.mjs";

const defaults = {
    score: 0,
    lives: 0,

};

export class Stats {


    get tour() {
        return decode(this.elements.tour.innerHTML);
    }

    set tour(tour) {
        this.elements.tour.innerHTML = encode(tour);
    }


    get pairs() {
        return decode(this.elements.pairs.innerHTML);
    }

    set pairs(pairs) {
        this.elements.pairs.innerHTML = encode(pairs);
    }

    get vies() {
        return decode(this.elements.vies.innerHTML);
    }

    set vies(vies) {
        this.elements.vies.innerHTML = encode(vies);
    }

    get elapsed() {
        return this.timer.elapsed;
    }


    element
    elements
    timer
    countdown
    deck
    settings

    #vies



    constructor(deck, settings) {
        this.deck = deck;
        this.settings = settings;

        EventManager.mixin(this);


        this.#vies = settings.lives === 0 ? -1 : settings.lives;

        const

            tour = createElement('td', '0'),
            pairs = createElement('td', '0/' + deck.max),
            vies = createElement('td', '&infin;'),
            timer = this.timer = new Clock(),

            countdown = this.countdown = new CountDownClock(timer, settings.timeout * MINUTE),

            root = createElement('<table class="table table-fixed table-bordered text-center mb-0 game-stats">', [
                '<thead><tr><th>Tour</th><th>Paires</th><th>Cartes</th><th>Vies</th><th>Timer</th></tr></thead>',
                createElement('tbody', [
                    createElement('tr', [

                        tour,
                        pairs,
                        createElement('td', encode(deck.length)),
                        vies,
                        createElement('td', timer.element),


                    ]),
                    createElement('tr', [
                        createElement('<td colspan="5"/>', countdown.element)
                    ])
                ])


            ]);

        this.element = root;
        this.elements = {
            root, tour, pairs, vies
        };


        countdown.on('timeout', e => {
            deck.trigger('gameover');
        });

        deck.one('flipped', e => {
            timer.start();
        });

        deck.on('success failed', e => {
            this.tour = deck.flips;
            this.pairs = deck.pairs + '/' + deck.max;

            if (e.type === 'failed') {
                if (this.#vies === 0) {
                    deck.trigger('gameover');
                } else {
                    this.#vies--;

                    if (this.#vies > -1) {
                        this.vies = this.#vies;
                    }
                }

            } else if (settings.matched > 0) {
                const [one, two] = e.data.cards;

                one.matched = true;
                two.matched = true;
            }

        });


        deck.on('gameover complete', e => {
            timer.stop();
        });

        if (this.#vies > -1) {
            this.vies = this.#vies;
        }
    }
    destroy() {
        this.timer.stop();
        this.element.remove();
        this.deck.destroy();
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


    get started() {
        return this.chrono.isStarted();
    }

    chrono
    elements
    element

    #interval

    constructor() {


        const
            hours = createElement('<span class="hours" />'),
            minutes = createElement('<span class="minutes"/>'),
            seconds = createElement('<span class="seconds"/>'),
            root = createElement('<div class="time  mx-auto"/>', [
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

        if (this.chrono.isPaused()) {
            return;
        }

        const data = this.chrono.export();

        if (data.timestamp > 0) {
            ['hours', 'minutes', 'seconds'].forEach(key => {

                if (key === 'hours' && data[key] === 0) {
                    return;
                }

                let value = data[key];
                this.elements[key].innerHTML = value < 10 ? `0${value}` : `${value}`;
            });
        }

        this.trigger('update', {
            data,
            clock: this,
            chrono: this.chrono
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

        if (this.chrono.isStarted()) {
            this.#update();
            this.chrono.pause();
        }

    }


    resume() {
        if (this.chrono.isPaused()) {
            this.chrono.resume();
        }

    }
}



class CountDownClock {


    clock
    element

    elements

    timeout

    constructor(clock, timeout = 0) {

        if (clock instanceof Clock === false) {
            throw new TypeError('clock must be an instance of Clock');
        }

        if (!isInt(timeout)) {
            throw new TypeError('timeout must be an integer');
        }

        EventManager.mixin(this);

        this.clock = clock;
        const
            hours = createElement('<span class="hours" />'),
            minutes = createElement('<span class="minutes"/>'),
            seconds = createElement('<span class="seconds"/>'),
            root = createElement('<div class="time mx-auto"/>', [
                hours, minutes, seconds
            ]);
        this.elements = {
            root,
            hours,
            minutes,
            seconds
        };

        this.element = root;
        if (timeout > 0) {
            clock.on('update', e => {
                const { data } = e.data;


                if (data.timestamp >= timeout) {

                    this.#update(0);

                    clock.stop();
                    this.trigger('timeout', {
                        clock: clock,
                        chrono: clock.chrono,
                        countdown: this
                    });



                } else {
                    this.#update(timeout - data.timestamp);
                }
            });
        }




    }

    #update(ms) {


        const data = (new TimeStamp(ms)).export();

        ['hours', 'minutes', 'seconds'].forEach(key => {

            if (key === 'hours' && data[key] === 0) {
                return;
            }

            let value = data[key];
            this.elements[key].innerHTML = value < 10 ? `0${value}` : `${value}`;
        });

    }
}

export default Stats;