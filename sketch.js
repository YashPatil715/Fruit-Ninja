var PLAY = 1;
var END = 0;
var gamestate = 1;
var sword;
var swordImage;
var fruit,monster;
var fruit1,fruit2,fruit3,fruit4;
var monsterImage;
var fruitGroup,enemyGroup;
function preload(){
swordImage = loadImage("sword.png");
fruit1 = loadImage("fruit1.png");
fruit2 = loadImage("fruit2.png");
fruit3 = loadImage("fruit3.png");
fruit4 = loadImage("fruit4.png");
}
function setup(){
createCanvas(490,480);  
sword = createSprite(40,200,20,20);
sword.addImage(swordImage);
sword.scale=0.7
//sword.debug = true;
fruitGroup = createGroup();
enemyGroup = createGroup();
}



function draw(){
background("lightblue")
 sword.y = World.mouseY; 
  sword.x = World.mouseX;
  fruits();
  drawSprites();
}
function fruits(){
  if(World.frameCout%80===0){
  fruit=creteSprite(150,150,20,20) 
  fruit.scale = 0.2;
  fruit.debug = true;
  r=Math.round(random(1,4));
  if(r == 1){
  fruit.addImage(fruit1);
  } else if (r == 2){
  fruit.addImage(fruit2);
  } else if (r == 3){
  fruit.addImage(fruit3);
  }else if (r == 4){
  fruit.addImage(fruit4);
  }
  fruit.y = Math.round(random(50,340));           fruit.velocityX=-7;
  fruit.setLifeTime=100;           
  fruitGroup.add(fruit);
  }

}






