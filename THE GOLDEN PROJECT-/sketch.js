var virus,virus2,virus3,virus4,virus5,virus6,player,virus7,virus8,virus9,virus10;
var bg,button,pl,nt,vr,sprite,note2;
var life,lv,life2,life3,pause;
var road,plr,hd,hand;
var vaccine,player2;
var boy,note,r,r2;
var bullet,src;
var player, bgc,bgc2,vc;
var bulletGroup;
var gameState=0;
var virusGroup,bt,screen;
var pause,ps,winpg;
var cns,music;
var wn,winpg,canvas;
var virus11,virus22,virus33,virus44,virus55,virus66,virus77,virus88,p1,p2,p3,p4;
var note2;
var vaccine2;
var backgrd,player;
var bG,s2;
//var x=800;
var score=0;
var w,virus12,or;

//load images 
function preload(){
  bg=loadImage('images/wc.png');
  pl=loadImage('images/welcome.png');
  nt=loadImage('images/image.jpg');
  road=loadImage('images/bg2.jpg');
  plr=loadImage('images/boyLeft.png');
  vr=loadImage('images/virus.png');
  hd=loadImage('images/image.png');
  vc=loadImage('images/vc.png');
  lv=loadImage('images/lives.png');
  ps=loadImage('images/pause.png');
  src=loadImage('images/pauseS.png');
  wn=loadImage('images/wrpg.png');
  cns=loadImage('images/coin.png');
  w=loadImage("images/wn.png");
  or=loadImage("images/over.png");

}

function setup() {
  canvas=createCanvas(displayWidth,displayHeight);
  canvas.background(bg);
  bulletGroup=createGroup();
 
  virusGroup=createGroup();

  button=createButton("tap to continue")
  button.position(600,500);
  button.mousePressed(()=>{
   
    button.hide();
    gameState=1;
   })
  
   


}

