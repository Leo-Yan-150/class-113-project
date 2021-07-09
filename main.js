function preload(){

}

function setup(){
    canvas = createCanvas(750,600);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    x1 = 30;
    x2 = 720;
    speed1 = 3;
    speed2 = -3;
    
}

function draw(){
    background(0,255,255);
    image(video, 55, 60, 640, 480);
    noStroke();
    fill(255,0,0);
    ellipse(x1,30,60);
    if(x1>730){
        speed1=-3;
    }
    if(x1<30){
        speed1=3;
    }
    x1=x1+speed1;
    fill(0,0,255);
    ellipse(x2,570,60);
    if(x2>730){
        speed2=-3;
    }
    if(x2<30){
        speed2=3;
    }
    x2=x2+speed2;
    
}

function take_snapshot(){
    save('snapshot.png');
}