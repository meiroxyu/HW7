//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

function draw(){
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
}
draw()

function carMove () {
//車子本體
  ctx.fillStyle="blue"
  ctx.strokeRect(150, 180, 80, 50)
  ctx.fillRect(150, 180, 80, 50)
  
// 車子輪胎
  ctx.beginPath()
    ctx.arc(170, 230, 8, 0, Math.PI*2)
    ctx.arc(210, 230, 8, 0, Math.PI*2)
  ctx.fillStyle="black"
  ctx.fill()
}

carMove()

// 車子起始動畫位置
var time = 0
function carMove () {
  time++
  
  let carX = time%350-80
  
  ctx.fillStyle="blue"
  ctx.strokeRect(carX, 180, 80, 50)
  ctx.fillRect(carX, 180, 80, 50)
  
  ctx.beginPath()
    ctx.arc(carX+20, 230, 8, 0, Math.PI*2)
    ctx.arc(carX+60, 230, 8, 0, Math.PI*2)
  ctx.fillStyle="black"
  ctx.fill()
}

// 一秒鐘執行 30 次動畫
setInterval(carMove, 30)

// 取畫布的餘數，並再減調車體寬度，讓他完全隱藏在畫布外側
let carX = time%250-80

// 從座標 [0,0]座標清除，清除範圍 = 畫布大小
ctx.clearRect(0,0,250,250)
