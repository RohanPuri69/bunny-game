const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var ground
var fruit
var rope
var link1
var bunny
var bunnyImg
let engine;
let world;
var fruitimg
var bgimg
var cutbtn
var blink 
var sad
var eat
function preload()
{
bunnyImg=loadImage("Rabbit-01.png")
fruitimg=loadImage("melon.png");
bgimg= loadImage("background.png");
blink=loadAnimation("blink_1.png","blink_2.png","blink_3.png")
sad=loadAnimation("sad_1.png","sad_2.png","sad_3.png")
eat=loadAnimation("eat_0.png","eat_1.png","eat_2.png","eat_3.png","eat_4.png")

/*paunsing the animation */
blink.playing=true
eat.playing=true
sad.playing=false

/*looping an animation */
blink.looping=true
eat.looping=false

}

function setup() 
{//start
  createCanvas(500,700)

  engine = Engine.create();
  world = engine.world;

 ground= new Ground(0,660,800,50)

 rope= new Rope(7,{x:245,y:30});
 
 

/*creating the fruit object in sketch without file creation */
fruit_options={
  isStatic: true,
  restitution: 0
}

fruit=Bodies.circle(300,300,23,fruit_options)
World.add(world,fruit);

/*causing a delay in the animation */
blink.frameDelay=20
eat.framDelay=20
sad.frameDelay=20


/*creating a sprite of bunny */
bunny = createSprite(200,650,50,50);
//bunny.addImage(bunnyImg);
bunny.addAnimation("blinking",blink)
bunny.scale= 0.3

/*creating a group of two objects that will get connected*/
Matter.Composite.add(rope.body,fruit)

/*creating a link between the rope and the fruit */
link1==new Link(rope,fruit)

/*creating a cut button */
cutbtn=createImg("cut_button.png");
cutbtn.position(220,30)
cutbtn.size(50,50)
cutbtn.mouseClicked(drop)//calling the function drop

}//end


function draw() 
{
  
  background(bgimg);
  Engine.update(engine)
ground.display();
//ellipse(fruit.position.x,fruit.position.y,23,23);
image(fruitimg,fruit.position.x,fruit.position.y,100,100)

rope.show();
drawSprites();
   }
   
//create a sprite nammed as bunny with animation sad_1.png
function drop()
{
rope.break();
link1.detatch();
link1=null//null defines nothing
}