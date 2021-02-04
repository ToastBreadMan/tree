var angle = 12

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51)
	var randomR = random(255)
	var randomG = random(255)
	var randomB = random(255)
	stroke(randomR, randomB, randomG)
	var len = 200;
	translate(width/2, height)
	branch(len)
}

function draw(){
}

function branch(len){
	var iteration = 1
	line(0, 0, 0, -len)
	translate(0, -len)
	if(len > 4){
	var randomSEED = random(iteration)
	var randomR = random(255*iteration)
	var randomG = random(255*iteration)
	var randomB = random(255*iteration)
	stroke(randomR, randomB, randomG)
	iteration++
	push()
	rotate(randomSEED*0.7)
	branch(len*0.7)
	pop()
	push()
	rotate(-randomSEED*0.7)
	branch(len*0.7)
	pop()
	push()
	branch(len*randomSEED)
	pop()
}
}