function setup() {
  createCanvas(600, 600);
}

function draw() {
  background('blue');
  noStroke();
  fill('red');
  rect(10,10,100,100);
  circle(300,300,100)
  stroke('yellow');
  strokeWeight(10);
  line(0,400,600,400);
  triangle(30, 75, 58, 20, 86, 75);
}