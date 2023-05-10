import EventManager from "../helpers/event-manager.mjs";
import { isInt } from "../helpers/utils.mjs";




const
    MILLISECOND = 1,
    SECOND = 1000,
    MINUTE = 60000,
    HOUR = 3600000,
    DAY = 86400000;

function computeTime(start, elapsed = 0) {

    return (+new Date() - start) + elapsed;
}



export class TimeStamp {

    #ms

    constructor(ms) {

        if (!isInt(ms)) {
            throw new TypeError('ms must be an integer');
        }

        this.#ms = ms;
    }



    get hours() {
        return Math.floor(this.#ms / HOUR);
    }

    get minutes() {
        return Math.floor(this.#ms / MINUTE);
    }



    get seconds() {
        return Math.floor(this.#ms / SECOND);
    }


    get miliseconds() {
        return this.#ms;
    }


    export() {



        let values = {
            hours: HOUR,
            minutes: MINUTE,
            seconds: SECOND,
            miliseconds: MILLISECOND
        }, remaining = this.#ms, result = {};



        for (let key in values) {

            let
                divider = values[key],
                floor = Math.floor(remaining / divider);
            remaining -= floor * divider;
            result[key] = floor;
        }

        return result;
    }


    toString() {

        return formatTime(this.#ms);
    }



}




export class Chronometer {

    #startTime = 0
    #running = false
    #paused = false
    #elapsedTime = 0
    #laps = []

    constructor(autostart = true) {

        if (autostart) {
            this.start();
        }
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
        if (!this.#running) {
            return this.#elapsedTime ?? 0;
        }
        this.#running = false;
        return this.#elapsedTime = computeTime(this.#startTime);
    }


    pause() {

        this.#paused = true;

        if (!this.#running) {
            return this.#elapsedTime;
        }

        return this.stop();

    }


    resume() {

        if (!this.#paused) {
            return;
        }


        this.#paused = false;
        this.#startTime = computeTime(this.#elapsedTime);
        this.#running = true;

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

    isPaused() {
        return this.isStarted() && this.#paused;
    }

    get elapsed() {

        if (this.isStarted) {
            return computeTime(this.#startTime);
        }
        return this.#elapsedTime;

    }

}

export function formatTime(ms) {
    let { hours, minutes, seconds, miliseconds } = (new TimeStamp(ms)).export(), result = '';


    if (hours < 10) {
        result += '0';
    }

    result += hours + ':';

    if (minutes < 10) {
        result += '0';
    }

    result += minutes + ':';

    if (seconds < 10) {
        result += '0';
    }
    result += seconds + ',';

    if (miliseconds < 100) {
        result += '0';
    }
    if (miliseconds < 10) {
        result += '0';
    }
    result += miliseconds;
    return result;

}

export class Timer {

    #duration
    #ticks
    #chrono
    #timeout
    #interval

    get started() {
        return this.#chrono.isStarted();
    }

    get paused() {
        return this.#chrono.isPaused();
    }


    get elapsed() {
        return this.#chrono.elapsed;
    }


    constructor(duration = MINUTE, ticks = 500) {

        if (!isInt(duration)) {
            throw new TypeError('duration must be an integer');

        }
        if (!isInt(ticks)) {
            throw new TypeError('ticks must be an integer');

        }


        this.#duration = duration;
        this.#ticks = ticks;

        this.#chrono = new Chronometer(false);
        EventManager.mixin(this);

        this.on('ended', () => {
            this.stop();
        });


    }


    start() {

        if (this.started) {
            return;
        }

        this.#timeout = setTimeout(() => {
            this.trigger('ended');
        }, this.#duration);

        this.#interval = setInterval(() => {
            this.trigger('tick', {
                chrono: this.#chrono,
                timer: this
            });
        }, this.#ticks);



        this.trigger('started');

        this.#chrono.start();
    }

    stop() {

        if (!this.started) {
            return this.#chrono.stop();
        }

        clearTimeout(this.#timeout);

        clearInterval(this.#interval);
        this.trigger('stopped');
        return this.#chrono.stop();

    }


    pause() {

        if (this.paused || !this.started) {
            return this.elapsed;
        }

        clearTimeout(this.#timeout);

        clearInterval(this.#interval);
        this.trigger('paused');
        return this.#chrono.pause();
    }


    resume() {

        if (!this.paused) {
            return;
        }

        let timeout = this.#duration - this.elapsed;


        this.#interval = setInterval(() => {
            this.trigger('tick', {
                chrono: this.#chrono,
                timer: this
            });
        }, this.#ticks);

        this.#timeout = setTimeout(() => {
            this.trigger('ended');
        }, timeout);
    }

}