function preload(){

}

function setup(){
    canvas=createCanvas(450,350);
    canvas.position(450,220);
    video=createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video,0,0,450,350);
}

function start(){
document.getElementById("Identify").innerHTML="Status:Detecting Objects"
}