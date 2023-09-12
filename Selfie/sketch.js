function setup() {
  createCanvas(400, 400);
  background(100, 200, 200);

  // Head
  fill(160, 100, 60)
  ellipse(200, 200, 200, 250);

  // Eyelashes
  strokeWeight(1)
  stroke(0)
  line(146, 142, 143, 132) 
  line(152, 139, 151, 130)
  line(159, 138, 160, 130)
  line(165, 140, 168, 132)
  line(232, 140, 230, 132)
  line(240, 138, 239, 130)
  line(247, 138, 247, 130)
  line(254, 140, 256, 133);
  
  // Outer white circles for eyes
  fill(255) 
  ellipse(157, 157, 39)
  ellipse(243, 157, 39);

  // Inner black circles for eyes
  fill(0) 
  ellipse(157, 157, 25)
  ellipse(243, 157, 25);

  // Nose
  strokeWeight(2)
  stroke(120, 70, 60)
  noFill()
  triangle(200, 193, 180, 218, 220, 218);
  
  // Mouth
  fill(250)
  stroke(150, 0, 50)
  strokeWeight(3)
  arc(200, 244, 70, 60, 0, PI , CHORD)

   // Neck
  stroke(160, 100, 60)
  strokeWeight(1)
  fill(160, 100, 60)
  rect(168, 300, 65, 100);

  // Body
  stroke(100, 0, 100)
  strokeWeight(1)
  fill(100, 0, 100)
  ellipse(201, 399, 200, 110);
  
  // Hair
  fill(0)
  noStroke()
  ellipse(169, 90, 50)
  ellipse(192, 79, 40)
  ellipse(230, 78, 50)
  ellipse(265, 100, 40)
  ellipse(136, 99, 45)
  ellipse(121, 108, 50)
  ellipse(113, 136, 42)
  ellipse(270, 119, 42)
  ellipse(290, 141, 36)
  ellipse(257, 70, 39)
  ellipse(142, 70, 40)
  ellipse(207, 58, 46)
  ellipse(207, 93, 35)
  ellipse(238, 100, 27)
  ellipse(286, 105, 42)
  ellipse(171, 59, 40)
  ellipse(276, 76, 35)
  ellipse(120, 80, 40)
  ellipse(106, 129, 50)
  ellipse(103, 159, 35)
  ellipse(80, 158, 40)
  ellipse(99, 184, 40)
  ellipse(91, 202, 50)
  ellipse(68, 189, 42)
  ellipse(96, 226, 39)
  ellipse(75, 231, 42)
  ellipse(94, 102, 45)
  ellipse(81, 127, 50)
  ellipse(69, 252, 35)
  ellipse(102, 246, 35)
  ellipse(110, 264, 30)
  ellipse (70, 266, 30)
  ellipse(96, 277, 30)
  ellipse(95, 263, 40)
  ellipse(70, 212, 18)
  ellipse(67, 275, 30)
  ellipse(75, 284, 30)
  ellipse(108, 286, 30)
  ellipse(58, 220, 30)
  ellipse(102, 78, 40)
  ellipse(152, 58, 40)
  ellipse(124, 58, 30)
  ellipse(305, 119, 30)
  ellipse(310, 142, 30)
  ellipse(304, 157, 30)
  ellipse(302, 174, 30)
  ellipse(316, 171, 40)
  ellipse(86, 296, 30)
  ellipse(113, 296, 30)
  ellipse(122, 289, 30)
  ellipse(64, 161, 36)
  ellipse(270, 288, 30)
  ellipse(280, 290, 30)
  ellipse(291, 293, 35)
  ellipse(306, 288, 40)
  ellipse(315, 274, 35)
  ellipse(322, 253, 33)
  ellipse(323, 224, 32)
  ellipse(325, 203, 40)
  ellipse(317, 187, 30)
  ellipse(275, 299, 27)
  ellipse(329, 237, 30)
  ellipse(299, 193, 30)
  ellipse(301, 209, 30)
  ellipse(301, 222, 30)
  ellipse(301, 234, 30)
  ellipse(296, 247, 30)
  ellipse(288, 263, 30)
  ellipse(281, 271, 30)
  ellipse(301, 259, 30)
  ellipse(294, 86, 40)
  ellipse(307, 97, 35)
  ellipse(324, 151, 30)
  ellipse(318, 127, 30)
  ellipse(332, 176, 35)
  ellipse(312, 115, 36)
  ellipse(335, 220, 30)
  ellipse(324, 267, 40)
  ellipse(108, 210, 30);

  // Ear
  fill(160, 100, 60)
  stroke(120, 70, 60)
  strokeWeight(3)
  arc(138, 191, 85, 47, 21, PI + QUARTER_PI , OPEN)
  ;
}

function mousePressed(){
  console.log(mouseX + "," + mouseY)
  
}
