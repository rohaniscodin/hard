
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, leftSide, rightSide, ball, world, engine, ball_options

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ball_options={
	
	restitution:0.95,
	friction:0,
	density:1.2
 }

 ball=Bodies.circle(260,20,20,ball_options)
 World.add(world, ball)
ground= new Ground(300,670,1000,20)
leftSide = new Ground(1100,600,20,120)
rightSide = new Ground(1350,600,20,120)

	
  
}


function draw() {
 
  background(0);
  Engine.run(engine);
ellipse(ball.position.x,ball.position.y,20,20)

ground.display()
leftSide.display()
rightSide.display()


 
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85}); 
	} }



