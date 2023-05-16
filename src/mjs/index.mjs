import Deck from "./components/deck.mjs";
import Dialog from "./components/dialog.mjs";
import { DialogSettings, Settings } from "./components/settings.mjs";
// import { SettingsUI } from "./components/settings.mjs.bak";
import { Chronometer, TimeStamp, Timer, formatTime } from "./components/timer.mjs";
import { LocalStore } from "./helpers/storage/webstorage.mjs";

/**
 * @link https://getbootstrap.com/docs/5.3/components/tooltips/
 */

[...document.querySelectorAll('[data-toggle="tooltip"],[data-bs-toggle="tooltip"]')].map(el => new bootstrap.Tooltip(el));
console.debug(document.querySelectorAll('[data-toggle="tooltip"]'));
const app = document.querySelector('#app'), settingsUI = new DialogSettings();
//   const  settingsUI = new SettingsUI();



let deck = Deck.generate(3);


app.appendChild(deck.element);

console.debug(deck);


deck.on('flipped success failed complete', console.debug);


settingsUI.on('save', console.debug);

//LocalStore.set('djsdh', { fkjdf: true });

// let dialog = new Dialog();


// dialog.onSave(console.debug);
// dialog.show();

