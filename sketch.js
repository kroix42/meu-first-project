var caixa
function setup() {
caixa = createSprite(200,200,30,30)
caixa.shapeColor=('brown')
  createCanvas(400,400);
}

function draw() 
{
  background(30);
  if (keyIsDown(UP_ARROW)) {
    caixa.y -=5

  }
  if (keyIsDown(DOWN_ARROW)) {
    caixa.y +=5

  }
  if (keyIsDown(LEFT_ARROW)) {
    caixa.x -=5

  }
  if (keyIsDown(RIGHT_ARROW)) {
    caixa.x +=5

  }
drawSprites();
}




