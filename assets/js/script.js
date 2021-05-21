// Countdown
const daysContainer = document.querySelector('.days')
const hoursContainer = document.querySelector('.hours')
const minutesContainer = document.querySelector('.minutes')
const secondsContainer = document.querySelector('.seconds')

let currentYear = new Date().getFullYear()
let currentMonth = new Date().getMonth()
let releaseDate = new Date(currentYear, currentMonth, 25, 12, 00, 00)

const updateReleaseDate = () => {
    if (currentMonth > 11) {
        currentMonth = -1
        currentYear++
    }
    releaseDate = new Date(currentYear, currentMonth+1, 25, 12, 00, 00)
}


const insertCountdownValues = ({days, hours, minutes, seconds}) => {
    daysContainer.textContent = days < 10 ? `0${days}` : days
    hoursContainer.textContent = hours < 10 ? `0${hours}` : hours
    minutesContainer.textContent = minutes < 10 ? `0${minutes}` : minutes
    secondsContainer.textContent = seconds < 10 ? `0${seconds}` : seconds
}

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = releaseDate  - currentTime

    if ( currentTime >= releaseDate ) updateReleaseDate()

    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    insertCountdownValues({days, hours, minutes, seconds})
}

updateCountdown()

setInterval(updateCountdown, 1000)