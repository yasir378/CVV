'use strict';

let playing = true;
var score = document.querySelector('#score--0').textContent = 0;
var score0 = document.getElementById('score--1').textContent = 0;
var dice1 = document.querySelector('.dice');
var btnNew = document.querySelector('.btn--new');
var btnRoll = document.querySelector('.btn--roll');
var btnHold = document.querySelector('.btn--hold');
var current0Score = document.getElementById('current--0');
var current0Score = document.getElementById('current--1');
var player0 = document.querySelector('.player--0');
var player1 = document.querySelector('.player--1');
let currScore = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// console.log(dice1);
var switdhPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}
dice1.classList.add('hidden'); // adding the hidden class using classList.add method
btnRoll.addEventListener('click', function() {
    if (playing) {
        const dice2 = Math.trunc(Math.random() * 6) + 1;
        dice1.classList.remove('hidden');
        dice1.src = `dice-${dice2}.png`;
        console.log(dice2);
        if (dice2 != 1) {
            currentScore += dice2;
            // current0Score.textContent = currentScore;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switdhPlayer();


        }
    }
    btnHold.addEventListener('click', function() {
        if (playing) {
            currScore[activePlayer] += currentScore;
            document.getElementById(`score--${activePlayer}`).textContent = currScore[activePlayer];
            if (currScore[activePlayer] >= 50) {
                playing = false;
                dice1.classList.add('hidden');
                document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
                document.querySelector(`.player--${activePlayer}`).classList.remove('player--acitve');
            } else {
                switdhPlayer();
            }
        }
    });
    btnNew.addEventListener('click', function() {
        window.location.reload();
    })


});