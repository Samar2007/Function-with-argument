var fixedRect, movingRect;
var Rect1;
var Rect2;
var Rect3;
var Rect4;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400,200,50,80);
  movingRect=createSprite(400,200,80,50);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect.debug=true;
  Rect1= createSprite(100,50,50,50)
  Rect2= createSprite(300,50,50,50)
  Rect3=createSprite(500,50,50,50)
  Rect4=createSprite(700,50,50,50)
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //console.log(fixedRect.x);
  	
  if (isTouching(Rect1,movingRect)===true){
    Rect1.shapeColor="Yellow";
    movingRect.shapeColor="Yellow";
  } 
  else{
    Rect1.shapeColor="green";
    movingRect.shapeColor="green";
  }
  
  if (isTouching(Rect2,movingRect)===true){
    Rect2.shapeColor="Yellow";
    movingRect.shapeColor="Yellow";
  } 
  else{
    Rect2.shapeColor="green";
    movingRect.shapeColor="green";
  }

  if (isTouching(Rect3,movingRect)===true){
    Rect3.shapeColor="Yellow";
    movingRect.shapeColor="Yellow";
  } 
  else{
    Rect3.shapeColor="green";
    movingRect.shapeColor="green";
  }

if (isTouching(Rect4,movingRect)===true){
  Rect4.shapeColor="Yellow";
  movingRect.shapeColor="Yellow";
} 
else{
  Rect4.shapeColor="green";
  movingRect.shapeColor="green";
}

drawSprites();
}


function isTouching(R1,L1){
  if(L1.x-R1.x<= L1.width/2+R1.width/2
    && R1.x-L1.x<=L1.width/2+R1.width/2
    && L1.y-R1.y<= L1.height/2+R1.height/2
    && R1.y-L1.y<=L1.height/2+R1.height/2
    ){
    return true;
  }
  else{
    return false;
  }
 
}