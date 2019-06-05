var mass = this.r *1.3
var gravity = 7.5/40
let balls=[];
let numBalls=100;
function setup() {
    createCanvas(innerWidth, innerHeight);
    for (let i = 0; i < numBalls; i++) {
        balls[i] = new PopcornBall (
            random(1,400),
            (55)
        );
    }
}
function draw() {
    background(155);
    for (let i = 0; i < balls.length; i++) {
        balls[i].display(800, 200);
        balls[i].bounce();
        balls[i].move();
        frameRate(500)
    }
}
class PopcornBall {
    constructor(x, y) { // we could add radius or r to the constructor
        this.x = x;
        this.y = y;
        this.xspeed = gravity
        this.speed = random(5, 10);
        this.r = random(30);
        this.mass = 1.5 * this.r
        this.gravity = (9.8 * this.mass)/1000
    }
    move() {
//your code here to move with gravity
        if (this.x > width){
            this.xspeed = this.xspeed * -1}
        if (this.x < 10){
            this.xspeed = this.xspeed * -1}
        this.y = this.y + this.speed
        this.x = this.x + this.xspeed
    }
    bounce() {
        if (this.y > height){
            this.speed *= -.800
            this.y = height
        }
        if (this.y < 3){
            this.speed *= -.800
        }
        this.speed += gravity
        this.x > 100
    }
    display() {
        fill(random(200), random(34), random(255));
        ellipse(this.x, this.y, this.r, this.r);
    }
}