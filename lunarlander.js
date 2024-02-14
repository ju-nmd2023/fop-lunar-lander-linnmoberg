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

let catY = 10;
let velocity = 0.2;
const acceleration = 0.1;

let gameIsRunning = true;

function draw() {
    scenery();

    push();
    cat(100, catY);
    pop();

   /* catY = catY + velocity;
    velocity = velocity + acceleration; */

    if (gameIsRunning === true) {
        catY = catY + velocity;
        velocity = velocity + acceleration;
    }

    if (mouseIsPressed) {
        velocity = velocity - 0.2;
    }

    if (catY > 100) {
        gameIsRunning = false;
        console.log("game over");
        noLoop();
    }
}







