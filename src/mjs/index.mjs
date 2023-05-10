import { Chronometer, TimeStamp, Timer, formatTime } from "./components/timer.mjs";





const timer = new Timer(2000);


timer.on('tick', e => {

    const { chrono } = e.data;


    console.debug((new TimeStamp(chrono.elapsed)).toString());

});
timer.on('ended', e => {
    alert('GAME OVER');
});


timer.start();