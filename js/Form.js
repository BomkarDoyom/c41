class Form{
    constructor(){
        this.title=createElement('h1')
        this.input=createInput('enter your name');
        this.button=createButton('submit');
this.greeting=createElement('h1');
this.reset=createButton('Reset');
    }
    display(){

        this.title.html('Car Racing Game');
        this.title.position(displayWidth/2-50,0);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.reset.position(displayWidth-100,20);
this.button.mousePressed(()=>{

this.input.hide();
this.button.hide();
this.title.hide();
player.name=this.input.value();
playerCount+=1;
player.index=playerCount;
player.update();
player.updateCount(playerCount)
this.greeting.html("HELLO "+this.input.value());
this.greeting.position(displayWidth/2-70,displayHeight/4);
})

this.reset.mousePressed(()=>{
player.updateCarsAtEnd(0);    
player.updateCount(0);
game.updateState(0);
//var playerref=database.ref("players");
//playerref.remove();
})

    }
hide(){
 this.input.hide();
this.button.hide();
this.title.hide();
this.greeting.hide();
}


}
