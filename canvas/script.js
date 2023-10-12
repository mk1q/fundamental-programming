let gameContext = document.getElementById("game").getContext("2d");

let carYPosition = 20;
let carXPosition = 20;

let carWidth = 150;
let carHeight = 100;

let gameTopPosition = 0;
let gameBottomPosition = 650;
let gameLeftPosition = 0;
let gameRightPosition =750;
let timeLoop = 10;

// add xDistance,tăng speed
let xDistance = 5;
let yDistance = 5;
function drawCar() {
  gameContext.beginPath();
  gameContext.fillStyle = "#fa4b2a";
  gameContext.fillRect(carXPosition, carYPosition, carWidth, carHeight);
}
function moveCar() {
 
  gameContext.clearRect(carXPosition, carYPosition, carWidth, carHeight);

 
  let isTouchTop = carYPosition < gameTopPosition;
  let isTouchBottom = carYPosition + carWidth > gameBottomPosition;
  if (isTouchTop || isTouchBottom) {
    yDistance = -yDistance;
  }

  
let isTouchLeft = carXPosition < gameLeftPosition;
let isTouchRight = carXPosition + carHeight > gameRightPosition;
if (isTouchLeft || isTouchRight) {
  xDistance = -xDistance;
}

  
  // update the car's position
  carYPosition -= yDistance;
  carXPosition -= xDistance;

  // draw the car at the new position
  drawCar();
}

setInterval(moveCar, timeLoop);

