/* Start button in the middle of the screen
when clickeed, it opens the canvas up
when you click on a specific quadrant (within 2 coordinates), then the lines
in that quardrant will be drawn (using p5.animS)
Instructions written at the bottom of canvas:
  "Click in each quadrant to complete the painting"
when painting finished, text will say "Great job!" and then there will be a
reset button or a "next painting" button (if I am able to make more than 1)
*/


function setup() {
  createCanvas(500, 500);
}


function draw() {
  background(255);
}


function draw() {
  background(210, 180, 140);
  noFill();
  stroke(0);
  //line( name, rate, x1, y1, x2, y2)
  //circle: (name, frame rate, x, y, diameter)

  strokeWeight(1);
  animS.circle('c1', 200, 155, 120, 140)
  animS.circle('c2', 200, 155, 120, 145)
  animS.circle('c3', 200, 155, 120, 150)
  animS.circle('c4', 150, 98, 420, 40)
  animS.circle('c5', 150, 98, 420, 45)
  animS.circle('c6', 150, 98, 420, 50)
  animS.circle('c7', 150, 98, 420, 55)
  animS.circle('c9', 150, 322, 344, 80)
  animS.line('l10', 150, 327, 0, 236, 90)
  animS.line('l11', 150, 330, 0, 239, 90)
  animS.line('l12', 150, 333, 0, 242, 90)
  animS.line('l13', 130, 69, 231, 122, 320)
  animS.line('l14', 130, 72, 231, 125, 320)
  animS.line('l15', 130, 75, 231, 128, 320)
  animS.line('l18', 100, 206, 194, 206, 331)
  animS.line('l19', 100, 209, 194, 209, 331)
  animS.line('l20', 60, 188, 245, 224, 268)
  animS.line('l21', 60, 188, 248, 224, 271)
  animS.line('l22', 100, 331, 126, 382, 187)
  animS.line('l23', 100, 282, 65, 330, 158)
  animS.line('l24', 100, 293, 104, 410, 353)
  animS.line('l25', 100, 288, 104, 405, 353)
  animS.line('l26', 100, 315, 140, 415, 353)
  animS.line('l27', 150, 344, 130, 307, 164)
  animS.line('l28', 150, 344, 134, 307, 168)


  

  strokeWeight(1.5)
  animS.line('l5', 270, 150, 207, 287, 207)
  animS.line('l6', 270, 150, 210, 287, 210)
  animS.circle('c8', 150, 403, 110, 110)
  

  strokeWeight(2)
  animS.line('l1', 300, 166, 155, 166, 230)
  animS.line('l2', 300, 169, 155, 169, 230)
  animS.line('l3', 300, 172, 155, 172, 230)
  animS.line('l4', 300, 175, 155, 175, 230)


  strokeWeight(4)
  animS.line('l7', 300, 30, 110, 30, 250)
  animS.line('l8', 300, 250, 62, 250, 420)
  animS.line('l9', 200, 235, 27, 388, 27)
  animS.circle('c10', 150, 322, 344, 73)


  strokeWeight(6)
  animS.line('l16', 115, 29, 278, 165, 278)
  animS.line('l17', 115, 89, 298, 221, 298)

}

function mouseClicked(){
  //reset the painting when finished
  animS.reset() ;
  console.log(mouseX,mouseY)
}
