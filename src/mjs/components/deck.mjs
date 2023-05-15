

import EventManager from "../helpers/event-manager.mjs";
import { createElement, isInt } from "../helpers/utils.mjs";
import Card from "./card.mjs";
import { iconNames } from "./icon.mjs";



function shuffle(list) {
    let copy = [...list], result = [];
    while (copy.length > 0) {
        let randomNumber = Math.floor(Math.random() * copy.length);
        result.push(copy[randomNumber]);
        copy.splice(randomNumber, 1);
    }
    return result;
}



export class Deck {


    static generate(numberOfCards = 4) {



        if (!isInt(numberOfCards)) {
            throw new TypeError('numberOfCards must be an integer.');
        }

        let
            cards = Math.max(4, numberOfCards + (numberOfCards % 2)),
            available = [...iconNames],
            labels = [];

        for (let i = 0; i < cards / 2; i++) {
            let
                rand = Math.floor(Math.random() * available.length),
                label = available[rand];

            available.splice(rand, 1);

            for (let j = 0; j < 2; j++) {
                labels.push(new Card(label));
            }
        }
        return new Deck(shuffle(labels));
    }


    #elem

    #flipped


    #cards

    #pairs = 0



    get element() {
        return this.#elem;
    }


    get pairs() {
        return this.#pairs;
    }


    get max() {
        return Math.floor(this.#cards.length / 2);
    }

    disable(flag = true) {

        if (flag === true) {
            this.#elem.classList.add('disabled');
        } else {
            this.#elem.classList.remove('disabled');
        }

    }




    get disabled() {
        return this.#elem.classList.contains('disabled');
    }

    constructor(cards = []) {
        this.#cards = [];
        this.#flipped = [];
        this.#pairs = 0;
        this.#elem = createElement('div', { class: 'memory-game-area' });
        EventManager.mixin(this);
        cards.forEach(card => this.push(card));

        this.on('flipped', e => {
            const { card, flipped } = e.data;
            let index = this.#flipped.indexOf(card);

            if (index !== -1) {
                if (!flipped) {
                    this.#flipped.splice(index, 1);
                }
                return;
            }

            if (flipped) {
                this.#flipped = [...this.#cards].filter(card => card.flipped).filter(card => !card.disabled);

                if (this.#flipped.length === 2) {

                    this.disable();
                    const [one, two] = this.#flipped;

                    if (one.label === two.label) {
                        this.#pairs++;
                        this.#flipped = [];

                        one.disable();
                        two.disable();

                        this.trigger('success', {
                            deck: this,
                            cards: [one, two]
                        });


                        console.debug(this.pairs, this.max);

                        if (this.pairs === this.max) {
                            this.trigger('complete', { deck: this });
                        } else {
                            this.disable(false);
                        }

                    }
                    else {
                        this.#flipped = [];
                        this.trigger('failed', {
                            deck: this,
                            cards: [one, two]
                        });

                    }
                }

            }

        });

        this.on('failed', e => {
            setTimeout(() => {
                e.data.cards.forEach(card => card.toggle());
                this.disable(false);
            }, 1500);
        });

    }


    push(card) {

        if (card instanceof Card) {
            this.#cards.push(card);
            this.#elem.appendChild(card.element);
            card.on('flipped', e => {
                this.trigger('flipped', e.data);
            });
        }
        return this.length;
    }





    forEach(callback) {
        this.#cards.forEach(callback);
    }

    shuffle() {
        this.#cards = shuffle(this.#cards);
        return this;
    }

}



export default Deck;