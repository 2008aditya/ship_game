var ship
var sea,sea_img


function preload(){
 shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
 seaImage=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);

  sea=createSprite(400,200)
 sea.addImage("sea.png",seaImage)
 sea.scale=0.2
 sea.velocityX=-5
 console.log(sea.x)
 sea=createSprite(1400,200)
 sea.addImage("sea.png",seaImage)
 sea.scale=0.2
 sea.velocityX=-5
 console.log(sea.x)

ship=createSprite(130,200,30,30);
 ship.addAnimation("ship",shipImage);
 ship.scale=0.25
 
 

edges=createEdgeSprites
}

function draw() {
  background("blue");
  sea.velocityX=-3

  if(keyDown("left")){
    ship.x=ship.x-5
  }
  if(keyDown("right")){
    ship.x=ship.x+5
  }
  if (sea.x < 0) {
    sea.x=sea.width/2
  }


  drawSprites()
}