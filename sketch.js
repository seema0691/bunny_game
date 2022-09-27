const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var bg_img, food, rabbit;
var bunny;
 var button


function preload(){
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  button = createImg('melon.png');
  button.position(220,30)
  button.size(50,50)
  button.mouseClicked(drop);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  bunny = createSprite(200,620,100,100);
  bunny.addImage(rabbit);
  bunny.scale =0.3

  fruit_con = new Link(rope,fruit);

  imageMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  rectMode(CENTER);
  
  
}

function draw() 
{
  background(51);

  image(bg_img, width/2, height/2, 500,700);
  image(food, fruit.position.x,fruit.position.y,60,60);
  ground.show();
  rope.show();
 

  Engine.update(engine);


 drawSprites();
   
}

function drop(){
  rope.break();
  fruit_con.detach();
  fruit_con = nul;
}