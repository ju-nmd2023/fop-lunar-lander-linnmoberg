function setup() {
    createCanvas(600, 300);
    background(255, 255, 255);
}

function scenery() {
    push();
    noStroke();

    //wall 
    fill("black");
    rect(0, 0, 600, 300);
    
    //ground 
    fill("pink");
    rect(0, 200, 600, 100);

    //discoball
    fill("silver");
    ellipse(300, 60, 50, 50);
    stroke("white"); 
    strokeWeight(2);
    line(300, 0, 300, 35);
    line(276, 54, 323, 54);
    line(276, 63, 321, 63);
    line(305, 37, 305, 84);
    line(311, 41, 311, 79);
    pop();
}

function cat(x, y) {
    push();
    translate(x, y);
    scale(0.6);
    fill (255, 140, 0);

// body
fill (255, 140, 0);
rect (x + 40, y + 110, 10, 30);
rect (x + 150, y + 110, 10, 30);
ellipse (x + 100, y + 100, 140, 60);
ellipse (x + 40, y + 60, 70, 70);
rect (x + 50, y + 110, 10, 35);
rect (x + 140, y + 110, 10, 35); 

// eyes
fill (255, 255, 255);
ellipse (x + 30, y + 50, 15, 15);
ellipse (x + 50, y + 50, 15, 15);

fill (0, 0, 0);
ellipse (x + 25, y + 50, 10, 10);
ellipse (x + 55, y + 50, 10, 10);

// ears
fill (255, 140, 0);
triangle (x + 25, y + 30, x + 10, y + 45, x, y + 15);
triangle (x + 55, y + 30, x + 70, y + 45, x + 75, y + 10); 

// nose 
fill (226, 143, 173);
triangle (x + 39, y + 55, x + 34, y + 73, x + 47, y + 73);
line (x + 53, y + 66, x + 68, y + 62);
line (x + 54, y + 70, x + 68, y + 72);
line (x + 25, y + 68, x + 10, y + 62);
line (x + 24, y + 73, x + 10, y + 72);

//partyhat
fill (226, 143, 173);
triangle (x + 20, y + 30, x + 55, y + 30, x + 35, y);

// tail
strokeWeight (10);
stroke (255, 140, 0);
line (x + 160, y + 95, x + 210, y + 45);
}

function button(x, y, w, h) {
noStroke();
fill(255, 255, 255);
rect(x, y, w, h);

fill(0, 0, 0);
textSize(24);
text("Retry", x + w / 4, y + h / 1.5);
}

function startButton(x, y, w, h) {
    noStroke();
    fill(255, 255, 255);
    rect(x, y, w, h);

    fill(0, 0, 0);
    textSize(24);
    text("Start game", x + w / 4, y + h / 1.5);
}

function startScreen() {
    background("pink");
    cat();

    noStroke();
    fill(255, 255, 255);
    rect(380, 210, 150, 60);

    fill(0, 0, 0);
    textSize(24);
    text("Start game", 360 + 150 / 4, 210 + 60 / 1.5);

}

function gameScreen() {
    scenery();
    cat();
}

function endScreen() {
    scenery();
    cat();
    button();
}

let state = "start game";
let catY = 10;
let velocity = 0.4;
const acceleration = 0.02;
let buttonIsClicked = false;
let gameTimer = 0;

let gameIsRunning = true;

function draw() {
    scenery();

    push();
    cat(100, catY);
    pop();

    push();
    button(220, 150, 130, 40);
    pop();

    if (gameIsRunning === true) {
        catY = catY + velocity;
        velocity = velocity + acceleration;
    }

    if (mouseIsPressed) {
        velocity = velocity - 0.4;
    }

    if (catY > 120) {
        gameIsRunning = false;
        if (velocity <= 0.4) {
            fill(255, 255, 255);
            textSize(20);
            text("you win", 260, 130);
        console.log("You win!");
        } else {
            fill(255, 255, 255);
            textSize(20);
            text("you lose", 260, 130);
        console.log("You lose");

        if(buttonIsClicked) {

        }

        if (state === "start game") {
            startScreen();
        } else if (state === "game") {
            gameScreen();
            gameTimer = gameTimer + 1;
            if (gametimer >= 100) {
                gameTimer = 0;
                state = "result";
            }
        } else if (state === "result") {
            endScreen();
        }
        }
        noLoop();
    }
    }

    function mouseClicked() {
        if (state === "start game") {
            state = "game";
        }  else if (state === "result") {
            state = "game";
        }
    }











