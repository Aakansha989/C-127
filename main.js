song = "";

function preload(){
    song = loadSound("bensound-acousticbreeze.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
 

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}