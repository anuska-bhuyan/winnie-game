var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars,  car2, car3, car4;

var track, car2_img, car3_img, car4_img,car5_img,c6_img,c4

function preload(){
  track = loadImage("../images/background.jpg");
  
  car2_img = loadImage("../images/rabbit.png");
  car3_img = loadImage("../images/winnie1.gif");
  c4 = loadImage("../images/winnie1.gif");
  car5_img = loadImage("../images/winnie2.gif");
  c6_img = loadImage("../images/winniw3.gif");

  car4_img = loadImage("../images/tiger.png");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
