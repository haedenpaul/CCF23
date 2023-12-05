/* Start button in the middle of the screen
when clickeed, it opens the canvas up
when you click on a specific quadrant (within 2 coordinates), then the lines
in that quardrant will be drawn (using p5.animS)
Instructions written at the bottom of canvas:
  "Click in each quadrant to complete the painting"
when painting finished, text will say "Great job!" and then there will be a
reset button or a "next painting" button (if I am able to make more than 1)
*/

//making the frame rate for the animated shapes
const FRAME_RATE = 30

function setup() {
  createCanvas(400, 400);
  frameRate(FRAME_RATE)
  //making the start button in the middle of the screen
  startButton = createButton("Start Painting")
  startButton.position(windowWidth/2, windowHeight/2)
  //when you click the start button, then it goes to the first painting (function)
  startButton.mousePressed(painting_1)

}

function painting_1(){
  clear()
  //put all the lines/ellipses/rectangles to make the painting using animS
  animS.line('line1', FRAME_RATE * 3, 60, 120, 900, 120)

}

function mouseClicked(){
  //when you click in a specific quadrant of the screen, the shapes will be filled in
  
  //reset the painting when finished
  animS.reset() 
}

function draw() {
  background(255);
}
