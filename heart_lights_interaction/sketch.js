class Coracao{
	desenhar (){
  	fill(c2);
    rect(450,0,120,385);
    setGradient(450,0,50,385,c1,c2);
    noStroke();
    fill(c3);
    rect(450,180,30,30);
    quad(480,180,510,210,510,240,480,240);
    triangle(450,240,510,240,510,270);
    triangle(450,240,510,300,450,300);
    rect(360,0,90,448);
    setGradient(360,0,40,448,c2,c3);
    noStroke();
    fill(c4);
    rect(360,180,30,30);
    quad(390,180,420,210,420,300,390,300);
    rect(360,270,30,30);
    rect(210,0,150,500);
    setGradient(210,0,50,500,c3,c4);
    noStroke();
    fill(c5);
    triangle(210,180,270,210,210,210);
    quad(210,210,270,210,270,240,240,240);
    quad(240,240,270,240,270,300,240,300);
    quad(240,240,270,240,270,300,240,300);
    quad(270,210,300,180,300,210,270,240);
    quad(300,180,330,180,330,300,300,300);
    rect(120,0,90,448);
    setGradient(120,0,40,448,c3,c5);
    noStroke();
    fill(c6);
    quad(120,180,150,180,180,210,120,210);
    quad(150,210,180,210,180,300,150,300);
    triangle(120,240,150,240,120,270);
    rect(0,0,120,385);
    setGradient(0,0,70,385,c5,c6);
    noStroke();
    fill(0);
    triangle(0,180,120,0,0,0);
    triangle(210,0,360,0,285,90);
    triangle(450,0,570,0,570,180);
    triangle(570,300,570,500,285,500);
    triangle(285,500,0,500,0,300);
    stroke(40,150);
    strokeWeight(3);
    strokeCap(ROUND);
    line(0,180,120,0);
    line(120,1,210,1);
    line(210,1,285,90);
    line(285,90,360,0);
    line(360,1,450,1);
    line(450,0,570,180);
    line(569,180,569,300);
    line(570,300,285,499);
    line(285,499,0,300);
    line(1,300,1,180);
    noStroke();
  }
}


function setGradient(x, y, w, h, c1, c2){
	for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
  }
}

function drawGradient(x, y) {
  var radius = 5000;
  var h = 1;
  for (var r = 75; r < radius; r = (r + 5)) {
    stroke(0,h);
    fill(255,0);
    ellipse(x, y, r, r);
    h = (h + 1);
  }
}

var c1, c2, c3, c4, c5, c6, core, x, y;

function setup() { 
  createCanvas(570, 500);
  c1 = color(35,0,0);
  c2 = color(60,0,0);
  c3 = color(95,0,0);
  c4 = color(145,0,0);
  c5 = color(190,0,0);
  c6 = color(230,0,0);
  core = new Coracao();
}

function draw() { 
  core.desenhar();
  if (mouseIsPressed){
  }else{
  	x = mouseX;
    y = mouseY;
    drawGradient(x, y);
  } 
}