
let stoplight

const stop = document.getElementById('stop')
const slow = document.getElementById('slow')
const go = document.getElementById('go')

let stopBtn = document.getElementById('stopBtn')

stopBtn.addEventListener('click', function(){
    stoplight === 'stop'
    stoplightRoutine()
})

function stoplightRoutine() {

if (stoplight === 'go') {
    go.style.backgroundColor = 'green'
} else if (stoplight === 'slow') {
    slow.style.backgroundColor = 'yellow'
} else if (stoplight === 'stop') {
    stop.style.backgroundColor = 'red'
}

}