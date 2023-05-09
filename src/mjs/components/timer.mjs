import EventManager from "../helpers/event-manager.mjs";



function computeTime(start, elapsed = 0) {

    return (+new Date() - start) + elapsed;
}


export class Chronometer {

    #startTime
    #running = false
    #elapsedTime
    #laps = []

    constructor() {

        this.start();
    }

    start() {
        if (!this.#running) {
            this.#running = true;
            this.#laps = [];
            this.#elapsedTime = 0;
            this.#startTime = +new Date();
        }
    }

    stop() {
        if (!this.running) {
            return this.#elapsedTime;

        }
        this.running = false;
        return this.#elapsedTime = computeTime(this.#startTime);
    }


    lap() {
        if (!this.isStarted()) {
            return this.#laps[this.#laps.length - 1];
        }

        let
            prev = this.#laps[this.#laps.length - 1]?.elapsed ?? this.#startTime,
            current = this.elapsed,

            lapTime = {
                start: this.#startTime,
                elapsed: current,
                time: current - prev
            };



        this.#laps.push(lapTime);

        return lapTime;

    }


    isStarted() {
        return this.#running;
    }

    get elapsed() {
        return computeTime(this.#startTime);
    }

}

export function formatTime(ms) {

    let tens, seconds;

    seconds = Math.floor(ms / 1000);

    tens = Math.floor((ms - (seconds * 1000)) / 10);

    if (tens < 10) {
        tens = '0' + tens;
    }



    console.debug(seconds, tens);





}

export class Timer {










}