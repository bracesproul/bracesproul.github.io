let balls = [];

class ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.ra = r;
    this.r = 220
    this.g = 220
    this.b = 220


  }

  move() {
    this.y += random(-5, 5);
    this.x += random(-5, 5);
  }

  show() {
    stroke(10)
    strokeWeight(5);
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.ra, this.ra);
  }
  click(x, y) {
    let d = dist(x, y, this.x, this.y);
    if (d < this.ra) {
      this.r = random(255)
      this.g = random(255)
      this.b = random(255)

    }
  }
}


function setup() {
  createCanvas(1000, 1000);
  for (let i = 0; i < 500; i++) {
    balls[i] = new ball(random(width), random(height), random(10, 40))

  }
}

function mousePressed() {
  for (let i = 0; i < balls.length; i++) {
    if (balls[i].click(mouseX, mouseY));
      //balls.splice(i, 1)
  }
}

function draw() {
  background(220);
  for (let i = 0; i < balls.length; i++) {
    balls[i].move()
    balls[i].show()
  }
}
