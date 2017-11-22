class DarthVader{
  
	constructor(x, y){
  	this.x = x;
    this.y = y;
  	this.naves = []
  }
  
  desenharVader(){
  	image(img, this.x, this.y);
  }
  
  mover(){
  	this.y += random(-1, 1);
  }
}

class Nave{
  
  constructor(x, y){
  	this.x = x;
    this.y = y;
  }
  
  desenharNave(){
    triangle(this.x + 1,this.y + 25,this.x + 25,this.y + 18,this.x + 25,this.y + 32);
    triangle(this.x + 49,this.y + 25,this.x + 25,this.y + 18,this.x + 25,this.y + 32);
    ellipse(this.x + 25,this.y + 25,22);
    line(this.x + 1,this.y + 15,this.x + 1,this.y + 35);
    line(this.x + 1,this.y + 15,this.x + 8,this.y + 5);
    line(this.x + 1,this.y + 35,this.x + 8,this.y + 45);
    line(this.x + 49,this.y + 15,this.x + 49,this.y + 35);
    line(this.x + 49,this.y + 15,this.x + 42,this.y + 5);
    line(this.x + 49,this.y + 35,this.x + 42,this.y + 45);
  }
  
  moverNave(){
  	this.x += random(-5, 5);
    this.y += random(-1, 1);
  }
	
  
  destruirNave(){
  	let d = dist(mouseX, mouseY, this.x, this.y);
   	if (d < this.x){
      return true;
    }else{
    	return false;
    }
  }
}


function preload() {
  img = loadImage("imagens/darthvadericon.png");
}

var img;
var naves = [];
var vader = new DarthVader(100, 400);


function mousePressed(){
	if (mouseIsPressed) {
    if (mouseButton == LEFT){
      let nave = new Nave(mouseX - 25, mouseY - 25);
  		vader.naves.push(nave);
    }
    if (mouseButton == CENTER){
      for(let indice in vader.naves){
      	if(vader.naves[indice].destruirNave()){
          vader.naves.splice(indice,1);
        }
      }
    }
  }
}


function setup() { 
  createCanvas(500, 500);
}


function draw() { 
  background(220);
  
  vader.desenharVader();
  vader.mover();
  
	for (let objeto of vader.naves){
	  objeto.desenharNave();
    objeto.moverNave();
  }
}