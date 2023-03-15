// первое задание
//  Record 1
//  Record 5
//  Record 6
//  Record 2
//  Record 3
//  Record 4


import EventEmitter from "events";

class TimerEmitter extends EventEmitter {}
const emitter = new TimerEmitter()

emitter.on('timerTick', ([dateNext, timer]) => {
    const dateNow = new Date();
    if (dateNow >= dateNext) {
        emitter.emit('timerEnd', timer)
    } else {
        console.log(getTimes((dateNext - dateNow) / 1000), 'left')
    }
})
emitter.on('timerEnd', timer => {
    clearInterval(timer)
    console.log('time over')
})

const getTimes=(seconds)=> {
    const arrTimer=[
        Math.floor(seconds % 60),
        Math.floor((seconds / 60) % 60),
        Math.floor((seconds / (60 * 60)) % 24),
        Math.floor(seconds / (60 * 60 * 24)),

    ]
    return `${arrTimer.pop()} days ${arrTimer.pop()} hours ${arrTimer.pop()} minutes ${arrTimer.pop()} seconds `;

}

const start = (dateNext) => {
    setInterval(function() {
        emitter.emit('timerTick', [dateNext, this])
    }, 1000)
}
for(const arg of process.argv.slice(2)) {
    const[hour, day, month, year]=arg.split('-')
    const dateNext= new Date(year, month - 1, day, hour)
    if (isNaN(dateNext)) continue
    start(dateNext)
}