/* To tell the time, look at the sky. When an hour passes, one of the clouds will dissapear. 
After 12 hours, it'll be nighttime!
*/


let cloud1, cloud2, cloud3, cloud4, cloud5, cloud6, cloud7, cloud8, cloud9, cloud10, cloud11, cloud12
let h 
let amount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]



function setup() {
  createCanvas(400, 400)
  background(50, 180, 250);
  
  //setting the clouds to random coordinates
  cloud1 = new Cloud(random(0,400), random(0,400))
  cloud2 = new Cloud(random(0,400), random(0,400))
  cloud3 = new Cloud(random(0,400), random(0,400))
  cloud4 = new Cloud(random(0,400), random(0,400))
  cloud5 = new Cloud(random(0,400), random(0,400))
  cloud6 = new Cloud(random(0,400), random(0,400))
  cloud7 = new Cloud(random(0,400), random(0,400))
  cloud8 = new Cloud(random(0,400), random(0,400))
  cloud9 = new Cloud(random(0,400), random(0,400))
  cloud10 = new Cloud(random(0,400), random(0,400))
  cloud11 = new Cloud(random(0,400), random(0,400))
  cloud12 = new Cloud(random(0,400), random(0,400))
  
  
}

function draw() {
  
  let h = hour()
  
  //displaying all the clouds
  cloud1.display()
  cloud2.display()
  cloud3.display()
  cloud4.display()
  cloud5.display()
  cloud6.display()
  cloud7.display()
  cloud8.display()
  cloud9.display()
  cloud10.display()
  cloud11.display()
  cloud12.display()
  
  //after 1 hour, remove each cloud
  
  if(h == 1){ //if the current time is 1:00, remove the cloud
   
    cloud1.col(50, 180, 250) //making the cloud the same color as the background because I don't know how to remove an object without clearing the entire sketch
    
    amount.pop() //removing one item from the 'amount' array
  }
  
   if(h === 2){
    cloud2.col(50, 180, 250)
    amount.pop()
  } 
  if(h === 3){
    cloud3.col(50, 180, 250)
    amount.pop()
  }
  if(h === 4){
    cloud4.col(50, 180, 250)
    amount.pop()
  }
  if(h === 5){
    cloud5.col(50, 180, 250)
    amount.pop()
  }
  if(h === 6){
    cloud6.col(50, 180, 250)
    amount.pop()
  }
  if(h === 7){
    cloud7.col(50, 180, 250)
    amount.pop()
  }
  if(h === 8){
    cloud8.col(50, 180, 250)
    amount.pop()
  }
  if(h === 9){
    cloud9.col(50, 180, 250)
    amount.pop()
  }
  if(h === 10){
    cloud10.col(50, 180, 250)
    amount.pop()
  }
  if(h === 11){
    cloud11.col(50, 180, 250)
    amount.pop()
  }
  if(h === 12){
    cloud12.col(50, 180, 250)
    amount.pop()
  }
  }
  
//when there are no more items in the 'amount' array, turn into a night sky
  if (amount.length == 0){ 
    clear()
    background(10, 10, 100)
}


class Cloud{
  constructor(x1, y1){
    this.x1 = x1;
    this.y1 = y1;
  
  }
  
  display(){ //creating the cloud
    fill(255)
    stroke(255)
    strokeWeight(5)
    ellipse(this.x1, this.y1, 24, 24)
    ellipse(this.x1+10, this.y1 +10, 24, 24)
    ellipse(this.x1+30,this.y1+10,24,24);
    ellipse(this.x1+30,this.y1-10,24,24);
    ellipse(this.x1+20,this.y1-10,24,24);
    ellipse(this.x1+40,this.y1,24,24);
  }
  
  col(r, g, b){ //making the color the same as the background
    this.r = r
    this.g = g
    this.b = b
    fill(r, g, b)
    noStroke()
  }
  
}
