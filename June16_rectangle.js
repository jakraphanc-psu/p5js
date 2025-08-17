let c_fill = ['rgb(11,11,241)','rgb(235,16,90)','rgb(28,41,204)'];
let c_stroke = ['rgb(11,241,105)','rgb(208,255,0)','rgb(209,13,221)'];
function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background('yellow');
  for(i=0;i<1000;i++){
    a = round(random(0,c_fill.length-1));
    fill(c_fill[a]);
    b = round(random(0,c_stroke.length-1)); 
    stroke(c_stroke[b]);
    strokeWeight(random(1,5));
    rect(random(0,600),random(0,600),random(10,50),random(10,100));
  }
}