var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);

	side1Sprite=createSprite(955,610,20,100);
	side1Sprite.shapeColor="red";

	side2Sprite=createSprite(1045,610,20,100);
	side2Sprite.shapeColor="red";

	bottomSprite=createSprite(1000,650,75,20);
	bottomSprite.shapeColor="red";


	engine = Engine.create();
	world = engine.world;
	
	side1Body=Bodies.rectangle(955,610,20,100,{isStatic:true});
	World.add(world, side1Body);

	side2Body=Bodies.rectangle(1045,610,20,100,{isStatic:true});
	World.add(world, side2Body);

	bottomBody=Bodies.rectangle(1000,635,200,20,{isStatic:true});
	World.add(world, bottomBody);

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	 paper1 = new paper(200,200,50,50)
	 ground1 = new Ground(700,675,1400,20)
	bin1 = new bin(100,140)
	console.log(bin1);

	sling = new slingshot(paper1.body,{x:200,y:650});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  Engine.update(engine);
  //console.log(bin1.x)
	

ground1.display();
paper1.display();
bin1.display();
sling.display();

	keyPressed();
  	drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-5});
	}
}

function mouseDragged(){
    Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

