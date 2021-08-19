
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var Ground 

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		destiny:1.2
	}

	ground =new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Matter.Bodies.circle(200,100,10,ball_options)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x, ball.position.y,20);


ground.show();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05});

	}
}

