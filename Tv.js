img = "";

function preload(){
    img = loadImage('TV.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center()
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("TV", 155, 115);
    noFill();
    stroke("#FF0000");
    rect(150, 100, 300, 250);
}