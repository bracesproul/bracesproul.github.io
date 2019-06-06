let input, button, greeting;
var col = 0;
function setup() {
    greeting = createElement('h1','Welcome To Braces Home Page');
    greeting.position(400, 400);
    createCanvas(innerWidth, innerHeight);


}

function draw() {

    col = mouseX / 2;
    col - mouseY / 2
    background(col);



    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 25, 25, 25);

}