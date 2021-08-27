var canvas;
var car,background;
var angle = 0;

function preload() {
carImage = loadImage("assets/car1.png");
coneImage = loadImage("assets/cone.png")

  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  car = createSprite(120,550,50,50);
  car.addImage(carImage)
  car.scale = 0.15;

  cone1 = createSprite(220,620,20,20)
  cone1.addImage(coneImage);
  cone1.scale = 0.02

  
  cone2 = createSprite(220,500,20,20)
  cone2.addImage(coneImage);
  cone2.scale = 0.02

  cone3 = createSprite(220,350,20,20)
  cone3.addImage(coneImage);
  cone3.scale = 0.02

  cone4 = createSprite(20,620,20,20)
  cone4.addImage(coneImage);
  cone4.scale = 0.02

  cone5 = createSprite(20,450,20,20)
  cone5.addImage(coneImage);
  cone5.scale = 0.02

  cone6 = createSprite(20,300,20,20)
  cone6.addImage(coneImage);
  cone6.scale = 0.02

  cone7 = createSprite(20,150,20,20)
  cone7.addImage(coneImage);
  cone7.scale = 0.02

  cone8 = createSprite(20,50,20,20)
  cone8.addImage(coneImage);
  cone8.scale = 0.02

  
  cone9 = createSprite(250,50,20,20)
  cone9.addImage(coneImage);
  cone9.scale = 0.02

  cone10 = createSprite(450,50,20,20)
  cone10.addImage(coneImage);
  cone10.scale = 0.02
  
  cone11= createSprite(650,50,20,20)
  cone11.addImage(coneImage)
  cone11.scale = 0.02

  cone12= createSprite(450,350,20,20)
  cone12.addImage(coneImage);
  cone12.scale = 0.02
  
  cone13 = createSprite(650,350,20,20)
  cone13.addImage(coneImage);
  cone13.scale = 0.02
   
  cone14= createSprite(120,65,20,20)
  cone14.addImage(coneImage);
  cone14.scale = 0.02
  
}

function draw() {
  background("GREEN");
  text(mouseX + ',' + mouseY, mouseX, mouseY)

  if(keyDown(UP_ARROW)){
   // car.y = car.y-10

   for(var i = 0, j = 30,k =0.5; i<90; i=i+20,j=j+20,k=k+1){
  //  console.log(angle)
  //  console.log("i:", i)
 //   console.log("j:", j)
    if (angle >=0 && angle <=5){
      car.y = car.y -2;
      console.log(angle);
    }
    else if(angle>i && angle<j && angle<85){
      //console.log(angle)
      console.log("in else if")
      car.x = car.x +k
      car.y = car.y -2
    }
  
    else if(angle>85 && angle<95 ){
      car.x =car.x +2
      k=1
      
 }
   }

 for(var a = 95, b = 120,iSpeed=0.2,jSpeed=0.2; a<180; a=a+20,b=b+20,iSpeed=iSpeed+0.2,jSpeed=jSpeed + 0.2){
console.log(angle)

  if(angle>a && angle<b && angle <175){
    console.log("in 2nd q")
  car.x = car.x + iSpeed
  car.y = car.y + jSpeed
 }

 else if ( angle>175 && angle<185){
   car.y =car.y +2
 }
}

  }
  if(keyDown(DOWN_ARROW)){
    car.y = car.y+10
  }
 
  if(keyDown(LEFT_ARROW)){
    car.x = car.x-2
    angle = angle-3
    car.rotation = angle;
  
  }

  if(keyDown(RIGHT_ARROW)){
    car.x = car.x+2
    angle = angle+3
    car.rotation = angle;
   // car.rotateToDirection = true;

  }
  drawSprites()

  }
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
