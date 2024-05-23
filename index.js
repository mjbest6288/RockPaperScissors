const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const container = document.querySelector("#results");
const score = document.querySelector("#score");

//create a function that will return rock paper or scissors
function getComputerChoice(){
    //create an array with rock paper scissors
    let compList = ["rock", "paper", "scissors"];
    return(compList[Math.floor(Math.random()* compList.length)]);
}
//function to get the player selection. Created a function to be able to use later in program
function getPlayerSelection(){
    let getSelection = ""; //window.prompt("Rock, Paper or Scissors").toLowerCase();
    let mySelectNum = 0;
    

    
    
    if(mySelectNum = 1){
        getSelection = "rock"
    }
    else if(mySelectNum = 2){
        getSelection = "paper"
    }
    else if(mySelectNum = 3){
        getSelection = "scissors"
    }

    return getSelection;
}


//set three ints to keep score for the player, for the computer and the total amount of rounds
let playerScore = 0;
let computerScore = 0;
let myCount = 0;

//this function will get the selections from both computer and player and compare them to determine a winner
function playRound(pSelection){
    //call my functions and set some variables for the players choices
    const computersSelection = getComputerChoice();
    const playerSelection = pSelection;//getPlayerSelection();

    //console log the selections. 
    console.log(`Computer choose: ${computersSelection}`);
    console.log(`Player choose: ${playerSelection} `);
    if(playerScore === 5 || computerScore === 5)
        {
            if(playerScore === 5){
                container.textContent = "You are victorious! Great Job!";
            }
            else{
                container.textContent = "The computer he beaten you! Better luck next time.";
            }
            return;
        }
    else
    {
        //switch statement that passes in the users choice and compares it to the computers choice. 
    switch(playerSelection){
            case "rock":
                if(computersSelection === "paper"){
                    console.log(" Paper covers rock. Computer won that round");
                    computerScore ++;
                }
                else if(computersSelection === "scissors"){
                    console.log("rock crushes scissors. You won that round");
                    playerScore ++;
                }
                else{
                    console.log("This one was a draw")
                }
                break;
            case "paper":
                if(computersSelection === "scissors"){
                    console.log("Scissors cut paper. Computer won that round");
                    computerScore ++;
                }
                else if(computersSelection === "rock"){
                    console.log("Paper cover rock. You won that round");
                    playerScore ++;
                }
                else{
                    console.log("This one was a draw")
                }
                break;
            case "scissors":
                if(computersSelection === "rock"){
                    console.log("rock crushes scissors. Computer won that round");
                    computerScore ++;
                }
                else if(computersSelection === "paper"){
                    console.log("scissors cut paper. You won that round");
                    playerScore ++;
                }
                else{
                    console.log("This one was a draw")
                }
                break;
            default:
                console.log("invalid entry. Enter Rock, Paper, or Scissors");
                break;
        }
    }
    

    score.textContent = `Player score: ${playerScore} Computer Score: ${computerScore} `;
    

}

//this function is the main function to get the game started. 
function playGame(){
    //a boolean that will be set to determine the end of the game. 
    let myBool = false;
    //while loop to keep the game going, once the myCount variable reaches 5 it will stop the game and determine the winner. 
    while(!myBool){
        //if logic to see if the 2 scores = 5, if not, continue the while, if it does, it sets myBool to true and ends the loop. 
        if((playerScore + computerScore) < 5){
            playRound()
            console.log(`Player Score = ${playerScore}   Computer Score = ${computerScore}`);
        }
        else{
            myBool = true;
        }
    }
    
    //compares the two scores and determines the winner. 
    if(playerScore > computerScore){
        console.log("You have won!");
        console.log(`Player Score = ${playerScore}   Computer Score = ${computerScore}`);
    }
    else{
        console.log("You have lost to the computer, better luck next time");
        console.log(`Player Score = ${playerScore}   Computer Score = ${computerScore}`);
    }
}

rock?.addEventListener('click', () => {
    mySelectNum = 1;
    playRound("rock");
    //playGame();
});
paper?.addEventListener('click', () => {
    mySelectNum = 2;
    playRound("paper");
    //playGame();
});
scissors?.addEventListener('click', () => {
    mySelectNum = 3;
    playRound("scissors");
   //playGame();
});






//calls the function to play the game. 
//playGame();



/*
play a total of 5 rounds
get input on every new round. 
keep score of each win or lose and record that. 

if it is a draw. they need to repeat that round 
    need to call a method to restart the process. 
    we will run the test with out the restart to get the functionality working. 
set a variable to something that says they need to repeat the process
        maybe a true false or a counter. 


have a method that will call the all the other methods to play a game of 5

paper > rock
rock > scissors
scissors >  paper

*/