var bg,bgImg;
var player, shooterImg,player2, shooterImg2, aimer, aimerImg ,aimer2, aimerImg2;
var hp;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooterImg2 = loadImage("assets/SHOOTER-1.png")
 
aimerImg = loadImage("assets/aimer.png")
aimerImg2 = loadImage("assets/aimer2.png")

  bgImg = loadImage("assets/bg.jpg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 2.4
  

//creating the player sprite
player = createSprite(displayWidth-1700, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.5
   player.debug = false
   player.setCollider("rectangle",300,0,300,300)

   player2 = createSprite(displayWidth-70, displayHeight-300, 50, 50);
 player2.addImage(shooterImg2)
   player2.scale = 0.7
   player2.debug = false
   player2.setCollider("rectangle",300,0,300,300)

   aimer = createSprite(displayWidth-70, displayHeight-300, 50, 50)
  aimer.addImage(aimerImg)
   aimer.scale = 0.1

   aimer2 = createSprite(displayWidth-1700, displayHeight-300, 50, 50)
   aimer2.addImage(aimerImg2)
    aimer2.scale = 0.2 

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
 
}

drawSprites();

}
