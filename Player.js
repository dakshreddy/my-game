class Player{

    constructor(x, y ){

        var options = {

            restitution:0.8,
            friction:0.3,
            density:1.0,
            isStatic:true
           
        }
        this.player = Bodies.rectangle(x, y, 20, 20,options);
        this.image = loadImage("player.png");
        World.add(world, this.player);
    
    }
    display(){

       var pos = this.player.position;
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,100,100);

    }


}