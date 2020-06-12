let gameDiv = document.getElementById('game');
let resultsDiv = document.getElementById('results');

//model
let choice = ['rock', 'paper', 'scissors'];
let playerChoice = 'nothing';
let cpuChoice = 'nothing';
let winner = 'Who will win?';


//view
showGame()

function showGame() {
    gameDiv.innerHTML = `<div class="ssp">
    <img id="rock" src="images/rock.png" alt="" onclick="choose(choice[0])">
    <img id="paper" src="images/paper.png" alt="" onclick="choose(choice[1])">
    <img id="scissors" src="images/scissors.png" alt="" onclick="choose(choice[2])">
    </div>`;
    resultsDiv.innerHTML = `<div class="results">Player has chosen ${playerChoice} and CPU has chosen ${cpuChoice}. <br/> ${winner}</div>`
}

//controller
function choose(t1) {
    playerChoice = t1;
    cpuChoose()
    checkResults()
    showGame()
}

function cpuChoose() {
    return cpuChoice = choice[randomNum()];
}

function checkResults() {
    if (playerChoice === 'rock') {
        if (cpuChoice === 'scissors') {
            winner = 'Winner Winner, Chicken Dinner!';
        } else {
            if (cpuChoice === 'paper') {
                winner = 'That CPU strong af...';
            }
        } if (cpuChoice === 'rock') {
            winner = 'Tie Game!';
        }
    }
    if (playerChoice === 'paper') {
        if (cpuChoice === 'rock') {
            return winner = 'Winner Winner, Chicken Dinner!';
        } else {
            if (cpuChoice === 'scissors') {
                return winner = 'That CPU strong af...';
            }
        } if (cpuChoice === 'paper') {
            winner = 'Tie Game!';
        }
    }
    if (playerChoice === 'scissors') {
        if (cpuChoice === 'paper') {
            return winner = 'Winner Winner, Chicken Dinner!';
        } else {
            if (cpuChoice === 'rock') {
                winner = 'That CPU strong af...';
            }
        } if (cpuChoice === 'scissors') {
            winner = 'Tie Game!';
        }
    }
    return winner;
}

function randomNum() {
    return Math.floor(Math.random() * 3);
}


