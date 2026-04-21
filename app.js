let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara =document.querySelector("#user-score");
const compscorepara =document.querySelector("#comp-score");

const compchoice=()=>
{
    const option=["rock","paper","scissor"];
    const rand= Math.floor(Math.random()*3);
    return option[rand];
}
const drawgame=()=>
{
    msg.innerText="Game is Draw. Play Again";
    msg.style.backgroundColor="#081b31";
};
const showuser=(userwin)=>
{
    if(userwin)
    {
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win!");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText="you lose.";
        msg.style.backgroundColor="red";
    }
}

const playgame=(userchoice)=>{
    console.log("user choice =",userchoice);
    const comchoice=compchoice();
    console.log("comp choice =",comchoice);
    if(userchoice== comchoice)
    {
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice=="rock")
        {
            userwin=comchoice=="paper"?false:true;
        }
        else if(userchoice=="paper")
        {
            userwin=compchoice=="scissor"?false:true;
        }
        else
        {
            
            userwin=compchoice=="rock"?false:true;
        }
        showuser(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});


const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        toggleBtn.innerText = "☀️";
    } else {
        toggleBtn.innerText = "🌙";
    }
});