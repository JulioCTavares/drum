document.body.addEventListener('keyup', (pressed) => {
    playSound( pressed.code.toLowerCase() )
})

document.querySelector('.composer button').addEventListener("click", () => {
    let composition = document.getElementById('input').value

    if (composition !== '') {
        const song = composition.split('')
        playComposition(song)
    }
})

function playSound (key) {
    let audioKey = document.getElementById(`s_${key}`)
    let changeColorKey = document.querySelector(`div[data-key=${key}]`)

    if (audioKey) {
        audioKey.currentTime = 0
        audioKey.play()
    }

    if (changeColorKey) {
        changeColorKey.classList.add('active')

        setTimeout(() => {
            changeColorKey.classList.remove('active')
        }, 400)
    }
}

function playComposition (songArray) {
    let wait = 0

    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait);

        wait += 250
    }
}