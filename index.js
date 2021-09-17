// var randomDice = Math.floor(Math.random() * 7);
// if (randomDice === 1) {
//   document.querySelector(".diceOne").setAttribute("src", "images/dice1.png");
// } else if (randomDice === 2) {
//   document.querySelector(".diceOne").setAttribute("src", "images/dice2.png");
// } else if (randomDice === 3) {
//   document.querySelector(".diceOne").setAttribute("src", "images/dice3.png");
// } else if (randomDice === 4) {
//   document.querySelector(".diceOne").setAttribute("src", "images/dice4.png");
// } else if (randomDice === 5) {
//   document.querySelector(".diceOne").setAttribute("src", "images/dice5.png");
// } else if (randomDice === 6) {
//   document.querySelector(".diceOne").setAttribute("src", "images/dice6.png");
// }
//
// var randomDiceTwo = Math.floor(Math.random() * 7);
// if (randomDiceTwo === 1) {
//   document.querySelector(".diceTwo").setAttribute("src", "images/dice1.png");
// } else if (randomDiceTwo === 2) {
//   document.querySelector(".diceTwo").setAttribute("src", "images/dice2.png");
// } else if (randomDiceTwo === 3) {
//   document.querySelector(".diceTwo").setAttribute("src", "images/dice3.png");
// } else if (randomDiceTwo === 4) {
//   document.querySelector(".diceTwo").setAttribute("src", "images/dice4.png");
// } else if (randomDiceTwo === 5) {
//   document.querySelector(".diceTwo").setAttribute("src", "images/dice5.png");
// } else if (randomDiceTwo === 6) {
//   document.querySelector(".diceTwo").setAttribute("src", "images/dice6.png");
// }

var randomDice = Math.floor(Math.random() * 7);
var randomDiceImage = "images/dice" + randomDice + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);

var randomDiceTwo = Math.floor(Math.random() * 7);
var randomDiceImageTwo = "images/dice" + randomDiceTwo +".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageTwo);

if (randomDice > randomDiceTwo) {
  document.querySelector("h1").innerText = "Playe One Wins";
} else if (randomDiceTwo > randomDice) {
  document.querySelector("h1").innerText = "Player Two Wins";
} else if (randomDice === randomDiceTwo) {
  document.querySelector("h1").innerText = "It's a Draw";
}
