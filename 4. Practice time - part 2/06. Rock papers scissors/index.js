let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getRandomHand() {
    return hands[Math.floor(Math.random() * hands.length)]
}
console.log(getRandomHand())