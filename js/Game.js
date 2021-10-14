class Game{

constructor(){



}
getState(){

var gameref=database.ref('gameState')
gameref.on("value",(data)=>{
gameState=data.val();

})

}
updateState(state){
var gameref=database.ref('/')
         gameref.update({
                    gameState:state
 })
}
async start(){

form=new Form();
form.display();
player=new Player();
player.getCount();
car1=createSprite(100,200);
car1.addImage(car1Image);
car2=createSprite(100,200);
car2.addImage(car2Image);
car3=createSprite(100,200);
car3.addImage(car3Image);
car4=createSprite(100,200);
car4.addImage(car4Image);
cars=[car1,car2,car3,car4]
}
play(){

form.hide();
   textSize(30)
   text("game start",120,100)
   Player.getPlayerinfo();
   player.getCarsAtEnd();
   
   if(allPlayers!=undefined){
       background(ground);
       image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
       var index=0;
       var x=200;
       var y;
      // var displayPosition=130;
       for (var plr in allPlayers){
           index=index+1;
           x=x+200;
           y=displayHeight-allPlayers[plr].distance;
           cars[index-1].x=x;
           cars[index-1].y=y;
           if(index===player.index){
              // cars[index-1].shapeColor="red"
              stroke(10);
              fill("red");
              ellipse(x,y,60,60);
               camera.position.x=displayWidth/2;
               camera.position.y=cars[index-1].y;

            }
          
           //displayPosition+=20,
           // textSize(15)
           // text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)
       }
   }
   if(keyIsDown(UP_ARROW)&&player.index!=null){
        player.distance+=50;
        player.update();
   }
   if (player.distance>4000){
        gameState=2;
        player.rank = player.rank+1 ;
        Player.updateCarsAtEnd(player.rank);
        
   }
   drawSprites();
}
end(){
console.log("game E N D E D");
console.log("player.name,player.rank")
}

}