let heart = document.getElementById("heart");
let question = document.getElementById("question");
let yes = document.getElementById("yes");
let no = document.getElementById("no");
let letter = document.getElementById("letter");
let typing = document.getElementById("typing");
let music = document.getElementById("music");
let size = 20;

heart.onclick = function(){
    heart.style.display="none";
    question.classList.remove("hidden");
    music.play();
}

no.onclick = function(){
    size += 15;
    yes.style.fontSize = size + "px";
}

yes.onclick = function(){
    question.style.display="none";
    showLetter();
    startTyping();
    startFireworks();
}

function showLetter(){
letter.classList.remove("hidden");
letter.innerHTML = `
My dearest Andrea,

Even with oceans between us,
my heart has never doubted you.

Every late night call.
Every sleepy “I love you.”
Every moment we fight the distance together.

Andrea, loving you is the easiest decision I’ve ever made.

Distance is temporary.
But what I feel for you?
That is permanent.

You are my peace.
You are my comfort.
You are my future.

No matter how far,
I choose you.
Every single day.

Forever yours,
Your love ❤️
`;
}

function startTyping(){
let text = "I LOVE YOU FOREVER, ANDREA ❤️";
let i=0;
let interval = setInterval(function(){
typing.innerHTML += text.charAt(i);
i++;
if(i>=text.length){clearInterval(interval);}
},100);
}

function startFireworks(){
let canvas = document.getElementById("fireworks");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

setInterval(function(){
let x = Math.random()*canvas.width;
let y = Math.random()*canvas.height/2;
drawHeart(ctx,x,y,20,"#ff66b2");
},400);
}

function drawHeart(ctx,x,y,size,color){
ctx.fillStyle=color;
ctx.beginPath();
ctx.moveTo(x,y);
ctx.bezierCurveTo(x-size,y-size,x-size*2,y+size,x,y+size*2);
ctx.bezierCurveTo(x+size*2,y+size,x+size,y-size,x,y);
ctx.fill();
}

function floatingHearts(){
let heart = document.createElement("div");
heart.classList.add("heart-float");
heart.innerHTML="💗";
heart.style.left=Math.random()*100+"vw";
document.body.appendChild(heart);
setTimeout(()=>{heart.remove();},6000);
}
setInterval(floatingHearts,300);