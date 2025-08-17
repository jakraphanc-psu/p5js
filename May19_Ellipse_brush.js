function setup() {
  createCanvas(600, 600);
  background('blue');
}

function draw() {
  
  stroke('blue');
  strokeWeight(2);
  fill('red');
  ellipse(mouseX, mouseY, mouseX/10,mouseX/10);
}