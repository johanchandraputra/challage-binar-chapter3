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


// initial result 
RESULT.innerHTML = "VS";

//function random for computer choice
function randomAnswer() {
    var ans = new Array(ROCK, PAPER, SCISSORS);
    var randomm = Math.floor(Math.random() * ans.length);
    return ans[randomm];
}

//function case if player win, lose , draw and marker player and computer choice
function play(playerchoice) {
    let comRandom = randomAnswer();

    //marker player choice
    if (playerchoice == ROCK) {
        playerbtnRock.classList.add("choice-marker");
    }
    else if (playerchoice == PAPER) {
        playerbtnPaper.classList.add("choice-marker");
    }
    else if (playerchoice == SCISSORS) {
        playerbtnScissors.classList.add("choice-marker");
    }

    //to marker computer choice
    if (comRandom == ROCK) {
        combtnRock.classList.add("choice-marker");
    }
    else if (comRandom == PAPER) {
        combtnPaper.classList.add("choice-marker");
    }
    else if (comRandom == SCISSORS) {
        combtnScissors.classList.add("choice-marker");
    }

    //combine between player choice and computer choice to make CASE
    switch (playerchoice + comRandom) {
        case ROCK + SCISSORS:
        case PAPER + ROCK:
        case SCISSORS + PAPER:
            win(); // running this function if player win
            break;
        case ROCK + PAPER:
        case PAPER + SCISSORS:
        case SCISSORS + ROCK:
            lose(); // running this function if player lose
            break;
        case ROCK + ROCK:
        case PAPER + PAPER:
        case SCISSORS + SCISSORS:
            draw(); // running this function player draw
            break;
    }
}
// if player win , this function actived and add class to modify css
function win() {
    RESULT.innerHTML = "PLAYER WIN";
    RESULT.classList.add("result-rps-change");
}
// if player lose , this function actived and add class to modify css
function lose() {
    RESULT.innerHTML = "COM WIN";
    RESULT.classList.add("result-rps-change");
}
// if player draw , this function actived and add class to modify css
function draw() {
    RESULT.innerHTML = "DRAW";
    RESULT.classList.add("result-rps-change");

}

//refresh button will remove marker where player and computer choice , also reset result to beginning
function refreshbutton() {
    RESULT.innerHTML = "VS";
    RESULT.classList.remove("result-rps-change");
    combtnRock.classList.remove("choice-marker");
    combtnPaper.classList.remove("choice-marker");
    combtnScissors.classList.remove("choice-marker");
    playerbtnRock.classList.remove("choice-marker");
    playerbtnPaper.classList.remove("choice-marker");
    playerbtnScissors.classList.remove("choice-marker");
}

//to enable cursor and pointer event
function enableButton() {
    playerbtnRock.classList.remove("disabled");
    playerbtnPaper.classList.remove("disabled");
    playerbtnScissors.classList.remove("disabled");
}

//to disable cursor and pointer event
function disableButton() {
    playerbtnRock.classList.add("disabled");
    playerbtnPaper.classList.add("disabled");
    playerbtnScissors.classList.add("disabled");
}

//function where if player clicked a choice between rock / paper / scisscors  this function will running
function main() {
    playerbtnRock.addEventListener("click", function () {
        play(ROCK);
        disableButton();
    });
    playerbtnPaper.addEventListener("click", function () {
        play(PAPER);
        disableButton();
    });
    playerbtnScissors.addEventListener("click", function () {
        play(SCISSORS);
        disableButton();
    });
    REFRESH.addEventListener("click", function () {
        refreshbutton();
        enableButton();
    });
}


//to running function main
main();


