
import Game from "./components/game.mjs";
import { DialogSettings } from "./components/settings.mjs";
import dataset from "./helpers/dataset.mjs";


/**
 * @link https://getbootstrap.com/docs/5.3/components/tooltips/
 */

[...document.querySelectorAll('[data-toggle="tooltip"],[data-bs-toggle="tooltip"]')].map(el => new bootstrap.Tooltip(el));

let
    app = document.querySelector('#app'), settingsUI = new DialogSettings(),
    game = new Game(app), playbtn = document.querySelector('#playbtn'), paused;


document.body.appendChild(settingsUI.element);

settingsUI.on('update', e => {
    const { settings } = e.data;
    game.start(settings);
});


settingsUI.dialog.onShow(e => {
    if (!game.paused) {

        game.pause();
    }

});

// settingsUI.dialog.onHidden(e => {
//     if (paused) {
//         paused = false;
//         game.resume();
//     }
// });


game.on('pause resume', e => {
    const { type } = e;
    dataset(playbtn, 'play', type === 'pause' ? "paused" : "play")
}).on('gameover complete', e => {
    dataset(playbtn, 'play', "stopped");
}).on('start', e => {
    dataset(playbtn, 'play', "play")
});

playbtn.addEventListener('click', e => {
    e.preventDefault();
    if (game.started) {
        if (game.paused) {
            game.resume();
        } else {
            game.pause();
        }
    }

});