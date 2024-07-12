let userScore=0
let compScore=0

// excesss the choices
const choices = document.querySelectorAll(".choice")

const msg=document.querySelector("#msg")

const userScore_para=document.querySelector("#user-score")
const compScore_para=document.querySelector("#comp-score")


const geneCompChoice =()=>{
        const options=[
        "rock",
        "paper",
        "scissors"
        ]
    const randomId=Math.floor(Math.random() *3 )
    return options[randomId]

}


// draw function
const drawGame=()=>{
    console.log("game is draw")
    msg.innerText="Game was Draw.Play Again"
    msg.style.backgroundColor="orange"
}

const showWinner=(Userwin, userChoice,compChoice)=>{
    if(Userwin){
        userScore++
        userScore_para.innerText=userScore
        console.log("you win!")
        msg.innerText=`You Win! Your${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
    }
    else{
        compScore++
        compScore_para.innerText=compScore
        console.log("you lose!")
        msg.innerText=`You Lose! ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor="red"
    }
}
const playgame=(userChoice)=>{
    console.log("User Choice=", userChoice)
    //generate computer choice
     const compChoice=geneCompChoice()
     console.log("Computer Choice=", compChoice);

    if(userChoice ===compChoice){
        //drawgame
        drawGame()
    }
    else{
        let Userwin=true
        if (userChoice ==="rock"){
            //scissors , paper
           Userwin= compChoice=== "paper" ? false:true
        }
        else if(userChoice ==="paper"){
            //rock , scissor
           Userwin= compChoice=== "scissors" ? false:true
        }
        else{
            //rock , paper
            Userwin= compChoice=== "rock" ? false:true
        }
        showWinner(Userwin,userChoice,compChoice)
    }

}


// Now entering eventlistser to choices
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        // for getting Atribute of each choice
        const userChoice=choice.getAttribute("id")

        playgame(userChoice)
    })
})