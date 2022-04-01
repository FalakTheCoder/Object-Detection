img = "";
status = "";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error)
    }
    console.log(results);
}

function preload(){
    img = loadImage('Laptop_SmartPhone.jpg');
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