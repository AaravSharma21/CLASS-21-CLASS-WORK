var M_rect,F_rect,gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(800,400);
  M_rect = createSprite(400, 200, 50, 50);
  F_rect = createSprite(100, 200, 50, 50);
  M_rect.shapeColor = "red";
  F_rect.shapeColor = "red";
  gameobject1 = createSprite(100, 100, 60, 60);
 gameobject2 = createSprite(200, 100, 60, 60);
  gameobject1.shapeColor = "red";
 gameobject2.shapeColor = "red";
 gameobject3 = createSprite(300, 100, 60, 60);
 gameobject4 = createSprite(400, 100, 60, 60);
  gameobject3.shapeColor = "red";
 gameobject4.shapeColor = "red";
 

  M_rect.debug = true;
  F_rect.debug = true;


}

function draw() {
  background(255,255,255);  
M_rect.y = World.mouseY;
M_rect.x = World.mouseX;
if (isTouching(M_rect,gameobject1)) {
  M_rect.shapeColor = "green";
  gameobject1.shapeColor = "green";
  
}
else 
{
  M_rect.shapeColor = "red";
 gameobject1.shapeColor = "red";
  
}
  drawSprites();
}
function isTouching(object1,object2) {
  if((object1.x - object2.x < object1.width /2 + object2.width/2) 
  && (object2.x - object1.x < object1.width /2 + object2.width/2 )
  && (object1.y - object2.y< object1.width /2 + object2.width/2) 
  && (object2.y - object1.y < object1.width /2 + object2.width/2 ))
  {
    return true;
  }

  else
  {
    return false;
 }
 
}