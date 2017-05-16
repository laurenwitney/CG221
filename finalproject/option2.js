function setup() {
  createCanvas(640, 480);
	  system = new ParticleSystem(createVector(width/2, 50));
}

	  // create sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
}

function draw() {
			// p5 Color object
background(color(0, 220, 230));
		  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  background(r, g, b);
  text("red", rSlider.x * 2 + rSlider.width, 35);
  text("green", gSlider.x * 2 + gSlider.width, 65);
  text("blue", bSlider.x * 2 + bSlider.width, 95);

		  // An ellipse
  ellipse(375, 170, 135, 135);
	  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
			triangle(300, 200,375,375,450,200);
		  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(0, 200, 250);
  }

  ellipse(mouseX, mouseY, 80, 80);
}
