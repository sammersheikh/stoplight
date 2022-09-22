let stoplight

const stop = document.getElementById('stop')
const slow = document.getElementById('slow')
const go = document.getElementById('go')
const td = document.getElementsByTagName('td')

let stopBtn = document.getElementById('stopBtn')
let slowBtn = document.getElementById('slowBtn')
let goBtn = document.getElementById('goBtn')


stopBtn.addEventListener('click', function(stoplight){
    stoplight === 'stop'
    console.log('stop')
    stoplightRoutine(stoplight)
})

slowBtn.addEventListener('click', function(stoplight) {
    stoplight === 'slow'
    console.log('slow')
    stoplightRoutine(stoplight)
})

function stoplightRoutine(stoplight) {

if (stoplight === 'go') {
    go.style.backgroundColor = 'green'
} else if (stoplight === 'slow') {
    slow.style.backgroundColor = 'yellow'
} else if (stoplight === 'stop') {
    stop.style.backgroundColor = 'red'
}

}