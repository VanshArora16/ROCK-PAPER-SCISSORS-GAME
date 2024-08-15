let userScore = 0;
let compScore = 0;
let uScore =  document.querySelector("#user-score");
let cScore =  document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
msg = document.getElementById("msg");
// comp choice
const genCompChoice = ()=>{
        const options = ["rock", "paper", "scissors"];
        return options[Math.floor(Math.random()*3)];
}

// accessing user choice which is chosen
choices.forEach((choice)=>{
        choice.addEventListener("click", ()=>{
                const userChoice = choice.getAttribute("id");
                playGame(userChoice)
        } );
});

// draw game case 
const drawGame = ()=>{
        msg.innerText = "Game Was Draw. Play Again";
        msg.style.backgroundColor = "#081b31";
}

//  checking winner
const  showWinner = (userWin, userChoice, compChoice)=>{
        if(userWin) {
                userScore++;
                uScore.innerText = userScore;
                msg.innerText = `You Win! Your ${userChoice} beats the  ${compChoice}`
                msg.style.backgroundColor = "green";
        }
        else{
                compScore++;
                cScore.innerText = compScore;
                msg.innerText = `You lost. ${compChoice} beats Your ${userChoice}`;
                msg.style.backgroundColor = "red";

        }
}


// main logic for play game
const playGame = (userChoice)=>{
        const compChoice = genCompChoice();

        if(userChoice === compChoice){
                drawGame();
        }
        else{
                let userWin  = true;
                if(userChoice === "rock"){
                        //scissors , paper
                        userWin =  compChoice === "scissors" ? true : false ;
                }
                else if(userChoice === "paper"){
                        // scissors , rock
                        userWin =  compChoice === "scissors" ? false : true ;
                }
                else if (userChoice === "scissors"){
                        // paper , rock
                        userWin =  compChoice === "rock" ? false : true ;
                }
                showWinner(userWin , userChoice, compChoice); 
        }
}

