let c_fill = ['rgb(11,241,66)','rgb(7,4,255)','rgb(250,253,1)'];
let anim = [];
var angle = 0.0;
var offset = 10;
var scalar = 100;
var speed = 0.05;
var animCount = 50;

function setup() {
  createCanvas(600, 600);
  for(i=0;i<animCount;i++){
    anim[i]=[];
    anim[i][0]=random(0,600);//x position
    anim[i][1]=random(0,600);//y position
    anim[i][2]=round(random(0,c_fill.length-1));//color
    anim[i][3]=random(0.1,0.5);//size
    anim[i][4]=random(0,360);//rotation
    anim[i][5]=round(random(0,4)); //yMov
    anim[i][6]=round(random(0,4)); //xMov
  }
}
function draw() {
  background('red');
  let yMov = [10 + sin(angle) * 100]
  let xMov = [10 + sin(angle) * 100];
  for(i=0;i<animCount;i++){
    owl(anim[i][0]+xMov[random],
        anim[i][1]+yMov[0],
        c_fill[anim[i][2]],
        anim[i][3],anim[i][4]);
  }
  angle += speed;
}
function owl(x, y, c, s, rotation) {
  push();
  translate(x, y);
  scale(s);
  rotate(rotation);
  stroke(c);
  strokeWeight(70);
  line(0, -35, 0, -65); // Body
  pop();
}
function keyPressed(){
  if(key=='s'){
    saveGif('animation.gif', 5);
  }
}