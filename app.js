let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice button");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}
const drawGame = () =>{
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "#000000";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //scissor, rock
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((button) =>{
    button.addEventListener("click", () =>{
        const userChoice = button.getAttribute("id");
        playGame(userChoice);
    });
});