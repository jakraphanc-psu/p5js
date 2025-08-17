let myColor = ['rgba(255,192,203,0.34)','rgba(255,0,0,0.41)','rgba(255,165,0,0.33)'];
function setup() {
  createCanvas(600, 600);
  background('blue');
}

function draw() {
  noStroke();
  var c = round(random(0, 2));
  //fill(255,50);
  fill(myColor[c]);
  circle(mouseX,mouseY,mouseX/10);
}

function mousePressed(){
  circle(random(0,600),random(0,600),mouseX/10);
  print("clicked");
  var co = round(random(0, 2));
  stroke(myColor[co]);
  line(0,mouseY,600,mouseY);
}