const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var stone;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var launcher;
var boy, boy_image;

function preload()
{
	boy_image = loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	tree = new Tree(600, 500, 100, 200);

	ground = new Ground(400, 690, 800, 70);

	stone = new Stone(130, 570, 25);

	boy = Bodies.rectangle(180, 650, 100, 170);
	boy.isStatic = true;
	World.add(world, boy);

	launcher = new Launcher(stone.body,{x: 130, y: 600});

	mango1 = new Mango(560, 400, 25);
	mango2 = new Mango(680, 410, 25);
	mango3 = new Mango(630, 410, 25);
	mango4 = new Mango(600, 490, 25);
	mango5 = new Mango(580, 470, 25);
	mango6 = new Mango(720, 480, 25);
	mango7 = new Mango(540, 475, 25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 255, 155);
  
  tree.display();
  ground.display();
 
  stone.display();

  imageMode(CENTER);
  image(boy_image, boy.position.x, boy.position.y, 150, 200);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  launcher.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);

  console.log(boy.isStatic);

  drawSprites();
 
}

function mouseDragged(){
  
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}

function mouseReleased(){
	launcher.fly();
}

function detectCollision(lstone, lmango) {
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  
  if(distance <= lmango.r + lstone.r) {
    Matter.Body.setStatic(lmango.body, false);
  }

}

function keyPressed() {
	if(keyCode === 32) {
	  Matter.Body.setPosition(stone.body, {x: 140, y: 550});
	  launcher.attach(stone.body);
	}
}

