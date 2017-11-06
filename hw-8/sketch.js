let rows, x_space;
let cols, y_space;

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate( 100 );

	x_space = 50;
	rows = floor( width / x_space );
	y_space = 50;
	cols = floor( height / y_space );
}



function draw() {
	background( 'rgb(150, 178, 245)' );

	noStroke();

	// making ‘x’ to a dummy value.
	let x = 1;
	let y = 1;
	while ( x != 0 ){
		x = floor(random() * rows);
		y = floor(random() * cols);

// giving the triangles color
		fill( random(255), random(255), random(255) );
		ellipse( x*x_space, y*y_space, random(10, 50,) );
	}
}
