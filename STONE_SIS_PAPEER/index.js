let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

// read the user choice and creat comp choice
// for generate random choices to use Math.random() but its range between 0 to 1 so we can convert to whole numbwer by multiplying 3 because we have 3 index for access the 3 index of array we multiplie 3 then it value become 1.something*3 or 0.something*3 etc between 3.something. then we get the value between 0 to 2.something .
const genCompChoice=()=>{
    const options=["rock","paper","scissors"]
    const randIndx= Math.floor((Math.random()*3)) // it print only decimal numbers 
    return options[randIndx];
}

// show winner
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===true){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} beats ${userChoice} `
        msg.style.backgroundColor="red"
    }
}

// for draw game
const drawGame=()=>{
    console.log("The match is draw");
    msg.innerText="Game Was Draw. Play Again "
    msg.style.backgroundColor="#081b31"
}

const playGame=(userChoice)=>{
    console.log("User Choice is = ",userChoice);
    //now generate computer choice -> modular programing

    const compChoice= genCompChoice();
    console.log("comp Choice=",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin= true;
        if(userChoice==="rock"){
            //scissors / paper
            userWin=compChoice==="paper" ? false: true  // if the comp choice paper then userwin become false means user lossed  else comp choice scissors then the userwin true means computer lossed 
        }else if(userChoice==="paper"){
            //rock,sicssors
            userWin=compChoice==="scissors" ?false:true // if the comp choice is scissors then the userwin become false means comp win else comp choice the rock then co,p will loss and user win become true means user win .
            
        }else{
            //rock,paper
           userWin= compChoice=="rock"?false:true // the user choice is scissors then if the comp choice is rock then user choice will be loss means userwinn is false else comp choice is paper then userWin is true means user choice is win
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        // now access the id and print it
        const userChoice=choice.getAttribute("id"); 
        playGame(userChoice);
    })
})
