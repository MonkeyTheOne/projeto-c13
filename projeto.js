var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}
function createApples() {
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
  
  }
  function createOrange() {
    orangeL = createSprite(random(50, 350),40,10,10);
    orangeL.scale=0.08
    orangeL.velocityY=3;
    orangeL.lifetime=150;
    }
    function createRed() {
      redL = createSprite(random(50 , 350),40,10,10);
      redL.addImage(redImg);
      redL.scale=0.06;
       red.velocityY=3;
       redL.lifetime=150;
    }
    var select_sprites = Math.round(random(1,3));

if (frameCount % 80 == 1) {
   createApples();
  }else if (select_sprites == 2) {
    createOanges();
  }else {
     createRed();
    }
    var select_sprites = Math.round(random(1,3));

    if (frameCount % 80 == 0) {
     if (select_sprites == 1) {
       createApples();
      }else if (select_sprites == 2) {
        createOanges();
      }else {
         createRed();
        }
       }
      
function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);
garden.velocityX = 0;
//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = world.mouseX;
  drawSprites();
  
}
