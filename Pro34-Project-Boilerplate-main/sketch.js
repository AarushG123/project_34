
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine
let world

var balloon, balloonImg
var obstacle
var bg, backgroundImg
var lives, score, pin


function preload() {
  balloonImg = loadImage("balloon (1).png")
  backgroundImg = loadImage("bg.png")
  pin = loadImage("obstacle.png")
}

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  score = 0
  lives = 3

  bg = createSprite(200,200)
  bg.addImage(backgroundImg)
  bg.scale = 1.6

  balloon = createSprite(200,300)
  balloon.addImage(balloonImg)
  balloon.scale = 0.4



  obstacle = Matter.Bodies.rectangle(150, 20, 10, 50)
  World.add(world, obstacle)
}


function draw() 
{
  background(51);
  Engine.update(engine);
  drawSprites()
  balloon.x = World.mouseX;
  image(pin, obstacle.position.x, obstacle.position.y, 100, 100)
  obstacle.y = obstacle.y + 5


  if(obstacle.y < 10) {
    obstacle.x = Math.random(10,390)
    obstacle = 50
    score += 10
  }

  if(bg.y < 500) {
    bg.y = 600
  }

  if(balloon.isTouching(obstacle)) {
    obstacles.y = Math.random(10,390)
    lives -= 1
  }

  if(keyDown("A")) {
    balloon.x -= 1
  }
  if(keyCode ===KEY_D) {
    balloon.x += 1
  }


  
}

