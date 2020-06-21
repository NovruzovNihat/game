let ball = document.getElementById("ball");
let wood = document.getElementById("wood");
let barX = 0;
let score = 0;
let ballX = 0;
let ballY = 0;
let dx = 5;
let dy = 5;
let speed=1;

let interval = setInterval(topMove,40)



function topMove(){
    if(ballX<0 || ballX>650){dx*=-1}
    if(ballY<0 || ballY>430){dy*=-1}

    if(ballY>430){    
        if(ballX > (barX-50) && ballX < (barX+100)){
            ++score;
            document.getElementById("span").innerHTML = score;
            if(score>=1){
                speed+=0.2;
            }
        }
        else{  
            clearInterval(interval);
            alert("GAME OVER");
        }
    }

    ballX += dx*speed;
    ballY += dy*speed;

    ball.style.left = ballX +"px";
    ball.style.top = ballY +"px";

}
function woodMove(){
  wood.style.left = barX + "px";
}
addEventListener("keypress",function(event){
    let key = event.key;
    if(key=="a"||key=="A"){
        if(barX>0){
            barX -= 10; 
        }
    }
    if(key=="d"||key=="D"){
        if(barX<600){barX+=10}
    }
        woodMove();
})

document.getElementById("area").addEventListener("mousemove", function(event) {
    if (event.offsetX < 600) {
        barX = event.offsetX;
        wood.style.left = barX + 'px';
    }
});
