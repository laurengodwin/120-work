let balls = [];
const numOfBalls = 2000;

function setup() {
    createCanvas(windowWidth, windowHeight);
//creating canvas for balls
//init_x += 10 to make the balls drop down
    let init_x = 7;
    let init_y = 7;
    for ( let i = 1; i < numOfBalls; i++ ) {
        balls.push( new Ball( init_x, init_y ) );
        init_x += 5;
        if( init_x > width ) {
            init_x = 60;
            init_y += 10;
        }
    }
}


function draw() {
    background('lightblue');
//make background lightblue to see colors
    for (let i = 0; i < balls.length; i++) {
        balls[i].move();
        balls[i].edgeCheck();
        balls[i].display();
    }
}
//creat the ball class
class Ball {
    constructor(x, y, size) {
        this.color1 = 'purple';
        this.color2 = 'yellow';
        this.color3 = 'black';
        this.color4 = 'pink';
        this.color5 = 'red';
        this.color6 = 'green';
        this.color7 = 'orange';
        this.color8 = 'white';
        this.size = random(-1, 5);
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(5, -30);
        this.deltaY = random(-30, 30);
    }
//3 types of colored balls
    display() {
        push();
        noStroke();
        fill(this.color1);
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        noStroke();
        fill(this.color2);
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        noStroke();
        fill(this.color3);
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        fill(this.color4);
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        fill(this.color5);
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        fill(this.color6);
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        fill(this.color7);
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        fill(this.color8);
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
            this.color = 'purple';
        }
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
            this.color = 'yellow';
        }
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
                this.deltaX *= -1;
                this.color = 'black';
              }

        }

    }
