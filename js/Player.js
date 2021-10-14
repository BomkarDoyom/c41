class Player{

constructor(){
   this.name=null;
   this.distance=0;
   this.index=0;
   this.rank=null;
}
getCount(){
   var countref=database.ref("playerCount")
   countref.on("value",(data)=>{
        playerCount=data.val();
   })
}
updateCount(count){
var ref=database.ref('/')
ref.update({
   playerCount:count
})
}
update(){
var playerIndex="players/player"+this.index
database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance
})

}
static getPlayerinfo(){
    var playerref=database.ref('players')
    playerref.on("value",(data)=>{
        allPlayers=data.val();
    })
}

getCarsAtEnd(){
    var caeref=database.ref("CarsAtEnd")
    caeref.on("value",(data)=>{
         this.rank=data.val();
    })
    
}
static updateCarsAtEnd(rank){
database.ref('/').set({
    CarsAtEnd: rank
})
}
}