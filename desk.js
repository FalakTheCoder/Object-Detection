img = "";

function preload(){
    img = loadImage('Laptop_SmartPhone.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center()
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Laptop", 105, 65);
    noFill();
    stroke("#FF0000");
    rect(100, 50, 450, 350);
    text("Smart Phone", 320, 145);
    noFill();
    rect(315, 130, 150, 150);
}