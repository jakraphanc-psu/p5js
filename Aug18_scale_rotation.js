let c_fill = ['rgb(11,241,66)','rgb(7,4,255)','rgb(250,253,1)'];

function setup() {
  createCanvas(600, 600);
  noLoop();
}
function draw() {
  background('red');
  for(i=0;i<100;i++){
    a = round(random(0,c_fill.length-1));
    var scalar = random(0.25, 1.0);
    var angle = random(0,360);
    owl(random(0,600),random(0,600),c_fill[a],scalar,angle); 
  }
}
function owl(x, y, c,s,r) {
  push();
  translate(x, y);
  rotate(r);
  scale(s);
  stroke(c);
  strokeWeight(70);
  line(0, -35, 0, -65); // Body
  noStroke();
  fill(255);
  ellipse(-17.5, -65, 35, 35); // Left eye dome
  ellipse(17.5, -65, 35, 35); // Right eye dome
  arc(0, -65, 70, 70, 0, PI); // Chin
  fill(0);
  ellipse(-14, -65, 8, 8); // Left eye
  ellipse(14, -65, 8, 8); // Right eye
  quad(0, -58, 4, -51, 0, -44, -4, -51); // Beak
  pop();
}