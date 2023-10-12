let myRect0, myRect1, myRect2;
let colorSlider

function setup() {
  createCanvas(windowWidth, windowHeight);
  myRect0 = new Rectangle()
  myRect1 = new Rectangle()
  myRect2 = new Rectangle()

  //creating the slider
  colorSlider = createSlider(0, 255, 0);
  colorSlider.position(30, 30);

  
}

function draw() {

  //changing the color of the background from green to yellow with the slider
  let bgColor = color(colorSlider.value(), 220, 50, 30);
  background(bgColor); 

  //creating the rectangles using the class Rectangle
  myRect0.render();
  myRect0.update();
  myRect0.checkWalls();
  
 
  myRect1.render();
  myRect1.update();
  myRect1.checkWalls();
  
  myRect2.render();
  myRect2.update();
  myRect2.checkWalls();
  
  
}
  
class Rectangle{
  constructor(){
    this.col = color(random(255), random(255), random(255))
    this.x = random(width)
    this.y = random(height)
    this.xdir = random(1, 6)
    this.ydir = random(0, 3)
    this.size = random(30, 70)
  }
  
  render(){
  
    rectMode(CENTER)
    rect(this.x, this.y, this.size)
  }

  update(){
    
    this.x = this.x + this.xdir;
    this.y = this.y + this.ydir;
  }

  checkWalls(){
     if (this.x >= width || this.x <= 0){
      this.xdir = this.xdir * -1;
      ellipse(this.x, this.y, 200);
      this.size += 15 // make square bigger when it hits the left/right sides
      fill(random(255), random(255), random(255)); //random color
     }
    
    if(this.y >= height || this.y <= 0){ 
    this.ydir = this.ydir * -1;
    ellipse(this.x, this.y, 200);
    this.size -= 25 // make square smaller when it hits the top/bottom
    fill(random(255), random(255), random(255))
  }
 
  }
}
