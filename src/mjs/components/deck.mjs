

import EventManager from "../helpers/event-manager.mjs";
import { createElement, isInt } from "../helpers/utils.mjs";
import Card from "./card.mjs";
import { iconNames } from "./icon.mjs";

export class Deck extends Array {


    static generate(numberOfCards = 4) {
        if (!isInt(numberOfCards)) {
            throw new TypeError('numberOfCards must be an integer.');
        }

        let
            cards = Math.max(4, numberOfCards + (numberOfCards % 2)),
            available = [...iconNames],
            labels = new Deck();

        for (let i = 0; i < cards / 2; i++) {
            let
                rand = Math.floor(Math.random() * available.length),
                label = available[rand];

            available.splice(rand, 1);

            for (let j = 1; j < 3; j++) {
                labels.push(new Card(i * j, label));
            }
        }
        return labels.shuffle();
    }


    #elem

    #flipped

    #pairs = 0

    get element() {
        return this.#elem;
    }


    get pairs() {
        return this.#pairs;
    }


    get max() {
        return Math.floor(this.length / 2);
    }

    disable(flag = true) {
        this.#elem.disabled = flag === true ? true : null;
    }

    constructor(cards = []) {
        super();
        this.#flipped = [];
        this.#pairs = 0;
        this.#elem = createElement('div', { class: 'memory-game-area' });
        EventManager.mixin(this);
        cards.forEach(card => this.push(card));



        this.on('flipped', e => {
            const { card, flipped } = e.data;
            let index = this.indexOf(card);

            if (index !== -1) {
                if (!flipped) {
                    this.#flipped.splice(index, 1);
                }
                return;
            }

            if (flipped) {
                this.#flipped.push(card);


                if (this.#flipped.length === 2) {

                    const [one, two] = this.#flipped;
                    if (one.label === two.label) {
                        this.#pairs++;
                        this.#flipped = [];


                        this.trigger('success', {
                            deck: this,
                            cards: [one, two]
                        });

                        if (this.pairs === this.max) {
                            this.trigger('complete', { deck: this });
                        }

                    }
                    else {
                        setTimeout(() => {
                            one.toggle();
                            two.toggle();
                        }, 1500);
                    }
                }

            }

        });
    }


    push(card) {

        if (card instanceof Card) {
            super.push(card);
            this.#elem.appendChild(card.element);

            card.on('flipped', e => {
                this.trigger('flipped', e.data);
            });
        }

        return this.length;

    }

    shuffle() {
        this.forEach(card => {
            card.order = Math.floor(Math.random() * this.length);
        });

        return this;
    }

}



export default Deck;