let score = 0
let score2 = 0
let scoreDisplayHome = document.getElementById("score-display-home")
let scoreDisplayGuest = document.getElementById("score-display-guest")
let leader = document.getElementById("leader")
let leadingMessageHome = "Home is in the lead"
let leadingMessageGuest = "Guest is in the lead"

function plus1PointHome() {
    score += 1
    scoreDisplayHome.textContent = score
}

function plus2PointsHome() {
    score += 2
    scoreDisplayHome.textContent = score
}

function plus3PointsHome() {
    score += 3
    scoreDisplayHome.textContent = score
}

function plus1PointGuest() {
    score2 += 1
    scoreDisplayGuest.textContent = score2
}

function plus2PointsGuest() {
    score2 += 2
    scoreDisplayGuest.textContent = score2
}

function plus3PointsGuest() {
    score2 += 3
    scoreDisplayGuest.textContent = score2
}

function newGame() {
    score = 0
    score2 = 0
    scoreDisplayHome.textContent = score
    scoreDisplayGuest.textContent = score2
}

// function displayLead() {
//     if (score > score2) {
//         leader.textContent = leadingMessageHome
//     } else if (score2 > score) {
//         leader.textContent = leadingMessageGuest
//     } else {
//         leader.textContent = "Tie game"
//     }
// }