var angle = 0.0;
var offset = 300;
var scalar = 40;
var speed = 0.05;

function setup() {
  createCanvas(600, 600);
}
function draw() {
  background('blue');
  var y1 = offset + sin(angle) * scalar;
  var y2 = offset + sin(angle + 0.4) * scalar;
  var y3 = offset + sin(angle + 0.8) * scalar;
  var y4 = offset + sin(angle + 1.0) * scalar;
  flower(120, y1, 'rgb(252,0,0)',30);
  flower(240, y2, 'rgb(4,255,0)',30);
  flower(360, y3, 'rgb(255,228,13)',30);
  ellipse(480, y4, 40, 40);
  angle += speed;
}
function flower(x,y,c,d){
  push();
  translate(x,y);
  noStroke();
  fill(c);
  circle(0,0,d);
  circle(0,-d,d/2);
  circle(0,d,d/2);
  circle(d,0,d/2);
  circle(-d,0,d/2);
  stroke(255);
  strokeWeight(5);
  line(-10,0,10,0);
  pop();
}
function keyPressed(){
  if(key=='s'){
    saveGif('animation.gif', 5);
  }
}