const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, polygon_img;
 
var score=0;
var bg= "download.jpeg";

function preload() {
polygon_img= loadImage("polygon.png");
  getBackgroundImg();
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  engine= Engine.create()
  world= engine.world;
  Engine.run(engine);

  ground= new Ground(390,400,200,30);

  box1= new Box(330,225,30,40);
  box2= new Box(360,225,30,40);
  box3= new Box(390,225,30,40);
  box4= new Box(420,225,30,40);
  box5= new Box(450,225,30,40);

  box6= new Box(360,195,30,40);
  box7= new Box(390,195,30,40);
  box8= new Box(420,195,30,40);

  box9= new Box(390,155,30,40);

  polygon= Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot= new SlingShot(this.polygon,{x:100,y:200});

}


function draw() {
  background(0);  
  //drawSprites()
  text("score: "+score,730,40);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();

  slingShot.display();
  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY}) 
}
function mouseReleased(){
slingShot.fly()
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "download.jpeg";
  }
  else{
      bg = "night.jpeg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
