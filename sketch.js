let turtle;
function setup() {
	createCanvas(1280, 768);
	turtle = new Turtle();
	turtle.sliders()
}

function draw() {
	let l = turtle.sliders.length_Slider.value()
	let ld = turtle.sliders.gap.value()
	let s = turtle.sliders.steps_Slider.value()
	let a = turtle.sliders.angle_Slider.value()
	turtle.spiral(l, ld, s, a)
}