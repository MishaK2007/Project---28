
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.constraint;

var gound,tree,stone;
var mango1,mango2,mango3,mango4,mango5;
var engine,world;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(10,350,400,50);
  tree = new Tree(400,300,100,150);
  stone = new Stone(250,380,30);
  boy = new Boy(235,350,55,80);

  mango1 = new Mango(400,320,40);
  mango2 = new Mango(470,390,40);
  mango3 = new Mango(540,460,40);
  mango4 = new Mango(610,530,40);
  mango5 = new Mango(680,600,40);

}

function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  tree.display();
  stone.display();
  boy.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);

  keyPressed();
}

function detectcollision(stone,mango){
  mangoBodyPosition = mango.body.position;
  stoneBodyPosition = stone.body.position;


  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y);
      if(distance <= mango.r + stone.r){
        Matter.Body.setStatic(mango.body,false);
      }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body, {x:235, y:420});
    launcher.attach(stone.body);
  }
} 



