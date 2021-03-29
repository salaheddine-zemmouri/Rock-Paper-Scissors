function computerPlay(){
    let choice = ["Rock","Paper","Scissors"];
    return choice[Math.floor(Math.random()*3)];
}

function roundStates(playerSelection, computerSelection){

    let tool1 = playerSelection.toUpperCase();
    let tool2 = computerSelection.toUpperCase();

    if(tool1 == tool2) return [0,0];

    else if(
        (tool1 == "ROCK" && tool2 == "SCISSORS")|| 
        (tool1 == "SCISSORS" && tool2 == "PAPER" )||
        (tool1 == "PAPER" && tool2 == "ROCK")
    ) return [1,0];
    else
        return [0,1];
}

function playRound(playerSelection, computerSelection) {
    [tool1,tool2] = roundStates(playerSelection,computerSelection);
    if(tool1 == tool2) return "Tie Game";

    let state = tool1?"Win":"Lose";
    if(tool1){
        winner = playerSelection;
        loser = computerSelection;
    }
    else {
        winner = computerSelection;
        loser = playerSelection;
    }
    return `You ${state}! ${winner} beats ${loser}`;
}

function game(){
    let countPlayer = 0 , countComputer = 0;
    for(let i = 1 ; i <= 1 ; i++){
        const playerSelection = prompt("Rock , Paper or Scissors ?");
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        let state = result[4];
        if (state == 'W') countPlayer++;
        else if (state == 'L') countComputer++;
        console.log(`Human ${countPlayer} - ${countComputer} AI : ${result}`);
    }
}

game();
