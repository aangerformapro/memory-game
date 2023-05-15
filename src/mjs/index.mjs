import Deck from "./components/deck.mjs";
import { SettingsUI } from "./components/settings.mjs";
import { Chronometer, TimeStamp, Timer, formatTime } from "./components/timer.mjs";
import { LocalStore } from "./helpers/storage/webstorage.mjs";

/**
 * @link https://getbootstrap.com/docs/5.3/components/tooltips/
 */

[...document.querySelectorAll('[data-toggle="tooltip"]')].map(el => new bootstrap.Tooltip(el));
console.debug(document.querySelectorAll('[data-toggle="tooltip"]'));
const app = document.querySelector('#app'), settingsUI = new SettingsUI();



let deck = Deck.generate(3);


app.appendChild(deck.element);

console.debug(deck);


deck.on('flipped success failed complete', console.debug);

//LocalStore.set('djsdh', { fkjdf: true });