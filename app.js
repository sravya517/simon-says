let gameSeq=[];
let userseq=[];

let btns=["yellow","red","blue","green"];

let started=false;
let level=0;
let highScore=0;


let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    };
});

function btnFlash (btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
};


function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);

};

function checkAns(idx){
   
    if(userseq[idx]==gameSeq[idx]){
        if(userseq.length==gameSeq.length){
            setTimeout(levelUp,500);
        }
        
    }else{
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
document.querySelector("body").style.backgroundColor="white"
        },150);
        if(highScore<level){
        highScore=level;
       }
        h2.innerHTML=`Game over!Your score was <b>${level}</b><br> Press any key to start.<br>High score : ${highScore}`
       
        reset();
    }
}

function btnPress(){
    let btn=this;
    
    btnFlash(btn);

   let userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userseq=[];
    level=0;
}