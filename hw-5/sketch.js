//ball variables
var spd = 2;
var b1x = 0;
var b1xspeed = spd;
var b1y = 0;
var b1yspeed = spd;
var b1size = {x: 0}
var b1col = {r: 0, g: 0, b: 0}


function setup() {
  // create a canvas to draw my animation on
  createCanvas(windowWidth, windowHeight);
    background('rgb(237, 113, 187)');

//ball variables
    b1col.r = random(0, 255);
   b1col.g = random(0, 255);
   b1col.b = random(0, 255);
   b1size.x = random(40, 400);
   b1x = random(1, width);
}


function draw() {
  blendMode(DARKEST);
  //animating ball
  push();
    fill(b1col.r, b1col.g, b1col.b, 100);
    ellipse(b1x, b1y, b1size.x, b1size.x);

    if (b1x > width) {
      b1xspeed = -2;
    }
    if (b1x < 1) {
      b1xspeed = 2;
    }
    if (b1y > height) {
      b1yspeed = -2;
    }
    if (b1y < 1) {
      b1yspeed = 2;
    }

   b1x = b1x + b1xspeed;
   b1y = b1y + b1yspeed;
  pop();

push();
  fill('rgb( 175, 147, 164)');
  stroke(50);
  triangle( mouseX, mouseY, 140, mouseX, mouseY, 140);
pop();
}
