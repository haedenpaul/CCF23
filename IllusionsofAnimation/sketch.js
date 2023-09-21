let x, y;
let size;
let xOrigin, yOrigin;
//let rot;
let xDir, yDir; //direction
let rotme = 0.0;

function setup() {
  createCanvas(400, 400);
  x = (0, 400)
  y = (0,400); 
  //starting point

  xDir = 6;
  yDir = 2;
  size = 5 

  xOrigin = width/2
  yOrigin = height /2

  
}

function draw() {
  background(255, 20); // movement trail
  //push();
  //translate(xOrigin, yOrigin)
  //rotate(rot);
  rectMode(CENTER)
  rect(x, y, size, size);
  
   rectMode(CENTER);
    
  
    push();
    fill(0);
    translate(width/2, height/2);// change the origin
    rotate(rotme);// rotate the origin
    // draw something
    rect(0, 0, 100, 100) //black square in the middle;
    // reset to the previous origin
    pop();
  
    rotme += .05;
  
  if (x >= width || x <= 0){
    xDir = xDir * -1
    size += 20 // make square bigger when it hits the left/right sides
    fill(random(255), random(255), random(255)); //random color
    background(random(255), random(255), random(255))
  }

  if(y >= height || y <= 0){ 
    yDir = yDir * -1;
    size -= 40 // make square smaller when it hits the top/bottom
    fill(random(255), random(255), random(255))
    background(random(255), random(255), random(255))
  } 
 
  if(x == width/2){
    xDir = xDir * -1
    
  }
  if(y == height/2){
    yDir = yDir * -1
  }

  x = x + xDir;
  y = y + yDir;
}