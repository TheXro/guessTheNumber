'use strict';
// console.log(document.querySelector('.message').textContent);

// // dom manipulation
// document.querySelector('.message').textContent = 'Correct Number! 🎉';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

//event listener for check button 

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No number! 🤷‍♀️';
    }

    else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'too high ' : 'too low';
            score--;
            document.querySelector('.score').textContent = score;
        }
            else {
                document.querySelector('.message').textContent = 'You lost the game';
                document.querySelector.apply('.score').textContent = 0;
            }
    }


    // when player wins 
    else if (secretNumber === guess) {
        document.querySelector('.message').textContent = 'Correct Number! 🎉';

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } // when guess is too high
    // else if (guess > secretNumber) {

    //     if (score > 0) {
    //         document.querySelector('.message').textContent = 'Too High! 📈';
    //         document.querySelector('.score').textContent = score;
    //         score--;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You Lost the Game!  ☠︰';
    //     }
    // }
        
    // else if (guess < secretNumber) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = 'Too Low!  ���';
    //         document.querySelector('.score').textContent = score;
    //         score--;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You Lost the Game!  ☠︰';
    //     }
    // }
})

document.querySelector('.again').addEventListener('click', function () { 

    document.querySelector('.message').textContent = 'Start guessing... 🤔 ';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;




})

