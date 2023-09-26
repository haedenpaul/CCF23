function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250)
 
}

function draw(){
  stroke(0)
  strokeWeight(4)
  if ((keyIsPressed) & (key == "r")) {
   clear(); //press 'r' key to reset the page
 }
  if((keyIsPressed) & (key == "s")){
    strokeWeight(1) //hold 's' to make the line smaller
  }
  if((keyIsPressed) & (key == "l")){
    strokeWeight(8) //hold 'l' to make the line larger
  }
  if((keyIsPressed) & (key == "c")){
    stroke(random(255), random(255), random(255)) //hold 'c' for a rainbow pen
  }
  if((keyIsPressed) & (key == " ")){
    fill(random(255), random(255), random(255))
    noStroke()
    rect(mouseX, mouseY, 20, 220) //hold spacebar for rainbow rectangles 
  }
 }
  
function mouseDragged(){
  line(pmouseX, pmouseY, mouseX, mouseY); //click and drag to draw
}