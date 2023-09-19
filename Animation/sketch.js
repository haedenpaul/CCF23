let x, y;
let size;
let xDir, yDir; //direction

function setup() {
  createCanvas(400, 400);
  x = random(0, 400)
  y = random(0,400); 
  //random starting point

  xDir = 6;
  yDir = 2;
  size = 5 
  
}

function draw() {
  background(255, 20); // movement trail
  rectMode(CENTER)
  rect(x, y, size, size);

  
  if (x >= width || x <= 0){
    xDir = xDir * -1
    ellipse(x, y, 100);
    size += 20 // make square bigger when it hits the left/right sides
    fill(random(255), random(255), random(255)); //random color
  }

  if(y >= height || y <= 0){ 
    yDir = yDir * -1;
    ellipse(x, y, 100)
    size -= 40 // make square smaller when it hits the top/bottom
    fill(random(255), random(255), random(255))
  } 
 

  x = x + xDir;
  y = y + yDir;
}