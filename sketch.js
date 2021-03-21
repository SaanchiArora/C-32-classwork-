const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var platform;
var score = 0;



function setup() {
	createCanvas(1300, 500);


	engine = Engine.create();
	world = engine.world;

  // platform.
  platform = new Platform(100,480,200,250);


  // stands and grounds
  ground = new Ground(650,height,1300,20);

  stand1 = new Stand(500,450,300,10);
  stand2 = new Stand(1000,280,250,10);

 
    // row 1.
  block1 = new Block (400,440,30,40);
  block2 = new Block (430,440,30,40);
  block3 = new Block (460,440,30,40);
  block4 = new Block (490,440,30,40);
  block5 = new Block (520,440,30,40);
  block6 = new Block (550,440,30,40);
  block7 = new Block (580,440,30,40);

   // row 2.
  block8 = new Block (430,410,30,40);
  block9 = new Block (460,410,30,40);
  block10 = new Block (490,410,30,40);
  block11 = new Block (520,410,30,40);
  block12 = new Block (550,410,30,40);

  // row 3.
  block13 = new Block (460,340,30,40);
  block14 = new Block (490,340,30,40);
  block15 = new Block (520,340,30,40);

  // top
  block16 = new Block(490,320,30,40);
  
  // row 1 
  block17 = new Block(1000,270,30,40); 
  block18 = new Block(970,270,30,40); 
  block19 = new Block(940,270,30,40); 
  block20 = new Block(1030,270,30,40); 
  block21 = new Block(1060,270,30,40); 

  // row 2
  block22 = new Block(970,240,30,40); 
  block23 = new Block(1000,240,30,40); 
  block24 = new Block(1020,240,30,40); 

  // top
  block25 = new Block(1000,210,30,40);

  hexagon = new Hexagon(65,200,20);
  slingshot = new SlingShot(hexagon.body,{x:50, y:200});

  

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  
 ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

   block13.display();
   block14.display();
   block15.display();

   block16.display();

   block17.display();
   block18.display();
   block19.display();
   block20.display();
   block21.display();

   block22.display();
   block23.display();
   block24.display();

   block25.display();

   hexagon.display();
  slingshot.display();
   platform.display();
   
   stand1.display();
  stand2.display();
  
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  
 
  



  drawSprites();

  stroke(0);
  strokeWeight(10);
  textSize(35);
  fill(255);
  text("Drag the Polygon to destroy the Blocks", 290,50.);
  fill("yellow")
  text("Press space to get one extra chance !!",670,450);
  fill("purple");
  strokeWeight(4);
 text("Score : " + score, 1050, 40);

 

}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32 ){
    Matter.Body.setPosition(hexagon.body, {x: 65 , y: 200});
      slingshot.attach(hexagon.body);
  }
  }

