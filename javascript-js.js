let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function ()
{
   if(started==false)
   {
    console.log("Game started..!");
    started=true;
   }
levelup();

});

function levelup()
{
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ranIdx=Math.floor(Math.random()*3);
    let rancolor =btns[ranIdx];
    let ranbtn = document.querySelector(`.${rancolor}`);
    //console.log(ranIdx)
    //console.log(rancolor);
    //console.log(ranbtn);
    gameseq.push(rancolor);
    console.log(gameseq);

    gameflash(ranbtn);

}

function gameflash(btn)
{
    btn.classList.add("gameflash");
    setTimeout(function() {
        btn.classList.remove("gameflash");
    },250);
}

function userflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click", btnpress);
}

function checkAns(idx) {
    if(userseq[idx]===gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
            setTimeout(levelup,1000);
        }
        console.log("Same value");
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any Key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor="white";
        })
        reset();
    }
}

function btnpress() {
    
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}

function reset()
{
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}