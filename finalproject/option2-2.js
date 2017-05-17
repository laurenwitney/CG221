var party = 120;
var r = 30;
var g = 100;
var b = 200;

function setup() {
  createCanvas(750, 500);
}

function draw() {
  background(150, 150, 200);

  if(mouseIsPressed) {
  background(255, 220, 46);
  } else {
  background(0, 221, 221);
  }
  fill(mouseX, mouseY, b);
  ellipse(375, 210, 135, 155);

  fill(210, 166, 121);
	triangle(300, 240,375,415,450,240);

  if (mouseX > 650) {
    fill(255, 64, 0);
  } else {
    noFill();
    noStroke();
  }
  rect(375, 210, 5, 12);

  if (mouseX > 650) {
    fill(0, 0, 255);
  } else {
    noFill();
    noStroke();
  }
  rect(340, 170, 5, 12);


  if (mouseX > 650) {
    fill(0, 255, 255);
  } else {
    noFill();
    noStroke();
  }
  rect(410, 170, 5, 12);

  if (keyIsPressed) {
    fill(mouseX, mouseY, b);
    ellipse(375, 110, 135, 135);
  }

}
