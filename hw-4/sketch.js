//setting up function
function setup() {

// creating canvas
    createCanvas( 500, 800, )
  }

// drawing space
function draw() {
    // background color is light blue
    background( 'lightblue' );

    // colors I will use
    pastelcream = color(255, 230, 179);
	  cream = color(235, 220, 140);
	  black = color(0, 0, 0);
    gray = color(89, 89, 89);
	  white = color(255, 255, 255);
	  brickred = color(172, 66, 66);
	  lightpink = color(232, 153, 244);
    tan = color(144,129,96);
    blonde = color(230,209,127);

    // ** BODY **********************************
    fill(lightpink);
	noStroke();
	quad(335,416,419,456,449,550,337,551);
	rect(112,419, 229, 132);
	quad(112,419,56,456,16,552,112,551);
    // **END BODY**

    // ** HEAD **********************************
push();
    fill(pastelcream);
  	quad(167,368,196,455,240,472,282,446);
  	fill(cream);
  	quad(204,397,281,447,290,378,277,368);

    //face
    fill(pastelcream);
    	noStroke();
    	beginShape();
    	vertex(129,262);
    	vertex(141,348);
    	vertex(152,368);
    	vertex(192,392);
    	vertex(219,397);
    	vertex(247,394);
    	vertex(283,370);
    	vertex(307,337);
    	vertex(326,258);
    	vertex(315,197);
    	vertex(272,149);
    	vertex(189,157);
    	vertex(148,191);
    	vertex(133,223);
    	endShape();

      //right eye
      fill(white);
	beginShape();
	vertex(249,262);
	vertex(259,251);
	vertex(267,248);
	vertex(280,248);
	vertex(292,252);
	vertex(302,261);
	vertex(292,261);
	vertex(280,267);
	vertex(266,269);
	vertex(255,263);
	endShape();
  fill(black);
	ellipse(272, 259, 20, 20);

    //left eye
    fill(white);
	beginShape();
	vertex(210,265);
	vertex(202,257);
	vertex(191,252);
	vertex(174,254);
	vertex(162,261);
	vertex(153,271);
	vertex(165,270);
	vertex(174,273);
	vertex(186,273);
	vertex(199,268);
	endShape();
	fill(black);
	ellipse(185, 263, 20, 20);

  //eyebrows
  fill(tan);
	beginShape();
	vertex(193,240);
	vertex(173,241);
	vertex(154,250);
	vertex(164,239);
	vertex(179,234);
	vertex(197,234);
	vertex(207,237);
	endShape();
  fill(tan);
  	beginShape();
  	vertex(249,232);
  	vertex(271,229);
  	vertex(288,230);
  	vertex(299,238);
  	vertex(279,234);
  	vertex(256,236);
  	endShape();
//mouth
fill(brickred);
	beginShape();
	vertex(190,343);
	vertex(208,345);
	vertex(247,340);
	vertex(267,333);
	vertex(239,330);
	vertex(233,335);
	vertex(225,331);
	endShape();
  fill(brickred);
  beginShape();
	vertex(190,343);
	vertex(213,352);
	vertex(247,347);
	vertex(267,333);
	vertex(246,338);
	vertex(208,344);
	endShape();

  //hair
  fill(blonde);
	beginShape();
	vertex(269,452);
	vertex(337,433);
	vertex(354,246);
	vertex(338,165);
	vertex(293,114);
	vertex(231,92);
	vertex(184,106);
	vertex(118,170);
	vertex(105,238);
	vertex(110,411);
	vertex(115,448);
	vertex(140,477);
	vertex(129,440);
	vertex(206,472);
	vertex(178,417);
	vertex(152,367);
  vertex(130,264);
	vertex(134,222);
	vertex(191,158);
	vertex(231,210);
	vertex(331,287);
	vertex(322,308);
	vertex(309,334);
	vertex(287,367);
	endShape();

  //nose
  fill(tan);
  beginShape();
  vertex(350,350);


    // ** END CHARACTER SANDBOX *******************
    pop();

}
