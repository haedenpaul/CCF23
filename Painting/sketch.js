function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  // Top navy half
  fill(20, 5, 70)
  noStroke()
  rect(0, 0, 400, 250);

  // Top half of watermelon + seeds + red dots
  fill(190, 0, 0) //red outer
  noStroke()
  arc(180, 150, 340, 360, TWO_PI, PI)
  fill(255, 255, 255) //white inner
  noStroke()
  arc(180, 150, 300, 320, TWO_PI, PI)
  stroke(0) // seeds
  strokeWeight(9) 
  point(73, 157)
  point(100, 174)
  point(71, 193) 
  point(101, 200) 
  point(91, 255)
  point(110, 241)
  point(134, 159)
  point(165, 160)
  point(150, 177)
  point(138, 215)
  point(164, 236)
  point(209, 164)
  point(183, 189)
  point(234, 194)
  point(211, 217)
  point(246, 231)
  point(302, 161)
  point(244, 158)
  point(286, 203)
  point(275, 228)
  stroke(255, 0, 0) // red dots
  strokeWeight(5)
  point(56, 159)
  point(93, 159)
  point(84, 172)
  point(109, 177)
  point(79, 205)
  point(75, 236)
  point(97, 216)
  point(123, 186)
  point(125, 230)
  point(136, 235)
  point(159, 206)
  point(149, 196)
  point(150, 162)
  point(199, 166)
  point(183, 161)
  point(203, 189)
  point(184, 217)
  point(212, 236)
  point(240, 213)
  point(260, 240)
  point(285, 220)
  point(300, 176)
  point(263, 176)
  point(267, 169)
  point(279, 156)
  point(192, 154)
  point(184, 240)
  point(231, 175)
  point(257, 202)
  point(303, 192)
  point(124, 249)
  point(172, 246)
  point(281, 181)
  point(230, 243)
  point(56, 178)
  point(112, 153)


  // Yellow half
  fill(255, 250, 0)
  noStroke()
  rect(0, 250, 400, 250);

  // Bottom half of watermelon + black dots
  fill(0, 200, 200)
  noStroke()
  //arc(175, 251, 250, 100, TWO_PI, PI)
  fill(130, 0, 30) //dark red outer
  noStroke()
  arc(180, 250, 279, 95, TWO_PI, PI)
  fill(0, 200, 205) //teal inner
  noStroke()
  arc(180, 250, 234, 53, TWO_PI, PI)
  stroke(0)
  strokeWeight(4)
  point(75, 253)
  point(90,254)
  point(107, 257)
  point(125, 260)
  point(145, 255)
  point(145, 266)
  point(160, 262)
  point(166,269)
  point(178, 258)
  point(199, 258)
  point(182, 270)
  point(225, 225)
  point(223, 274)
  point(236, 272)
  point(243, 259)
  point(268, 255)
  point(279, 261)
  strokeWeight(7)
  point(224, 255)
  point(204, 265)
  point(158, 253)
  point(114, 263)
  point(257, 260);

  
  // Forks
stroke(255, 50, 0) //red fork at the left
strokeWeight(7)
line(27, 353, 64, 353)
line(66, 339, 66, 367)
line(66, 339, 96, 339)
line(66, 353, 96, 353)
line(66, 367, 96, 367)
//red fork at the right
line(266, 369, 278, 338)
line(264, 331, 291, 337)
line(263, 331, 271, 305)
line(278, 332, 284, 308)
line(291, 337, 298, 311)
stroke(0) // black fork
line(129, 327, 85, 312)
line(87,299, 77, 325)
line(87, 298, 67, 291)
line(81, 311, 63, 304)
line(77, 325, 60, 317)

  // Spoon
  line(197, 308, 182, 353)
  fill(0)
  ellipse(182, 353, 17, 26)

  // Knife
  stroke(0)
  line(354, 302, 344, 313)
  stroke(255)
  line(338, 311, 344, 317)
  fill(0, 200, 205)
  noStroke()
  triangle(324, 299, 344, 320, 297, 373)




}

function mousePressed(){
  console.log(mouseX + "," + mouseY)
  
}