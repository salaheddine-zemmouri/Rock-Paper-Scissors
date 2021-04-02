
function computerPlay(){
    let choice = ["rock","paper","scissors"];
    return choice[Math.floor(Math.random()*3)];
}


//  0 : Tie 
//  1 : Win 
// -1 : Lose 


function playRound(playerSelection, computerSelection){

    let tool1 = playerSelection.toUpperCase();
    let tool2 = computerSelection.toUpperCase();

    if(tool1 == tool2) return 0;

    else if(
        (tool1 == "ROCK" && tool2 == "SCISSORS")|| 
        (tool1 == "SCISSORS" && tool2 == "PAPER" )||
        (tool1 == "PAPER" && tool2 == "ROCK")
    ) return 1
    else
        return -1;
}



let player = 0 , computer= 0;


const playerImg = document.querySelector('#playerTool');
const computerImg = document.querySelector('#computerTool');

const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');


const btns = Array.from(document.querySelectorAll('button'));
btns.forEach(btn => {
    btn.addEventListener('click',() => {
        let playerChoice = btn.id;
        let computerChoice = computerPlay();
        playerImg.setAttribute('src',`assets/${playerChoice}.png`);
        computerImg.setAttribute('src',`assets/${computerChoice}.png`);
        let result = playRound(playerChoice,computerChoice);
        if (result==1) player++;
        if (result==-1) computer++;
        playerScore.textContent = `${player}`;
        computerScore.textContent = `${computer}`;
    });
});
