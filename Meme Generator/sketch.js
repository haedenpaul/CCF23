// User input only shows when you click on the button again.

let littlemissButton, spongeButton, unoButton
let littlemiss, spongebob, uno
let clicked

//preload images
function preload(){
  litmissImg = loadImage("https://a.pinatafarm.com/590x708/149c2413f2/photo_2022-07-27-16-17-15.jpeg");
  spongeImg = loadImage("https://i.imgflip.com/4tm14v.png");
  unoImg = loadImage("https://i.imgflip.com/4/3lmzyx.jpg");

}

function setup() {
  createCanvas(500, 500);
  background(220);
  //create user input for meme captions
  inputBox = createInput();

  //create buttons
  littlemissButton = createButton("Little Miss")
  spongeButton = createButton("Spongebob")
  unoButton = createButton("Uno") 
  
  //when the button is clicked, show the image
  littlemissButton.mousePressed(littleMissMeme)
  spongeButton.mousePressed(spongebobMeme)
  unoButton.mousePressed(unoMeme)

}

function littleMissMeme(){
  clear()
  //image and coordinates
  littlemiss = image(litmissImg, 10, 10, 480, 480)
  //caption placement
  text(inputBox.value(), 156, 106)
}

function spongebobMeme(){
  clear()
  spongebob = image(spongeImg, 10, 10, 480, 480)
  textSize(20)
  text(inputBox.value(), 67, 111)
}

function unoMeme(){
  clear()
  uno = image(unoImg, 10, 10, 480, 480)
   text(inputBox.value(), 106, 181)
}

function draw() {
  fill(0)
  textSize(30)
  
}

/*function mousePressed(){
  console.log(mouseX + "," + mouseY)
  
} */
