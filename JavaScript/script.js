const button = document.querySelectorAll('.button')

//таймер
const timerShow = document.getElementById('timer')
let timeMinut = 1800
let seconds = 0
let minutes = 0
setInterval(function timer() {
    seconds = timeMinut % 60
    minutes = timeMinut / 60 % 60
    if (timeMinut <= 0) {
        clearInterval(timer)
    } else {
        let strTimer = `До окончания акции осталось ${Math.trunc(minutes)}:${seconds}`
        timerShow.innerHTML = strTimer
    }
    --timeMinut
}, 1000)

//кнопка "Заказать" с прокруткой вниз
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function scroll() {
        if (window.pageYOffset < document.body.scrollHeight - document.body.clientHeight) {
            window.scrollBy(0, 20)
            setTimeout(scroll, 1)
        }
    })
}