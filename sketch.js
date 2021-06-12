var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	//rectMode(CENTER);

	
	

	


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 box1=new Box(240,630,20,80);
	box2=new Box(300,650,100,20);
	box3=new Box(340,630,20,80);
	packageSprite=createSprite(width/2+100,200,50,50)

	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	//World.add(world,packageSprite);
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	

	 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x=packageBody.position.x;
  packageSprite.y=packageBody.position.y;



  

  



  



 // keyPressed();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed() {

	if(keyCode===LEFT_ARROW){
		helicopterSprite.x-=20;
		translation={x:-20,y:0};
		Matter.Body.translate(packageBody,translation);
	}
	if(keyCode===RIGHT_ARROW){
		helicopterSprite.x+=20;
		translation={x:20,y:0};
		Matter.Body.translate(packageBody,translation);
	}
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic( packageBody , false);;
	   
   
    
  }
}