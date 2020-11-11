class Ball{

    constructor(x, y ){

        var options = {

            restitution:0.8,
            friction:0.3,
            density:0.5,
            isStatic:true
           
        }
        this.body = Bodies.circle(x, y,20,options);
        this.image = loadImage("ball.jpg");
        World.add(world, this.body);
    
    }
    display(){

       var pos = this.body.position;
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,40,40);

    }


}