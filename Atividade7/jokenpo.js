/*
* Disciplina Pweb 
* Atividade 7
* Autor: Carlos Wagner
*/

let playerScore = 0;
let robotScore = 0;
const playerScore_span =  document.getElementById("player-score");
const robotScore_span = document.getElementById("robot-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div =  document.getElementById("p");
const scissors_div =  document.getElementById("s");

function getrobotChoice(){
  const choices = ['r','p','s'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function convertToWord(letter){
  if (letter == 'r') return "Pedra";
  if (letter == 'p') return "Papel"
  return "Tesoura";

}
function win(playerChoice,robotChoice){
  const playerChoice_div = document.getElementById(playerChoice);

  playerScore++;
  playerScore_span.innerHTML  = playerScore;
  robotScore_span.innerHTML = robotScore;
  result_p.innerHTML = `${convertToWord(playerChoice)} ganha ${convertToWord(robotChoice)}<br>Você ganhou! 🤓`;
  playerChoice_div.classList.add('green-glow');
  document.getElementById('player-label').classList.add('animated','flash')

  setTimeout(function () {
    playerChoice_div.classList.remove('green-glow');
    document.getElementById('player-label').classList.remove('animated','flash');
  },1500);

}

function lose(playerChoice,robotChoice){ 
  const playerChoice_div = document.getElementById(playerChoice);

  robotScore++;
  playerScore_span.innerHTML  = playerScore;
  robotScore_span.innerHTML = robotScore;
  result_p.innerHTML = `${convertToWord(playerChoice)} perde para ${convertToWord(robotChoice)}<br>Robot ganhou! 😭`;
  playerChoice_div.classList.add('red-glow');
  document.getElementById('robot-label').classList.add('animated','flash');

  setTimeout(function () {
    playerChoice_div.classList.remove('red-glow');
    document.getElementById('robot-label').classList.remove('animated','flash');
  },1500);

}

function draw(playerChoice,robotChoice) {
  const playerChoice_div = document.getElementById(playerChoice);

  result_p.innerHTML = `${convertToWord(playerChoice)} empata com ${convertToWord(robotChoice)} <br> Empate! 😑`;
  playerChoice_div.classList.add('gray-glow');
  setTimeout(() => playerChoice_div.classList.remove('gray-glow'), 1000)
}
function game(playerChoice){
  const robotChoice = getrobotChoice();

  switch (playerChoice + robotChoice) {
    case "rs":
    case "pr":
    case "sp":
    win(playerChoice,robotChoice);
    break;

    case "sr":
    case "rp":
    case "ps":
    lose(playerChoice,robotChoice);
    break;

    case "rr":
    case "pp":
    case "ss":
    draw(playerChoice,robotChoice );
    break;
    default:

  }

}
function main(){
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}

main();
