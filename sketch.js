const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var blueplayer1, blueplayer2, blueplayer3;

var p1,p2,p3
var op1,op2,op3 

var edges,ball,ballimg

function preload() {
  ballimg = loadImage("ball.jpg")
}

function setup() {
  createCanvas(1200,550);

  engine = Engine.create();
  world = engine.world;


  // p1 = createSprite(300, 100, 20, 20);
  // p1.shapeColor = ("red")
  // p2 = createSprite(300, 250, 20, 20);
  // p2.shapeColor = ("red")
  // p3 = createSprite(300, 400, 20, 20);
  // p3.shapeColor = ("red")

  op1 = createSprite(900, 100, 20, 20);
  op1.shapeColor = ("blue")
  op2 = createSprite(900, 250, 20, 20);
  op2.shapeColor = ("blue")
  op3 = createSprite(900, 400, 20, 20);
  op3.shapeColor = ("blue")

  edges = createEdgeSprites()

  ball = new Ball(600,275)
  blueplayer1 = new Player(300, 100);
  blueplayer2 = new Player(300, 250);
  blueplayer3 = new Player(300, 400);

}

function draw() {
  background("lightblue");  
  Engine.update(engine);

   ball.display()
   blueplayer1.display();
   blueplayer2.display();
   blueplayer3.display();

  drawSprites();


}

function keyPressed(){

  if(blueplayer2  && keyCode === 32){
    var xPos = Math.random(300,600);
    var yPos = Math.random(100,300);
    console.log("random x: " + xPos);
    console.log("random y: " + yPos);
    Matter.Body.setPosition(blueplayer2.body,{x:350, y:250});

    
  }

}