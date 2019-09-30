function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  console.log();
  background("#385a7c");
  fill("#c1f215");

  noStroke()
  var x = 25;
  var tt = 'Click and hold to risk an epileptic attack'

  for (var i = 0; i < width / x; i++) {
    for (var j = 0; j < height / x; j++) {
      var y = frameCount / 10 + j * 100 + i * 1000; //+ j*1000 + i*1000
      if (mouseIsPressed) {
        tt = ''
        fill(random() * 240, random() * 240, random() * 240);
        ellipse(x + i * x, x + j * x, x * noise(y), x * noise(y));
        ellipse(mouseX + random() * 100, mouseY + random() * 150, random() * 100);
      }
      ellipse(x / 2 + i * x, x / 2 + j * x, x * noise(y), x * noise(y));
    }
  }

  textSize(21);
	fill("white")
  text(tt, mouseX, mouseY);




}
