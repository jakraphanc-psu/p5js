function setup() {
  createCanvas(600, 600);
}

function draw() {
  background('rgb(0,18,255)');
  noStroke();
  fill('red');
  ellipse(300,300,200,200);
  //ellipse(x,y,width,height);
  fill(139, 254, 25,127);
  ellipse(200,300,150,150);
  fill(255, 0, 25,200);
  ellipse(50,50,100,100);
  fill(128,20,255,200);
  ellipse(300,100,90,90);
  fill(255,20,255,200);
  ellipse(300,150,150,150);
  fill(255,0,0,250);
  ellipse(300,150,50,50);
  fill(0,255,50,180);
  ellipse(400,250,100,100);
  fill(0,0,1255,180);
  ellipse(400,250,50,50);
  
  stroke('red');
  strokeWeight(20);
  line(300,0,300,600);
}