const cards= document.querySelectorAll(".obj");
cards.forEach((card) => card.addEventListener("click", flip ))

var score=document.querySelector("h2");
score.innerHTML=1000;
var fails=0;
var succeeds=0;
const body=document.querySelector("body");
var flipped= false;
var first;
var second;
function flip(){
    this.classList.add("flipped");
    this.removeEventListener("click",flip);
    if(!flipped){
        flipped=true;
        first=this; 
    }
    else{
        second=this;
        if(first.dataset.image === second.dataset.image){
            success();
        }
        else{
            failed();
        }
    }
}

function success(){
    succeeds++;
    // body.style.backgroundColor= green;
    // cards.forEach((card) => card.removeEventListener("click",flip));
    flipped=false;
    first=null;
    second=null;
    if(succeeds===8){
        score.innerHTML=1000-(50*fails);
        score.classList.add("won")
    }
    console.log(succeeds,fails);
}

function failed(){
    fails++;
    setTimeout(()=>{
    first.classList.remove("flipped");
    second.classList.remove("flipped");    
    first.addEventListener("click", flip );
    second.addEventListener("click", flip );
    flipped=false;
    first=null;
    second=null;
    },400);
}

(function suffle(){
    cards.forEach((card)=>{
        var index=Math.floor(Math.random()*16);
        console.log(index);
        card.style.order= index;
    })
})();