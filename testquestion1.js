let posX, xSpeed;

function setup(){
    createCanvas(600, 400);
    posX = width/ 2;
    xSpeed = 5;
    
    fill('limegreen');
}

function draw(){
    background(220)
    circle(posX, 200, 50)
    posX += xSpeed
    if(posX >= width - 25 || posX<= 25){
        xSpeed = -xSpeed
    }
}