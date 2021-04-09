
function preload() {
    //load the images here
    bg=loadImage('images/garden.png')
    tom1=loadAnimation('images/cat1.png')
    tom2=loadAnimation('images/cat2.png','images/cat3.png');
    tom3=loadAnimation('images/cat4.png');
    mouse1=loadAnimation('images/mouse1.png');
    mouse2=loadAnimation('images/mouse2.png','images/mouse3.png');
    mouse3=loadAnimation('images/mouse4.png');
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(850,600);
tom.addAnimation('tomSleeping',tom1);
tom.scale=0.2

jerry=createSprite(100,600);
jerry.addAnimation('jerryStanding',mouse1);
jerry.scale=0.2



}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<tom.width/2-jerry.width/2){
    tom.velocityX=0;
    tom.addAnimation('tomLastImage',tom3)
    tom.scale=0.2;
    tom.x=300;
    tom.changeAnimation('tomLastImage');

    
    jerry.addAnimation('jerryLastImage',mouse3)
    jerry.scale=0.2;
    jerry.changeAnimation('jerryLastImage');
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if (keyCode===LEFT_ARROW);
{
    tom.velocityX=-5;
    tom.addAnimation('tomRunning',tom2);
    tom.changeAnimation('tomRunning');

    jerry.addAnimation('jerryTeasing',mouse2);
    jerry.frameDelay=25;
    jerry.changeAnimation('jerryTeasing');

}
}
