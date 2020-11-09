//JavaScript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d')

var mario = new Image();
mario.src = 'images/mario.png'

var timer= requestAnimationFrame(draw);

var x = 0;


function draw(){
    timer= requestAnimationFrame(draw);
    ctx.clearRect(0,0, c.width, c.height);
    x++;

    if(x > c.width){
        x = -200
    }
    /*ctx.fillStyle = 'Purple'
    ctx.fillRect(200,100, 20, 20);

    ctx.moveTo(800,0)
    ctx.lineTo(0,600)*/
    //draws mario
    ctx.drawImage(mario, x, 100, 200, 300);

    //draws text
    ctx.lineWidth = 1;
    ctx.font = "50px Arail";
    ctx.textAlign = "center";
    ctx.fillText("Week 4 Lab", c.width/2, 50)
    ctx.strokeText("Week 4 Lab", c.width/2, 50)

    console.log("We are animating")
}



draw()