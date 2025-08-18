let c_fill = ['rgb(11,241,66)','rgb(7,4,255)','rgb(250,253,1)'];


function setup() {
  createCanvas(600, 600);
  noLoop();
}
function draw() {
  background('red');
  for(i=0;i<100;i++){
    a = round(random(0,c_fill.length-1));
    owl(random(0,600),random(0,600),c_fill[a]);
  }
  
}
function owl(x, y, c) {
  push();
  translate(x, y);
  scale(random(0,1)); 
  rotate(random(0,360));
  stroke(c);
  strokeWeight(70);
  line(0, -35, 0, -65); // Body
  stroke(0);
  strokeWeight(2);
  line(-25,-75,25,-75); 
  fill(c);
  circle(-50,-20,10);
  noStroke();
  fill('pink');
  rect(-25,-100,50,50);
  fill('rgb(183,24,255)');
  circle(50,-100,50);
  fill('rgb(24,255,206)');
  circle(-50,-100,50);
  fill(0);
  circle(random(-10,10),random(-50,50),random(5,30));
  stroke(0);
  strokeWeight(1);
  line(-75,-100,75,-100);
  fill('rgba(255,255,0,0.5)');
  circle(0,0,100);
  pop();
}