let scoreHome = 0
let scoreGuest = 0
let scoreHomeEl = document.getElementById("score-home")
let scoreGuestEl = document.getElementById("score-guest")
let leadingEl = document.getElementById("leading")

function updateLeadingTeam() {
    if (scoreHome > scoreGuest) {
        leadingEl.textContent = "LEADING TEAM: HOME"
    } else if (scoreHome < scoreGuest) {
        leadingEl.textContent = "LEADING TEAM: GUEST"
    } else {
        leadingEl.textContent = "LEADING TEAM: TIED"
    }
}

function plus1home() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
    updateLeadingTeam()
}
function plus2home() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
    updateLeadingTeam()
}
function plus3home() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
    updateLeadingTeam()
}
function plus1guest() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
    updateLeadingTeam()
}
function plus2guest() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
    updateLeadingTeam()
}
function plus3guest() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
    updateLeadingTeam()
}

function reset() {
    scoreHome = 0
    scoreGuest = 0
    scoreHomeEl.textContent = 0
    scoreGuestEl.textContent = 0
    updateLeadingTeam()
}



