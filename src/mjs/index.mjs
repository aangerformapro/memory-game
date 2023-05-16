import Deck from "./components/deck.mjs";
import Dialog from "./components/dialog.mjs";
import { DialogSettings, Settings } from "./components/settings.mjs";
import { Clock } from "./components/stats.mjs";
// import { SettingsUI } from "./components/settings.mjs.bak";
import { Chronometer, TimeStamp, Timer, formatTime } from "./components/timer.mjs";
import { LocalStore } from "./helpers/storage/webstorage.mjs";

/**
 * @link https://getbootstrap.com/docs/5.3/components/tooltips/
 */

[...document.querySelectorAll('[data-toggle="tooltip"],[data-bs-toggle="tooltip"]')].map(el => new bootstrap.Tooltip(el));
console.debug(document.querySelectorAll('[data-toggle="tooltip"]'));
const app = document.querySelector('#app'), settingsUI = new DialogSettings(), clock = new Clock();
//   const  settingsUI = new SettingsUI();

app.appendChild(clock.element);

clock.start();

let deck = Deck.generate(3);

app.appendChild(deck.element);

console.debug(deck);


deck.on('flipped success failed complete', console.debug);


deck.on('flipped', () => {


    if (clock.paused) {
        clock.resume();
    } else if (!clock.started) {
        clock.start();
    }
});


deck.on('failed', () => {
    clock.pause();
});

deck.on('complete', () => {
    clock.stop();
});


settingsUI.on('save update loaded', console.debug);

//LocalStore.set('djsdh', { fkjdf: true });

// let dialog = new Dialog();


// dialog.onSave(console.debug);
// dialog.show();

