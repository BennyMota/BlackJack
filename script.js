let firstCard = 7
let secondCard = 9
let sum = firstCard + secondCard
let gotBlackjack = false
let isAlive = true
let message = "" 
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {
    renderGame()
}


function renderGame() {

    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard

    if (sum <= 19) {
        message = "Do you want to draw a new card?"
    }else if (sum === 20) {
        message = "Congrats! You have won!"
        gotBlackjack = true
    } else {
        message = "Sorry, you lost.."
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}

function newCard() {

    let card = 5

    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard + " " + card

    sum += card

    renderGame()

}