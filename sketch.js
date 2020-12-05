
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree;
var ground;
var boy;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6;
var slingshot;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;


ground = new Ground();
tree = new Tree();
boy = new Boy();
stone = new Stone();
mango1 = new Mango(670,300);
mango2 = new Mango(670,240);
mango3 = new Mango(720,300);
mango4 = new Mango(720,245);
mango5 = new Mango(630,300);
mango6 = new Mango(770,300);

slingshot = new Slingshot(stone.body,{x:140,y:385})

	Engine.run(engine);
  
}


function draw() {
	background(220);
	
	ground.display();
tree.display();
boy.display();
stone.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
slingshot.display();

//detectCollision(stone,mongo1);
//detectCollision(stone,mongo2);
//detectCollision(stone,mongo3);
//detectCollision(stone,mongo4);
//detectCollision(stone,mongo5);
//detectCollision(stone,mongo6);

}

function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY});
	
	}

	function mouseReleased(){
		slingshot.release();
		}

//function detectCollison(mango,stone){
//mangoBodyPosition = mango.body.position
//stoneBodyPosition = stone.body.position

//var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,
//	mangoBodyPosition.x,mangoBodyPosition.y)
//if(distancr<=mango1.y+stone.y){
//Matter.Body.setStatic(mango.body,false)

//}
//}

