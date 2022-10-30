var mic
function setup() {
  createCanvas(windowWidth, windowHeight);
  // angleMode(DEGREES)
  mic=new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);
  textSize(40)
  text('x:'+mouseX+' y:'+mouseY,100,100)
  var micLevel=mic.getLevel();
  push()
  translate(width/2,height/2) //重新定義座標為視窗長寬除二
  fill('#fae1dd') //填入顏色
  ellipse(0,0,400) //畫圓
  ellipse(0,0,100,50) //畫橢圓
  fill(255) //填入顏色
  fill('#ffb3c1') //填入顏色
  ellipse(-25,0,20)//左鼻孔
  ellipse(25,0,20)//右鼻孔
  fill(255) //填入顏色

  ellipse(-75,-75,75) //畫左眼睛外框
  ellipse(+75,-75,75) //畫右眼睛外框

  fill(0) //填入黑色
  ellipse(-75+map(mouseX,0,width,-20,20),-75+map(mouseY,0,height,-20,20),20) //畫隨著鼠標移動的眼球
  ellipse(+75+map(mouseX,0,width,-20,20),-75+map(mouseY,0,height,-20,20),20) //畫隨著鼠標移動的眼球
    if(mouseIsPressed)
    {
      fill(255,0,0)
      arc(0,76,200,100,0,PI)
    }
    else
    {
      fill('#fae1dd')
    arc(0,75,200,50,0,PI)
    }
    // arc(0,75,200,75+micLevel*1000,0,180)
    // console.log(micLevel)

    // fill(255,0,0)
    // arc(0,76,200,100,0,PI)
  
  pop()
}