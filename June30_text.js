let c_fill = ['rgb(11,11,241)','rgb(235,16,90)','rgb(28,41,204)'];
let c_stroke = ['rgb(11,241,105)','rgb(208,255,0)','rgb(209,13,221)'];
let t_text = ['one','two','three','four']
function setup() {
  createCanvas(600, 600);
  textFont('rono');
  noLoop();
}

function draw() {
  background('blue');
  for(i=0;i<100;i++){
    a = round(random(0,c_fill.length-1));
    fill(c_fill[a]);
    b = round(random(0,c_stroke.length-1)); 
    stroke(c_stroke[b]);
    strokeWeight(random(1,5));
    textSize(random(10,100));
    c = round(random(0,t_text.length-1)); 
    text(t_text[c], random(0,600), random(0,600));
    //text(str, x, y, [maxWidth], [maxHeight])
  }

  
  
}


