var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
//var round;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	wall1 = Bodies.rectangle(width/2,650, 200, 20, {isStatic: true});
	World.add(world,wall1);
	wall2 = Bodies.rectangle(width/2 - 110,610, 20, 100,{isStatic: true});
	World.add(world,wall2);
	wall3 = Bodies.rectangle(width/2 + 110,610, 20, 100,{isStatic: true});
	World.add(world,wall3);
	Engine.run(engine);
	//round = new Ground(200,390,400,10);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  fill("red");
  rect(wall1.position.x,wall1.position.y,200,20);
  fill("red");
  rect(wall2.position.x,wall2.position.y,20,100);
  fill("red");
  rect(wall3.position.x,wall3.position.y,20,100);
  drawSprites();
 //round.display();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {

    helicopterSprite.x=helicopterSprite.x-20;    
    translation={x:-20,y:0}
    Matter.Body.translate(packageBody, translation)


  } else if (keyCode === RIGHT_ARROW) {
    helicopterSprite.x=helicopterSprite.x+20;
    translation={x:20,y:0}
    Matter.Body.translate(packageBody, translation)
  }
  else if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}




