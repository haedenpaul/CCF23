// I tried to add user input text, but the text won't show up on the sketch output.


let littlemissButton, spongeButton, unoButton
let littlemiss, spongebob, uno
let clicked

function preload(){
  litmissImg = loadImage("https://a.pinatafarm.com/590x708/149c2413f2/photo_2022-07-27-16-17-15.jpeg");
  spongeImg = loadImage("https://i.imgflip.com/4tm14v.png");
  unoImg = loadImage("https://i.imgflip.com/4/3lmzyx.jpg");

}

function setup() {
  createCanvas(500, 500);
  background(220);
  inputBox = createInput();
  littlemissButton = createButton("Little Miss")
  spongeButton = createButton("Spongebob")
  unoButton = createButton("Uno") 
  
  
  littlemissButton.mousePressed(littleMissMeme)
  spongeButton.mousePressed(spongebobMeme)
  unoButton.mousePressed(unoMeme)

}

function littleMissMeme(){
  clear()
  littlemiss = image(litmissImg, 10, 10, 480, 480)
  text(inputBox.value(), 237, 123)
}

function spongebobMeme(){
  clear()
  spongebob = image(spongeImg, 10, 10, 480, 480)
  text(inputBox.value(), 115, 125)
}

function unoMeme(){
  clear()
  uno = image(unoImg, 10, 10, 480, 480)
   text(inputBox.value(), 148, 182)
}

function draw() {
  fill(0)
  textSize(30)
  
}

/* function mousePressed(){
  console.log(mouseX + "," + mouseY)
  
} */