var form;
var gameState = 0;
var dartBoard;
var score = 0;


function preload() {
  backgroundImg = loadImage("images/images.jpg");
  stage = loadImage("images/dart_wall.jpg");
  dartBoardImg = loadImage("images/dart_board.png");
}

function setup() {
  createCanvas(displayWidth - 20,displayHeight-115);
  form = new Form();
  dartBoard = createSprite(displayWidth/2 - 300,displayHeight/2 + 70);
  dartBoard.addImage(dartBoardImg);
  dartBoard.scale = 1.5;
}


function draw() {
  console.log(gameState);
  if(gameState === 0){
    background(backgroundImg);
    
  }else{
    background(stage);
    drawSprites();
  }
  noStroke();
  textSize(65);
  fill("black");
  text("Dart It !",displayWidth/2 - 100, 100);
  textSize(35);
  text("The game in which you are what you dart!",displayWidth/3 - 110, 150);
  form.display();
}