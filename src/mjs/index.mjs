
import Game from "./components/game.mjs";
import { DialogSettings } from "./components/settings.mjs";


/**
 * @link https://getbootstrap.com/docs/5.3/components/tooltips/
 */

[...document.querySelectorAll('[data-toggle="tooltip"],[data-bs-toggle="tooltip"]')].map(el => new bootstrap.Tooltip(el));

let
    app = document.querySelector('#app'), settingsUI = new DialogSettings(),
    game = new Game(app);


document.body.appendChild(settingsUI.element);

settingsUI.on('update', e => {
    const { settings } = e.data;
    game.start(settings);
});


settingsUI.dialog.onShow(e => {
    game.pause();
});

settingsUI.dialog.onHidden(e => {
    game.resume();
});