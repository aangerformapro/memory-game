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

        this.start(Settings);
    }

    destroy() {
        this.stats.destroy();
    }

    start(settings) {

        if (this.stats) {
            this.destroy();
        }



        const { difficulty, theme } = settings, { container } = this;
        const
            deck = this.deck = Deck.generateGrid(difficulty),
            stats = this.stats = new Stats(deck, settings);

        dataset(deck.element, 'theme', theme);

        container.appendChild(stats.element);
        container.appendChild(deck.element);

        deck.element.addEventListener('click', e => {

            if (deck.isGameOver() || deck.complete) {
                this.start(settings);
            }

        });


    }

    pause() {
        if (!this.#paused) {
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