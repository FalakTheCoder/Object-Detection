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
    img = loadImage('TV.jpg');
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("TV", 155, 115);
    noFill();
    stroke("#FF0000");
    rect(150, 100, 300, 250);
}