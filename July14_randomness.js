function setup() {
  createCanvas(600,600);
  noLoop();
  
}

function draw() {
  background('red');
  fill('blue');
  ellipse(300, 300, 80, 80);
  noStroke();
  ellipse(300, 300, 80, 80);
  for(i=0;i<50;i++){
    fill(random(0,255),random(0,255),random(0,255));
    r = random(3,20);
    ellipse(random(280,320),random(0,600),r,r);
  }
}