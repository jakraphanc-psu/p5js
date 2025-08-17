let myColor = ['deeppink', 'rgb(231,255,14)','orange'];
let myText = ['one','two','three','four','five'];

function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background('blue');
  for(var i=0;i<1000;i++){
    textSize(random(24,50));
    var a = round(random(0,myColor.length-1));
    print('a='+a);
    fill(myColor[a]);
    var txtR = round(random(0,myText.length-1))
    text(myText[txtR],random(0,canvas.width),
         random(0,canvas.height));
  }
}