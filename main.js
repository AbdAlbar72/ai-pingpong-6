let ballTouchPaddleSound;
let missedPaddleSound;
let rightWristY; 

function preload() {
    ballTouchPaddleSound = loadSound('ball_touch_paddel.wav');
    missedPaddleSound = loadSound('missed.wav');
}

function setup() {
    createCanvas(800, 400); 
}

function draw() {

    paddle1Y = rightWristY;


}

function move() {


    if (ballTouchesPaddle) { 
        ballTouchPaddleSound.play();
    } else {
        missedPaddleSound.play();
    }
}

function restart() {
    pcscore = 0;
    playerscore = 0;
    loop(); 
}

if (gameIsOver) {
    text("Game Over! Press Restart", width / 2, height / 2); 
    noLoop(); 
}


document.getElementById('restartButton').addEventListener('click', restart);
