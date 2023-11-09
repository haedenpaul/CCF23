let size;
let pos // position
let speed

function setup() {
  createCanvas(400, 400);
  pos = createVector(width/2, height/2);
  speed = createVector(0,0)

  speed.x = random(1,5)
  speed.y = random(1,5)

  size = 5 
  
}

function draw() {
  background(255, 20); // movement trail
  pos.add(speed);
  if (pos.x >= width || pos.x <= 0){
    speed.x *= -1
    ellipse(pos.x, pos.y, 100)
    size += 20 //make square bigger when it hits the left/right sides
    fill(random(255), random(255), random(255)) //random color
  }
  
  if(pos.y >= height || pos.y <= 0){
    speed.y *= -1
    ellipse(pos.x, pos.y, 100)
    size -= 40 //make square smaller when it hits the top/bottom 
    fill(random(255), random(255), random(255))
  }
  
  rectMode(CENTER)
  rect(pos.x, pos.y, size, size);
}