const playerbtnRock = document.querySelector("#player-rock");
const playerbtnPaper = document.querySelector("#player-paper");
const playerbtnScissors = document.querySelector("#player-scissors");
const combtnRock = document.querySelector("#com-rock");
const combtnPaper = document.querySelector("#com-paper");
const combtnScissors = document.querySelector("#com-scissors");
const choice = document.querySelector(".choice");
const RESULT = document.querySelector(".result-rps");
const REFRESH = document.querySelector(".refresh-rps");
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

RESULT.innerHTML = "VS";

function randomanswer()
{
    var ans = new Array(ROCK, PAPER, SCISSORS);
    var randomm = Math.floor(Math.random()*ans.length);
    return ans[randomm];
}

function play(playerchoice){
    let comRandom = randomanswer();
    if(playerchoice == ROCK)
    {
        playerbtnRock.classList.add("choice-marker");
    }
    else if(playerchoice == PAPER)
    {
        playerbtnPaper.classList.add("choice-marker");
    }
    else if(playerchoice == SCISSORS)
    {
        playerbtnScissors.classList.add("choice-marker");
    }

    if(comRandom == ROCK)
    {
        combtnRock.classList.add("choice-marker");
        combtnPaper.classList.remove("choice-marker");
        combtnScissors.classList.remove("choice-marker");
    }
    else if(comRandom == PAPER)
    {
        combtnRock.classList.remove("choice-marker");
        combtnPaper.classList.add("choice-marker");
        combtnScissors.classList.remove("choice-marker");
    }
    else if(comRandom == SCISSORS)
    {
        combtnRock.classList.remove("choice-marker");
        combtnPaper.classList.remove("choice-marker");
        combtnScissors.classList.add("choice-marker");
    }
    
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

function win(){
    RESULT.innerHTML="PLAYER WIN";
    RESULT.classList.add("result-rps-change");

}
function lose(){
    RESULT.innerHTML="PLAYER LOSE";
    RESULT.classList.add("result-rps-change");

}
function draw(){
    RESULT.innerHTML="DRAW";
    RESULT.classList.add("result-rps-change");

}
function refreshbutton(){
    RESULT.innerHTML="VS";
    RESULT.classList.remove("result-rps-change");
    combtnRock.classList.remove("choice-marker");
    combtnPaper.classList.remove("choice-marker");
    combtnScissors.classList.remove("choice-marker");
    playerbtnRock.classList.remove("choice-marker");
    playerbtnPaper.classList.remove("choice-marker");
    playerbtnScissors.classList.remove("choice-marker");
}

function enableButton(){
    playerbtnRock.classList.remove("disabled");
    playerbtnPaper.classList.remove("disabled");
    playerbtnScissors.classList.remove("disabled");
}
function disableButton(){
    playerbtnRock.classList.add("disabled");
    playerbtnPaper.classList.add("disabled");
    playerbtnScissors.classList.add("disabled");
}

function main(){
    playerbtnRock.addEventListener("click", function(){
        play(ROCK);
        disableButton();
    });
    playerbtnPaper.addEventListener("click", function(){
        play(PAPER);
        disableButton();
    });
    playerbtnScissors.addEventListener("click", function(){
        play(SCISSORS);
        disableButton();
    });
    REFRESH.addEventListener("click", () => {
        refreshbutton();
        enableButton();
    });
}

main();


