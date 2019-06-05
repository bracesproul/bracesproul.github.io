let bubble1;
let bubble2;

function setup() {
    createCanvas(innerWidth, innerHeight);
    bubble1 = new Bubble(300, 300);
    bubble2 = new Bubble(300, 300);
}

function draw() {
    background(255);
    let d = dist(bubble1.x, bubble1.y, bubble2.x, bubble2.y)
    if (d < bubble1.r + bubble2.r) {
        background(200, 0, 255)
    }


    bubble1.show();
    bubble1.move();
    bubble2.show();
    //bubble2.move();
    bubble2.x = mouseX;
    bubble2.y = mouseY;

}

class Bubble {
    constructor(x, y, r = 75) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 100;
    }

    changeColor(bright) {
        this.brightness = bright;
    }

    contains(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }
    move() {
        this.x = this.x + random(-7, 7);
        this.y = this.y + random(-7, 7);
    }

    show() {
        stroke(255, 0, 0);
        strokeWeight(2);
        fill(0, 10, 255);
        ellipse(this.x, this.y, this.r * 2);
    }
}