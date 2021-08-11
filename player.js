const player1scoreDisplay = document.querySelector(".player1score");
const player2scoreDisplay = document.querySelector(".player2score");
let scoreDisplay = document.querySelector("#scoreDisplay");
let inputScore = document.querySelector(".inputScore");
const player1btn = document.querySelector("#player1btn");
const player2btn = document.querySelector("#player2btn");
const resetbtn = document.querySelector("#resetbtn");
let player1score = 0;
let player2score = 0;
let score = 5;
let gameOver = false;
const winner = (playerscore, score) => {
    if(playerscore === score){
        if (player1score === score) {
            player1scoreDisplay.classList.add('style');
        }else{
            player2scoreDisplay.classList.add('style');
        }   
        gameOver = true;
        player1btn.disabled = true;
        player2btn.disabled = true;
    }
};

const reset = () => {
    player1score = 0;
    player2score = 0;
    gameOver = false;
    player1scoreDisplay.textContent = player1score;
    player2scoreDisplay.textContent = player1score;
    player1btn.disabled = false;
    player2btn.disabled = false;
    player1scoreDisplay.classList.remove('style');
    player2scoreDisplay.classList.remove('style');
};

player1btn.addEventListener("click", () =>{
    if (!gameOver) {
        player1score++;
        winner(player1score, score)  
        player1scoreDisplay.textContent = player1score;
    }
});

player2btn.addEventListener("click", () =>{
    if (!gameOver) {
        player2score++;
        winner(player2score, score)  
        player2scoreDisplay.textContent = player2score;
    }
});

resetbtn.addEventListener("click", reset);

inputScore.addEventListener("change", () =>{
    console.log(typeof inputScore.value);
    scoreDisplay.textContent = inputScore.value;
    score = Number(inputScore.value);
    inputScore.value = ' ';
    reset();
});

