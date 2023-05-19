
import Game from "./components/game.mjs";
import Settings, { DialogSettings } from "./components/settings.mjs";
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

    dataset(playbtn, 'play', "stopped");
    game.start(settings);
});


settingsUI.dialog.onShow(e => {
    if (!game.paused) {
        game.pause();
    }

});

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


function onResize() {
    const { deck } = game, { height } = deck;
    deck.width = Math.floor(height * 4 / 5);
}


addEventListener('resize', onResize);
game.on('displayed', onResize);


game.start(Settings);