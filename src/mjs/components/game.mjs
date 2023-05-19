import Settings from "./settings.mjs";

import Deck from "./deck.mjs";
import Stats from "./stats.mjs";
import EventManager from "../helpers/event-manager.mjs";
import dataset from "../helpers/dataset.mjs";


export class Game {


    container

    stats
    deck

    #paused = false

    #started = false

    get paused() {
        return this.#paused;
    }
    get started() {
        return this.#started
    }


    constructor(container) {
        if (container instanceof Element === false) {
            throw new TypeError('container must be an Element');
        }
        this.container = container;


        EventManager.mixin(this);

        this.on('pause', e => {
            this.stats.timer.pause();
            this.deck.element.classList.add('paused');
            this.deck.disable();
        });

        this.on('resume', e => {
            this.deck.element.classList.remove('paused');
            this.deck.disable(false);
            this.stats.timer.resume();
        });

        // this.start(Settings);
    }

    destroy() {
        this.stats.destroy();
        this.trigger('destroy', { game: this });
    }

    start(settings) {

        if (this.stats) {
            this.destroy();
        }

        this.#started = this.#paused = false;

        const { difficulty, theme } = settings, { container } = this;
        const
            deck = this.deck = Deck.generateGrid(difficulty),
            stats = this.stats = new Stats(deck, settings);

        dataset(deck.element, 'theme', theme);

        container.appendChild(stats.element);
        container.appendChild(deck.element);

        deck.one('flipped', e => {

            this.#started = true;
            this.trigger('start', {
                game: this
            })
        });


        deck.on('gameover complete', e => {
            this.trigger(e.type + ' stop', { game: this });

        });


        deck.element.addEventListener('click', e => {

            if (deck.isGameOver() || deck.complete) {
                this.start(settings);
            } else if (this.#paused) {
                this.resume();
            }

        });



        this.trigger('displayed', { game: this });


    }

    pause() {

        if (!this.#paused && this.#started) {
            this.#paused = true;
            this.trigger('pause', {
                game: this
            });

        }

    }

    resume() {

        if (this.#paused) {
            this.#paused = false;
            this.trigger('resume', {
                game: this
            });
        }

    }

}



export default Game;