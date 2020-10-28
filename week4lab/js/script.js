//JavaScript goes here

var c = document.querySelector("canvas");
var ctx = c.getContext("2d")

function draw(){
    ctx.fillStyle = "red"
    ctx.fillRect(200,100, 20, 20);

    ctx.moveTo(800,0)
    ctx.lineTo(0,600)
}


//draw()