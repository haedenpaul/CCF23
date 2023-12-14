//p5.anims.js added to the index and 2 p5.anims files added to the code file

function setup() {
  createCanvas(500, 500);
  background(255)
  //creating a start button
  startButton = createButton('Press s to Start Painting')
  startButton.position(170, 250)
  
    }

function draw() {;
  noFill();
  stroke(0);
  background(210, 180, 140)
  //if you press 's', the button will disappear and the painting will start
  if (key == 's'){
    startButton.hide()
    paint()
    text('Click to reset')
  }
  
}


function paint(){

  //first, all the circles and lines that are the thinnest (with stroke weight 1)
  strokeWeight(1);
  animS.circle('c1', 450, 155, 120, 140)
  animS.circle('c2', 450, 155, 120, 145)
  animS.circle('c3', 450, 155, 120, 150)
  animS.circle('c4', 460, 98, 420, 60)
  animS.circle('c5', 460, 98, 420, 65)
  animS.circle('c6', 460, 98, 420, 70)
  animS.circle('c7', 460, 98, 420, 75)
  animS.circle('c9', 460, 322, 344, 80)
  animS.line('l10', 460, 327, 0, 236, 90)
  animS.line('l11', 460, 330, 0, 239, 90)
  animS.line('l12', 460, 333, 0, 242, 90)
  animS.line('l13', 440, 69, 231, 122, 350)
  animS.line('l14', 440, 72, 231, 125, 350)
  animS.line('l15', 440, 75, 231, 128, 350)
  animS.line('l18', 450, 206, 194, 206, 340)
  animS.line('l19', 450, 209, 194, 209, 340)
  animS.line('l20', 450, 188, 245, 224, 268)
  animS.line('l21', 450, 188, 248, 224, 271)
  animS.line('l22', 470, 331, 126, 382, 187)
  animS.line('l23', 450, 282, 65, 330, 158)
  animS.line('l24', 460, 293, 104, 410, 390)
  animS.line('l25', 460, 288, 104, 405, 390)
  animS.line('l26', 460, 315, 140, 415, 390)
  animS.line('l27', 480, 344, 130, 307, 164)
  animS.line('l28', 480, 344, 134, 307, 168)
  animS.line('l30', 450, 309, 214, 472, 286)
  animS.line('l31', 480, 454, 251, 287, 478)
  animS.line('l32', 480, 458, 251, 291, 478)
  animS.line('l33', 480, 462, 251, 295, 478)
  animS.line('l44', 480, 318, 394, 429, 489)
  animS.line('l48', 470, 173, 356, 223, 356)
  animS.line('l49', 470, 173, 358, 223, 358)
  animS.line('l51', 450, 184, 450, 290, 450)
  

  //all the circles and lines that are the 2nd thinnest (1.5)
  //these will be drawn faster than the previous
  strokeWeight(1.5)
  animS.line('l5', 370, 150, 207, 287, 207)
  animS.line('l6', 370, 150, 210, 287, 210)
  animS.line('l29', 350, 381, 167, 302, 248)
  animS.circle('c8', 350, 403, 110, 110)
  animS.line('l45', 380, 227, 385, 285, 388)
  animS.line('l46', 380, 227, 388, 285, 391)
  animS.line('l52', 365, 201, 363, 201, 455)
  animS.line('l53', 365, 164, 374, 201, 374)
  animS.line('l54', 365, 164, 378, 201, 378)
  animS.line('l55', 365, 164, 382, 201, 382)
  animS.line('l56', 365, 164, 386, 201, 386)


  //all the circles and lines that have a stroke weight of 2
  //these will be drawn faster than the previous
  strokeWeight(2)
  animS.line('l1', 320, 166, 155, 166, 230)
  animS.line('l2', 320, 169, 155, 169, 230)
  animS.line('l3', 320, 172, 155, 172, 230)
  animS.line('l4', 320, 175, 155, 175, 230)
  animS.line('l50', 320, 265, 426, 265, 480)
  animS.circle('c12', 320, 285, 182, 25)
  animS.circle('c13', 320, 285, 182, 30)
  animS.circle('c14', 320, 285, 182, 35)
  animS.circle('c15', 320, 285, 182, 40)
 

  //all the circles and lines that have a stroke weight of 4
  //these will be drawn faster than the previous
  strokeWeight(4)
  animS.line('l7', 250, 30, 110, 30, 250)
  animS.line('l8', 260, 250, 62, 250, 440)
  animS.line('l9', 260, 235, 27, 388, 27)
  animS.circle('c10', 270, 322, 344, 72)


  //all the circles and lines that have a stroke weight of 5
  //this will be drawn faster than the previous
  strokeWeight(5)
  animS.line('l47', 220, 460, 189, 501, 189)


  //all the circles and lines that have a stroke weight of 6
  //these will be drawn faster than the previous
  strokeWeight(6)
  animS.line('l16', 160, 29, 278, 165, 278)
  animS.line('l17', 170, 65, 298, 221, 298)
  fill(0)
  animS.circle('c11', 180, 285, 182, 10)
  noFill()
  
}

//reset the painting when the mouse is clicked.
function mouseClicked(){
  animS.reset();
}