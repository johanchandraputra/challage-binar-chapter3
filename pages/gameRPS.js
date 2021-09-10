const playerbtnRock = document.querySelector("#player-rock");
const playerbtnPaper = document.querySelector("#player-paper");
const playerbtnScissors = document.querySelector("#player-scissors");
const combtnRock = document.querySelector("#com-rock");
const combtnPaper = document.querySelector("#com-paper");
const combtnScissors = document.querySelector("#com-scissors");
const RESULT = document.querySelector("#result-rps");
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

function randomanswer()
{
    var ans = new Array(ROCK, PAPER, SCISSORS);
    var randomm = Math.floor(Math.random()*ans.length);
    return ans[randomm];
}

function win(){
    RESULT.innerHTML=" PLAYER WIN ";
}
function lose(){
    RESULT.innerHTML=" PLAYER LOSE ";
}
function draw(){
    RESULT.innerHTML=" PLAYER DRAW ";
}


function play(playerchoice){

    let comRandom = randomanswer();
    switch(playerchoice+comRandom){
        case ROCK+SCISSORS:
        case PAPER+ROCK:
        case SCISSORS+PAPER:
            win();
            break;
        case ROCK+PAPER:
        case PAPER+SCISSORS:
        case SCISSORS+ROCK:
            lose();
            break;
        case ROCK+ROCK:
        case PAPER+PAPER:
        case SCISSORS+SCISSORS:
            draw();
            break;
    }

}

function main(){
    playerbtnRock.addEventListener("click", () => {
        play(ROCK);
    });
    playerbtnPaper.addEventListener("click", () => {
        play(PAPER);
    });
    playerbtnScissors.addEventListener("click", () => {
        play(SCISSORS);
    });
}


main();


