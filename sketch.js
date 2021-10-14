
var database,position;
var gameState=0,playerCount=0,form,player,game;
var allPlayers,distance=0;
var cars,car1,car2,car3,car4;
var trackImage,car1Image,car2Image,car3Image,car4Image,ground;

function preload(){
  car1Image=loadImage("images/car1.png");
  car2Image=loadImage("images/car2.png");
  car3Image=loadImage("images/car3.png");
  car4Image=loadImage("images/car4.png");

  trackImage=loadImage("images/track.jpg");
  ground=loadImage("images/ground.png");
}

function setup(){
   
    createCanvas(displayWidth-20,displayHeight-20);
    database = firebase.database();
   game=new Game();
game.start();
game.getState();
}

function draw(){
   background("white")
if (playerCount===4){
   game.updateState(1)
}
if(gameState===1){
   clear();
   game.play();
}
if (gameState===2){
 game.end();
}
}

