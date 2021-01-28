
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,50,0,0);
	obj1 = new Circle(400,300,75,75);
	//Create the Bodies Here.
	rope = new Rope(ground.body,obj1.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  drawSprites();
  ground.display()
  obj1.display();
  rope.display();
  obj2.display();
  ground2.display();
  rope2.display();
}



