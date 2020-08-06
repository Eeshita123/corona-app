var welcome;

var database;

function preload(){

  img = loadImage("images/Logo.jpeg");

  img2 = loadImage("images/preventions.jpg") 

}

function setup() {
  createCanvas(1350,900);

  database = firebase.database();

  

  img.loadPixels();
  

  welcome = new Welcome();
welcome.display();




}

function draw() {
  background(255,0,102);  

  

  image(img, 38, 42, 160, 160);
  
  image(img2, 270 , 440 , 360 , 220 );

  textSize(20);

 text(mouseX+","+mouseY,mouseX,mouseY);

 welcome.update();

}