function draw() {
//note 1
 if(gameState===1){
  
  background(255);
 
  image(pl,100,400,10,700)
  clear();
  image(nt,450,10,800,700);
  if(keyCode === 32){
    gameState=2;
    background(0);
  }
 
 //level 1
 if(gameState === 2){
  
    bgc=createSprite(600,100,100,100);
    bgc.addImage(road);
    bgc.scale=2.0;
    
   vaccine=createSprite(900,600,100,100);
   vaccine.addImage(vc);
   vaccine.scale=0.7;
   player=createSprite(1000,630,100,100);
   player.addImage(plr);
   player.scale=0.8;
  
   sprite=createSprite(1000,619,25,25);
   r=createSprite(1010,656,15,25);
   r.shapeColor=rgb(225,85,68);
   r2=createSprite(1010,635,15,15);
   r2.shapeColor=rgb(49,42,107);
   hand=createSprite(997,590,10,10);
   hand.addImage(hd);
   hand.scale=1.3;
    
    
   virus=createSprite(-10,570,10,10);
   virus.velocityX=4;
   virus.y=random(540,590)
   virus.addImage(vr);
  
   virus2=createSprite(-460,500,10,10);
   virus2.velocity.x=3;
   virus2.y=random(540,590)
   virus2.addImage(vr);
   s2=createSprite(-460,619,10,10),
   s2.velocityX=3;
  
   virus3=createSprite(-1020,570,10,10);
   
   virus3.y=random(540,590)
   virus3.addImage(vr);
   virus3.velocityX=3;
    
  
   virus4=createSprite(-1880,570,10,10);
   virus4.velocityX=3;
   virus4.y=random(540,590)
   virus4.addImage(vr);
    
  
   virus5=createSprite(-2390,570,10,10);
   virus5.velocityX=3.5;
   virus5.y=random(540,590)
   virus5.addImage(vr);
    
  
   virus6=createSprite(-3915,570,10,10);
   virus6.velocityX=4;
   virus6.y=random(540,590)
   virus6.addImage(vr);
    
   console.log(vaccine.x);
   virus7=createSprite(-3539,570,10,10);
   virus7.velocityX=3,88;
   virus7.y=random(540,590);
   virus7.addImage(vr);
    
  
   virus8=createSprite(-5170,570,10,10);
   virus8.velocityX=4;
   virus8.y=random(540,590)
   virus8.addImage(vr);
   
  
   virus9=createSprite(-4999,570,10,10);
   virus9.velocityX=3;
   virus9.y=random(540,590)
   virus9.addImage(vr);
    
  
   virus10=createSprite(-5900,570,10,10);
   virus10.velocityX=7.5;
   virus10.y=random(540,590)
   virus10.addImage(vr);
    console.log(virus2 .x);
  
  }
 
  
 
 
  }
  
if(virus2.collide(player)){
   player.destroy();
}
  
  //destroying the viruses with bullets
   if (bulletGroup.collide(virus)) {
    virus.destroy();
    bulletGroup.destroyEach();
    gameState=3;
  }
  
  if (bulletGroup.isTouching(virus2)) {
    virus2.destroy();
    bulletGroup.destroyEach();
   
  }
  if (bulletGroup.isTouching(virus3)) {
    virus3.destroy();
    bulletGroup.destroyEach();
   
  }
 
  if (bulletGroup.isTouching(virus4)) {
    virus4.destroy();
    bulletGroup.destroyEach();
   
  }
  if (bulletGroup.isTouching(virus5)) {
    virus5.destroy();
    bulletGroup.destroyEach();
   
  }
  if (bulletGroup.isTouching(virus6)) {
    virus6.destroy();
    bulletGroup.destroyEach();
   
  }
  if (bulletGroup.isTouching(virus7)) {
    virus7.destroy();
    bulletGroup.destroyEach();
   
  }
  if (bulletGroup.isTouching(virus8)) {
    virus8.destroy();
    bulletGroup.destroyEach();
   
  }
  if (bulletGroup.isTouching(virus9)) {
    virus9.destroy();
    bulletGroup.destroyEach();
    
     gameState=3;
  }
  
      
   
  
if (bulletGroup.isTouching(virus10)) {
  virus10.destroy();
  bulletGroup.destroyEach();
  
}
    

if (keyDown('space')){
  createBullet(vaccine.x);
 
 }
 //level 1 over
 if(gameState===3){
  bgc.destroy();
  background("white");
  image(wn,displayWidth/2-200,displayHeight/2-200,500,500);
  
if(keyCode === 82){
 bgc.visible=false;
 
gameState=4;
//clear();
}
 }

//level 2 note
if(gameState===4){
  
  clear();
  image(nt,450,150,800,600);
 
 if(keyCode === 68){
   gameState = 5;
   clear();
  
  
  
 }
}
//level 2
if(gameState===5){
  clear();
  
  
 // note2.destroy();
  virus.destroy();
  virus2.destroy();
  virus3.destroy();
  virus4.destroy();
  virus5.destroy();
  virus6.destroy();
  virus7.destroy();
  virus8.destroy();
  virus9.destroy();
  virus10.destroy();


  // bgc=createSprite(600,100,100,100);
  // bgc.addImage(road);
  // bgc.scale=2.0;
   
   background('skyblue');
image(road,20,-1660,1200,2800);

  vaccine2=createSprite(900,600,100,100);
  vaccine2.addImage(vc);
  vaccine2.scale=0.7;
 


  if(score===1000){
    gameState=6;

  }


 

   player=createSprite(1000,630,100,100);
 
   r=createSprite(1010,656,15,25);
  r.shapeColor=rgb(225,85,68);
 r2=createSprite(1010,635,15,15);
  r2.shapeColor=rgb(49,42,107);
   hand=createSprite(997,590,10,10);  
    hand.addImage(hd);
   hand.scale=1.3;
  
   player.addImage(plr);
   player.scale=0.8;
   
 




  if(frameCount%300===10){
  virus22=createSprite(-10,570,10,10);
  virus22.addImage(vr);
  virus22.velocityX=3;
  virusGroup.add(virus22);
 // virus22.y=random(540,590)
}
 if(virusGroup.isTouching(player)){
  player.destroy();
  virus22.destroy();
  virusGroup.destroyEach();
  vaccine.destroy();
  var over=createSprite(600,600,1000,1000);
 }
 if(bulletGroup.isTouching(virusGroup)){
  virusGroup.destroyEach();
  bulletGroup.destroyEach();
  score=score+1000;
 
}

 


 console.log(score);



  fill('red');
   textSize(35);
  text('Score:'+score,100,200);

 

}
//level 2 over
 if(gameState === 6){
  image(w,400,150,600,600);
  
  if(keyCode===67){
     gameState=7;
     score=0;

  }
 }
  //level 3
if(gameState===7){
  clear();
  
   
  background('skyblue');
  image(road,20,-1660,1200,2800);
  vaccine2=createSprite(900,600,100,100);
  vaccine2.addImage(vc);
  vaccine2.scale=0.7;
 


  if(score===2000){
    gameState=8;

  }
   player=createSprite(1000,630,100,100);
 
   r=createSprite(1010,656,15,25);
  r.shapeColor=rgb(225,85,68);
 r2=createSprite(1010,635,15,15);
  r2.shapeColor=rgb(49,42,107);
   hand=createSprite(997,590,10,10);  
    hand.addImage(hd);
   hand.scale=1.3;
  
   player.addImage(plr);
   player.scale=0.8;
   
 

virus22.destroy();


  if(frameCount%300===10){
  virus12=createSprite(-10,570,10,10);
  virus12.addImage(vr);
  virus12.velocityX=3;
  virusGroup.add(virus12);
 // virus22.y=random(540,590)
}
 
 if(bulletGroup.isTouching(virusGroup)){
  virusGroup.destroyEach();
  bulletGroup.destroyEach();
  score=score+1000;
 }

 

 console.log(score);



  fill('red');
   textSize(35);
  text('Score:'+score,100,200);

 

}

//End state
 if(gameState === 8){
   clear();
   virus12.destroy();
   var cover=createSprite(500,500,2500,2500);
   cover.shapeColor='orange';
   var over=createSprite(displayWidth/2,displayHeight/2,500,500);
   over.addImage(or);
 
  }
  drawSprites();
  //text for states 1 and 4
  if(gameState===1){
    
    textSize(35);
    fill("red");
    text("Beware",750,300);
     textSize(15)
     fill("black")
     strokeWeight(5)
     text("Your goal is to go to the store and buy groceries.......",640,315);
     text("However, On your way, you will be attacked by the corona monsters.",640,330);
     text("You have to defend yourselve from the monsters and reach your goal.",640,345)
     text("Use space key to start the game.Also use space to shoot...",640,360)
     fill(255,0,0);
     text("Good Luck",750,375);
  }
  if(gameState===4){
    fill("red");
    textSize(35);
    text("Level-2:Social Distancing",670,350);
    textSize(15)
     fill("black")
     strokeWeight(5)
     text("Good job! you completed the first level.But the second level will be harder.",600,375);
     text("In the second level, not only you have to kill the virus but you will have to",600,395);
     text("maintain social distancing.On the way you will find some people. press S",600,415);
     text("key to avoid them or you will lose a life.Tap D to continue....",600,435);
     fill("red");
    textSize(35);
     text("good luck!",670,465);
      
    }

}
// function to create bullets at vaccine's X coordinate
function createBullet() {
  bullet= createSprite(900, 600, 10, 5);
  bullet.y = 600;
  bullet.x = 900;                                           
  bullet.shapeColor = "turquoise";
  bullet.velocityX = -5;
  bullet.lifetime = 250;
  bulletGroup.add(bullet);
}
function destroyPlayer(){
//   vaccine.destroy();
//   virus.destroy();
// virus2.destroy();
// virus3.destroy();
// virus4.destroy();
// virus5.destroy();
// virus6.destroy();
// virus7.destroy();
// virus8.destroy();
// virus9.destroy();
// virus10.destroy();
player.isTouching(s2)

}