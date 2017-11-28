var diam1 = 50;
function setup() {
  // put setup code here
    createCanvas(720,480);
    r = random(255);
    g = random(255);
    b = random(255);
}

function draw() {
  // put drawing code here
    background(r,g,b);
    fill("yellow");
    stroke("violet");
    strokeWeight(5);
    ellipse( random(width), random(height), random(100), random(100));
    diam1 = diam1 + 5;
    
    if (diam1 >=700){
        rect(mouseX,mouseY,300,500);
        fill("orange");
        strokeWeight(10);
        ellipse(mouseX,mouseY,mouseX/2,mouseY/2);
    }

}

function mousePressed (){
    diam1=50;
    r = random(255);
    g = random(255);
    b = random(255);
    
}