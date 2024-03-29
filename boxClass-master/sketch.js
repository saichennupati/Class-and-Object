const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var box2

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(200,390,400,20)
    box1 = new Box(200,300,50,50);
    box2 = new Box(180,300,50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
   box2.display();
}