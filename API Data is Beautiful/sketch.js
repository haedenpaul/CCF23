//apiKey = 'd9f8e4c594f222b6cab9f19b87552da0'
let APIdata
let temp
let tempF


function preload(){
  //finding temp in Brooklyn
  let url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.65&lon=-73.94&appid=d9f8e4c594f222b6cab9f19b87552da0'
  APIdata = loadJSON(url);
}

function setup() {
  createCanvas(400, 400);
  temp = APIdata.main.temp;
  //changing temperature from Kelvin to Fahrenheit
  tempF = (temp - 273.15) *(9/5) + 32
  
  console.log('Current Temperature (Kelvin):' + APIdata.main.temp);
  console.log('Current Temperature (Fahrenheit):' + int(tempF))
  
  
}

function draw() {
  background(220);

  //changing background based on temperature value
  if (tempF <= 59){
    background(180)
  
  }else if (tempF >= 60 || tempF <= 84){
    background(255, 255, 0)
  
  }else if (tempF >= 85){
    background (255, 0 ,0)
  }
  
  textSize(25)
  text("It is currently " + int(tempF) + " degrees", 70, 200) 
}
