
const stop = document.getElementById('stop')
const slow = document.getElementById('slow')
const go = document.getElementById('go')
// const tr = document.getElementsByName('tr')
// const tds = tr.childNodes
const tds = document.querySelectorAll('td')

function resetStoplight() {
tds.forEach(function(td) {
    td.style.backgroundColor = 'gray'
})
}

let stopBtn = document.getElementById('stopBtn')
let slowBtn = document.getElementById('slowBtn')
let goBtn = document.getElementById('goBtn')


stopBtn.addEventListener('click', function() {
    resetStoplight()
    stop.style.backgroundColor = 'red'
})

slowBtn.addEventListener('click', function() {
    resetStoplight()
    slow.style.backgroundColor = 'yellow'
})

goBtn.addEventListener('click', function() {
    resetStoplight()
    go.style.backgroundColor = 'green'
})



// function stoplightRoutine() {

// if (stoplight === 'go') {
//     go.style.backgroundColor = 'green'
// } else if (stoplight === 'slow') {
//     slow.style.backgroundColor = 'yellow'
// } else if (stoplight === 'stop') {
//     stop.style.backgroundColor = 'red'
// }

// }