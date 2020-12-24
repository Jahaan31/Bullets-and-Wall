var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(800,400);
  bullet = createSprite(50,200, 20, 50);
  bullet.shapeColor = "white";
  wall = createSprite(700, 200, thickness, 200);
  wall.shapeColor = (80,80,80);
  speed = (random(223,321));
  weight = (random(30,52));
  thickness = (random(22,83));
  bullet.velocityX = speed;
}

function draw() {
  background("lightblue");
  
  var deformation = (0.5 * weight * speed * speed)/(thickness * thickness * thickness)

if(wall.x - bullet.x < wall.width/2 + bullet.width/2  ){
bullet.velocityX = 0;

if(deformation<=10){
bullet.shapeColor = "green";
}

if(deformation>10 ) {
  bullet.shapeColor = "red";
  }
}

  drawSprites();
}