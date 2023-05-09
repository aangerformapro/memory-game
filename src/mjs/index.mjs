import { Chronometer, formatTime } from "./components/timer.mjs";






const chrono = new Chronometer();


console.log(chrono);



setInterval(() => {
    formatTime(chrono.lap().elapsed);
}, 20);
