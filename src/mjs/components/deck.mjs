

import dataset from "../helpers/dataset.mjs";
import EventManager from "../helpers/event-manager.mjs";
import { createElement, encode, isInt } from "../helpers/utils.mjs";
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


    static generateGrid(difficulty) {

        if (!isInt(difficulty)) {
            throw new TypeError('difficulty must be an integer.');
        }

        return this.generate(difficulty * difficulty);
    }


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
    #cardArea
    #flipped
    #cards
    #pairs = 0
    #flips = 0


    #over = false
    #complete = false

    get grid() {
        return Math.sqrt(this.length);
    }


    get complete() {
        return this.#complete;
    }

    get flips() {
        return this.#flips;
    }

    isGameOver() {
        return this.#over;
    }

    get element() {
        return this.#elem;
    }


    get pairs() {
        return this.#pairs;
    }


    get max() {
        return Math.floor(this.length / 2);
    }


    get length() {
        return this.#cards.length;
    }


    get width() {
        return this.#cardArea.offsetWidth;
    }


    set width(width) {
        this.#cardArea.style.maxWidth = encode(width) + 'px'
    }


    get height() {
        return this.#cardArea.offsetHeight;
    }

    set height(height) {
        this.#cardArea.style.height = encode(height) + 'px'
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
        this.#cardArea = createElement('div', { class: "card-area" });
        this.#elem = createElement('div', { class: 'memory-game-area border border-top-0' }, this.#cardArea);

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
                    this.#flips++;
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

                        if (this.pairs === this.max) {
                            this.#complete = true;
                            this.trigger('complete', { deck: this });

                            setTimeout(() => {
                                this.#elem.classList.add('complete');
                            }, 1700);

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
                if (!this.#over) {
                    e.data.cards.forEach(card => card.toggle());
                    this.disable(false);
                }
            }, 1500);
        });


        this.on('gameover', e => {
            this.#over = this.#complete = true;
            this.disable(true);
            setTimeout(() => {
                this.#elem.classList.add('gameover');
            }, 1500);

        });

        this.trigger('displayed', {
            deck: this
        });

        dataset(this.#elem, 'grid', this.grid);

    }


    push(card) {

        if (card instanceof Card) {
            this.#cards.push(card);
            this.#cardArea.appendChild(card.element);
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
        this.#cardArea.innerHTML = '';
        this.#cards.forEach(card => this.#cardArea.appendChild(card.element));
        return this;
    }


    destroy() {
        this.element.remove();
    }

}



export default Deck;