var _w = 55;
var maxI = 1;
function setup() {
  createCanvas(400, 400);
  frameRate(5);
}

function draw() {
  background(220);
  fill(204, 235, 52);
  stroke('magenta');
  strokeWeight(5);
  for(var i=0;i<maxI;i++){
    stroke(random(0,255),random(0,255),random(0,255));
    strokeWeight(5);
    line(random(0,400), random(0,400), random(0,400), random(0,400));
    circle(random(0,600),random(0,600),random(10,50));
  }
}
function mousePressed(){
  _w+=10;
  maxI++;
}