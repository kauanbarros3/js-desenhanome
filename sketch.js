function setup() {
    createCanvas(500, 500);
    background("white")
}

function draw() {
    stroke("green");
    fill("yellow");


    if (mouseIsPressed) {
        rect(mouseX, mouseY, 20, 35);
    }
}
