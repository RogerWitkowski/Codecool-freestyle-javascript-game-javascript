let canvas = document.getElementById('myCanvas');
let context = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10;

function drawBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI*2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
    bouncingBallOffWalls();
}

function bouncingBallOffWalls(){
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy= -dy;
    context.fillStyle = "yellow";
    context.fill();
    } else if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
    context.fillStyle = "yellow";
    context.fill();
    }
}

setInterval(draw, 10);


