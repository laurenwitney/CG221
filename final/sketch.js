var party = 120;
var r = 30;
var g = 100;
var b = 200;


function setup() {

}
function draw() {
  createCanvas(600, 400);
  if(mouseIsPressed) {
  background('#ff9999');
  } else {
  background('#9999ff');
  }
  fill(mouseX, mouseY, b);
  ellipse(mouseX + 100, mouseY, party, party);
  rect(200, 200, party, party);


  translate(580, 200);
 noStroke();
 for (var i = 0; i < 10; i ++) {
   ellipse(0, 30, 20, 80);
   rotate(PI/5);
 }
}
