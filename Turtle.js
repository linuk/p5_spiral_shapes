// Setting scribble lines 
var scribble = new Scribble();
scribble.bowing =.1
scribble.roughness = 2

class Turtle {

  constructor() {
    this.setLocation(width / 2, height / 2)
    this.pen = true
    this.currentAngle = 270
    this.setPenColour(255)
    this.length = null
    this.gap = null
    this.steps = null
    this.angle = null
  }

  setPenColour(c) {
    this.colour = c;
  }

  setLocation(x, y) {
    this.currentX = x;
    this.currentY = y;
  }

  penUp() {
    this.pen = false;
  }

  penDown() {
    this.pen = true;
  }

  forward(distance) {
    angleMode(DEGREES);
    var lineEndY = this.currentY + sin(this.currentAngle) * distance;
    var lineEndX = this.currentX + cos(this.currentAngle) * distance;

    if (this.pen) {
      stroke(this.colour);
      scribble.scribbleLine(this.currentX, this.currentY, lineEndX, lineEndY);
    }
    this.currentX = lineEndX;
    this.currentY = lineEndY;

  }

  right(a) {
    this.currentAngle += a;
  }

  left(a) {
    this.currentAngle -= a;
  }

  poly(length, sides) {
    for (let i = 0; i < sides; i++) {
      this.forward(length);
      this.left(360 / sides)
    }
  }

  spiral(length, gap ,steps, angle){
	  this.setLocation(width / 2, height / 2)
	  this.length = length
	  this.gap = gap
	  this.steps = steps
	  this.angle = angle

	  background(200)

	  for (let i = 1; i < steps; i++) {
	    this.forward(length);
	    this.left(angle)
	    length += gap

	  }

	// Reset the position of the turtle
	this.setLocation(width / 2, height / 2)
    this.currentAngle = 270

    this.showSlidersText()
  }

  showSlidersText(){
    push()
    noStroke();
    fill(100);
    text("Length", 20, 30)
    text("Gap", 20, 50)
    text("Steps", 20, 70)
    text("Angle", 20, 90)
    pop()
  }

  sliders(){
    this.sliders.length_Slider = createSlider(0,70, 1)
    this.sliders.length_Slider.position(60, 20)
    this.sliders.gap = createSlider(.5, 20, 15)
    this.sliders.gap.position(60, 40)
    this.sliders.steps_Slider = createSlider(10, 4000, 2000)
    this.sliders.steps_Slider.position(60, 60)
    this.sliders.angle_Slider = createSlider(0, 180, 120)
    this.sliders.angle_Slider.position(60, 80)
  }

}