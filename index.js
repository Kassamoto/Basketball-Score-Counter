let homeScoreBtnOne = document.getElementById("home-plus-1");
let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;

let guestScoreBtnOne = document.getElementById("guest-plus-1");
let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

function increaseHomeScoreOne() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreTwo() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}
function increaseHomeScoreThree() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

function increaseGuestScoreOne() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreTwo() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}
function increaseGuestScoreThree() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

function resetScore() {
  homeScore = 0;
  guestScore = 0;
  guestScoreEl.textContent = 0;
  homeScoreEl.textContent = 0;
}
