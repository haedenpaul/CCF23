apiKey = 'd9f8e4c594f222b6cab9f19b87552da0'
let APIdata
let temp


function preload(){
  //finding temp in Brooklyn
  let url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.65&lon=-73.94&appid=d9f8e4c594f222b6cab9f19b87552da0'
  APIdata = loadJSON(url);
}

function setup() {
  createCanvas(400, 400);
  temp = APIdata.main.temp;
  console.log('Current Temperature:' + APIdata.main.temp);
}

function draw() {
  background(220);

  //changing background based on temperature value
  if (temp <= 59){
    background(180)
  
  }else if (temp >= 60 || temp <= 84){
    background(255, 255, 0)
  
  }else if (temp >= 85){
    background (255, 0 ,0)
  }
}
